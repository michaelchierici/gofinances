import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from "react";
import { RFValue } from "react-native-responsive-fontsize";
import { useTheme } from "styled-components";
import { VictoryPie } from "victory-native";
import HistoryCard from "../../Components/HistoryCard";
import { useAuth } from "../../hooks/auth";
import { categories } from "../../utils/categories";

import { Container, Header, Title, Content, ChartContainer } from "./styles";

interface TransactionData {
  type: "positive" | "negative";
  name: string;
  ammount: string;
  category: string;
  date: string;
}

interface CategoryData {
  name: string;
  total: number;
  color: string;
  totalFormatted?: any;
  percent?: string;
}

const Resume = () => {
  const [totalByCategories, setTotalByCategories] = useState<CategoryData[]>(
    []
  );
  const { signOut, user } = useAuth();

  const theme = useTheme();

  async function loadData() {
    const dataKey = `@gofinances:transactions_user:${user.id}`;

    const response = await AsyncStorage.getItem(dataKey);
    const responseFormatted = response ? JSON.parse(response) : [];

    const expensives = responseFormatted.filter(
      (expensives: TransactionData) => expensives.type === "negative"
    );

    const totalByCategory: CategoryData[] = [];

    categories.forEach((category) => {
      let categorySum = 0;

      expensives.forEach((expensive: TransactionData) => {
        if (expensive.category === category.key) {
          categorySum += Number(expensive.ammount);
        }
      });
      if (categorySum >= 0) {
        const totalFormatted = categorySum.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        });

        totalByCategory.push({
          name: category.name,
          color: category.color,
          total: categorySum,
          totalFormatted,
        });
      }
    });
    setTotalByCategories(totalByCategory);
  }
  useEffect(() => {
    loadData();
  }, []);

  return (
    <Container>
      <Header>
        <Title>Resumo por categoria</Title>
      </Header>
      <Content>
        <ChartContainer>
          <VictoryPie
            data={totalByCategories}
            x="percent"
            y="total"
            colorScale={totalByCategories.map((category) => category?.color)}
            style={{
              labels: {
                fontSize: RFValue(18),
                fontWeight: "bold",
                fill: theme.colors.shape,
              },
            }}
            labelRadius={50}
          />
          {totalByCategories.map((item, index) => (
            <HistoryCard
              key={index}
              title={item?.name}
              ammount={item?.totalFormatted}
              color={item?.color}
            />
          ))}
        </ChartContainer>
      </Content>
    </Container>
  );
};

export default Resume;

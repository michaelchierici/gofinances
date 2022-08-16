import React from "react";
import HighlightCard from "../../Components/HighlightCard";
import TransactionCard, {
  TransactionCardProps,
} from "../../Components/TransactionCard";

import {
  Container,
  Header,
  UserWrapper,
  UserInfo,
  Photo,
  User,
  UserGreeting,
  UserName,
  Icon,
  HighlightCards,
  Transactions,
  Title,
  TransactionsList,
} from "./styles";

export interface DataListProps extends TransactionCardProps {
  id: string;
}

const Dashboard = () => {
  const data: DataListProps[] = [
    {
      id: "1",
      type: "positive",
      title: "Desenvolvimento de site",
      ammount: "R$12.400,00",
      category: {
        name: "Vendas",
        icon: "dollar-sign",
      },
      date: "14/08/22",
    },
    {
      id: "2",
      type: "negative",
      title: "Hamburgueria Pizzy",
      ammount: "R$59,00",
      category: {
        name: "Alimentação",
        icon: "coffee",
      },
      date: "10/08/22",
    },
    {
      id: "3",
      type: "negative",
      title: "Aluguel do apartamento",
      ammount: "R$1.200,00",
      category: {
        name: "Vendas",
        icon: "shopping-bag",
      },
      date: "10/08/22",
    },
  ];

  return (
    <Container>
      <Header>
        <UserWrapper>
          <UserInfo>
            <Photo
              source={{
                uri: "https://avatars.githubusercontent.com/u/78627567?v=4",
              }}
            />
            <User>
              <UserGreeting>Olá, </UserGreeting>
              <UserName>Michael</UserName>
            </User>
          </UserInfo>
          <Icon name="power" />
        </UserWrapper>
      </Header>
      <HighlightCards>
        <HighlightCard
          title="Entradas"
          ammount="R$ 17.400,00"
          lastTransaction="Último entrada dia 13 de abril"
          type="up"
        />
        <HighlightCard
          title="Saídas"
          ammount="R$ 1.259,00"
          lastTransaction="Último entrada dia 03 de abril"
          type="down"
        />
        <HighlightCard
          title="Total"
          ammount="R$ 16.141,00"
          lastTransaction="Último entrada dia 13 de abril"
          type="total"
        />
      </HighlightCards>
      <Transactions>
        <Title>Listagem</Title>
        <TransactionsList
          data={data}
          keyExtractor={(item: any) => item.id}
          renderItem={({ item }: any) => <TransactionCard data={item} />}
        />
      </Transactions>
    </Container>
  );
};

export default Dashboard;

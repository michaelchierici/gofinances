import React from "react";
import { categories } from "../../utils/categories";
import {
  Container,
  Title,
  Ammount,
  Footer,
  Category,
  Icon,
  CategoryName,
  Date,
} from "./styles";

export interface TransactionCardProps {
  type: "positive" | "negative";
  name: string;
  ammount: string;
  category: string;
  date: string;
}

interface Props {
  data: TransactionCardProps;
}

const TransactionCard = ({ data }: Props) => {
  const [category] = categories.filter(
    (item: any) => item.key === data.category
  );

  return (
    <Container>
      <Title>{data.name}</Title>
      <Ammount type={data.type}>
        {data.type === "positive" ? `+ ${data.ammount}` : `- ${data.ammount}`}
      </Ammount>
      <Footer>
        <Category>
          <Icon name={category.icon} />
          <CategoryName>{category.name}</CategoryName>
        </Category>
        <Date>{data.date}</Date>
      </Footer>
    </Container>
  );
};

export default TransactionCard;

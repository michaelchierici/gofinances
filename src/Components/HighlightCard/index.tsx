import React from "react";
import { View } from "react-native";

import {
  Container,
  Header,
  Title,
  Icon,
  Footer,
  Ammount,
  LastTransaction,
} from "./styles";

interface Props {
  title: string;
  ammount: string;
  lastTransaction: string;
  type: "up" | "down" | "total";
}

const icon = {
  up: "arrow-up-circle",
  down: "arrow-down-circle",
  total: "dollar-sign",
};

const HighlightCard = ({ title, ammount, lastTransaction, type }: Props) => {
  return (
    <Container type={type}>
      <Header>
        <Title type={type}>{title}</Title>
        <Icon name={icon[type]} />
      </Header>

      <Footer>
        <Ammount type={type}>{ammount}</Ammount>
        <LastTransaction type={type}>{lastTransaction}</LastTransaction>
      </Footer>
    </Container>
  );
};

export default HighlightCard;

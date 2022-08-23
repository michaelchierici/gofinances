import React from "react";

import { Container, Title, Ammount } from "./styles";

interface Props {
  color: string;
  title: string;
  ammount: string;
}

const HistoryCard = ({ color, title, ammount }: Props) => {
  return (
    <Container color={color}>
      <Title>{title}</Title>
      <Ammount>{ammount}</Ammount>
    </Container>
  );
};

export default HistoryCard;

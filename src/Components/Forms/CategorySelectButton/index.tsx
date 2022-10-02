import React from "react";
import { View } from "react-native";
import { TouchableHighlightProps } from "react-native";

import { Container, Category, Icon } from "./styles";

interface Props extends TouchableHighlightProps {
  title: string;
  onPress: () => void;
}

const CategorySelectButton = ({ title, testID, onPress }: Props) => {
  return (
    <Container onPress={onPress} testID={testID}>
      <Category>{title}</Category>
      <Icon name="chevron-down" />
    </Container>
  );
};

export default CategorySelectButton;

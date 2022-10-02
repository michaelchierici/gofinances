import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import { ThemeProvider } from "styled-components/native";
import theme from "../../global/styles/theme";
import Register from ".";
import { NavigationContainer } from "@react-navigation/native";

const Providers: React.FC = ({ children }: any) => (
  <NavigationContainer>
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  </NavigationContainer>
);

describe("Register Screen", () => {
  it("should be open modal when user press selected category", () => {
    const { getByTestId } = render(<Register />, {
      wrapper: Providers,
    });

    const categoryModal = getByTestId("modal-category");
    const categoryButton = getByTestId("button-category");
    fireEvent.press(categoryButton);
    expect(categoryModal.props.visible).toBeTruthy();
  });
});

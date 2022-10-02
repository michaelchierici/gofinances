import React from "react";
import { render } from "@testing-library/react-native";
import { ThemeProvider } from "styled-components/native";
import theme from "../../../global/styles/theme";
import Input from "./";

const Providers: React.FC = ({ children }: any) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

describe("Input Component", () => {
  it("must have border color when input actived", () => {
    const { getByTestId } = render(
      <Input
        testID="input-email"
        placeholder="e-mail"
        autoCorrect={false}
        active={true}
      />,
      {
        wrapper: Providers,
      }
    );
    const inputComponent = getByTestId("input-email");
    expect(inputComponent.props.style[0].borderColor).toEqual(
      theme.colors.attention
    );
  });
});

import React from "react";
import { render } from "@testing-library/react-native";
import Profile from "../../screens/Profile";

describe("Profile", () => {
  it("check if show correctly user input name placeholder", () => {
    const { getByPlaceholderText } = render(<Profile />);

    const inputName = getByPlaceholderText("nome");
    expect(inputName).toBeTruthy();
  });

  it("check user data loaded", () => {
    const { getByTestId } = render(<Profile />);
    const inputName = getByTestId("input-name");
    const inputSurName = getByTestId("input-surname");

    expect(inputName.props.value).toEqual("Michael");
    expect(inputSurName.props.value).toEqual("Chierici");
  });

  it("check of title render correctly", () => {
    const { getByTestId } = render(<Profile />);

    const textTitle = getByTestId("text-title");

    expect(textTitle.props.children).toContain("Perfil");
  });
});

import React, { useContext, useState } from "react";

import {
  Container,
  Header,
  TitleWrapper,
  Title,
  SignInTitle,
  Footer,
  FooterWrapper,
} from "./styles";

import AppleSvg from "../../assets/apple.svg";
import GoogleSvg from "../../assets/google.svg";
import LogoSvg from "../../assets/logo.svg";
import { RFValue } from "react-native-responsive-fontsize";
import SignInSocialButton from "../../Components/SignInSocialButton";
import { useAuth } from "../../hooks/auth";
import { ActivityIndicator, Alert, Platform } from "react-native";
import { useTheme } from "styled-components";

const SignIn = () => {
  const [isLoading, setIsLoading] = useState(false);

  const { signIntWithGoogle, signWithApple } = useAuth();
  const theme = useTheme();

  async function handleSignIntWithGoogle() {
    try {
      setIsLoading(true);
      return await signIntWithGoogle();
    } catch (error) {
      Alert.alert(error as any);
      setIsLoading(false);
    }
  }

  async function handleSignIntWithApple() {
    try {
      setIsLoading(true);
      return await signWithApple();
    } catch (error) {
      Alert.alert(error as any);
      setIsLoading(false);
    }
  }

  return (
    <Container>
      <Header>
        <TitleWrapper>
          <LogoSvg width={RFValue(200)} height={RFValue(68)} />
          <Title>
            Controle suas finanças {"\n"} de forma {"\n"} muito simples
          </Title>
        </TitleWrapper>
        <SignInTitle>
          Faça seu login com {"\n"} uma das contas abaixo
        </SignInTitle>
      </Header>
      <Footer>
        <FooterWrapper>
          <SignInSocialButton
            title="Entrar com Goggle"
            svg={GoogleSvg}
            onPress={handleSignIntWithGoogle}
          />
          {Platform.OS === "ios" && (
            <SignInSocialButton
              title="Entrar com Apple"
              svg={AppleSvg}
              onPress={handleSignIntWithApple}
            />
          )}
        </FooterWrapper>

        {isLoading && (
          <ActivityIndicator
            color={theme.colors.shape}
            style={{ marginTop: 10 }}
          />
        )}
      </Footer>
    </Container>
  );
};

export default SignIn;

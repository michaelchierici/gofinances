import React, { useContext } from "react";

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
import { Alert } from "react-native";

const SignIn = () => {
  const { signIntWithGoogle, signWithApple } = useAuth();

  async function handleSignIntWithGoogle() {
    try {
      await signIntWithGoogle();
    } catch (error) {
      Alert.alert(error as any);
    }
  }

  async function handleSignIntWithApple() {
    try {
      await signWithApple();
    } catch (error) {
      Alert.alert(error as any);
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
          <SignInSocialButton
            title="Entrar com Apple"
            svg={AppleSvg}
            onPress={handleSignIntWithApple}
          />
        </FooterWrapper>
      </Footer>
    </Container>
  );
};

export default SignIn;

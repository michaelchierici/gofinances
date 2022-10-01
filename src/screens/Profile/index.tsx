import React from "react";
import { Button, Text, TextInput, View } from "react-native";

const Profile = () => {
  return (
    <View>
      <Text>Perfil</Text>
      <TextInput placeholder="nome" autoCorrect={false} />
      <TextInput placeholder="Sobrenome" />
      <Button title="salvar" onPress={() => {}} />
    </View>
  );
};

export default Profile;

import React from "react";
import { Button, Text, TextInput, View } from "react-native";

const Profile = () => {
  return (
    <View>
      <Text testID="text-title">Perfil</Text>
      <TextInput
        value="Michael"
        testID="input-name"
        placeholder="nome"
        autoCorrect={false}
      />
      <TextInput
        value="Chierici"
        testID="input-surname"
        placeholder="Sobrenome"
      />
      <Button title="salvar" onPress={() => {}} />
    </View>
  );
};

export default Profile;

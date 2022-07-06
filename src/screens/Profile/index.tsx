import React from 'react';
import { Text, View, TextInput, Button } from 'react-native';

export const Profile = () => {
  return (
    <View>
      <Text>Profile</Text>
      <TextInput placeholder='Nome' autoCorrect={false} />

      <TextInput placeholder='Sobrenome' autoCorrect={false} />

      <Button title='Salvar' onPress={() => {}} />
    </View>
  );
};

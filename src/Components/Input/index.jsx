import React from 'react';
import {View, Text, Button, TextInput} from 'react-native';

const Input = () => {
  const [value, setValue] = React.useState('');

  return (
    <View>
      <Button
        title="Clique aqui"
        testID="button"
        onPress={() => setValue('')}
      />
      <View testID="container" style={{backgroundColor: 'red', height: 80}}>
        <TextInput
          style={{
            backgroundColor: '#ffaa',
            flex: 1,
            paddingHorizontal: 14,
            height: '100%',
          }}
          testID="input"
          value={value}
          onChangeText={setValue}
        />
      </View>
      <Text testID="text">{value}</Text>
    </View>
  );
};
export default Input;

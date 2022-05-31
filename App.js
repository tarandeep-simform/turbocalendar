import React from 'react';
import {SafeAreaView, StyleSheet, Button, Text} from 'react-native';
import NativeCalendarModule from './moduleschema/NativeCalendarModule';

const App = () => {
  const [moduleMessage, setModuleMessage] = React.useState('');
  return (
    <SafeAreaView style={styles.container}>
      <Button
        title="Click Me!"
        onPress={() => setModuleMessage(NativeCalendarModule.getMessage())}
      />
      <Text>{moduleMessage}</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;

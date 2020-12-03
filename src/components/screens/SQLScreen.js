import React, {useState} from 'react';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {BasicScreen} from './BasicScreen';

const styles = StyleSheet.create({
  upperContainer: {
    padding: 20,
  },
  lowerContainer: {
    padding: 20,
  },
  headline: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#2196F3',
    paddingBottom: 20,
  },
  paragraph: {
    paddingBottom: 20,
  },
  textInput: {
    borderRadius: 3,
    borderWidth: 1,
    borderColor: 'grey',
  },
});

export const SQLScreen = (props) => {
  const {navigation} = props;
  const [statement, setStatement] = useState('');
  const readyToSubmit = statement.length;

  const handleInput = (input) => {
    const formattedInput = input;
    setStatement(formattedInput);
  };

  return (
    <BasicScreen>
      <KeyboardAwareScrollView contentContainerStyle={styles.upperContainer}>
        <Text style={styles.headline}>Willkommen bei SQLearn</Text>
        <Text style={styles.paragraph}>
          {`Diese App bietet dir eine kleine und sichere Sandbox. Hier kannst du die Formulierung von SQL Statements an einer Test-Datenbank erlernen und üben.

Swipe vom linken Bildschirmrand nach rechts um den Drawer zu öffnen.

In den Einstellungen findest du ein ER-Diagramm zur Datenbank, sowie die Möglichkeit die DB zurückzusetzen.`}
        </Text>
        <TextInput
          value={statement}
          multiline={true}
          numberOfLines={10}
          style={styles.textInput}
          onChangeText={(t) => handleInput(t)}
          textAlignVertical="top"
          placeholder="Gib hier dein SQL-Statement ein"
        />
      </KeyboardAwareScrollView>
      <View style={styles.lowerContainer}>
        <Button
          disabled={!readyToSubmit}
          color={readyToSubmit ? '#2196F3' : 'grey'}
          title={
            readyToSubmit
              ? 'Statement ausführen'
              : 'Bitte gib ein Statement ein'
          }
          onPress={() => navigation.navigate('ResultScreen', {statement})}
        />
      </View>
    </BasicScreen>
  );
};

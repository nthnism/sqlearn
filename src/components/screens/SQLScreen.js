import React, {useState} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {BasicScreen} from './BasicScreen';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  upperInnerContainer: {
    padding: 20,
  },
  lowerInnerContainer: {
    padding: 20,
  },
  headline: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#2196F3',
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
    console.log('handleInput', input);
    setStatement(input);
  };

  return (
    <BasicScreen>
      <View style={styles.container}>
        <KeyboardAwareScrollView contentContainerStyle={styles.upperInnerContainer}>
          <Text style={styles.headline}>Willkommen bei SQLearn</Text>
          <Text>
            {`Diese App bietet dir eine kleine und sichere Sandbox. Hier kannst du die Formulierung von SQL Statements an einer Test-Datenbank erlernen und üben.

Swipe vom linken Bildschirmrand nach rechts um den Drawer zu öffnen.

In den Einstellungen findest du ein ER-Diagramm zur Datenbank, sowie die Möglichkeit die DB zurückzusetzen.`}
          </Text>
          <TextInput
            multiline={true}
            numberOfLines={10}
            style={styles.textInput}
            onChangeText={(t) => handleInput(t)}
            textAlignVertical="top"
            placeholder="Gib hier dein SQL-Statement ein"
          />
        </KeyboardAwareScrollView>
        <View style={styles.lowerInnerContainer}>
          <Button
            disabled={!readyToSubmit}
            color={readyToSubmit ? '#2196F3' : 'grey'}
            title={
              readyToSubmit
                ? 'Statement ausführen'
                : 'Bitte gib ein Statement ein'
            }
            // onPress={() => navigation.navigate('ResultScreen')}
          />
        </View>
      </View>
    </BasicScreen>
  );
};

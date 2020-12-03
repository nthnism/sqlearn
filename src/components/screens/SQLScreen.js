import React from 'react';
import {Button, ScrollView, StyleSheet, Text, View} from 'react-native';
import {BasicScreen} from './BasicScreen';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  headline: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#2196F3',
    paddingBottom: 20,
  },
  upperInnerContainer: {
    width: '100%',
    paddingHorizontal: 20,
    flex: 1,
  },
  lowerInnerContainer: {
    width: '50%',
  },
});

export const SQLScreen = (props) => {
  const {navigation} = props;
  return (
    <BasicScreen>
      <View style={styles.container}>
        <View style={styles.upperInnerContainer}>
          <Text style={styles.headline}>Willkommen bei SQLearn</Text>
          <Text>{`Diese App bietet dir eine kleine und sichere Sandbox.
Hier kannst du die Formulierung von SQL Statements an einer Test-Datenbank erlernen und üben.

In den Einstellungen findest du ein ER-Diagramm zur Datenbank, sowie die Möglichkeit die DB zurückzusetzen.`}</Text>
        </View>
        <View style={styles.lowerInnerContainer}>
          <Button
            title="Statement ausführen"
            // onPress={() => navigation.navigate('ResultScreen')}
          />
        </View>
      </View>
    </BasicScreen>
  );
};

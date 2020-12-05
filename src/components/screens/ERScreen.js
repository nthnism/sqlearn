import React from 'react';
import {Image, StyleSheet, ScrollView} from 'react-native';

import {BasicScreen} from './BasicScreen';

const styles = StyleSheet.create({
  gallery: {
    flex: 1,
  },
});

export const ERScreen = (props) => {
  return (
    <BasicScreen>
      <ScrollView horizontal={true}>
        <ScrollView>
          <Image
            style={styles.gallery}
            source={require('../../diagrams/chinook.png')}
          />
        </ScrollView>
      </ScrollView>
    </BasicScreen>
  );
};

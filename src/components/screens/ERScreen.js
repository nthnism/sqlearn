import React from 'react';
import {Image, StyleSheet, ScrollView} from 'react-native';

import {BasicScreen} from './BasicScreen';

const styles = StyleSheet.create({
  gallery: {
    flex: 1,
  },
});

export const ERScreen = (props) => {
  const {navigation} = props;
  return (
    <BasicScreen>
      <ScrollView horizontal={true}>
        <ScrollView>
          <Image
            style={styles.gallery}
            source={require('../../images/diagram.png')}
          />
        </ScrollView>
      </ScrollView>
    </BasicScreen>
  );
};

import React from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import {Table, Row} from 'react-native-table-component';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    minHeight: 40,
    backgroundColor: '#2196F3',
  },
  text: {
    textAlign: 'center',
  },
  dataWrapper: {
    marginTop: -1,
  },
  row: {
    minHeight: 40,
  },
  borderStyle: {
    borderWidth: 1,
    borderColor: 'grey',
  },
});

export const TableContainer = (props) => {
  const {results} = props;

  const tableHeaderRow = Object.keys(results[0]);
  const columnWidthSizes = tableHeaderRow.map((column) => 120);

  const tableData = results.map((row) => Object.values(row));

  return (
    <View style={styles.container}>
      <ScrollView horizontal={true}>
        <View>
          <Table borderStyle={styles.borderStyle}>
            <Row
              data={tableHeaderRow}
              widthArr={columnWidthSizes}
              style={styles.header}
              textStyle={styles.text}
            />
          </Table>
          <ScrollView style={styles.dataWrapper}>
            <Table borderStyle={styles.borderStyle}>
              {tableData.map((rowData, index) => (
                <Row
                  key={index}
                  data={rowData}
                  widthArr={columnWidthSizes}
                  style={styles.row}
                  textStyle={styles.text}
                />
              ))}
            </Table>
          </ScrollView>
        </View>
      </ScrollView>
    </View>
  );
};

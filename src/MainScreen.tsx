import React from 'react'
import {StyleSheet, Text, View, FlatList} from 'react-native'
import pageStyle from './common/styles/pageStyle'
import demosConfig, {Config} from './home/demosConfig'
import Touchable from './components/Touchable'

interface Props {}

const MainScreen = (props: Props) => {
  return (
    <View style={pageStyle()}>
      <FlatList
        data={demosConfig}
        renderItem={({item}) => {
          return <MainCell {...item} />
        }}
      />
    </View>
  )
}

const MainCell = (config: Config) => {
  return (
    <Touchable
      onPress={() => {
        console.log('点击了……')
      }}>
      <View style={styles.cell}>
        <Text style={styles.cellTitle}>{config.title}</Text>
        <Text style={styles.cellDesc}>{config.desc}</Text>
      </View>
    </Touchable>
  )
}

export default MainScreen

const styles = StyleSheet.create({
  cell: {
    backgroundColor: '#FFF',
    marginBottom: 1,
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  cellTitle: {
    fontSize: 18,
    color: '#333',
    fontWeight: 'bold',
  },
  cellDesc: {
    fontSize: 12,
    color: '#666',
  },
})

import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

const ListItem = (props) => {
    const [age, setage] = useState(21)

    
  return (
    <View>
        <Button title='passAGe'onPress={()=>props.getAge(age)} />
      <Text style={{fontSize:17,color:'black'}}>Counter:{props.count}</Text>
    </View>
  )
}

export default ListItem

const styles = StyleSheet.create({})
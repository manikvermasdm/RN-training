import {Button, StatusBar, StyleSheet, Text, View,Platform} from 'react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {increment} from '../redux/actions/counterActions';

const Home = () => {
  const dispatch = useDispatch();
  const {value} = useSelector(state => state.counter);
  return (
    <View style={{flex: 1, alignItems: 'center'}}>
      <StatusBar backgroundColor="#000" />
      <Text
        style={{
          fontSize: 24,
          marginTop: 20,
        }}>
        Redux- Actions,Reducers, Store, Middleware, Persist
      </Text>
      <Button title="increment" onPress={() => dispatch(increment())} />
      <Text
        style={{
          fontSize: 54,
          marginTop: 20,
        }}>
        {value}
      </Text>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});

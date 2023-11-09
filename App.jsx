import * as React from 'react';
import {View, Text, Button, StatusBar} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import axios from 'axios';
import ActionSheet from 'react-native-actions-sheet';

function App() {
  React.useEffect(() => {
    // fetch('https://jsonplaceholder.typicode.com/posts', {
    //   method: 'POST',
    //   body: JSON.stringify({
    //     title: 'Aman',
    //     body: 'bar',
    //     userId: 1,
    //   }),
    //   headers: {
    //     'Content-type': 'application/json; charset=UTF-8',
    //   },
    //   timmeout: 5000,
    // })
    //   .then(response => response.json())
    //   .then(json => console.log(json));

    axios('https://jsonplaceholder.typicode.com/todos').then(response =>
      console.log(response.data),
    );

    axios
      .post('https://jsonplaceholder.typicode.com/posts', {
        title: 'Arvind',
        body: 'bar',
        userId: 1,
      })
      .then(r => console.log(r.data, 'post api res'));

    actionSheetRef.current?.show();
  }, []);
  const actionSheetRef = React.useRef(null);

  return (
    <View style={{flex: 1, alignItems: 'center'}}>
      <StatusBar backgroundColor="#000" />
      <ActionSheet ref={actionSheetRef}>
        <Text>Hi, I am here.</Text>
        <Text>Hi, I am here.</Text>
        <Text>Hi, I am here.</Text>
        <Text>Hi, I am here.</Text>
        <Text>Hi, I am here.</Text>
        <Text>Hi, I am here.</Text>
        <Text>Hi, I am here.</Text>
      </ActionSheet>
      <Text
        style={{
          fontSize: 24,
          marginTop: 20,
        }}>
        Api Calling using Fetch/Axios
      </Text>
      {/* <FlatList /> */}
    </View>
  );
}

export default App;

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , FlatList} from 'react-native';
import { useState, useEffect } from 'react';

export default function App() {

  const [isLoading, setIsLOading] = useState(false);
  const [isError, setIsError] = useState('');
  const [data, setData] = useState([]);

  useEffect(()=>{

  },[])

  return (
    <View style={styles.container}>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

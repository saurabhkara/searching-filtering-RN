import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { useState, useEffect } from "react";

export default function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState("");
  const [data, setData] = useState([]);
  const [renderData, setRenderData] = useState([]);
  useEffect(() => {
    try {
      setIsLoading(true);
      fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((json) => {
          setData(json);
          setRenderData(json);
          setIsLoading(false);
        });
    } catch (error) {
      setIsError('OOPs, Something went wrong');
      setIsLoading(false);
    }
  }, []);


  const  renderItem =(item, index)=>{
    console.log(index,item)
    return(
      <Text>Item</Text>
    )
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={{marginTop:35,textAlign:'center'}}>Practice dynamic list search and filter</Text>
      {
        isLoading? <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
            <Text>Loading ...</Text>
        </View> : <View style={{flex:1}}>
          
          <FlatList 
            renderItem={({item, index})=>renderItem(item, index)}
            data={renderData}
          />
        </View>

      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

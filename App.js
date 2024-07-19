import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';
import Header from './components/Header';
import Products from './components/Products';
import { Provider } from 'react-redux';
import store from './components/redux/store';

const api = [
  {
    name: "Jaise",
    image: 'https://www.khoslaonline.com/wp-content/uploads/2023/06/ONE-PLUS-NORD-CE-2-LITE-5G-BLUE-TIDE-6GB128GB-300x300.png'
  },
  {
    name: "taise",
    image: 'https://www.khoslaonline.com/wp-content/uploads/2023/06/ONE-PLUS-NORD-CE-2-LITE-5G-BLUE-TIDE-6GB128GB-300x300.png'
  },
  {
    name: "hii",
    image: 'https://www.khoslaonline.com/wp-content/uploads/2023/06/ONE-PLUS-NORD-CE-2-LITE-5G-BLUE-TIDE-6GB128GB-300x300.png'
  },
  {
    name: "hello",
    image: 'https://www.khoslaonline.com/wp-content/uploads/2023/06/ONE-PLUS-NORD-CE-2-LITE-5G-BLUE-TIDE-6GB128GB-300x300.png'
  },
  {
    name: "sir",
    image: 'https://www.khoslaonline.com/wp-content/uploads/2023/06/ONE-PLUS-NORD-CE-2-LITE-5G-BLUE-TIDE-6GB128GB-300x300.png'
  },
  {
    name: "heeeeeeeeeeeeee",
    image: 'https://www.khoslaonline.com/wp-content/uploads/2023/06/ONE-PLUS-NORD-CE-2-LITE-5G-BLUE-TIDE-6GB128GB-300x300.png'
  }
]

export default function App() {

  return (
    <>
      <Provider store={store}>
        <Header />
        <ScrollView style={{ flex: 1 }}>
          {
            api.map((item) => <Products item={item} />)
          }
        </ScrollView>
      </Provider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


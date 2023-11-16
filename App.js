import { StyleSheet, Text, View } from 'react-native';
import { Welcome } from './components/screens/Welcome/Welcome';
import { Register } from './components/screens/Register/Register';
import { Login } from './components/screens/Login/Login';
import { CustomCarousel } from './components/screens/Carousel/Carousel';
import { MyStack } from './components/routes/AppNavigator';
import { MyTab } from './components/routes/RootNavigator';

export default function App() {
  return (
    <MyStack/>
  );
}

/*export functiron Root() {
  return (
    <MyTab />
  )
}*/

import { StyleSheet, Text, View } from 'react-native';
import { Welcome } from './components/screens/Welcome/Welcome';
import { Register } from './components/screens/Register/Register';
import { Login } from './components/screens/Login/Login';
import { CustomCarousel } from './components/screens/Carousel/Carousel';
import { MyStack } from './components/routes/AppNavigator';
import { MyTab } from './components/routes/RootNavigator';
import { Reports } from './components/screens/Reports/Reports';
import { ReportsForms } from './components/screens/ReportsForms/ReportsForms';
import { NavigationContainer } from '@react-navigation/native';
import { Profile } from './components/screens/Profile/Profile';
import { ReportsPerformance } from './components/screens/ReportsPerformance/ReportsPerformance';

export default function App() {
  return (
    <NavigationContainer>
      <MyStack/>
    </NavigationContainer>
  );
}

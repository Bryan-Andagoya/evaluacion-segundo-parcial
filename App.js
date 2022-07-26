import 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { AuthStackNavigator } from 'app/navigation';
import { RootProvider } from 'app/context';

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <RootProvider>
          <AuthStackNavigator />
        </RootProvider>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

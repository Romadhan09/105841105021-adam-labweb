import { Text, View } from 'react-native';
import { useFonts} from 'expo-font';

export default function App() {
  const [fontLoaded] = useFonts({
    'MetroBlack' : require('./assets/Fonts/Metropolis-Black.otf'),
    'MetroBold' : require('./assets/Fonts/Metropolis-Bold.otf'),
    'MetroLight' : require('./assets/Fonts/Metropolis-Light.otf'),
    'MetroSemiBold' : require('./assets/Fonts/Metropolis-SemiBold.otf'),
  });
  if(!fontLoaded) {
    return <Text>Font tidak ditemukan  ....</Text>
  }
  return (
    <View style={{
      flex: 1, 
      justifyContent : 'center',
      alignItems : 'center',
    }}>
      <Text style={{ 
        fontFamily: 'MetroBlack'
      }}>Font Lebar dan Tebal</Text>
       <Text style={{ 
        fontFamily: 'MetroBold'
      }}>Font Tebal</Text>
       <Text style={{ 
        fontFamily: 'MetroLight'
      }}>Font Kecil</Text>
       <Text style={{ 
        fontFamily: 'MetroSemiBold'
      }}>Font Kecil dan Tebal</Text>
    </View>
  );
}
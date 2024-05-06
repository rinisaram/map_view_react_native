import React,{useState, useEffect}  from 'react';
import MapView,{Marker} from 'react-native-maps';
import { StyleSheet,Text, View,Dimensions } from 'react-native';

export default function App() {
  const[mapRegion, setMapRegion] = useState({
    latitude: 9.8919925,
    longitude: 76.4376316,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });
  return (
    <View style={styles.container}>
      <MapView style={styles.map}
      region={mapRegion}
      >
        <Marker coordinate={mapRegion} title='Marker' />
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
});


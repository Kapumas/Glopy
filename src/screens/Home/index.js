import React from 'react';
import {
  SectionList,
  Text,
  StyleSheet,
  View,
  FlatList,
  StatusBar,
  SafeAreaView,
  Pressable,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

function Home() {
  const onPress = () => {
    return;
  };
  return (
    <LinearGradient
      useAngle
      angle={120}
      colors={['#8e34ff', '#000000']}
      style={styles.home}>
      <Text style={styles.title}>Glopy</Text>
      <View style={styles.buttonContainer}>
        <Pressable onPress={onPress} style={styles.button}>
          <Text>Listas</Text>
        </Pressable>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  home: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    position: 'absolute',
    top: '20%',
    fontSize: 100,
    color: 'white',
    fontWeight: 'bold',
    fontFamily: 'Courgette-Regular',
  },
  button: {
    borderRadius: 10,
    backgroundColor: 'white',
    paddingVertical: 10,
    paddingHorizontal: 55,
  },
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
});

export default Home;

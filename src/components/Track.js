import React from 'react';
import {Image, Text, View, StyleSheet, Pressable} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
FontAwesome.loadFont();
function Track({item}) {
  return (
    <View style={styles.row}>
      <Image
        source={{uri: 'https://img.icons8.com/android/80/000000/music.png'}}
        style={{
          width: 40,
          height: 40,
          backgroundColor: 'white',
          borderRadius: 10,
          borderColor: 'grey',
        }}
      />
      <View style={styles.description}>
        <Text style={styles.title}>{item.title}</Text>
        <View style={styles.metadata}>
          <Text style={styles.textMetadata}>{item.artist}</Text>
          <Text style={styles.textSeparator}>-</Text>
          <Text style={styles.textMetadata}>{item.year}</Text>
        </View>
      </View>
      <Pressable>
        <LinearGradient
          useAngle
          angle={126}
          colors={['#913ef8', '#bc32ee']}
          style={styles.button}
          //   style={styles.linearGradient}
        >
          <FontAwesome
            name="play"
            size={15}
            color={'white'}
            style={{marginLeft: 5}}
          />

          {/* <Text style={styles.buttonText}>Sign in with Facebook</Text> */}
        </LinearGradient>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    paddingHorizontal: 20,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',

    // borderWidth: 1,
    // borderColor: 'red',
  },
  description: {
    // backgroundColor: 'red',
    flex: 1,
    paddingHorizontal: 30,
    justifyContent: 'center',
    // alignItems: 'center',
    // flexGrow: 1,
  },
  textMetadata: {
    color: 'grey',
    fontSize: 12,
  },
  textSeparator: {
    color: 'grey',
    paddingHorizontal: 8,
  },
  title: {
    fontWeight: 'bold',
  },
  metadata: {
    width: '70%',
    flexDirection: 'row',
    alignItems: 'center',
    color: 'grey',
  },
  button: {
    width: 35,
    height: 35,
    // backgroundColor: linear-gradient(142deg, rgba(143,59,246,1) 0%, rgba(188,47,249,1) 100%),
    borderRadius: 45 / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Track;

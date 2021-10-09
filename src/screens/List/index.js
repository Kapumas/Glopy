import React from 'react';
import {
  SectionList,
  Text,
  StyleSheet,
  View,
  FlatList,
  StatusBar,
  SafeAreaView,
} from 'react-native';
import trackList from '../../utils/mocks/tracks.json';
import Track from '../../components/Track';

function List() {
  const DATA = [
    {
      item: 'list-tracks',
      data: trackList.songs,
      renderItem: ({item}) => {
        return <Track item={item}></Track>;
      },
    },
  ];
  return (
    <SafeAreaView style={styles.container}>
      <View styles={styles.header}></View>
      <SectionList
        sections={DATA}
        keyExtractor={(item, index) => item + index}
        renderSectionHeader={({section: {title}}) => <Text>{title}</Text>}
        ItemSeparatorComponent={() => <View style={{marginVertical: 5}}></View>}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#000',
    width: '5%',
    // display: 'block',
  },
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
});

export default List;

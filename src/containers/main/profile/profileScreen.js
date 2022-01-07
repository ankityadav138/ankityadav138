import React, { useState, useEffect } from 'react';
import { View, ActivityIndicator, FlatList, StyleSheet } from 'react-native';
import ProfileHeader from './ProfileHeader';
import UserBio from './UserBio';
import EditProfileButton from './EditProfileButton';
import ConstantStories from './ConstantStories';
import LineSeperator from './LineSeperator';
import ProfileGrid from './ProfileGrid';
import colors from '../../../res/colors';
import GridIcon from './gridIcon';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Header from './profileBottomMenu/Header';
import BottomSheet from 'reanimated-bottom-sheet';
import Animated from 'react-native-reanimated';
import BottomContent from './profileBottomMenu/BottomContent';
import { useNavigation } from '@react-navigation/native';

const data = [{ "key": "1" }];

export default function profileScreen() {
  const [Data, setData] = useState([]);
  const navigation = useNavigation();

  const bs = React.createRef();
  const fall = new Animated.Value(1);

  var renderHeader = () => (
    <View style={styles.header}>
      <View style={styles.panelHeader}>
        <View style={styles.panelHandle} />
      </View>
    </View>
  );


  const API = 'http://188.166.189.237:3001/api/v1/users/me';
  useEffect(() => {
    async function getData() {

      const Demo_token = await AsyncStorage.getItem('TOKEN')

      const request = fetch(API, {
        method: "GET",
        headers: {
          "Authorization": `Bearer ${Demo_token}`,
        }
      });
      const response = await request;
      const parsed = await response.json();
      setData(parsed.data);
    }
    getData();
  }, []);

  if (Data === [] || undefined) {
    return (
      <View style={{
        backgroundColor: "black", justifyContent: 'center',
        alignItems: "center", flex: 1
      }}>
        <ActivityIndicator size="small" color="white" />
      </View>
    )
  } else {
    return (
      <FlatList
        style={{ flex: 1, backgroundColor: colors.bottomBackGround }}
        ListHeaderComponent={<Header bs={bs} data={Data} />}
        stickyHeaderIndices={[0]}
        data={data}
        renderItem={({ item, index }) => (
          <>
            <BottomSheet
              ref={bs}
              snapPoints={[570, 0]}
              renderContent={() => <BottomContent navigation={navigation} />}
              renderHeader={renderHeader}
              initialSnap={1}
              callbackNode={fall}
              enabledGestureInteraction={true}
            />
            <ProfileHeader data={Data} />
            <UserBio data={Data} />
            <EditProfileButton />
            <ConstantStories />
            <LineSeperator />
            <GridIcon />
            <ProfileGrid />
          </>
        )}
      />
    );
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: colors.background,
    shadowColor: '#333333',
    shadowOffset: { width: -1, height: -3 },
    shadowRadius: 2,
    shadowOpacity: 0.4,
    paddingTop: 20,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    height: 10
  },
  panelHeader: {
    alignItems: 'center',
  },
  panelHandle: {
    width: 55,
    height: 4,
    borderRadius: 4,
    backgroundColor: 'white',
    bottom: 10
  },
})

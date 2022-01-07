import React from 'react';
import ActivityList from './activityList';
import {FlatList, TouchableOpacity} from 'react-native-gesture-handler';

const data = [{key: '1'}];

export default function activityScreen() {
  return (
    <>
      <FlatList
        style={{backgroundColor: '#000', flex: 1}}
        data={data}
        renderItem={() => (
          <>
            <ActivityList />
          </>
        )}
      />
    </>
  );
}

import { View, Text, Colors, TouchableOpacity } from 'react-native-ui-lib';

import React, { useState } from 'react';
import tw from 'twrnc';
import { FlatList, Touchable } from 'react-native';
const tabData = [
  { title: 'All', active: true },
  { title: 'Apparel', active: false },
  { title: 'Dress', active: false },
  { title: 'Tshirt', active: false },
  { title: 'Bag', active: false },
];
export default function TabView() {
  const [tab, setTab] = useState(tabData);
  return (
    <View style={tw`flex-row items-center py-4`}>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={tab}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => {
              const newTab = tab.map((t) => ({
                ...t,
                active: t.title === item.title,
              }));
              setTab(newTab);
            }}
            style={tw`flex items-center justify-center w-20`}
          >
            <Text Body_M Title_Active>
              {item.title}
            </Text>

            <View
              style={[
                tw`w-1 h-1`,
                {
                  transform: 'rotate(45deg)',
                  backgroundColor: `${item.active ? Colors.Default : 'rgba(0,0,0,0.0)'}`,
                },
              ]}
            />
          </TouchableOpacity>
        )}
      />

      {/* <View style={tw`flex items-center justify-center  w-20`}>
        <Text Body_M PlaceHolder>
          Apparel
        </Text>
        <View style={[tw`w-1 h-1 `, { transform: 'rotate(45deg)', borderColor: Colors.Default }]} />
      </View>
      <View style={tw`flex items-center justify-center  w-20`}>
        <Text Body_M PlaceHolder>
          Dress
        </Text>
        <View style={[tw`w-1 h-1 `, { transform: 'rotate(45deg)', borderColor: Colors.Default }]} />
      </View>
      <View style={tw`flex items-center justify-center  w-20`}>
        <Text Body_M PlaceHolder>
          Tshirt
        </Text>
        <View style={[tw`w-1 h-1 `, { transform: 'rotate(45deg)', borderColor: Colors.Default }]} />
      </View>
      <View style={tw`flex items-center justify-center`}>
        <Text Body_M PlaceHolder>
          Bag
        </Text>
        <View style={[tw`w-1 h-1 `, { transform: 'rotate(45deg)', borderColor: Colors.Default }]} />
      </View> */}
    </View>
  );
}

import React from 'react';
import { Chip, View, Text } from 'react-native-ui-lib';
import tw from 'twrnc';
import Divider from './Divider';

const tag = [
  '#2021',
  '#spring',
  '#collection',
  '#fall',
  '#dress',
  '#autumncollection',
  '#openfashion',
];
export default function Trending() {
  return (
    <View style={tw`items-center gap-4`}>
      <Text Title center uppercase>
        @Trending
      </Text>
      <View style={tw`flex-row gap-4 flex-wrap `}>
        {tag.map((tag) => (
          <Chip
            style={tw`border-0 bg-gray-50 rounded-xl p-2`}
            key={tag}
            labelStyle={{ fontSize: 14, lineHeight: 16, fontFamily: 'TenorSans' }}
            label={tag}
          />
        ))}
      </View>
    </View>
  );
}

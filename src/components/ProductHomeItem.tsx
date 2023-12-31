import React from 'react';
import { View, Image, Button, Assets, Text, Colors } from 'react-native-ui-lib';
import tw from 'twrnc';

export default function ProductHomeItem({ image }) {
  return (
    <View style={tw`w-[168px] h-[285px] mx-2`}>
      <View style={tw`w-full h-[220px]`}>
        <Image source={image} style={{ width: '100%', height: '100%' }} resizeMode="contain" />
        <View
          style={tw`absolute top-4 left-4 h-[27px] w-[27px] flex items-center justify-center rounded-full bg-[${Colors.Default}]`}
        >
          <Text
            style={{
              fontFamily: 'TenorSans',
              fontSize: 12,
              // lineHeight: 18,
              color: Colors.white,
              textAlign: 'center',
            }}
          >
            new
          </Text>
        </View>
      </View>
      <View style={tw`gap-y-1 px-1 items-center`}>
        <Text
          style={{
            fontFamily: 'TenorSans',
            fontSize: 12,
            lineHeight: 18,
            color: Colors.Label,
            textAlign: 'center',
          }}
        >
          21WN reversible angora cardigan
        </Text>

        <Text
          style={{ fontFamily: 'TenorSans', fontSize: 15, lineHeight: 24, color: Colors.Default }}
        >
          $120
        </Text>
      </View>
    </View>
  );
}

import React from 'react';
import { View, Image, Button, Assets, Text, Colors } from 'react-native-ui-lib';
import tw from 'twrnc';

export default function ProductGridItem() {
  return (
    <View style={tw`w-[168px] h-[285px]`}>
      <View style={tw`w-full h-[220px]`}>
        <Image
          source={require('@assets/shirt.png')}
          style={{ width: '100%', height: '100%' }}
          resizeMode="contain"
        />
        <Button
          iconStyle={tw`h-4 w-4`}
          iconSource={Assets.icons.Heart}
          link
          style={tw`absolute bottom-4 right-4`}
        />
      </View>
      <View style={tw`gap-y-1 px-1`}>
        <Text
          style={{ fontFamily: 'TenorSans', fontSize: 12, lineHeight: 18, color: Colors.Label }}
        >
          21WN{' '}
        </Text>
        <Text style={{ fontFamily: 'TenorSans', fontSize: 12, lineHeight: 18 }}>
          reversible angora cardigan
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

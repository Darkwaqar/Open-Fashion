import React from 'react';
import { View, Image, Button, Assets, Text, Colors } from 'react-native-ui-lib';
import tw from 'twrnc';

export default function ProductFullItem() {
  return (
    <View style={tw`w-[343px] h-[511px]`}>
      <View style={tw`w-full h-[457px]`}>
        <Image
          source={require('@assets/coat.png')}
          style={{ width: '100%', height: '100%' }}
          resizeMode="contain"
        />
        <Button
          iconStyle={tw`h-4 w-4`}
          iconSource={Assets.icons.Heart}
          link
          style={tw`absolute bottom-4 right-4`}
        />
        {/* <View
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
        </View> */}
      </View>
      <View style={tw` px-1`}>
        <Text
          style={{
            fontFamily: 'TenorSans',
            fontSize: 18,
            lineHeight: 40,
            letterSpacing: 4,
            color: Colors.Title,
          }}
        >
          MOHAN
        </Text>
        <View style={tw`flex-row items-center   justify-between`}>
          <Text
            style={{
              fontFamily: 'TenorSans',
              fontSize: 16,
              lineHeight: 24,
              color: Colors.Label,
            }}
          >
            Recycle Boucle Knit Cardigan Pink
          </Text>
          <Text
            style={{
              fontFamily: 'TenorSans',
              fontSize: 18,
              // lineHeight: 14,
              color: Colors.Default,
            }}
          >
            $120
          </Text>
        </View>
      </View>
    </View>
  );
}

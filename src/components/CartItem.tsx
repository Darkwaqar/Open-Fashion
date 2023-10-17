import React from 'react';
import { View, Image, Button, Assets, Text, Colors, Stepper } from 'react-native-ui-lib';
import tw from 'twrnc';

export default function CartItem() {
  return (
    <View style={tw`w-[313px] h-[134px] flex-row`}>
      <View style={tw`w-[100px] h-[134px]`}>
        <Image
          source={require('@assets/shirt.png')}
          style={{ width: '100%', height: '100%' }}
          resizeMode="contain"
        />
      </View>
      <View style={tw`gap-y-4 px-1`}>
        <View style={tw`gap-y-2`}>
          <Text
            style={{
              fontFamily: 'TenorSans',
              fontSize: 14,
              lineHeight: 20,
              letterSpacing: 2,
              textTransform: 'uppercase',
              color: Colors['Title Active'],
            }}
          >
            lamerei
          </Text>
          <Text
            style={{
              fontFamily: 'TenorSans',
              fontSize: 12,
              lineHeight: 18,
              textTransform: 'capitalize',
            }}
          >
            reversible angora cardigan
          </Text>
        </View>
        <View>
          <Stepper minValue={0} small />
        </View>
        <Text
          style={{ fontFamily: 'TenorSans', fontSize: 15, lineHeight: 24, color: Colors.Default }}
        >
          $120
        </Text>
      </View>
    </View>
  );
}

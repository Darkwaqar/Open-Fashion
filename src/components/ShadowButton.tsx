import React from 'react';
import { Dimensions } from 'react-native';
import { Button, Colors, Text } from 'react-native-ui-lib';
import tw from 'twrnc';
const { width } = Dimensions.get('window');

export default function ShadowButton() {
  return (
    <Button
      //   label={'Explore Collection'}
      //   labelStyle={{}}
      //   size={Button.sizes.medium}
      style={tw`absolute bottom-10  h-10  w-[${width - 50}px]  `}
      backgroundColor={Colors.rgba(Colors.black, 0.4)}
    >
      <Text Body_L style={tw`uppercase text-white`}>
        Explore Collection
      </Text>
    </Button>
  );
}

import { View, Text, Image } from 'react-native';
import React from 'react';
import tw from 'twrnc';
import { Icon, Colors, Assets, Button } from 'react-native-ui-lib';

export default function Header() {
  return (
    <View style={tw`flex-row h-[60px] mx-4 items-center justify-between bg-[${Colors.white}]`}>
      <Button iconSource={Assets.icons.Menu} style={{ width: 24, height: 24 }} color="black" link />
      <View style={tw`absolute w-full items-center`}>
        <Image
          source={require('@assets/Logo.png')}
          style={tw`w-[78px]  h-[32px]`}
          resizeMode="cover"
        />
      </View>

      <View style={tw`flex-row items-center justify-center gap-x-4`}>
        <Button
          iconSource={Assets.icons.Search}
          style={{ width: 24, height: 24 }}
          color="black"
          link
        />
        <Button
          iconSource={Assets.icons.Shopping_bag}
          style={{ width: 24, height: 24 }}
          color="black"
          link
        />
      </View>
    </View>
  );
}

import React from 'react';
import { View, Image, Button, Assets, Text, Colors, Chip } from 'react-native-ui-lib';
import tw from 'twrnc';

export default function ProductListItem() {
  return (
    <View style={tw`w-full h-[134px] flex-row items-center just`}>
      <View style={tw`w-[133px] h-full`}>
        <Image
          source={require('@assets/jacket.png')}
          style={{ width: '100%', height: '100%' }}
          resizeMode="contain"
        />
      </View>

      <View style={tw`flex-1 gap-y-2 py-2 `}>
        <View>
          <Text
            style={{
              fontFamily: 'TenorSans',
              fontSize: 14,
              lineHeight: 20,
              letterSpacing: 2,
              color: Colors['Title Active'],
              textTransform: 'uppercase',
            }}
          >
            lamerei
          </Text>
          <Text
            style={{ fontFamily: 'TenorSans', fontSize: 14, lineHeight: 24, color: Colors.Label }}
          >
            Recycle Boucle Knit Cardigan Pink
          </Text>
          <Text
            style={{
              fontFamily: 'TenorSans',
              fontSize: 15,
              lineHeight: 24,
              color: Colors.Default,
            }}
          >
            $120
          </Text>
        </View>
        <View style={tw`flex-row gap-x-2`}>
          <Button
            iconStyle={tw`h-[13px] w-[13px]`}
            iconSource={Assets.icons.Star}
            link
            // style={tw`absolute bottom-4 right-4`}
          />
          <Text
            style={{ fontFamily: 'TenorSans', fontSize: 12, lineHeight: 14, color: Colors.Label }}
          >
            4.8 Ratings
          </Text>
        </View>
        <View style={tw`flex-row gap-x-2 items-center`}>
          <Text
            style={{ fontFamily: 'TenorSans', fontSize: 12, lineHeight: 14, color: Colors.Label }}
          >
            Size
          </Text>
          <View style={tw`gap-x-2 flex-row items-center`}>
            <View
              style={tw`h-6 w-6 flex items-center justify-center rounded-full border-gray-200 border`}
            >
              <Text
                style={[
                  {
                    fontFamily: 'TenorSans',
                    fontSize: 10,
                    lineHeight: 12,
                    color: Colors.Label,
                  },
                ]}
              >
                S
              </Text>
            </View>
            <View
              style={tw`h-6 w-6 flex items-center justify-center rounded-full border-gray-200 border`}
            >
              <Text
                style={[
                  {
                    fontFamily: 'TenorSans',
                    fontSize: 10,
                    lineHeight: 12,
                    color: Colors.Label,
                  },
                ]}
              >
                M
              </Text>
            </View>
            <View
              style={tw`h-6 w-6 flex items-center justify-center rounded-full border-gray-200 border`}
            >
              <Text
                style={[
                  {
                    fontFamily: 'TenorSans',
                    fontSize: 10,
                    lineHeight: 12,
                    color: Colors.Label,
                  },
                ]}
              >
                L
              </Text>
            </View>
          </View>
        </View>
        <Button
          iconStyle={tw`h-4 w-4`}
          iconSource={Assets.icons.Heart}
          link
          style={tw`absolute bottom-4 right-4`}
        />
      </View>
    </View>
  );
}

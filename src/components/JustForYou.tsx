import { Dimensions, FlatList, TouchableOpacity, View, ViewToken } from 'react-native';
import React, { useCallback, useState } from 'react';
import tw from 'twrnc';
import { Text, Image, Colors } from 'react-native-ui-lib';
import Divider from './Divider';
const { width } = Dimensions.get('window');

const lady = [
  require('@assets/lady2.png'),
  require('@assets/lady.png'),
  require('@assets/lady3.png'),
  require('@assets/lady4.png'),
];
export default function JustForYou() {
  const [visibleItem, setVisibleItem] = useState(0);
  const onViewableItemsChanged = useCallback(
    ({ viewableItems, changed }: { viewableItems: ViewToken[]; changed: ViewToken[] }) => {
      if (viewableItems.length > 0) {
        setVisibleItem(viewableItems[0].index);
        console.log('Visible item is', viewableItems[0].index);
      }
    },
    []
  );
  return (
    <View style={tw`gap-2`}>
      <Text Title center>
        JustForYou
      </Text>
      <View style={tw`self-center`}>
        <Divider />
      </View>
      <FlatList
        ListFooterComponent={<View style={tw`w-[40px]`}></View>}
        showsHorizontalScrollIndicator={false}
        snapToAlignment="center"
        decelerationRate={'fast'}
        horizontal
        data={lady}
        contentContainerStyle={tw`gap-4 items-center px-2`}
        renderItem={({ item }) => <ProductHomeItem image={item} />}
        keyExtractor={(item, index) => index.toString()}
        onViewableItemsChanged={onViewableItemsChanged}
        viewabilityConfig={{
          itemVisiblePercentThreshold: 60,
        }}
      />
      <View style={tw`flex-row gap-2 my-2 items-center justify-center`}>
        {lady.map((x, i) => (
          <View
            key={i}
            style={[
              tw`w-1 h-1`,
              {
                transform: 'rotate(45deg)',
                backgroundColor: `${i == visibleItem ? Colors.Default : 'rgba(0,0,0,0.1)'}`,
              },
            ]}
          />
        ))}
      </View>
    </View>
  );
}
function ProductHomeItem({ image }) {
  return (
    <TouchableOpacity>
      <View style={tw`w-[255px] h-[390px]`}>
        <View style={tw`w-[254px] h-[311px]`}>
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
          <Text center Body_L>
            21WN reversible angora cardigan
          </Text>

          <Text
            style={{ fontFamily: 'TenorSans', fontSize: 15, lineHeight: 24, color: Colors.Default }}
          >
            $120
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

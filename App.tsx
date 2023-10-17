import { StatusBar } from 'expo-status-bar';
import { FlatList, SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import Header from '@components/Header';
import useCachedResources from '@hooks/useCachedResources';
import { Carousel, Image, View, Text, Colors, Button, Icon, Assets } from 'react-native-ui-lib';
import tw from 'twrnc';
import Footer from '@components/Footer';
import ProductGridItem from '@components/ProductGridItem';
import ProductListItem from '@components/ProductListItem';
import ProductHomeItem from '@components/ProductHomeItem';
import ProductFullItem from '@components/ProductFullItem';
import CartItem from '@components/CartItem';
import ShadowButton from '@components/ShadowButton';
import Divider from '@components/Divider';
import TabView from '@components/TabView';
import HomeBrands from '@components/HomeBrands';
import HomeCollection from '@components/HomeCollection';
import JustForYou from '@components/JustForYou';
import Trending from '@components/Trending';

const lady = [
  require('@assets/lady.png'),
  require('@assets/lady2.png'),
  require('@assets/lady3.png'),
  require('@assets/lady4.png'),
];

export default function App() {
  const isLoadingComplete = useCachedResources();
  if (!isLoadingComplete) {
    return null;
  }
  return (
    <SafeAreaView style={tw`flex-1 bg-white`}>
      <Header />
      <ScrollView contentContainerStyle={tw`flex-1`}>
        {/* <ProductGridItem /> */}
        {/* <ProductListItem /> */}
        {/* <ProductFullItem /> */}
        {/* <CartItem /> */}
        {/* <ProductHomeItem /> */}
        {/* <Footer /> */}

        <Carousel
          containerStyle={{
            height: 700,
          }}
          loop
          pageControlProps={{
            size: 10,
          }}
          pageControlPosition={Carousel.pageControlPositions.OVER}
          showCounter
        >
          {new Array(5).fill(require('@assets/Banner.png')).map((image, i) => {
            return (
              <View flex center key={i}>
                <Image
                  overlayType={Image.overlayTypes.BOTTOM}
                  style={{ width: '100%', height: '100%' }}
                  source={image}
                />
                <ShadowButton />
              </View>
            );
          })}
        </Carousel>
        {/* <View style={tw`flex justify-center items-center `}>
          <Text Title Title_Active style={tw`uppercase`}>
            New Arrival
          </Text>
          <Divider />
        </View>
        <TabView />
        <FlatList
          nestedScrollEnabled
          ListFooterComponent={
            <Button
              label="Explore More"
              Body_L
              link
              style={tw`mx-4  self-center items-center justify-center w-[155px] h-[48px]`}
              color="black"
              iconStyle={tw`w-[18px] h-[18px]`}
              iconSource={Assets.icons.Forward_Arrow}
              iconOnRight
            />
          }
          contentContainerStyle={tw`gap-2 items-center`}
          data={lady}
          numColumns={2}
          renderItem={({ item }) => <ProductHomeItem image={item} />}
          keyExtractor={(item, index) => index.toString()}
        /> */}

        {/* <HomeBrands /> */}
        {/* <HomeCollection /> */}
        {/* <JustForYou /> */}
        {/* <Trending /> */}
      </ScrollView>
    </SafeAreaView>

    // <View style={styles.container}>

    //   <StatusBar style="auto" />
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

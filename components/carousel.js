import React, {useState, useRef} from 'react';
import {
  FlatList,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  Animated,
} from 'react-native';
import { colors, shadow, sizes, spacing } from '../constants/theme';
import Favorites from '../screens/components/favorite';

const CARD_WIDTH = sizes.width - 80;
const CARD_HEIGHT = 200;
const itemSpacing = spacing.m;
const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);
const CARD_HEIGHT_SPACING = CARD_HEIGHT + spacing.m; // Assuming 'spacing.m' is the vertical space

const TopPlacesCarousel = ({ list, handlePress }) => {
  const [scrollY, setScrollY] = useState(new Animated.Value(0));

  const onScroll = Animated.event(
    [{ nativeEvent: { contentOffset: { y: scrollY } } }],
    { useNativeDriver: false }
  );

  return (
    <View style={styles.container}>
      <AnimatedFlatList
        data={list}
        snapToInterval={CARD_HEIGHT_SPACING}
        decelerationRate="fast"
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index }) => {
          const inputRange = [
            (index - 1) * CARD_HEIGHT_SPACING, 
            index * CARD_HEIGHT_SPACING, 
            (index + 1) * CARD_HEIGHT_SPACING
          ];
          const scale = scrollY.interpolate({
            inputRange,
            outputRange: [0.8, 1, 0.8],
            extrapolate: 'clamp',
          });

          return (
            <TouchableOpacity
              style={{
                marginBottom: spacing.m, // Adjust the spacing between cards
                width: CARD_WIDTH,
                height: CARD_HEIGHT,
              }} 
              onPress={() => handlePress(item)}
            >
              <Animated.View style={[styles.card, shadow.light, { transform: [{ scale }] }]}>
                <View style={styles.imageBox}>
                  <Image source={item.image} style={styles.image} />
                </View>
                <Text style={styles.title}>{item.title}</Text>
              </Animated.View>
            </TouchableOpacity>
          );
        }}
        onScroll={onScroll}
        scrollEventThrottle={16}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    marginVertical: spacing.m,
  },
  imageBox: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    borderRadius: sizes.radius,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  titleBox: {
    position: 'absolute',
    bottom: 0, // Position the title at the bottom of the card
    width: '100%',
    alignItems: 'center', // Center the title horizontally
    paddingVertical: spacing.s, // Add padding for better visual appearance
  },
  title: {
    fontSize: sizes.h2,
    fontWeight: 'bold',
    color: colors.white,
    textAlign: 'center',
  },
});

export default TopPlacesCarousel;

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
const CARD_HEIGHT = 150;
const itemSpacing = spacing.m/100;
const CARD_WIDTH_SPACING = CARD_WIDTH + itemSpacing * 2;
const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);
const sidePadding = (sizes.width - CARD_WIDTH) / 4;

const TopPlacesCarousel = ({ list, handlePress }) => {
  const [scrollX, setScrollX] = useState(new Animated.Value(0));

  const onScroll = Animated.event(
    [{ nativeEvent: { contentOffset: { x: scrollX } } }],
    { useNativeDriver: false }
  );
  return (
    <View style={styles.container}>
      <AnimatedFlatList
        data={list}
        horizontal
        snapToInterval={CARD_WIDTH_SPACING}
        decelerationRate="fast"
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{
          paddingHorizontal: sidePadding,
        }}
        renderItem={({ item, index }) => {
          const inputRange = [(index - 1) * CARD_WIDTH_SPACING, index * CARD_WIDTH_SPACING, (index + 1) * CARD_WIDTH_SPACING];
          const scale = scrollX.interpolate({
            inputRange,
            outputRange: [0.8, 1, 0.8],
            extrapolate: 'clamp',
          });
          // Calculate margins for the first and last items
          const isFirstItem = index === 0;
          const isLastItem = index === list.length - 1;

          return (
            <TouchableOpacity
              style={{
                marginLeft: isFirstItem ? sidePadding + itemSpacing : itemSpacing, // Adjust the marginLeft for the first item
                marginRight: isLastItem ? sidePadding + itemSpacing : itemSpacing, // Adjust the marginRight for the last item
                width: CARD_WIDTH, // Set the width to CARD_WIDTH
                height: CARD_HEIGHT, // Set the height to CARD_HEIGHT
              }} onPress={() => handlePress(item)}>
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

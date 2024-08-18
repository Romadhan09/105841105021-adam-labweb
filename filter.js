import React, { useState, useRef } from 'react';
import { View, Text, TouchableOpacity, ScrollView, PanResponder, Animated, StyleSheet } from 'react-native';

const filter = () => {
  const [selectedPriceRange, setSelectedPriceRange] = useState([78, 143]);
  const [selectedColors, setSelectedColors] = useState(['#000000', '#FF0000']);
  const [selectedSizes, setSelectedSizes] = useState(['S', 'M']);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedBrands, setSelectedBrands] = useState(['Adidas', 'Jack & Jones']);

  const colors = ['#000000', '#FFFFFF', '#FF0000', '#8B4513', '#D3B8AE', '#FFC107', '#1A237E'];
  const sizes = ['XS', 'S', 'M', 'L', 'XL'];
  const categories = ['All', 'Women', 'Men', 'Boys', 'Girls'];

  const minPrice = 78;
  const maxPrice = 143;
  const rangeWidth = 320; // Range bar width for the price slider

  const minPriceAnimation = useRef(new Animated.Value(0)).current;
  const maxPriceAnimation = useRef(new Animated.Value(rangeWidth)).current;

  const updatePriceRange = () => {
    minPriceAnimation.addListener(({ value }) => {
      const min = Math.round((value / rangeWidth) * (maxPrice - minPrice) + minPrice);
      const max = Math.round((maxPriceAnimation._value / rangeWidth) * (maxPrice - minPrice) + minPrice);
      if (min > max) return;
      setSelectedPriceRange([min, max]);
    });

    maxPriceAnimation.addListener(({ value }) => {
      const min = Math.round((minPriceAnimation._value / rangeWidth) * (maxPrice - minPrice) + minPrice);
      const max = Math.round((value / rangeWidth) * (maxPrice - minPrice) + minPrice);
      if (min > max) return;
      setSelectedPriceRange([min, max]);
    });
  };

  const panResponderMin = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (e, gestureState) => {
        const newMin = Math.max(0, Math.min(rangeWidth, gestureState.moveX));
        minPriceAnimation.setValue(newMin);
      },
      onPanResponderRelease: () => {
        updatePriceRange();
      },
    })
  ).current;

  const panResponderMax = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (e, gestureState) => {
        const newMax = Math.max(minPriceAnimation._value, Math.min(rangeWidth, gestureState.moveX));
        maxPriceAnimation.setValue(newMax);
      },
      onPanResponderRelease: () => {
        updatePriceRange();
      },
    })
  ).current;

  const toggleSelection = (item, setSelectedItems, selectedItems) => {
    setSelectedItems(prev => 
      prev.includes(item) ? prev.filter(i => i !== item) : [...prev, item]
    );
  };

  const discardFilters = () => {
    setSelectedPriceRange([minPrice, maxPrice]);
    setSelectedColors([]);
    setSelectedSizes([]);
    setSelectedCategory('All');
    setSelectedBrands([]);
  };

  const applyFilters = () => {
    console.log('Filters Applied:', {
      selectedPriceRange,
      selectedColors,
      selectedSizes,
      selectedCategory,
      selectedBrands,
    });
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Filters</Text>

      <Text style={styles.subHeader}>Price range</Text>
      <View style={styles.priceRangeContainer}>
        <View style={styles.rangeBar}>
          <Animated.View
            style={[styles.handle, { left: minPriceAnimation }]}
            {...panResponderMin.panHandlers}
          />
          <Animated.View
            style={[styles.handle, { left: maxPriceAnimation }]}
            {...panResponderMax.panHandlers}
          />
          <View style={styles.rangeFill} />
        </View>
        <View style={styles.priceLabels}>
          <Text style={styles.priceLabel}>${minPrice}</Text>
          <Text style={styles.priceLabel}>${maxPrice}</Text>
        </View>
      </View>

      <Text style={styles.subHeader}>Colors</Text>
      <View style={styles.colorContainer}>
        {colors.map(color => (
          <TouchableOpacity
            key={color}
            style={[styles.colorSwatch, { backgroundColor: color, borderColor: selectedColors.includes(color) ? '#FF3B30' : '#FFFFFF' }]}
            onPress={() => toggleSelection(color, setSelectedColors, selectedColors)}
          />
        ))}
      </View>

      <Text style={styles.subHeader}>Sizes</Text>
      <View style={styles.sizeContainer}>
        {sizes.map(size => (
          <TouchableOpacity
            key={size}
            style={[styles.sizeButton, { backgroundColor: selectedSizes.includes(size) ? '#FF3B30' : '#FFFFFF' }]}
            onPress={() => toggleSelection(size, setSelectedSizes, selectedSizes)}
          >
            <Text style={[styles.sizeText, { color: selectedSizes.includes(size) ? '#FFFFFF' : '#000000' }]}>
              {size}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <Text style={styles.subHeader}>Category</Text>
      <View style={styles.categoryContainer}>
        {categories.map(category => (
          <TouchableOpacity
            key={category}
            style={[styles.categoryButton, { backgroundColor: selectedCategory === category ? '#FF3B30' : '#FFFFFF' }]}
            onPress={() => setSelectedCategory(category)}
          >
            <Text style={[styles.categoryText, { color: selectedCategory === category ? '#FFFFFF' : '#000000' }]}>
              {category}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.footer}>
        <TouchableOpacity style={styles.discardButton} onPress={discardFilters}>
          <Text style={styles.footerText}>Discard</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.applyButton} onPress={applyFilters}>
          <Text style={styles.footerText}>Apply</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
  },
  subHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  priceRangeContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  rangeBar: {
    height: 30,
    width: 320,
    backgroundColor: '#E0E0E0',
    borderRadius: 5,
    position: 'relative',
    justifyContent: 'center',
    marginBottom: 10,
  },
  handle: {
    width: 20,
    height: 30,
    borderRadius: 10,
    position: 'absolute',
    top: 0,
    backgroundColor: '#FF3B30',
  },
  rangeFill: {
    position: 'absolute',
    height: '100%',
    backgroundColor: '#FF3B30',
    opacity: 0.3,
    borderRadius: 5,
  },
  priceLabels: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  priceLabel: {
    fontSize: 16,
    color: '#000000',
  },
  colorContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 20,
  },
  colorSwatch: {
    width: 40,
    height: 40,
    borderRadius: 20,
    margin: 5,
    borderWidth: 3,
  },
  sizeContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 20,
  },
  sizeButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    margin: 5,
    borderRadius: 20,
    borderWidth: 1,
  },
  sizeText: {
    fontSize: 16,
  },
  categoryContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 20,
  },
  categoryButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    margin: 5,
    borderRadius: 20,
    borderWidth: 1,
  },
  categoryText: {
    fontSize: 16,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
  },
  discardButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#E0E0E0',
    borderRadius: 20,
  },
  applyButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#FF3B30',
    borderRadius: 20,
  },
  footerText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default filter;

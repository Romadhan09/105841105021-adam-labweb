import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList, Image, ScrollView } from 'react-native';

const katalog2 = () => {
  const categories = ['T-shirt', 'Blouse', 'Dress', 'Crop Tops'];
  const [products, setProducts] = useState([
    {
      name: 'Casual T-shirt',
      image: require('./assets/foto2.png'),
      color: 'Brown',
      size: 'M',
      originalPrice: 29, 
      price: 26,
      rating: 5,
      ratingCount: 11, 
      loved: false,
      sale: true,
    },
    {
      name: 'Summer Blouse',
      image: require('./assets/foto3.png'),
      color: 'Pink',
      size: 'L',
      price: 49,
      rating: 5,
      ratingCount: 16, 
      loved: false,
      sale: false,
    },
    {
      name: 'T-shirt',
      image: require('./assets/foto1.png'),
      color: 'Black',
      size: 'L',
      originalPrice: 90, 
      price: 81,
      rating: 5,
      ratingCount: 41,
      loved: false,
      sale: true,
    },
    {
      name: 'Party Dress',
      image: require('./assets/foto4.png'),
      color: 'Green',
      size: 'L',
      price: 21,
      rating: 3,
      ratingCount: 28, 
      loved: false,
      sale: false,
    },
  ]);

  const renderStars = (rating, ratingCount) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <Image
          key={i}
          source={i <= rating ? require('./assets/icon/star.png') : require('./assets/icon/unstar.png')}
          style={styles.starIcon}
        />
      );
    }
    stars.push(
      <Text key="ratingCount" style={styles.ratingText}>
        ({ratingCount})
      </Text>
    );
    return stars;
  };

  const toggleLove = (index) => {
    const newProducts = [...products];
    newProducts[index].loved = !newProducts[index].loved;
    setProducts(newProducts);
  };

  const sortProductsByPrice = (ascending) => {
    const sortedProducts = [...products].sort((a, b) =>
      ascending ? a.price - b.price : b.price - a.price
    );
    setProducts(sortedProducts);
  };

  const renderItem = ({ item, index }) => (
    <View style={styles.productItem}>
      <View style={styles.imageContainer}>
        <Image source={item.image} style={styles.productImage} />
        {item.sale && (
          <View style={styles.saleBadge}>
            <Text style={styles.saleText}>SALE</Text>
          </View>
        )}
      </View>
      <View style={styles.productDetails}>
        <Text style={styles.productName}>{item.name}</Text>
        <Text style={styles.productColor}>Color: {item.color}</Text>
        <Text style={styles.productSize}>Size: {item.size}</Text>
        <View style={styles.ratingContainer}>
          {renderStars(item.rating, item.ratingCount)}
        </View>
        {item.sale ? (
          <View style={styles.priceContainer}>
            <Text style={styles.originalPrice}>${item.originalPrice}</Text>
            <Text style={styles.salePrice}>${item.price}</Text>
          </View>
        ) : (
          <Text style={styles.productPrice}>${item.price}</Text>
        )}
      </View>
      <TouchableOpacity style={styles.loveButton} onPress={() => toggleLove(index)}>
        <Image
          source={item.loved ? require('./assets/icon/heart.png') : require('./assets/icon/unheart.png')}
          style={styles.loveIcon}
        />
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.headerRow}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Image source={require('./assets/icon/arrow.png')} style={styles.backIcon} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Womens's Top</Text>
        <TouchableOpacity style={styles.searchButton}>
          <Image source={require('./assets/icon/search.png')} style={styles.searchIcon} />
        </TouchableOpacity>
      </View>

      <ScrollView horizontal contentContainerStyle={styles.categoryContainer}>
        {categories.map((category, index) => (
          <TouchableOpacity key={index} style={styles.categoryButton} onPress={() => {/* Handle category press */}}>
            <Text style={styles.categoryText}>{category}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <View style={styles.filterContainer}>
        <TouchableOpacity style={styles.filterButton} onPress={() => sortProductsByPrice(true)}>
          <Text style={styles.filterText}>Filter</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.filterButton} onPress={() => sortProductsByPrice(true)}>
          <Text style={styles.filterText}>Price: Low to High</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.filterButton} onPress={() => sortProductsByPrice(false)}>
          <Text style={styles.filterText}>Price: High to Low</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={products}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        numColumns={2}
        columnWrapperStyle={styles.row}
        style={styles.productList}
      />
    </View>
  );
};

export default katalog2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  backButton: {
    paddingRight: 8,
  },
  backIcon: {
    width: 20,
    height: 20,
    tintColor: '#333333',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333333',
    flex: 1,
    textAlign: 'center',
  },
  searchButton: {
    paddingLeft: 8,
  },
  searchIcon: {
    width: 20,
    height: 20,
    tintColor: '#333333',
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 12,
  },
  categoryContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
  },
  categoryButton: {
    backgroundColor: 'black',
    marginHorizontal: 8,
    borderRadius: 18,
    padding: 8,
  },
  categoryText: {
    fontSize: 16,
    color: 'white',
    textAlign: 'center',
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 16,
    paddingHorizontal: 12,
  },
  filterButton: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 4,
  },
  filterText: {
    fontSize: 14,
  },
  productList: {
    marginTop: 8,
  },
  row: {
    justifyContent: 'space-between',
  },
  productItem: {
    flex: 1,
    margin: 8,
  },
  imageContainer: {
    position: 'relative',
    overflow: 'hidden',
    borderRadius: 8,
  },
  productImage: {
    width: '100%',
    height: 160,
    resizeMode: 'cover',
  },
  saleBadge: {
    position: 'absolute',
    top: 8,
    left: 8,
    backgroundColor: 'red',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
  },
  saleText: {
    color: 'white',
    fontWeight: 'bold',
  },
  productDetails: {
    paddingVertical: 8,
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  productColor: {
    fontSize: 14,
    color: '#777',
  },
  productSize: {
    fontSize: 14,
    color: '#777',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 4,
  },
  starIcon: {
    width: 20,
    height: 20,
  },
  ratingText: {
    fontSize: 14,
    color: '#000',
    marginLeft: 4,
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  originalPrice: {
    fontSize: 14,
    color: '#777',
    textDecorationLine: 'line-through',
    marginRight: 8,
  },
  salePrice: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'red',
  },
  productPrice: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  loveButton: {
    position: 'absolute',
    top: 8,
    right: 8,
  },
  loveIcon: {
    width: 28,
    height: 28,
  },
});

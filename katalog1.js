import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, Image, ScrollView } from 'react-native';

const katalog1 = () => {
  const categories = ['T-shirt', 'Blouse', 'Dress', 'Crop Tops'];
  const [products, setProducts] = useState([
    {
      name: 'Casual T-shirt',
      image: require('./assets/foto1.png'),
      color: 'Brown',
      size: 'M',
      price: 25,
      rating: 4,
      ratingCount: 12,
      loved: false,
    },
    {
      name: 'Summer Blouse',
      image: require('./assets/foto2.png'),
      color: 'Pink',
      size: 'L',
      price: 52,
      rating: 5,
      ratingCount: 18,
      loved: false,
    },
    {
      name: 'T-shirt',
      image: require('./assets/foto3.png'),
      color: 'Black',
      size: 'L',
      price: 80,
      rating: 5,
      ratingCount: 42,
      loved: false,
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
      <Text key="ratingCount" style={styles.ratingCountText}>
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

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.headerIconContainer}>
          <Image source={require('./assets/icon/arrow.png')} style={styles.headerIcon} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}></Text>
        <TouchableOpacity style={styles.headerIconContainer}>
          <Image source={require('./assets/icon/search.png')} style={styles.headerIcon} />
        </TouchableOpacity>
      </View>

      <View style={styles.pageTitleContainer}>
        <Text style={styles.pageTitle}>Women's Tops</Text>
      </View>

      <ScrollView horizontal contentContainerStyle={styles.categoryScrollView}>
        {categories.map((category, index) => (
          <TouchableOpacity key={index} style={styles.categoryButton}>
            <Text style={styles.categoryButtonText}>{category}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <View style={styles.filterContainer}>
        <TouchableOpacity style={styles.filterButton} onPress={() => sortProductsByPrice(true)}>
          <Text style={styles.filterButtonText}>Filter</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.filterButton} onPress={() => sortProductsByPrice(true)}>
          <Text style={styles.filterButtonText}>Price: Low to High</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.filterButton} onPress={() => sortProductsByPrice(false)}>
          <Text style={styles.filterButtonText}>Price: High to Low</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={products}
        renderItem={({ item, index }) => (
          <View style={styles.productContainer}>
            <Image source={item.image} style={styles.productImage} />
            <View style={styles.productDetails}>
              <Text style={styles.productName}>{item.name}</Text>
              <Text style={styles.productInfo}>Color: {item.color}</Text>
              <Text style={styles.productInfo}>Size: {item.size}</Text>
              <View style={styles.productRatingContainer}>
                {renderStars(item.rating, item.ratingCount)}
              </View>
              <Text style={styles.productPrice}>${item.price}</Text>
            </View>
            <TouchableOpacity style={styles.loveButton} onPress={() => toggleLove(index)}>
              <Image source={item.loved ? require('./assets/icon/heart.png') : require('./assets/icon/unheart.png')} style={styles.loveIcon} />
            </TouchableOpacity>
          </View>
        )}
        keyExtractor={(index) => index.toString()}
        style={styles.productList}
      />
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 12,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  headerIconContainer: {
    paddingRight: 8,
  },
  headerIcon: {
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
  pageTitleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  pageTitle: {
    fontSize: 34,
    fontWeight: 'bold',
  },
  categoryScrollView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
    paddingBottom: 8,
    zIndex: 1,
  },
  categoryButton: {
    paddingVertical: 8,
    paddingHorizontal: 20,
    backgroundColor: 'black',
    marginHorizontal: 8,
    borderRadius: 18,
  },
  categoryButtonText: {
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 16,
  },
  filterButton: {
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 4,
  },
  filterButtonText: {
    fontSize: 14,
  },
  productContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  productImage: {
    width: 90,
    height: 90,
    marginRight: 12,
  },
  productDetails: {
    flex: 1,
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  productInfo: {
    fontSize: 14,
    color: '#777',
  },
  productRatingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 4,
  },
  starIcon: {
    width: 18,
    height: 18,
  },
  ratingCountText: {
    fontSize: 14,
    color: '#000',
    marginLeft: 4,
  },
  productPrice: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  loveButton: {
    padding: 8,
  },
  loveIcon: {
    width: 28,
    height: 28,
  },
  productList: {
    marginTop: 8,
  },
};

export default katalog1;

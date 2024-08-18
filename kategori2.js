import React from 'react';
import { View, Text, TouchableOpacity, FlatList, Image } from 'react-native';

const Category2 = ({ navigation }) => {

  const categories = [
    'Tops', 'Shirts & Blouses', 'Cardigans & Sweaters', 'Knitwear', 'Blazers', 
    'Outerwear', 'Pants', 'Jeans', 'Shorts', 'Skirts', 'Dresses'
  ];

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={require('./assets/icon/arrow.png')} style={styles.icon} />
        </TouchableOpacity>
        <Text style={styles.headerText}>Categories</Text>
        <TouchableOpacity>
          <Image source={require('./assets/icon/search.png')} style={styles.icon} />
        </TouchableOpacity>
      </View>
      
      <TouchableOpacity style={styles.viewAllButton}>
        <Text style={styles.viewAllButtonText}>VIEW ALL ITEMS</Text>
      </TouchableOpacity>

      <Text style={styles.chooseCategoryText}>Choose category</Text>
      
      <FlatList 
        data={categories}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <View style={styles.categoryItem}>
            <Text style={styles.categoryText}>{item}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 16,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  icon: {
    width: 20,
    height: 20,
    tintColor: '#333333',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000000',
  },
  viewAllButton: {
    backgroundColor: '#FF3B30',
    paddingVertical: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginVertical: 16,
  },
  viewAllButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  chooseCategoryText: {
    fontSize: 14,
    marginBottom: 8,
  },
  categoryItem: {
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  categoryText: {
    fontSize: 16,
    color: '#000000',
  },
};

export default Category2;

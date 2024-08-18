import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Categories = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Header Section with Back Arrow and Categories */}
      <View style={styles.headerContainer}>
        <View style={styles.headerRow}>
          {/* Back Arrow */}
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backArrow}>
            <Image source={require('./assets/icon/arrow.png')} style={styles.iconImage} />
          </TouchableOpacity>
          <Text style={styles.headerText}>Categories</Text>
          <TouchableOpacity style={styles.searchIcon}>
            <Image source={require('./assets/icon/search.png')} style={styles.iconImage} />
          </TouchableOpacity>
        </View>

        {/* Category Tabs */}
        <View style={styles.tabsContainer}>
          <TouchableOpacity style={[styles.tab, { borderBottomWidth: 2, borderBottomColor: 'red' }]}>
            <Text style={styles.activeTabText}>Women</Text>
            <View style={styles.activeTabIndicator} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.tab}>
            <Text style={styles.inactiveTabText}>Men</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tab}>
            <Text style={styles.inactiveTabText}>Kids</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Summer Sales Section */}
      <ScrollView>
        <TouchableOpacity style={styles.summerSalesContainer}>
          <Text style={styles.summerSalesText}>SUMMER SALES</Text>
          <Text style={styles.summerSalesSubText}>Up to 50% off</Text>
        </TouchableOpacity>

        {/* Other categories */}
        <View style={styles.categoriesContainer}>
          <TouchableOpacity style={styles.categoryItem}>
            <Text style={styles.categoryText}>New</Text>
            <Image source={require('./assets/foto1.png')} style={styles.categoryImage} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryItem}>
            <Text style={styles.categoryText}>Clothes</Text>
            <Image source={require('./assets/foto2.png')} style={styles.categoryImage} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryItem}>
            <Text style={styles.categoryText}>Shoes</Text>
            <Image source={require('./assets/foto3.png')} style={styles.categoryImage} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryItem}>
            <Text style={styles.categoryText}>Accessories</Text>
            <Image source={require('./assets/foto4.png')} style={styles.categoryImage} />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  headerContainer: {
    paddingHorizontal: 16,
    paddingTop: 16,
    backgroundColor: '#FFFFFF',
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  backArrow: {
    paddingRight: 8,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333333',
    flex: 1,
    textAlign: 'center',
  },
  searchIcon: {
    paddingLeft: 8,
  },
  iconImage: {
    width: 20,
    height: 20,
    tintColor: '#333333',
  },
  tabsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  tab: {
    alignItems: 'center',
    flex: 1,
  },
  activeTabText: {
    fontSize: 18,
    fontWeight: '600',
    color: 'red',
  },
  inactiveTabText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#888888',
  },
  activeTabIndicator: {
    marginTop: 4,
    height: 2,
    backgroundColor: 'red',
    width: '100%',
  },
  summerSalesContainer: {
    backgroundColor: 'red',
    padding: 20,
    marginHorizontal: 16,
    marginTop: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  summerSalesText: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: 'bold',
  },
  summerSalesSubText: {
    color: '#FFFFFF',
    fontSize: 16,
    marginTop: 8,
  },
  categoriesContainer: {
    paddingHorizontal: 16,
    marginTop: 16,
  },
  categoryItem: {
    marginBottom: 16,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F9F9F9',
    padding: 10,
    borderRadius: 8,
  },
  categoryText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333333',
    flex: 1,
  },
  categoryImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
  },
};

export default Categories;

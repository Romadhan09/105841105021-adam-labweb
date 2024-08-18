import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal, StyleSheet } from 'react-native';

const SortBy = () => {
  const [sortVisible, setSortVisible] = useState(false);
  const [selectedSort, setSelectedSort] = useState('Price: lowest to high');

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => setSortVisible(true)}
      >
        <Text style={styles.buttonText}>{selectedSort}</Text>
      </TouchableOpacity>

      <Modal
        visible={sortVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setSortVisible(false)}
      >
        <View style={styles.modalBackground}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Sort by</Text>
            <TouchableOpacity onPress={() => setSelectedSort('Popular')} style={styles.option}>
              <Text style={styles.optionText}>Popular</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setSelectedSort('Newest')} style={styles.option}>
              <Text style={styles.optionText}>Newest</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setSelectedSort('Customer review')} style={styles.option}>
              <Text style={styles.optionText}>Customer review</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setSelectedSort('Price: lowest to high')} style={styles.option}>
              <Text style={styles.optionText}>Price: lowest to high</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setSelectedSort('Price: highest to low')} style={styles.option}>
              <Text style={styles.optionText}>Price: highest to low</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setSortVisible(false)} style={styles.cancelButton}>
              <Text style={styles.cancelButtonText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  button: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 4,
    backgroundColor: 'white',
  },
  buttonText: {
    fontSize: 14,
  },
  modalBackground: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    padding: 16,
  },
  modalTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  option: {
    padding: 10,
  },
  optionText: {
    fontSize: 16,
  },
  cancelButton: {
    padding: 10,
  },
  cancelButtonText: {
    fontSize: 16,
    color: 'red',
  },
});

export default SortBy;
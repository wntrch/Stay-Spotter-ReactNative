import React from 'react';
import { View, Text, StyleSheet, Image, Linking, TouchableOpacity } from 'react-native';

const ContactPage = () => {
  const handleEmailPress = () => {
    Linking.openURL('mailto:example@example.com');
  };

  const handleInstagramPress = () => {
    Linking.openURL('https://www.instagram.com/example/');
  };

  const handlePhonePress = () => {
    Linking.openURL('tel:1234567890');
  };

  const handleAddressPress = () => {
    Linking.openURL('https://maps.google.com/?q=1234+ABC+Street+City+Country');
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/images/lakefront.jpg')} // Replace with your image path
        style={styles.image}
      />
      <Text style={styles.heading}>Contact Information</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={handleEmailPress} style={styles.button}>
          <Text style={styles.buttonText}>Email</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleInstagramPress} style={styles.button}>
          <Text style={styles.buttonText}>Instagram</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handlePhonePress} style={styles.button}>
          <Text style={styles.buttonText}>Phone</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleAddressPress} style={styles.button}>
          <Text style={styles.buttonText}>Address</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f0f0f0',
    padding: 20,
  },
  image: {
    width: 400,
    height: 300,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  buttonContainer: {
    alignItems: 'center',
    marginTop: 10,
  },
  button: {
    backgroundColor: '#f0f0f0',
    borderColor: '#cac200',
    borderWidth: 2,
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 5,
    marginBottom: 10,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ContactPage;

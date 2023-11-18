import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import Header from './Header';
import NewTransaction from './NewTransaction';

export default function Transactions({ navigation }) {

  const NewTransaction = () => {
    navigation.navigate('NewTransaction')
  };

  return (
    <View style={styles.container}>
      <Header />
      <Text style={styles.title}>Transactions</Text>
      <View style={styles.ContainerContent}>
        <ScrollView>
          <Text style={styles.ContainerTransaction}>
            <Text style={styles.Transaction}>R$300,00 em Mercado</Text>
          </Text>
          <Text style={styles.ContainerTransaction}>
            <Text style={styles.Transaction}>R$300,00 em Mercado</Text>
          </Text>
          <Text style={styles.ContainerTransaction}>
            <Text style={styles.Transaction}>R$300,00 em Mercado</Text>
          </Text>
          <Text style={styles.ContainerTransaction}>
            <Text style={styles.Transaction}>R$300,00 em Mercado</Text>
          </Text>
          <Text style={styles.ContainerTransaction}>
            <Text style={styles.Transaction}>R$300,00 em Mercado</Text>
          </Text>
          <Text style={styles.ContainerTransaction}>
            <Text style={styles.Transaction}>R$300,00 em Mercado</Text>
          </Text>
        </ScrollView>
      </View>
      <View style={styles.ButtonContainer}>
        <TouchableOpacity style={styles.Button} onPress={NewTransaction}>
          <Text style={styles.Add}>Adicionar Transacao</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#252B3B',
  },

  title: {
    color: '#FECE00',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingTop: 50,
    marginBottom: 20,
  }, 

  ContainerContent: {
    flex: 1.2,
  },

  ContainerTransaction: {
    marginTop: 25,
    backgroundColor: '#FFFFFF',
    paddingTop: 15,
    paddingBottom: 15,
    borderColor: '#FFFFFF', 
    width: 300,
    alignSelf: 'center',
    borderRadius: 12,
    textAlign: 'center',
  },

  Transaction: {
    fontWeight: 'bold',
    fontSize: 20,
  }, 

  ButtonContainer: {
    flex: 0.6,
    marginBottom: 50, 
    alignItems: 'center', 
  },

  Button: {
    backgroundColor: "#FECE00",
    borderWidth: 2, 
    borderColor: '#FECE00', 
    borderRadius: 5, 
    padding: 10, 
    width: 200,
    marginTop: 80,
    height: 50,
    alignSelf: 'center',
  },

  Add: {
    alignSelf: 'center',
    fontWeight: "bold", 
    fontSize: 18,
   },


});
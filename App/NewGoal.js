import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, TextInput, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { SelectList } from 'react-native-dropdown-select-list';
import Header from './Header';
import DateTimePicker from '@react-native-community/datetimepicker';
import axios from 'axios';
import { API_IP } from './config' 

export default function NewGoal({ navigation, route }) { 

  const [monthlyIncome, setMonthlyIncome] =  useState('');
  const [valorMoradia, setValorMoradia] =  useState('');
  const [valorAlimentação, setValorAlimentação] =  useState('');
  const [valorTransporte, setValorTransporte] =  useState('');
  const [valorSaúde, setValorSaúde] =  useState('');
  const [valorEducação, setValorEducação] =  useState('');
  const [valorLazer, setValorLazer] =  useState('');
  const [valorOutros, setValorOutros] =  useState('');
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [description, setDescription] = useState('');
  const [show, setShow] = useState(false);
  const [targetValue, setTargetValue] = useState('');
  const [balance, setBalance] = useState();

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios'); 
    setStartDate(currentDate);
  };
  const onChange2 = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios'); 
    setEndDate(currentDate);
  };

  const showDatePicker = () => {
    setShow(true);
  };
  
  const addGoal = async () => {
    try {
      const spendingCategories = {
        Food: valorAlimentação,
        Transportation: valorTransporte,
        Health: valorSaúde,
        Education: valorEducação,
        Leisure: valorLazer,
        Home: valorMoradia,
        Others: valorOutros
      };

      const response = await axios.post(`http://${API_IP}:3000/goal`, {
        userId: route.params.userId,
        description: description,
        monthlyIncome: monthlyIncome,
        balance: balance,
        targetValue: targetValue,
        status: "active", //'active' | 'completed' | 'abandoned'
        startDate: startDate,
        endDate: endDate, 
        spendingCategories: spendingCategories,
      });
      console.log(response);
      alert("Meta criada!");
      navigation.navigate('Main', {userId: route.params.userId}, { goalCreated: true });
  
    } catch (error) {
      console.error(error);
      alert('Erro ao logar Axios: ' + error.message);
      // Lógica adicional para lidar com o erro
    }
  };

    return(
        <View style={styles.container}>
            <Header />
            <Text style={styles.title}>Nova Meta</Text>
            <ScrollView>
              <Text style={styles.title2}>Descrição da Meta: </Text>
            <TextInput style={styles.input2}
              onChangeText={(text) => setDescription(text)}
              value={description}
            />
            <Text style={styles.title2}>Data de Início: </Text>
            <DateTimePicker
              testID="dateTimePicker"
              value={startDate}
              mode="date"
              display="spinner"
              onChange={onChange}
              placeholderTextColor= '#FECE00'
              style={styles.dateTimePicker}
              textColor='#FECE00'
            />
            <Text style={styles.title2}>Data de Término: </Text>
            <DateTimePicker
              testID="dateTimePicker"
              value={endDate}
              mode="date"
              display="spinner"
              onChange={onChange2}
              placeholderTextColor= '#FECE00'
              style={styles.dateTimePicker}
              textColor='#FECE00'
            />
            <Text style={styles.title2}>Meta: </Text>
            <TextInput style={styles.input2}
            keyboardType='numeric'
              onChangeText={(text) => setTargetValue(text)}
              value={targetValue}
            />
            <Text style={styles.title2}>Saldo atual: </Text>
            <TextInput style={styles.input2}
            keyboardType='numeric'
              onChangeText={(text) => setBalance(text)}
              value={balance}
            />
            <TouchableOpacity style={styles.Button} onPress={addGoal}>
              <Text style={styles.Add}>ADICIONAR</Text>
            </TouchableOpacity>
            </ScrollView>
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
    }, 

    input: {
      width: '80%', 
      height: 48,
      borderColor: '#FECE00',
      borderWidth: 1,
      borderRadius: 5,
      paddingLeft: 8,
      marginBottom: 12,
      color: "#FECE00",
      alignSelf: 'center',
      marginTop: 60,
    },

    title2: {
      color: '#FECE00',
      marginLeft: 50,
      marginTop: 20,
      marginBottom: -12,
    },

    input2: {
      width: '80%', 
      height: 48,
      borderColor: '#FECE00',
      borderWidth: 1,
      borderRadius: 5,
      paddingLeft: 8,
      marginBottom: 12,
      color: "#FECE00",
      alignSelf: 'center',
      marginTop: 20,
    },

    Button: {
      backgroundColor: "#FECE00",
      borderWidth: 2, 
      borderColor: '#FECE00', 
      borderRadius: 5, 
      padding: 10, 
      alignSelf: 'center',
      width: 150,
      marginTop: 50,
      height: 50,
      marginBottom: 70,
    },

    Add: {
     alignSelf: 'center',
     fontWeight: "bold",
     fontSize: 18,
    },
    
    dateTimePicker: {
      borderColor: '#FECE00',
      borderWidth: 1,
      borderRadius: 5,
      marginTop: 25,
      height: 47,
      width: 275,
      alignSelf: 'center', 
    },
  });
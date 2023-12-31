import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { ActivityIndicator } from "react-native-web";
import { FIREBASE_AUTH } from './src/services/firebaseConfig';
import axios from 'axios';
import { API_IP } from './config';

function NewUserScreen({ navigation }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [password2, setPassword2] = useState('');


  const signUp = async () => {
    if (password != password2) {
      alert("Senhas diferentes");
      return ;
    }

    try{
      const newUser = {
        name: username,
        email: email,
        password: password,
        operator: false,
      };
      axios.post(`http://${API_IP}:3000/user`, newUser).
      then(function (response){
        if (response.status == 200){
          alert("Usuário cadastrado")
          navigation.navigate('Login');
        }
        else if (response.status == 409){
          alert('Usuário já existe');
        }
      }).catch(function (err){
        alert('Erro ao criar usuário ou já existente');
      });
    } catch (error) {
      console.log(error);
      alert('Erro ao criar usuário: ' + error.message);
    }
  }

  const LogIn = () => {
    navigation.navigate('Login')
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('./assets/Logo.png')}
        style={styles.Image}
      />
      
      <TextInput
        style={styles.input}
        placeholder="Username"
        placeholderTextColor={"#FECE00"}
        onChangeText={(text) => setUsername(text)}
        value={username}
      />
      <TextInput
        style={styles.input}
        placeholder="E-mail"
        placeholderTextColor={"#FECE00"}
        onChangeText={(text) => setEmail(text)}
        value={email}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor={"#FECE00"}
        secureTextEntry
        onChangeText={(text) => setPassword(text)}
        value={password}
      />
      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        placeholderTextColor={"#FECE00"}
        secureTextEntry
        onChangeText={(text) => setPassword2(text)}
        value={password2}
      />
      <TouchableOpacity style={styles.button} onPress={signUp}>
        <Text style={styles.buttonText}>SIGN UP</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.NewUser} onPress={LogIn}>
        <Text style={styles.textB}>LOG IN</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#252B3B'
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: '#FECE00',
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 8,
    marginBottom: 12,
    color: "#FECE00",
  },
  Image: {
    width:200,
    height:200,
    marginBottom:30,
  },
  button: {
    backgroundColor: "#FECE00",
    borderWidth: 2, // Largura da borda
    borderColor: '#FECE00', // Cor da borda
    borderRadius: 5, // Raio do canto da borda (opcional)
    padding: 10, // Espaçamento interno
  },
  textB: {
    paddingTop: 10,
    color: "#FECE00",
    fontWeight: "bold",
  },
});


export default NewUserScreen;
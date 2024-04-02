import React, { useState, useMemo } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, Modal } from 'react-native';

import Resultado from './src/Resultado';

export default function App() {
  const [alcool, setAlcool] = useState('');
  const [gasolina, setGasolina] = useState('');
  const calculo = alcool / gasolina <= 0.7 ? "Alcool" : "Gasolina";

  const [modalVisible, setModalVisible] = useState(false);



  function abrirModal(){
    if(gasolina === "" || alcool === "" || gasolina === "0" || alcool === "0"){
      alert('preencha todos os campos.');
      return;  
    }

    
    setAlcool(`${alcool.toLocaleString("pt-BR", { style: "currency", currency: "BRL"})}`)
    setGasolina(`${gasolina.toLocaleString("pt-BR", { style: "currency", currency: "BRL"})}`)
    
    setModalVisible(true)
  }

  function fecharModal(){
    setModalVisible(false)
  }
  


  return (
    <View style={styles.container}>

      <Image
      source={require('./src/img/logo.png')}
      style={styles.img}
      />
      <Text style={styles.textoHeader}>Qual melhor opção?</Text>
        
      <View style={styles.areaInput}>
        <Text style={styles.textoInput}>Álcool (preço por litro): {alcool}</Text>

        <TextInput
         style={styles.input}
         placeholder='0,00'
         onChangeText={(valor) => setAlcool(valor)}
         keyboardType='numeric'
        />
        
        <Text style={styles.textoInput}>Gasolina (preço por litro): {gasolina}</Text>

        <TextInput
         style={styles.input}
         placeholder='0,00'
         onChangeText={ (valor) => setGasolina(valor)}
         keyboardType='numeric'
        />

        <TouchableOpacity 
        style={styles.calcularBtn}
        onPress={ abrirModal }
        >
          <Text style={styles.textoBtn}>Calcular</Text>
        </TouchableOpacity>

        <Modal animationType='slide' visible={modalVisible}>
          <Resultado fechar={ fecharModal } 
          precoGasolina={gasolina} 
          precoAlcool={alcool}
          resCalc={calculo} />
        </Modal>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111111',
    alignItems: 'center',
    justifyContent: 'center',
  },
  img:{
    justifyContent:'center',
    alignItems:'center',
    marginTop: 30,
  },
  textoHeader:{
    fontSize: 24,
    fontWeight: 'bold',
    color: "#FFF",
    marginTop: 15,
    marginBottom: 30,
  },
  areaInput:{
    flex: 1,
    width: '90%',
  },
  textoInput:{
    color: "#FFF",
    fontSize: 18,
    fontWeight: '500',
    marginBottom: 8,
    
  },
  input:{
    backgroundColor: "#FFF",
    padding: 5,
    borderRadius: 3,
    marginBottom: 15,
  },
  calcularBtn:{
    backgroundColor: "#abf8",
    padding: 10, 
  },
  textoBtn:{
    fontWeight: 'bold',
    color: "#FFF",
    textAlign: 'center',
    fontSize: 20,
  }

});

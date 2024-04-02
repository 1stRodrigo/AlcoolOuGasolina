import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";

export default function Resultado(props){



    return(    
        <View style={styles.container}>

            <Image
            source={require('../img/gas.png')}
            />

            <View style={styles.areaResultado}>
                <Text style={styles.resultado}>Compensa usar</Text>
                <Text style={{fontWeight:"bold", color:"#F80", fontSize: 25}}>{props.resCalc}</Text>
        
                <Text style={styles.text}>Com os preços:</Text>
                <Text style={styles.precos}>Alcool: {props.precoAlcool}</Text>
                <Text style={styles.precos}>Gasolina: {props.precoGasolina}</Text>
            </View>

                <TouchableOpacity style={styles.btnModal} onPress={ props.fechar } >
                    <Text style={styles.btnTexto}>Tentar novamente</Text>
                </TouchableOpacity>
        </View>

    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems:"center",
        justifyContent: "center",
        backgroundColor: '#111111',


    },
    areaResultado:{
        marginTop: 25,
        padding: 7,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#FFF",
        borderRadius: 10,
    },
    resultado:{
        color: "#F80",
        fontSize: 25,
        fontWeight: '700',

    },
    precos:{
        color: "#111111",
        fontSize: 15,
        fontWeight: "bold"
    },
    text:{
        color: "#111111",
        fontSize: 18,
        marginBottom: 2,
    },
    btnModal:{
        borderColor: '#ff0000',
        borderWidth: 2,
        alignItems:'center',
        padding: 12,
        marginBottom: 20,
        marginTop: 40,
        borderRadius: 24,
    },
    btnTexto:{
        fontSize:18,
        fontWeight:'500',
        color: "#ff0000",
    },

})
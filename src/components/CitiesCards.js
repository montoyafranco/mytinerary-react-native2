import React, { useEffect } from "react";
import { connect } from 'react-redux';
import { Image, StyleSheet, Text, View,TouchableOpacity, Button } from 'react-native';
import citiesActions from '../../redux/actions/citiesAction'


function CitiesCards(props) {
 
    useEffect(() => {
        props.fetchearCities()
        // eslint-disable-next-line
    }, [])

    return (

        <>
            {console.log(props)}
            {props.cities?.map((props) =>   
                <TouchableOpacity key={props.id} style={styles.container} 
                onPress={()=>props.navigation.navigate('props', {
                   
                   id:props._id
                    })}>  
        
                    <Image source={{ uri: props.image }} style={styles.image} />
                    <Text style={styles.text}>{props.name}</Text>
                </TouchableOpacity>
            )}

        </>
    )
}
const mapDispatchToProps = {
    fetchearCities:citiesActions.fetchearCities, 

}

const mapStateToProps = (state) => {
    return {
        cities:state.citiesReducer.cities,

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CitiesCards);

const styles = StyleSheet.create({
    container: {
        position: "relative",
        width: "100%",
        height: 300,
        marginBottom: 10,

    },
    image: {
        width: "100%",
        height: "100%",

    },
    text: {
        width: "100%",
        color: "white",
        fontSize: 20,
        lineHeight: 84,
        fontWeight: "bold",
        textAlign: "center",
        backgroundColor: "#000000c0",
        zIndex: 10,
        position: "absolute",
        top: "40%"
    }
});
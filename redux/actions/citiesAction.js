import axios from 'axios';

const citiesActions = {

    fetchearCities: () =>{
       return async(dispatch, getState) => {
            const res = await axios.get('https://mytinerary-montoya.herokuapp.com/api/allcities')
            dispatch({type:'fetch', payload:res.data.response.ciudades})
       }
    },
    borrarCities: (id)=>{
        return async(dispatch, getState) => {
            try {

                const respuesta = await axios.delete('https://mytinerary-montoya.herokuapp.com/api/allcities/'+id)

                dispatch({type:'delete', payload:respuesta.data.respuesta})

            }catch(err){
                console.log(err)
            }
        }
    },
    filtrarCities: (cities, value)=>{

        return (dispatch,getState)=>{
            dispatch({type:'filtro', payload:{cities, value}})
        }
    },
    cargarCities: (name,cities)=>{
        return async(dispatch,getState)=>{
            const respuesta = await axios.post('https://mytinerary-montoya.herokuapp.com/api/allcities',{name,cities})
            dispatch({type:'cargarCity', payload:respuesta.data.respuesta})

        }
    },
    fetchearUnaCiudad: (id) =>{
        return async (dispatch, getState) => {
            const res = await axios.get("https://mytinerary-montoya.herokuapp.com/api/allcities/"+id)
            return (res.data.response)
        }
    }





}

export default citiesActions;
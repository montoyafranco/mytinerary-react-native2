import axios from 'axios';

const itinerariesAction = {

    fetchearItinerary: () =>{
       return async(dispatch, getState) => {
            const res = await axios.get('https://mytinerary-montoya.herokuapp.com/api/allitineraries')
            dispatch({type:'fetchearItinerary', payload:res.data.response.itineraries})
       }
    },
    borrarItineraries: (id)=>{
        return async(dispatch, getState) => {
            try {

                const respuesta = await axios.delete('https://mytinerary-montoya.herokuapp.com/api/allitineraries/'+id)

                dispatch({type:'borrarItineraries', payload:respuesta.data.respuesta})

            }catch(err){
                console.log(err)
            }
        }
    },
    filtrarItinerary: (cities, value)=>{

        return (dispatch,getState)=>{
            dispatch({type:'filtrarItinerary', payload:{cities, value}})
        }
    },
    cargarItinerary: (name,cities)=>{
        return async(dispatch,getState)=>{
            const respuesta = await axios.post('https://mytinerary-montoya.herokuapp.com/api/allitineraries',{name,cities})
            dispatch({type:'cargarItinerary', payload:respuesta.data.respuesta})

        }
    },
    fetchearUnItinerary: (id) =>{
        return async (dispatch, getState) => {
            const res = await axios.get("https://mytinerary-montoya.herokuapp.com/api/allitineraries/"+id)
            return (res.data.response)
        }
    },
    filterItinerarieForCity: (id) =>{

        return async(dispatch, getState) =>{
            const res = await axios.get(`https://mytinerary-montoya.herokuapp.com/api/allitineraries/ciudad/${id}`)
            dispatch({type: "filterItinerarieForCities", payload:res.data.respuesta})
            return res.data.respuesta
        }
    },
    likeDislike: (id) => {
        console.log(id)
        const token = localStorage.getItem('token')
        return async (dispatch,getState) => {
            try {
                let response = await axios.put(`https://mytinerary-montoya.herokuapp.com/api/likesDislike/${id}`, {},
                {headers: {
                    Authorization: "Bearer "+token
                    }
                })
                console.log(response)
                return response

            }catch (error) {
                console.log(error)
            }
        }
    }





}

export default itinerariesAction;
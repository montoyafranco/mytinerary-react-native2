import axios from 'axios';

const activitiesAction = {

    fetchearActivity: () =>{

       return async(dispatch, getState) => {
            const res = await axios.get('https://mytinerary-montoya.herokuapp.com/api/allactivities/')
            dispatch({type:'fetchActivities', payload:res.data.response.activities})
       }
    },

    fetchearUnaActivity: (id) =>{
      console.log(id)
        return async (dispatch, getState) => {
            const res = await axios.get("https://mytinerary-montoya.herokuapp.com/api/allactivities/"+id)
            console.log(res)
             dispatch({type:'fetchearUnaActivity', payload:res.data.response.activities})

        }
        
    },

    filterActivityforItinerary: (id) => {

      return async (dispatch, getState) => {
        const res = await axios.get('https://mytinerary-montoya.herokuapp.com/api/allactivities/itinerary/${id}')
        dispatch({ type: "filterActivitiesForItinerary", payload: res.data.respuesta })
      }
    },








}

export default activitiesAction;
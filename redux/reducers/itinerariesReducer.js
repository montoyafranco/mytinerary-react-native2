const initialState = {
    itineraries:[],
    auxiliar:[],
   filterCities: [], 
}

const itinerariesReducer = (state = initialState, action)=>{

    switch(action.type){
        case 'fetchearItinerary':

            return {
                ...state,
                itineraries: action.payload,
                auxiliar: action.payload,
                filterCities: action.payload
            }

        case 'borrarItineraries':
            return {
                ...state,
                itineraries: action.payload
            }

        case 'cargarItinerary':
            let itineraries = [...state.itineraries]
            itineraries.push(action.payload)
            return{
                ...state,
                itineraries, 
                auxiliar: [...itineraries]
            }

        case 'filtrarItinerary':
            const filtrado = action.payload.itineraries.filter((product => product.name.toLowerCase().startsWith(action.payload.value.toLowerCase().trim())))

            return {
                ...state,
                filterCities: filtrado

            }
        case "filterItinerarieForCities":
            let retorno = action.payload
            console.log("console log del action payload de reducer",action.payload)
            
            return{
                ...state,
                itineraries:retorno
            }
         

        default:
            return state
    }


}
export default itinerariesReducer
const initialState={
    persons:[]
}

export function listReducer(state=initialState,action){
    switch(action.type){
        case 'ADD_PERSON':
            return Object.assign({},state,{
                persons:[
                    ...state.persons,
                    action.payload
                ]
            })
        default:
            return state;
    }
}
const initialState={
    sorters:{
        nameSort:false,
        salarySort:false
    },
    filters:{
        firstFilter:false,
        secondFilter:false,
        thirdFilter:false
    }
}

export function sortersListReducer(state=initialState,action){
    switch(action.type){
        case 'CHANGE_SORTER':
            return Object.assign({},state,{
                sorters:{
                    ...state.sorters,
                    ...action.payload
                }
            })
        case 'CHANGE_FILTER':
            return Object.assign({},state,{
                filters:{
                    ...state.filters,
                    ...action.payload
                }
            })
        default:
            return state;
    }
}
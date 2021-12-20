export function addPerson(payload){
    console.log(payload)
    return {
        type:'ADD_PERSON',
        payload
    }
}
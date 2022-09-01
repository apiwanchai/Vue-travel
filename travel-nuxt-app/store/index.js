export const state = () =>({
    myState:'this is state',
    conter : 0,
    name: 'nex',
    drawer:false

})
export const mutations={
    set_drawer(state,newVal){
        state.drawer = newVal
    }
}
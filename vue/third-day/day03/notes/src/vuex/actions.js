const actions = {
    addNote({commit}){
        commit('ADD_NOTE');
    },
    editText({commit},text){
        commit('EDIT_TEXT',text);
    },
    setActiveNote({commit},note){
        commit('SET_ACTIVE_NOTE',note)
    },
    toggleFavorite({commit}){
        commit("TOGGLE_FAVORITE")
    },
    deleteNote({commit}){
        commit('DELETE_NOTE')
    }
}

export default actions;

import * as types from './mutation-types';


const mutations = {
    [types.ADD_NOTE](state){
        const newNote = {
            text:'new text',
            favorite:false
        }

        state.notes.push(newNote);
        state.activeNote = newNote;

    },
    [types.EDIT_TEXT](state,text){
        state.activeNote.text = text;
    },
    [types.SET_ACTIVE_NOTE](state,note){
        state.activeNote = note;
    },
    [types.TOGGLE_FAVORITE](state){
        state.activeNote.favorite = !state.activeNote.favorite
    },
    [types.DELETE_NOTE](state){
        for(var i=0,len=state.notes.length;i<len;i++){
            if(state.notes[i]===state.activeNote){
                state.notes.splice(i,1);
            }
        }
        if(state.notes.length>0){
            state.activeNote = state.notes[0];
        }else{
            state.activeNote = [];
        }
    }

}

export default mutations
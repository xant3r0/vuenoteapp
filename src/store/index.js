import {createStore} from 'vuex';
import createPersistedState from "vuex-persistedstate";

export default createStore({
    state: {
        notes:[
                
        ],
        newNote:{
            title:'',
            body:'',
        },
        editNote:{
            title:'',
            body:''
        },
        pivot:{
            title:'',
            body:''
        }
    },
    getters: {

    },
    mutations: {
        saveNote(state) {
            let newCopy = {
                title:state.newNote.title,
                body:state.newNote.body,
                id:Date.now()
            };
            state.newNote.title = '';
            state.newNote.body = '';
            state.notes.push(newCopy);
        },
        removeNote(state,id) {
            state.notes = state.notes.filter(p => p.id !== id );
        },
        copyEditedNote(state,note) {
            state.editNote.title = note.title;
            state.editNote.body = note.body;
            state.pivot.title = note.title;
            state.pivot.body = note.body;
        },
        saveEditedNote(state) {
            for(let i = 0;i <= state.notes.length - 1;i++) {
                if(state.notes[i].title === state.pivot.title && state.notes[i].body === state.pivot.body) {
                    state.notes[i].title = state.editNote.title;
                    state.notes[i].body = state.editNote.body;
                }
            }
        }
    },
    plugins: [createPersistedState()]
});


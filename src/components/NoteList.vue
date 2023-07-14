<template>
    <h1 id="heading">My Notes</h1>
    <div v-if="$store.state.notes.length > 0" id="note-list">
        <div v-for="note in $store.state.notes" class="list-item" :key="note.id">
            <span>
                <h2 id="item-title" @click="$store.commit('copyEditedNote',note);$router.push('/editor')">{{ note.title }}</h2>
                <p id="item-body" @click="$store.commit('copyEditedNote',note);$router.push('/editor')">{{ note.body }}</p>
            </span>
            <button id="btn-delete" @click="$store.commit('removeNote',note.id)">Delete</button>
        </div>
    </div>
    <h2 id="warning" v-else>At the moment, you don't have any notes</h2>
    <button id="createNote" @click="$router.push('/create')">+</button>
</template>

<script>
export default {
}
</script>

<style>
* {
    font-family: 'Roboto', sans-serif;
    margin:0;
    padding:0;
    box-sizing:border-box;
}
#note-list {
    max-width: 100vw;
    max-height: 60vh;
    overflow-y:auto;
}
.list-item {
    min-height:10vh;
    max-width: 100vw;
    margin-left:5vw;
    overflow-x: hidden;
    /*border:1px solid red;*/
    display: flex;
    align-items: center;
}   
#createNote {
  border-radius: 50%;
  background-color:#FFFFFF;
  border:1px solid #000000;
  min-height: 5vw;
  min-width: 5vw;
  font-size:14pt;
  position:fixed;
  right:0;
  bottom: 0;
  margin-right:10vw;
  margin-bottom: 10vh;
}
#heading {
    margin-top:20vh;
    margin-left:10vw;
    margin-bottom: 5vh;
}
#btn-delete {
    position: fixed;
    right:0;
    margin-right:10vw;
    height:4vh;
    background:transparent;
    border:1px solid #000000;
    border-radius:5px;
    width:6vw;
} 
#warning {
    margin-top:20vh;
    text-align: center;
}
#item-title,#item-body {
    cursor:pointer;
}
</style>
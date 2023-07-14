<template>
  <RouterView></RouterView>
</template>

<script>
import NoteList from './components/NoteList.vue';
import NoteCreate from './components/NoteCreate.vue';
import NoteEditor from './components/NoteEditor.vue';
export default {
  components : {
    NoteList,NoteCreate,NoteEditor
  }
}
</script>

<style>
* {
    font-family: 'Roboto', sans-serif;
    margin:0;
    padding:0;
    box-sizing:border-box;
}
</style>

<template>
    <div id="editor">
        <button id="back" @click="$router.back()">Back</button>
        <input type="text" placeholder="Title" id="title-editor" v-model="$store.state.editNote.title" v-validate="required">
        <textarea id="body-editor" v-model="$store.state.editNote.body" v-validate="required"></textarea>
        <button id="btn-save" @click="$router.push('/');$store.commit('saveEditedNote');">Save & quit</button>
    </div>
</template>

<script>
export default {
}
</script>

<style>
#editor {
    display:flex;
    flex-direction: column;
    max-width: 100vw;
    align-items: center;
}
#title-editor {
    width:80vw;
    height:5vh;
    border-radius: 5px;
    margin-top: 5vh;
    outline:none;
    border:1px solid #000000;
    text-align: center;
    font-size:19pt;
}
#body-editor {
    width:80vw;
    resize: none;
    margin-top: 5vh;
    height:60vh;
    border-radius: 5px;
    border:1px solid #000000;
    font-size:17pt;
    padding:5px;
}
#btn-save {
    min-height:5vh;
    min-width: 10vw;
    margin-top:5vh;
    border-radius: 5px;
    background: transparent;
    border:1px solid #000000;
    align-self: flex-end;
    margin-right:10vw;
}
#back {
    min-height:3vh;
    min-width: 5vw;
    margin-top:5vh;
    border-radius: 5px;
    background: transparent;
    border:1px solid #000000;
    align-self:flex-start;
    margin-left:10vw;
}
</style>

<template>

<div class="post">
        <p>{{post.Name }}</p>
        <img :src="path+post.Description" width="300" height="400">
        <p></p>
        <button v-on:click="$emit('remove' ,post)">Удалить</button>
    </div>

</template>

<script>
 export default{
     props:{
         
         post:{
             type:Object,
             required:true
         }
     }
     ,
     data(){
        return{
        path:'http://localhost:8000/uploads/'
        }
     }
 }
</script>
<style></style>


<template>

<div class="post">
        <p>{{post.Name }}</p>
        <p>{{post.Description }}</p>
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
 }
</script>
<style></style>


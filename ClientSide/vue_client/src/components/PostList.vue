<template>
<div class="container" v-if="posts.length > 0">

    <post-item v-for="post in posts" :key="post.id"
    :post="post" @remove="$emit('remove' ,post)"
    />
    
    <br>
      </div>
    <h2 v-else >
      Список пуст
    </h2>
</template>

<script>
import PostItem from './PostItem.vue'
export default {
  components: { PostItem },
  props:{
      posts:{
          type:Array,
          required:true
      }
  }
  
 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
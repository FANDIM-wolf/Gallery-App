<template>
<div>
  
  <PostForm @create="createPost" />
  <PostList v-bind:posts="posts" @remove="removePost" />
  </div>
</template>

<script>
import PostForm from './components/PostForm.vue'
import PostList from './components/PostList.vue'
export default {
  name: 'App',
  components: {
   
    PostForm,
    PostList
  },
   data(){
    return{
       posts: [
            { id:1, Name: 'Frank', Description: 'Murphy' },
           
        ],
     
    }
  },
  methods:{
    createPost(post){
      console.log(post);
      this.posts.push(post);
    },
    removePost(post){
      this.posts= this.posts.filter( p => p.id !== post.id)
    }
  }
 
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

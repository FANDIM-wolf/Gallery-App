<template>
<div>
  <button @click="showDialog">
    Создать пост
  </button>
  <MyDialog v-model:show="dialogVisible" >
    <PostForm @create="createPost" />
  </MyDialog>
 
  <PostList v-bind:posts="posts" @remove="removePost" />
  </div>
</template>

<script>
import PostForm from './components/PostForm.vue'
import PostList from './components/PostList.vue'
import MyDialog from './components/UI/MyDialog.vue'
export default {
  name: 'App',
  components: {
   
    PostForm,
    PostList,
    MyDialog
  },
   data(){
    return{
       posts: [
            { id:1, Name: 'Frank', Description: 'Murphy' },
           
        ],
        dialogVisible:false
     
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
    ,
    showDialog(){
        this.dialogVisible = true;
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

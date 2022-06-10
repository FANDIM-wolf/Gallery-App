<template>

  <form @submit.prevent>
    <h4>Добавить пост</h4>
    <input type="text" v-model="post.Name"/><br>
    <input type="text" v-model="post.Description" /><br>
    <br>
    <button v-on:click="createPost">Добавить пост</button>
  </form>
   
</template>

<script>
export default {
  data(){
    return{
      post:{
        id : '',
        Name:'',
        Description:''
    }
    }
  },
   methods:{
    createPost(){
      this.post.id =  Math.random() * (12003 - 1) + 1
      this.$emit('create' , this.post)  
      this.post = {
          Name: ' ',
          Description: ' '
      }
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
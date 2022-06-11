<template>


</template>

<script>
export default {
  
  
  data(){
    return{
       posts: [
            {  Name: 'Frank', Description: 'Murphy'  },
            { Name: 'Vic', Description: 'Reynolds' },
            { Name: 'Gina', Description: 'Jabowski'},
            { Name: 'Jessi', Description: 'Glaser' },
            { Name: 'Jay', Description: 'Bilzerian' }
        ],
        Name:'',
        Description:''
    }
  },
  methods:{
    addPost(){
      const newPost ={
        Name : this.Name ,
        Description:this.Description
      }
      this.posts.push(newPost);
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

<template>
  <div class="dialog" v-if="show === true" v-on:click.stop="hideDialog">
  <div @click.stop class="content_dialog">
      <slot></slot>
  </div>
  </div>
</template>

<script>
export default {
    props:{
        show:{
            type:Boolean,
            default:false
        }
    },
    methods:{
        hideDialog(){
            console.log("false");
            this.$emit('update:show',false)
            console.log("false");
        }
    }
}
</script>

<style>
.dialog{
    top:0;
    bottom: 0;
    right: 0;
    left: 0;
    background: rgba(0,0,0,0.5);
    position: fixed;
    display: flex;
}
.content_dialog{
    margin:auto;
    background: white;
    border-radius: 12px;
    min-height:50px ;
    min-width: 300px;
    padding: 20px;
}
</style>
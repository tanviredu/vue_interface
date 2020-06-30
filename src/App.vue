<template>
  <div id="main-app">
    <div class="container">
      <h1 class="display-4">Appoinment List </h1>
      <font-awesome-icon icon="plus" class="mr-2"></font-awesome-icon>
      Add Appoinment

    </div>
  </div>
</template>

<script>

// import all th component you create

// this will import athe icon that you import in the
// main.js as a component so you can use in the vue as a component

import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";

export default {
  name: 'MainApp',
  data:function(){
    return {
    title: "Welcome to the Appoinment App"
          }
  },
  components : {
    // register the components here
    FontAwesomeIcon
  }

  
}
</script>

<style>

</style>

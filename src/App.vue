<template>
  <div id="main-app">
    <div class="container">
      <h1 class="display-4">Appoinment List </h1>
      <font-awesome-icon icon="plus" class="mr-2"></font-awesome-icon>
      Add Appoinment
      <hr>
      <div v-for="(item,index) in appoinments" v-bind:key="index">      
          <h4> {{item.petName}}</h4>
          <p> {{item.aptNotes}}</p>

        
      </div>
    </div>
  </div>
</template>

<script>

// import all th component you create

// this will import athe icon that you import in the
// main.js as a component so you can use in the vue as a component

import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";

// import the data from api or from some folder
// with the get request
import axios from "axios"

export default {
  name: 'MainApp',
  data:function(){
    return {
    title: "Welcome to the Appoinment App",
    appoinments: [],
          }
  },
  components : {
    // register the components here
    FontAwesomeIcon
  },
  // anything you put inside mounted will be loaded
  // at the starting of the program
  mounted(){
      axios.get("https://raw.githubusercontent.com/tanviredu/vue-interface/master/public/data/appointments.json")
      .then((res)=>{
          this.appoinments = res.data

      })
  }

  
}
</script>

<style>

</style>

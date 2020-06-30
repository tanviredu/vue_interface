<template>
  <div id="main-app">
    <div class="container container-fluid">
      <div class="row">
      <!--  :<the components props name>="<local valriable name>"  -->
        <!-- aftet that data will be flow through onec components
        to other -->

        <!-- now we take catch the event here and tell them to execute a function 
        here whenit catch the event
         -->
      <appoinment-list :appoinments="appoinments" @remove="removeItem" ></appoinment-list>
      </div>
      <hr>

    </div>
  </div>
</template>

<script>

// import all th component you create

// this will import athe icon that you import in the
// main.js as a component so you can use in the vue as a component



// import the data from api or from some folder
// with the get request
import axios from "axios"
// import the appoinments list
// dont use the curly bracs we will import everything
import AppoinmentList  from "./components/AppoinmentList";

// import lodash to use array remove or add element
import _ from "lodash";


export default {
  name: 'MainApp',
  data:function(){
    return {
    title: "Welcome to the Appoinment App",
    appoinments: [],
    aptIndex: 0,
          }
  },
  components : {
    // register the components here
    AppoinmentList
  },
  // anything you put inside mounted will be loaded
  // at the starting of the program
  mounted(){
      axios.get("https://raw.githubusercontent.com/tanviredu/vue-interface/master/public/data/appointments.json")
      .then((res)=>{
          // adding and index in every data
          // with the map function
          // map ebewy data with index
          this.appoinments = res.data.map((item)=>{
            item.aptId = this.aptIndex;
            this.aptIndex++;
            return item;
            // adding a index then return callback 
            

          })

      })
  },
  methods : {
    removeItem : function(apt){
        // now we remove this element
        // from the array with the 
        // without function
        this.appoinments = _.without(this.appoinments,apt);

    }
  }

  
}
</script>

<style>

</style>

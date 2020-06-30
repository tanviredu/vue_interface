<template>
<!-- <div class="list-group-item " >       -->
<table class="table">
  <thead class="thead-dark">
    <tr>
      <th scope="col">Id</th>
      <th scope="col">Action</th>
      <th scope="col">Pet Name</th>
      <th scope="col">Pet Owner</th>
      <th scope="col">Date</th>
      <th scope="col">Notes</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="(item,index) in appoinments" v-bind:key="index">
      <th scope="row">{{index+1}}</th>
      <td>
          <!-- data is coming from the parent  componet
            so insted of invoking a method in here
            we emit an event give it a name
            and the data
            so we can catch the event from the parent component
            or anywhere
           -->
          <button @click="$emit('remove',item)" class="mr-2 btn btn-sm btn-danger">
                    <font-awesome-icon icon="trash" />

          </button>
      </td>
      <td>{{item.petName}}</td>
      <td>{{item.petOwner}}</td>
      <td>{{ formattedDate(item.aptDate)}}</td>
      <td>{{item.aptNotes}}</td>
    </tr>    
  </tbody>
</table>

</template>



<script>
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
//moment is from moment.js for formatting the date
import moment from "moment"

export default {
    name  :"AppoinmentList",
    props : ["appoinments"] ,
    components:{
        FontAwesomeIcon,
    },methods:{
    formattedDate : function(date){
      return moment(new Date(date)).format("MM-DD-YY, h:mm a");
    }
  },
  
};

</script>
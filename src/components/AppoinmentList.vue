<template>
<!-- <div class="list-group-item " >       -->
<table class="table">
  <thead class="thead-dark">
    <tr>

      <th scope="col">Action</th>
      
      <th scope="col" >Pet Name</th>
      <th scope="col">Pet Owner</th>
      <th scope="col">Date</th>
      <th scope="col">Notes</th>
    </tr>
  </thead>
  <tbody>
    <!-- why we need another index if we can just
    add in the loop ? because the index inside the loop
    got refreshed every time you delete something
    its not permamnent . to locate anything with a id
    we need persistant id that is genrarated in when the 
    data is loaded
      -->

    <tr v-for="item in appoinments" v-bind:key="item.aptIndex">
      
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
        <!-- blur event happend when people try to edit a field 
         and the 
         $emit('eventName',payload1,payload2,payload3,.......)
         we send the event name 'edit'
         payload 1 = id
         payload 2 = the fieldName that we want to change
         payload 3 = th updated value
        
         you can emit as many as you can depending 
        on your need
         -->
     


      <td contenteditable="contenteditable" @blur="$emit('edit',item.aptId,'petName',$event.target.innerText)">{{item.petName}}</td>
      <td contenteditable="contenteditable" @blur="$emit('edit',item.aptId,'petOwner',$event.target.innerText)">{{item.petOwner}}</td>
      <td>{{ formattedDate(item.aptDate)}}</td>
      <td contenteditable="contenteditable" @blur="$emit('edit',item.aptId,'aptNotes',$event.target.innerText)">{{item.aptNotes}}</td>
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
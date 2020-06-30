<template>
  <div class="col-12">
    <div class="card textcenter mt-3">
      <div class="card-header bg-primary text-white" @click="hidepanel=!hidepanel">
        <!-- everytime this click it will be toggoled  -->
        <font-awesome-icon icon="plus" class="mr-3" />Add Appointment
      </div>


        <!-- this will toggle the total card here -->
      <div class="card-body" :class="{'d-none': hidepanel}">
        <form id="aptForm" @submit.prevent="requestAdd">
          <div class="form-group form-row">
            <label class="col-md-2 col-form-label text-md-right" for="petName">Pet Name</label>
            <div class="col-md-10">
              <input
                type="text"
                v-model="formData.petName"
                class="form-control"
                name="petName"
                id="petName"
                placeholder="Pet's Name"
              >
            </div>
          </div>

          <div class="form-group form-row">
            <label class="col-md-2 col-form-label text-md-right" for="ownerName">Pet Owner</label>
            <div class="col-md-10">
              <input type="text" v-model="formData.petOwner" class="form-control" id="ownerName" placeholder="Owner's Name">
            </div>
          </div>

          <div class="form-group form-row">
            <label class="col-md-2 col-form-label text-md-right" for="aptDate">Date</label>
            <div class="col-md-4">
              <input type="date" class="form-control" v-model="formData.aptDate"  id="aptDate">
            </div>
            <label class="col-md-2 col-form-label text-md-right" for="aptTime">Time</label>
            <div class="col-md-4">
              <input type="time" v-model="formData.aptTime" class="form-control" name="aptTime" id="aptTime">
            </div>
          </div>

          <div class="form-group form-row">
            <label class="col-md-2 text-md-right" for="aptNotes">Apt. Notes</label>
            <div class="col-md-10">
              <textarea
                class="form-control"
                rows="4"
                cols="50"
                name="aptNotes"
                id="aptNotes"
                v-model="formData.aptNotes"
                placeholder="Appointment Notes"
              ></textarea>
            </div>
          </div>

          <div class="form-group form-row mb-0">
            <div class="offset-md-2 col-md-10">
              <button type="submit" class="btn btn-primary d-block ml-auto">Add Appointment</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>

import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome"
export default {
    name : "AddAppoinment",
    data(){
        return{
        formData : [], //this array will be filled by all the form value
        hidepanel : true,
        }
    },
    components:{
        FontAwesomeIcon
    },
    methods: {
        requestAdd : function(){
            this.formData = {
                petName : this.formData.petName,
                petOwner : this.formData.petOwner,
                aptDate : this.formData.aptDate + ' ' + this.formData.aptTime,
                aptNotes : this.formData.aptNotes,
            };

            // now emit the add event to the main component
            // so that it can catch the data and push to the json object
            this.$emit("add",this.formData);
            // now after that reset the form hide the panel
            this.formData = [];
            this.hidepanel = true;
        }
    }
    
};
</script>

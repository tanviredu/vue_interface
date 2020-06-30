<template>
     <div class="col-12">
    <div class="input-group my-3">
      <input
        id="SearchApts"
        placeholder="Search"
        type="text"
        class="form-control"
        v-model="searchTerms"
        aria-label="Search Appointments"
      >

     
      </div>
    </div>
</template>

<script>
//import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";

export default {
    name:"SearchAppoinment",
    data(){
        return {
            searchTerms : ""
        }
    },
    // wath will monitor the change of the variable
    // and update it realtime

    watch:{
        searchTerms : function(){
            // this will emit the data and to the main componemt
            this.$emit('searchRecords',this.searchTerms)
        }

    },

    components:{
        //FontAwesomeIcon
    }
}
</script>
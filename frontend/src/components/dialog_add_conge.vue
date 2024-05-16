<template>
    <OverlayView title="Ajouter Congé">
      <div class="form-group">
          <label>Start</label>
          <input type="date" v-model="date_debut" autofocus required />
      </div>
      <div class="form-group">
          <label>End</label>
          <input type="date" v-model="date_fin" autofocus required />
      </div>
      <p style="color:red;">{{msg}}</p>
      <div>
        <input
          class="btn btn-primary"
          @click="enregistrer"
          type="submit"
          value="Add"
        />
      </div>
    </OverlayView>
</template>

<script>
import OverlayView from "./overlay_view.vue"
export default {
  name: 'AddConge',
  components:{
    OverlayView,
  },
  data(){
    return {
      date_debut:null,
      date_fin:null,
      msg:""
    }
  },
  methods: {
    checkDates(debut, fin){
      debut = new Date(debut)
      fin = new Date(fin)
      if(debut>new Date() && debut<fin)
        return true
      else
        return false
    },
    checkDiffDatesInDays(debut, fin){

    },
    enregistrer() {
      if(this.checkDates(this.date_debut, this.date_fin))
        this.$emit("addCongeEmitted", this.date_debut, this.date_fin)
      else
        this.msg= "Please choose a valid date range!"
    },
  },

 
};
</script>

<style lang="css" scoped>
</style>

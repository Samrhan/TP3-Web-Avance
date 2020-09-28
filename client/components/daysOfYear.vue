<template>
  <div id="year">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title" v-on:click="navigateYear()">{{ year }}</h5>
        <div class="card-text">
          <days-of-month v-if="done && !$route.params.month" v-for="i in 12" :month="i" :year="year"
                         :day="ferie[i-1] ? ferie[i-1] : []"></days-of-month>
          <days-of-month v-if="done && $route.params.month" :year="year" :month="parseInt($route.params.month)"
                         :day="ferie[$route.params.month-1] ? ferie[$route.params.month-1] : []"></days-of-month>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
const daysOfMonth = window.httpVueLoader('./components/daysOfMonth.vue')


module.exports = {
  props: {
    year: Number
  },
  components: {daysOfMonth},
  data: function () {
    return {
      days: this.getDates(),
      ferie: [],
      done: false
    }
  },
  methods: {
    //on récupère les jours férié de l'année passée en props
    getDates: function () {
      fetch(`http://vps-4401e6e0.vps.ovh.net/api/v2/PublicHolidays/${this.year}/FR`)
          .then(res => res.json())
          .then(json => {
            json.forEach(date => {
              //On crée un tableau d'objet contenant les jours férié d'un mois.
              let month = new Date(date.date).getMonth()
              if (!this.ferie[month])
                this.ferie[month] = [];
              // On ajoute ce qui nous interesse
              this.ferie[new Date(date.date).getMonth()].push({date: date.date, nom: date.localName})
            })
            this.done = true
          });
    },
    navigateYear: function () {
      // Permet de naviguer entre les dates
      // Bug non résolu sur l'effacement de la route dans l'url
      if (this.$route.params.month)
        router.replace({
          name: 'days', params: {year: this.$route.params.year}
        })

    }
  }
}
</script>


<style>
.card-text {
  display: flex;
  flex-wrap: wrap;
}
</style>

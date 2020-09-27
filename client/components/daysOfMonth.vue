<template>
  <div id="daysofmonth">
      <div class="card cardmonth">
        <div class="card-body">
          <h5 class="card-title">{{ months[month-1] }}</h5>
          <p class="card-text">
            <a v-for="i in dayOfMonth()">{{ i }} </a></p>
        </div>
      </div>
  </div>
</template>

<script>
const years = [];
for (let i = 2020; i > 1899; i--) {
  years.push(i)
}

module.exports = {
  props: {
    month: Number,
    year: Number
  },
  data: function () {
    return {
      months: ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"],
      years: years
    }
  },
  methods: {
    dayOfMonth: function () {
      let tab = [];
      for (let i = 0; i < new Date(this.year, this.month, 0).getDate(); i++) {
        tab.push(`${getDay(this.year, this.month-1, i + 1)} ${i + 1} ;`);
      }
      return tab;
    }
  }
}


function getDay(y, m, d) {
  let date = new Date(y, m, d).getDay();
  switch (date) {
    case 0:
      return 'Dimanche'
    case 1:
      return 'Lundi'
    case 2:
      return 'Mardi'
    case 3:
      return 'Mercredi'
    case 4:
      return 'Jeudi'
    case 5:
      return 'Vendredi'
    case 6:
      return 'Samedi'
  }
}
</script>

<style>
.cardmonth {
  max-width: 300px;
  margin: 10px;
}

.card-text {
  text-align: justify;
}
</style>

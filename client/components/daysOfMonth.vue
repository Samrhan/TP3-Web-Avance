<template>
  <div id="daysofmonth">
    <div id="selectors">
      <div class="dropdown">
        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropDownMonth" data-toggle="dropdown"
                aria-haspopup="true" aria-expanded="false">
          {{ active_month }}
        </button>
        <div class="dropdown-menu scrollable-menu" aria-labelledby="dropDownMonth">
          <a class="dropdown-item" href=# v-for="(m, i) in months" :key="i" v-on:click="active_month=months[i]">{{
              m
            }}</a>
        </div>
      </div>
      <div class="dropdown">
        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropDownYear" data-toggle="dropdown"
                aria-haspopup="true" aria-expanded="false">
          {{ active_year }}
        </button>
        <div class="dropdown-menu scrollable-menu" aria-labelledby="dropDownYear">
          <a class="dropdown-item" href=# v-for="y in years" v-on:click="active_year=y">{{ y }}</a>
        </div>
      </div>
    </div>
    <div id="monthlist">
      <div class="card" v-for="(m,i) in months" :key="i">
        <div class="card-body">
          <h5 class="card-title">{{ m }}</h5>
          <p class="card-text">
            <a v-for="i in dayOfMonth(i,active_year)">{{ i }} </a></p>
        </div>
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
    month: String,
    year: Number
  },
  data: function () {
    return {
      months: ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"],
      years: years,
      active_month: this.month,
      active_year: this.year
    }
  },
  methods: {
    dayOfMonth: function (month, year) {
      let tab = [];
      for (let i = 0; i < new Date(year, month, 0).getDate(); i++) {
        tab.push(`${getDay(year, month, i + 1)} ${i + 1} ;`);
      }
      return tab;
    }
  }
}
</script>

<style>
.scrollable-menu {
  height: auto;
  max-height: 180px;
  overflow-x: hidden;
}

.scrollable-menu::-webkit-scrollbar {
  -webkit-appearance: none;
  width: 4px;
}

.scrollable-menu::-webkit-scrollbar-thumb {
  border-radius: 3px;
  background-color: lightgray;
  -webkit-box-shadow: 0 0 1px rgba(255, 255, 255, .75);
}

#selectors {
  display: flex;
  flex-direction: row;
}

#selectors .dropdown {
  padding: 20px;
}

.card {
  max-width: 300px;
  margin: 10px;
}

.card-text {
  text-align: justify;
}
#monthlist{
  display: flex;
  flex-wrap: wrap;
}

</style>

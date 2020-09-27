<template>
  <div id="year">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">{{ year }}</h5>
        <div class="card-text">

          <days-of-month v-for="i in 12" :month="i" :year="2020"></days-of-month>
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
      message: 'it works'
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

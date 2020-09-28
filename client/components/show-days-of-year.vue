<template>
  <div id="">

    <days-of-year :year="parseInt($route.params.year)"></days-of-year>
  </div>
</template>

<script>

// import des composants pour avoir le calend
const daysOfYear = window.httpVueLoader('./components/daysOfYear.vue')
module.exports = {
  components: {
    daysOfYear
  }
}
</script>

<style>


</style>

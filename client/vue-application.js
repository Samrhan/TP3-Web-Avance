const HelloOtherWorld = window.httpVueLoader('./components/HelloOtherWorld.vue')
const daysOfYear = window.httpVueLoader('./components/daysOfYear.vue')

Vue.component('hello-world', {
    data: function () {
        return {
            message: ', World'
        }
    },
    template: `<p>Hello{{ message }}!</p>`,

})
const months = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];
const years = [];
for (let i = 2010; i < 2021; i++) {
    years.push(i)
}
var app = new Vue({
    el: '#app',
    data: {
        months: months,
        month: months[new Date().getMonth()],
        years:years,
        year: new Date().getFullYear()
    },
    components: {HelloOtherWorld, daysOfYear},
})


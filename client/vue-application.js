const HelloOtherWorld = window.httpVueLoader('./components/HelloOtherWorld.vue')
const daysOfMonth = window.httpVueLoader('./components/daysOfMonth.vue')
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
for (let i = 2020; i > 1899; i--) {
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
    components: {HelloOtherWorld, daysOfMonth},

})

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

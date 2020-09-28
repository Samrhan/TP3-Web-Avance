const HelloOtherWorld = window.httpVueLoader('./components/HelloOtherWorld.vue')
const dayComponent = window.httpVueLoader('./components/show-days-of-year.vue')

let HelloWorld = Vue.component('hello-world', {
    data: function () {
        return {
            message: ', World'
        }
    },
    template: `<p>Hello{{ message }}!</p>`,

})

const routes = [
    {path: '/days/:year', component: dayComponent, name: 'days'},
    {path: '/hello-world', component: HelloWorld}

]
const router = new VueRouter({
    routes // short for `routes: routes`
})

// Création des Listes
const months = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];
const years = [];
for (let i = 2020; i > 1900; i--) {
    years.push(i)
}

// Instance de vue
var app = new Vue({
    router,
    el: '#app',
    components: {HelloOtherWorld, dayComponent},
    data:{
        months: months,
        month: months[new Date().getMonth()],
        years: years,
        year: new Date().getFullYear()
    },
    methods: {
        navigate: function (y) {
            // Permet de naviguer entre les dates
            // Bug non résolu sur l'effacement de la route dans l'url
            if (y !== parseInt(this.$route.params.year)) {
                router.replace({
                    name: 'days', params: {year:y.toString()}
                })
            }
        }
    },

})


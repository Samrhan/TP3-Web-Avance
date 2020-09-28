<template>
  <div id="daysofmonth">
    <div class="card cardmonth">
      <div class="card-body">
        <h5 class="card-title">{{ months[month - 1] }}</h5>
        <p class="card-text">
          <!-- Nous permet d'afficher les jours en gras ou non. La technique utilisé est un peu tricky,
          mais efficace. Nous ajoutons un espace au début de la chaine si c'est un jour férié. L'HTML n'affichant
          pas les espaces au début et en fin de chaine, rien n'apparait, et permet ainsi de repérer très facilement
          les jours fériés ou non-->
          <a v-for="i in dayOfMonth()" v-bind:style="{fontWeight:`${i.startsWith(' ')?'bold':'regular'}`}">{{ i }} </a>
        </p>
      </div>
    </div>
  </div>
</template>

<script>

module.exports = {
  props: {
    month: Number,
    year: Number,
    day: Array
  },
  data: function () {
    return {
      months: ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"],
    }
  },
  methods: {
    dayOfMonth: function () {
      // On complète les jours
      let tab = [];
      for (let i = 0; i < new Date(this.year, this.month, 0).getDate(); i++) {
        tab.push(`${getDay(this.year, this.month - 1, i + 1)} ${i + 1} ; `);
      }
      if (this.day)
          // On parcourt la liste de jour férié du mois, on récupère le jour qui est aussi l'indice du tableau est on modifie la valeur
          // On préfère faire une deuxième boucle qui sera de maximum 3 ou 4 itération, que 30 comparaison inutile dans la boucle du dessus
        for (let i of this.day) {
          tab[parseInt(i.date.substr(8, 2)) - 1] = ' ' + i.nom + ' ' + tab[parseInt(i.date.substr(8, 2)) - 1];
        }
      return tab;
    }
  }
}


function getDay(y, m, d) {
  // Retour le jour de la semaine d'une date donnée
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

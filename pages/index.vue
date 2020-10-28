<template>
  <v-container fluid>
    <v-carousel class="carrusel" :show-arrows="false" hide-delimiters>
      <v-carousel-item class="carrusel_item" src="img.gif" />
    </v-carousel>
    <h1>
      Bienvenido a mi portafolio web, mi nombre es angel y soy tecnico en computación e informática
    </h1>
    <div class="row contenido">
      <div class="container col-lg-2 col-md-6 col-sm-5 col-xs-6 col-xm-12">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt voluptatum doloremque error assumenda minima, possimus numquam ullam! Exercitationem fuga ducimus tempore voluptas a, aliquid earum sint blanditiis ad alias ipsa.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem voluptatem eligendi numquam in error delectus? Voluptatibus, totam, labore illo nesciunt similique ullam aliquam deserunt corporis, amet tenetur facere dolore! Eligendi.
        </p>
      </div>
      <div class="container col-lg-2 col-md-6 col-sm-5 col-xs-6 col-xm-12">
        <div class="cards">
          <v-card class="cards_contenido" flat color="#EEEEEE">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, nam. Vel ab quasi iure! Quibusdam ea necessitatibus modi dolores! Reprehenderit laborum omnis quia et nostrum, illum perferendis asperiores quaerat aliquam!
          </v-card>
        </div>
        <div class="cards1">
          <v-card class="cards_contenido" flat color="#EEEEEE">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis error aspernatur recusandae harum excepturi minima sit, officia similique nulla amet reiciendis placeat nesciunt, illum voluptatum facilis rerum tenetur necessitatibus dolorum!
          </v-card>
        </div>
      </div>
    </div>
  </v-container>
</template>
<script>
export default {
  // layout: 'intento'
}
</script>

<style scoped>
.carrusel {
  background: blue;
  margin-top: 0px;
  /* filter:brightness(0.5); */
   }
  .carrusel:hover {
    content: "hola";
    filter: blur(5px);
  }

h1 {
  margin-top: 55px;
  text-align: center;
  text-transform: uppercase;
}
.contenido {
  margin-top: 35px;
}
p {
  padding: 20px;
  text-align: justify;
}
/* .cards {
  padding: 7px;
} */
.cards1 {
  margin: 10px 0px;
}
.cards_contenido {
 padding: 20px;
 text-align: justify;
}

@media only screen and (max-width: 767px){
h1 {
  padding: 10px;
  margin-top: 15px;
  text-align: center;
  font-size: 24px;
  text-transform: uppercase;
}
p {
  padding: 0px 20px;
  text-align: justify;
}
.contenido {
  margin-top: 7px;
  padding: 5px 0px;
}
.cards_contenido {
 padding: 20px;
 text-align: justify;
}
}
</style>

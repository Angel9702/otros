<template>
  <v-container fluid style="padding:0px">
    <div class="contenedor">
      <!-- <div class="contenedor_img"/> -->
      <v-img src="/fondo1.jpg" />
      <div class="contenedor_intro">
        <v-row>
          <v-col cols="1">
            <vr />
          </v-col>
          <v-col cols="11">
            <div class="formato">
              <h5>soy</h5>
              <h1><p>Angel</p></h1>
              <h1><p>Franquina</p></h1>
              <h4><p>{{ texto }}</p></h4>
            </div>
          </v-col>
        </v-row>
      </div>
      <div class="logo">
        af
      </div>
    </div>
    <div>
      <center>
        <h2>Mis conocimientos</h2>
      </center>
      <v-card class="contenedor_card">
        <center>
          <!-- <v-card-title>
          </v-card-title> -->
        </center>
        <v-card-text>
          sfgs
        </v-card-text>
      </v-card>
    </div>
  </v-container>
</template>
<script>
export default {
  layout: 'prueba1',
  data () {
    return {
      texto: '</Desarrollador web>'
    }
  }
}
</script>
<style scoped>
.contenedor{
 width: 100%;
  position: relative;
  display: flex;
  align-items: center;
}
.logo {
  position: absolute;
  top: 80%;
  left: 90%;
}
/* .contenedor_img {
  background-image: linear-gradient(
      rgba(11, 65, 57, 0.6),
      rgba(11, 65, 57, 0.6)
    );
 background-size: 100%;
height: 600px;
width: 100%;
} */
.contenedor_intro{
  margin: auto;
  width: 400px;
  position: absolute;
  text-align: center;
}
.contenedor_card{
  margin: auto;
  width: 100%;
  height: 500px;
  text-align: center;
}
vr {
  display: block;
  width:5px;
  height: 250px;
  left: 30px;
  background-color:rgb(255, 255, 255);
  position:relative;
}
.formato {
  padding: 0%;
  font-size: 25px;
  padding-left:15px;
  text-align: left;
  color: #FFFF;
}
p {
  margin-bottom: 0%;
}
h2 {
  padding-top: 30px;
}
h5 {
  margin-top: 10px
}
@media only screen and (max-width: 740px) {
.formato {
  font-size: 15px;
  padding-left: 15px;
}
.contenedor_intro{
  width: 300px;
}
vr {
  height: 150px;
  left: 30px;
}
}
</style>

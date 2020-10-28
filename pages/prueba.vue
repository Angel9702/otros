<template>
  <v-container fluid style="padding:0%">
    <div class="c-img">
      <v-img src="/fondo.jpg" class="imagen" />
      <v-card class="txt" color="rgba(0, 0, 0, 0.30)">
        <div class="txt1">
          <h1 style="color:#FFFFFF">Bienvenido!</h1>
          <span class="span_centrar">Lorem ipsum dolor sit amet consectetur adipisicing elit. A deleniti impedit hic illum maxime ab autem, ullam cum dolor quas ex porro placeat aliquid quasi, sunt sit magni dolorum tempore.</span>
        </div>
      </v-card>
    </div>
    <div id="sobremi" style="margin-top:70px">
      <center><h2>Mis Conocimientos</h2></center>
    </div>
    <v-parallax src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg" />
  </v-container>
</template>
<script>
export default {
  layout: 'prueba'
}
</script>
<style scoped>
.c-img {
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
}

h1 {
  text-align: center;
  text-transform: uppercase;
}
.txt {
  margin: auto;
  position: absolute;
  text-align: center;
}
.txt1 {
  padding:3px 7px;
}
.span_centrar {
  color: #FAFAFA;
}

@media only screen and (min-width: 1200px) {

}
@media only screen and (min-width: 992px) and (max-width: 1199px) {
h1 {
  /* background: red; */
  padding: 10px;
  text-align: center;
  font-size: 30px;
  text-transform: uppercase;
}
.c-img {
  width: 100%;
}
.txt {
  height: 23%;
  width: 100%;
  margin: auto;
  position: absolute;
  text-align: center;
}
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  h1 {
  /* background: green; */
  padding: 10px;
  text-align: center;
  font-size: 30px;
  text-transform: uppercase;
}
.c-img {
  width: 100%;
}
.txt {
  height: 27%;
  width: 100% ;
  margin: auto;
  position: absolute;
  text-align: center;
}

}
@media (min-width: 576px) {

}
/*
@media only screen and (max-width: 767px){
h1 {
  background: green;
  padding: 10px;
  text-align: center;
  font-size: 20px;
  text-transform: uppercase;
}
.c-img {
  width: 100%;
}
.txt {
  height: 30%;
  width: 100% ;
  margin: auto;
  position: absolute;
  text-align: center;
}
} */
@media only screen and (max-width: 764px) {
h1 {
  /* background: yellow; */
  padding: 10px;
  text-align: center;
  font-size: 20px;
  text-transform: uppercase;
}
.c-img {
  width: 100%;
}
.txt {
  height: 30%;
  width: 100% ;
  margin: auto;
  position: absolute;
  text-align: center;
}
}
@media only screen and (max-width: 730px) {
h1 {
  /* background: rosybrown; */
  /* background: grey; */
  padding: 10px;
  text-align: center;
  font-size: 24px;
  text-transform: uppercase;
}
.c-img {
  width: 100%;
}
.txt {
  height: 40%;
  width: 100% ;
  margin: auto;
  position: absolute;
  text-align: center;
}
}
@media only screen and (max-width: 550px) {
h1 {
  /* background: skyblue; */
  /* background: red; */
  padding: 10px;
  text-align: center;
  font-size: 24px;
  text-transform: uppercase;
}
.c-img {
  width: 100%;
}
.txt {
  height: 60%;
  width: 100% ;
  margin: auto;
  position: absolute;
  text-align: center;
}
}

@media only screen and (max-width: 479px) {
h1 {
  /* background: skyblue; */
  padding: 10px;
  text-align: center;
  font-size: 24px;
  text-transform: uppercase;
}
.c-img {
  width: 100%;
}
.txt {
  height: 65%;
  width: 100% ;
  margin: auto;
  position: absolute;
  text-align: center;
}
}
</style>

<template>
  <v-card height="100vh" color="#6D6D6D">
    <!-- height="100%" -->
    <v-container fluid style="margin:0px; padding-top:0px; padding-bottom:0px">
      <div id="contenedor-total">
        <v-row>
          <v-col id="col1" cols="4" md="4" sm="5" style="padding:0px">
            <div class="borde">
              <div class="iconos">
                <v-icon large style="margin-left:10px" class="color">
                  mdi-account
                </v-icon>
                <v-spacer />
                <v-icon style="padding: 0px 20px" class="color">
                  mdi-chart-donut
                </v-icon>
                <v-icon style="padding: 0px 20px" class="color">
                  mdi-message-text
                </v-icon>
                <v-icon style="padding: 0px 20px" class="color">
                  mdi-dots-vertical
                </v-icon>
              </div>
            </div>
            <div id="busqueda">
              <div id="busqueda-contenido">
                <v-row>
                  <v-text-field
                    class="compact-form"
                    dense
                    rounded
                    placeholder="Buscar o empezar un nuevo chat"
                  >
                    <template v-slot:prepend>
                      <template>
                        <v-icon style="margin-left: 20px" class="color">
                          mdi-magnify
                        </v-icon>
                      </template>
                    </template>
                  </v-text-field>
                </v-row>
              </div>
            </div>
            <div id="usuario-back">
              <div v-for="(item, index) in usuarios" id="usuario" :key="index" class="usuario-contenido" @click="abrir(item)">
                <div id="usuario-nick">
                  <v-icon large dark>
                    {{ item.icono }}
                  </v-icon>
                </div>
                <div id="usuario-info">
                  <v-row>
                    <v-col style="padding:0px 10px">
                      <div id="nombre-usuario">
                        {{ item.nombre }}
                      </div>
                      <div id="nombre-mensaje" class="texto">
                        {{ item.mensaje }}
                      </div>
                    </v-col>
                    <v-col style="padding:0px 10px">
                      <div id="items-derecho">
                        <div class="texto">
                          00:00 pm
                        </div>
                        <div class="texto">
                          <!-- opciones -->
                        </div>
                      </div>
                    </v-col>
                  </v-row>
                </div>
              </div>
            </div>
          </v-col>
          <v-col cols="8" md="8" sm="7" style="padding:0px">
            <div v-if="caja" class="caja-contenido">
              <div class="caja-contenido2">
                <div class="img1" />
                <div class="div-p">
                  <p>Mantén tu teléfono conectado</p>
                </div>
                <div class="div-span">
                  <span>WhatsApp se conecta a tu teléfono para sincronizar los mensajes. Para reducir el consumo de tus datos, conecta tu teléfono a una red Wi-Fi.</span>
                </div>
              </div>
            </div>
            <div v-else id="caja" class="borde">
              <div class="iconos">
                <v-icon large style="margin: 0px 15px" class="color">
                  {{ usuario.icono }}
                </v-icon>
                <span id="name">{{ usuario.nombre }}</span>
                <v-spacer />
                <v-icon style="padding: 0px 20px" class="color">
                  mdi-magnify
                </v-icon>
                <v-icon style="padding: 0px 20px" class="color">
                  mdi-dots-vertical
                </v-icon>
              </div>
              <div>
                <div>df</div>
              </div>
              <div id="barra">
                <div class="barra-div row">
                  <v-icon medium class="color" style="padding: 0px 10px">
                    mdi-emoticon-outline
                  </v-icon>
                  <v-icon medium class="color" style="padding-right: 6px">
                    mdi-clippy
                  </v-icon>
                  <v-text-field
                    dense
                    class="formulario"
                    rounded
                    placeholder="Buscar o empezar un nuevo chat"
                  />
                  <v-icon medium class="color" style="padding:0px 10px">
                    mdi-clippy
                  </v-icon>
                </div>
              </div>
            </div>
          </v-col>
        </v-row>
      </div>
    </v-container>
  </v-card>
</template>
<script>
export default {
  layout: 'whatsapp',
  data () {
    return {
      caja: true,
      usuarios: [
        { nombre: 'Angel', icono: 'mdi-account', mensaje: 'hola' },
        { nombre: 'Antonio', icono: 'mdi-account', mensaje: ':3' },
        { nombre: 'Angel', icono: 'mdi-account', mensaje: 'hola' },
        { nombre: 'Angel', icono: 'mdi-account', mensaje: 'hola' },
        { nombre: 'Angel', icono: 'mdi-account', mensaje: 'hola' },
        { nombre: 'Angel', icono: 'mdi-account', mensaje: 'hola' },
        { nombre: 'Angel', icono: 'mdi-account', mensaje: 'hola' },
        { nombre: 'Angel', icono: 'mdi-account', mensaje: 'hola' },
        { nombre: 'Angel', icono: 'mdi-account', mensaje: 'hola' },
        { nombre: 'Angel', icono: 'mdi-account', mensaje: 'hola' },
        { nombre: 'Angel', icono: 'mdi-account', mensaje: 'hola' },
        { nombre: 'Angel', icono: 'mdi-account', mensaje: 'hola' },
        { nombre: 'Angel', icono: 'mdi-account', mensaje: 'hola' }
      ],
      usuario: {
        nombre: '',
        icono: '',
        mensaje: ''
      }
    }
  },
  methods: {
    abrir (item) {
      this.caja = false
      this.index = this.usuarios.indexOf(item)
      this.usuario = Object.assign({}, item)
      console.log(this.index)
    }
  //  hola (item) {
  //     this.datos = false
  //     this.index = this.usuarios.indexOf(item)
  //     this.usuario = Object.assign({}, item)
  //     console.log('hola')
  //   },
    //
  }
}
</script>
<style scoped>
/* .borde {
  border: solid 2px red;
}*/
#barra {
  border: solid 2px green;
  margin: 0%;
  padding: 5px;
  position: absolute;
  height: 70px;
  width: 67%;
  bottom: 0;
  background: #1E2428;
}
.barra-div {
  padding: 5px;
  margin: 0%;
  width: 100%;
}
.formulario {
  padding-top: 8px;
  height: 40px;
  background: #33383B;
  color: #818486;
}
.color {
  color: #B1B3B5;
}
#name {
   color:#FFF;
  padding: 5px;
  display: flex;
  text-align: center;
  justify-content: center;
}
/* ------ */
#contenedor-total {
  width: 100%;
  height: 100%;
}
/* ------------------- */

#col1 {
  border-right: 0.5px solid #3C4247;
}
/* --------------------- */
.iconos {
  display: flex;
  padding: 15px 10px;
  background: #2A2F32;
}
/* ----------------------- */
#busqueda {
  background: #131C21;
  border-bottom: solid 0.5px  #2A2F32;
  padding: 10px 15px;
}
#busqueda-contenido {
  background: #2A2F32;
  /* border: solid 2px green; */
  border-radius: 10px;
  padding: 0%;
}
.compact-form {
    text-align: center;
    height: 30px;
    border-radius: 50px;
    transform: scale(0.875);
    transform-origin: left;
}

/* -------------------- */
#usuario-back {
  border: solid 2px red;
  height: 72%;
  background: #131C21;
  overflow:auto;
}
#usuario-back::-webkit-scrollbar {
    /* border: solid 2px red; */
    width: 6px;     /* Tamaño del scroll en vertical */
    height: 3px;    /* Tamaño del scroll en horizontal */
    /* display: none; Ocultar scroll */
}
#usuario-back::-webkit-scrollbar-thumb {
    background: #3C4247;
    /* border-radius: 4px; */
}
/* #usuario-back::-webkit-scrollbar-thumb:hover {
    background: #303f48;
    box-shadow: 0 0 2px 1px rgba(0, 0, 0, 0.2);
} */
/* #usuario-back::-webkit-scrollbar-thumb:active {
    background-color: #999999;
} */

#usuario {
  display: flex;
  height: 14%;
}
#usuario:hover {
  background: #323739;
}
#usuario-nick {
  padding: 5px;
  margin-right: 10px;
  margin-left: 10px;
}
.usuario-contenido {
  background: #131C21;
  /* border: solid 2px green; */
  padding: 10px 5px;
  padding-bottom: 0px ;
  display: flex;
}
#usuario-info{
  /* border: solid 2px blue; */
  width: 100%;
  margin-right: 2px;
  padding: 0px 6px;
  padding-right: 5px;
  position: relative;
  border-bottom: 0.5px solid #3C4247;
}
#items-derecho {
  /* border: solid 2px red; */
  text-align: right;
}
#nombre-usuario {
  color: #dadbdd;
  margin-bottom: 3px;
  font-size: 16px;
  font-family:Arial, Helvetica, sans-serif
}
.texto {
  color: #9FA2A5;
  font-family: inherit;
  font-size: 14px;
  /* white-space: nowrap; */
}
/* -------------------- */
/* #caja {
  height: 100%;
} */
.caja-contenido {
  /* border: solid 2px green; */
  display: flex;
  height: 100%;
  align-content: center;
  justify-content: center;
  padding: 50px;
  background:#262D31;
}
.caja-contenido2 {
  width: 100%;
  padding: 0%;
  display: block;
  justify-content: center;
  align-content: center;
}
.img1 {
  margin: auto;
  /* border: solid 2px blue; */
  margin-top: 5%;
  background-image: url(/whatsapp.jpg);
  background-size: 100%;
  width: 250px;
  height: 250px;
  position: relative;
}
.div-p {
  margin-top: 10px;
  display: flex;
  text-align: center;
  justify-content: center;
  padding: 10px;
  font-size: 25px;
}
.div-span {
  display: flex;
  text-align: center;
  justify-content: center;
  font-size: 15px;
}
.div-span span {
  padding-bottom: 10px;
  width: 75%;
  color: #9FA2A5;
  text-align: justify;
  border-bottom: 0.5px solid  #3C4247;
}
.div-p p {
  color: #FFF;
  text-align: justify;
}
</style>

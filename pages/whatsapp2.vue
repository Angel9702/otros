<template>
  <v-container fluid style="margin:0px; padding-top:0px; background: #2A2F32">
    <v-row>
      <v-col cols="5" md="4" sm="4" style="padding: 0px">
        <v-card tile elevation="0" style="border-right: solid 0.5px #3F4448">
          <v-app>
            <v-card tile>
              <v-app-bar
                color="#2A2F32"
                flat
                dark
              >
                <v-toolbar-title>
                  <v-avatar style="margin-left:10px">
                    <img src="/nick.jpg">
                  </v-avatar>
                </v-toolbar-title>

                <v-spacer />

                <v-btn icon color="#B1B3B5" href="/">
                  <v-icon>mdi-chart-donut</v-icon>
                </v-btn>

                <v-btn icon color="#B1B3B5">
                  <v-icon>mdi-message-text</v-icon>
                </v-btn>

                <v-btn icon color="#B1B3B5">
                  <v-icon>mdi-dots-vertical</v-icon>
                </v-btn>

              </v-app-bar>

              <v-subheader class="buscador">
                <v-text-field
                  class="compact-form"
                  dense
                  rounded
                  placeholder="Buscar o empezar un nuevo chat"
                >
                  <template v-slot:prepend>
                    <template>
                      <v-icon style="margin-left: 20px" color="#B1B3B5">
                        mdi-magnify
                      </v-icon>
                    </template>
                  </template>
                </v-text-field>
              </v-subheader>

              <v-divider />

              <v-card id="scroll" elevation="0" tile>
                <v-list two-line color="#2A2F32" class="espacio">
                  <div v-for="(item, index) in usuarios" :key="index">
                    <v-divider inset />

                    <v-list-item
                      :key="item.title"
                      @click="conectar(item)"
                    >
                      <v-list-item-avatar size="45px">
                        <v-img :src="item.icon" />
                      </v-list-item-avatar>

                      <v-list-item-content>
                        <v-list-item-title>
                          {{ item.nombre }}
                        </v-list-item-title>
                        <v-list-item-subtitle>
                          {{ item.texto }}
                        </v-list-item-subtitle>
                      </v-list-item-content>
                    </v-list-item>
                  </div>
                </v-list>
              </v-card>

            </v-card>
          </v-app>
        </v-card>
      </v-col>
      <v-col cols="7" md="8" sm="8" style="padding:0px">
        <div v-if="imagen" class="contenido">
          <div class="imagen-cont">
            <div>
              <div class="imagen-contenido">
                <v-img src="/whatsapp-dark.jpg" max-width="250" />
              </div>
            </div>
          </div>
          <div class="texto">
            <h1>
              Mantén tu teléfono conectado
            </h1>
            <p>
              WhatsApp se conecta a tu teléfono para sincronizar los mensajes. Para reducir el consumo de tus datos, conecta tu teléfono a una red Wi-Fi.
            </p>
            <div class="enlace">
              <span>
                <v-icon dark color="#B1B3B5">
                  mdi-laptop-mac
                </v-icon>
                WhatsApp está disponible para Windows. <a href="https://www.whatsapp.com/download">Obtenlo aqui</a>
              </span>
            </div>
          </div>
        </div>
        <div v-else>
          <v-app>
            <v-card elevation="0">
              <v-app-bar
                color="#2A2F32"
                flat
                dark
              >
                <v-toolbar-title>
                  <v-avatar
                    style="margin-left:10px"
                  >
                    <img :src="usuario.icon">
                  </v-avatar>
                </v-toolbar-title>
                <v-toolbar-title style="margin-left:15px">
                  {{ usuario.nombre }}
                </v-toolbar-title>

                <v-spacer />

                <v-btn icon color="#B1B3B5">
                  <v-icon>mdi-magnify</v-icon>
                </v-btn>

                <v-btn icon color="#B1B3B5">
                  <v-icon>mdi-dots-vertical</v-icon>
                </v-btn>

              </v-app-bar>

              <v-divider />

            </v-card>
          </v-app>
        </div>

      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  layout: 'whatsapp',
  data () {
    return {
      imagen: true,
      usuarios: [
        { icon: '/celeste.jpg', nombre: 'Celeste', texto: 'que fue :v' },
        { icon: '/verde.jpg', nombre: 'Verde', texto: 'dssav' },
        { icon: '/rojo.jpg', nombre: 'Rojo', texto: 'que fue :v' },
        { icon: '/amarillo.jpg', nombre: 'Amarillo', texto: 'que fue :v' },
        { icon: '/celeste.jpg', nombre: 'Celeste', texto: 'que fue :v' },
        { icon: '/verde.jpg', nombre: 'Verde', texto: 'dssav' },
        { icon: '/rojo.jpg', nombre: 'Rojo', texto: 'que fue :v' },
        { icon: '/amarillo.jpg', nombre: 'Amarillo', texto: 'que fue :v' },
        { icon: '/celeste.jpg', nombre: 'Celeste', texto: 'que fue :v' },
        { icon: '/verde.jpg', nombre: 'Verde', texto: 'dssav' },
        { icon: '/rojo.jpg', nombre: 'Rojo', texto: 'que fue :v' },
        { icon: '/amarillo.jpg', nombre: 'Amarillo', texto: 'que fue :v' },
        { icon: '/celeste.jpg', nombre: 'Celeste', texto: 'que fue :v' },
        { icon: '/verde.jpg', nombre: 'Verde', texto: 'dssav' },
        { icon: '/rojo.jpg', nombre: 'Rojo', texto: 'que fue :v' },
        { icon: '/amarillo.jpg', nombre: 'Amarillo', texto: 'que fue :v' }
      ],
      usuario: {
        icon: '',
        nombre: '',
        texto: ''
      }
    }
  },
  methods: {
    conectar (item) {
      this.imagen = false
      this.index = this.usuarios.indexOf(item)
      console.log(this.index)
      this.usuario = Object.assign({}, item)
    }
  }
}
</script>
<style scoped>
.compact-form {
  background: #2A2F32;
    height: 36px;
    border-radius: 50px;
    /* transform: scale(0.875); */
    /* transform-origin: left; */
    margin-top: 0px;
    margin-bottom: 0px;
}
.espacio {
  padding-top: 0px;
}
#scroll {
  /* border: solid 2px green; */
  /* height: 100%; */
  overflow: auto;
}
h1 {
  color: #C6C7C9;
  font-family: 'Roboto', sans-serif;
  margin: 4% 20%;
}
.contenido {
  background:#262D31;
  height: 100vh;
}
.imagen-cont {
  padding-top: 10%;
  display: flex;
  align-content: center;
  justify-content: center;
}
.texto {
  font-family: 'Segoe UI', Helvetica;
  text-align: center;
}
p {
  margin: 4% 20%;
  font-size: 14px;
  color: #A6A8AA;
}
.enlace {
  padding-top: 4%;
  border-top: solid 2px #3F4448;
  margin: 0% 20%;
  color: #A6A8AA;
}
a {
  text-decoration: none;
  color: #00AF9C;
}
span {
  margin-top: 10px;
}
</style>

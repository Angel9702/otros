<template>
  <v-container fluid>
    <v-app-bar flat dense color="#FFFFFF">
      <v-icon style="padding-right:10px">mdi-video</v-icon>
      Auditorio Amuna
    </v-app-bar>
    <v-row>
      <v-col
        cols="12"
        lg="9"
        sm="7"
        md="8"
        xs="6"
        class="borde"
      >
        <v-col sm="12" style="padding:0%">

          <v-col sm="12" style="padding-top:0px" class="imagen">
            <v-img max-width="95%" class="usuario-card" src="https://www.larazon.es/resizer/kCczfDBYxnybu9syz9xB4QHzzkk=/1260x840/smart/filters:format(webp)/cloudfront-eu-central-1.images.arcpublishing.com/larazon/GBHD4TKELFALDOF7FHF2NTWQ74.jpg" />
          </v-col>
          <!-- <v-col sm="12">
            publicidad
          </v-col> -->
        </v-col>
        <!--  -->
      </v-col>

      <v-col
        cols="12"
        lg="3"
        sm="5"
        md="4"
        xs="6"
        class="borde"
      >
        <!--  -->
        <v-col sm="12" style="padding:0%">

          <v-col sm="12" style="padding:0%">
            <!-- <v-expansion-panels>
              <v-expansion-panel>
                <v-card width="100%" height="250px" class="usuario-card" elevation="1">
                  <v-expansion-panel-header>
                    <v-card-title style="padding:0%">
                      <v-toolbar dense elevation="0" class="usuario-toolbar">
                        <span>Información  de la reunión</span>
                      </v-toolbar>
                    </v-card-title>
                  </v-expansion-panel-header>
                  <v-expansion-panel-content>
                    <v-card-text style="padding-bottom:0%">

                      <v-list-item style="padding:2%">
                        <v-list-item-avatar size="55px" style="margin-right:15px">
                          <v-img src="https://i.pinimg.com/564x/b6/ba/a1/b6baa12611b3f440041e5087a7c2d66b.jpg" />
                        </v-list-item-avatar>

                        <v-list-item-content>
                          <v-list-item-title>
                            Nombre Completo
                          </v-list-item-title>
                          <v-list-item-subtitle>
                            ubicacion
                          </v-list-item-subtitle>
                        </v-list-item-content>
                      </v-list-item>

                    </v-card-text>
                    <v-card-text style="padding-top:0%">

                      <div v-for="(item, i) in items" :key="i">
                        <p style="padding:5px; margin-bottom: 3px">
                          <v-icon style="margin-right: 10px">
                            {{ item.icono }}
                          </v-icon>
                          {{ item.contenido }}
                        </p>
                      </div>
                    </v-card-text>

                  </v-expansion-panel-content>
                </v-card>
              </v-expansion-panel>
            </v-expansion-panels> -->
            <div>
              <v-expansion-panels>
                <v-expansion-panel>
                  <v-expansion-panel-header>
                    <span>Información de Contacto</span>
                  </v-expansion-panel-header>
                  <v-expansion-panel-content style="margin:0%">
                    <v-list-item style="padding:0%">
                      <v-list-item-avatar size="55px" style="margin-right:15px">
                        <v-img src="https://i.pinimg.com/564x/b6/ba/a1/b6baa12611b3f440041e5087a7c2d66b.jpg" />
                      </v-list-item-avatar>

                      <v-list-item-content>
                        <v-list-item-title>
                          Nombre Completo
                        </v-list-item-title>
                        <v-list-item-subtitle>
                          ubicacion
                        </v-list-item-subtitle>
                      </v-list-item-content>
                    </v-list-item>
                    <div v-for="(item, i) in items" :key="i">
                      <p style="padding:5px; margin-bottom: 3px">
                        <v-icon style="margin-right: 10px">
                          {{ item.icono }}
                        </v-icon>
                        {{ item.contenido }}
                      </p>
                    </div>
                  </v-expansion-panel-content>
                </v-expansion-panel>
              </v-expansion-panels>
            </div>
          </v-col>

          <v-col sm="12" style="padding:10px 0px 0px 0px">
            <v-card>

              <v-tabs v-model="tab" grow>
                <v-tab>
                  Chat
                </v-tab>
                <v-tab>
                  Evaluación
                </v-tab>
              </v-tabs>

              <v-tabs-items v-model="tab">

                <v-tab-item>
                  <v-card flat elevation="0">
                    <v-card-text>holi</v-card-text>
                  </v-card>
                </v-tab-item>

                <v-tab-item>
                  <v-card flat elevation="0">
                    <v-card-text>
                      <h3>Le agradó la reunión?</h3>
                      <v-radio-group
                        v-model="row"
                        color="primary"
                        row
                      >
                        <v-radio
                          label="Si"
                          color="primary"
                          value="radio-1"
                        />
                        <v-radio
                          label="No"
                          color="primary"
                          value="radio-2"
                        />
                        <v-radio
                          label="Quizás"
                          color="primary"
                          value="radio-3"
                        />
                      </v-radio-group>
                      <h3>¿Como le parecio esta experiencia virtual?</h3>
                      <v-text-field dense outlined />
                      <h3>¿Qué le parecio más interesante?</h3>
                      <v-text-field dense outlined />
                      <h3>¿Quieres que nos mantengamos en contacto?</h3>
                      <v-text-field dense outlined />
                      <v-card-actions>
                        <v-btn rounded block color="primary">
                          Enviar
                        </v-btn>
                      </v-card-actions>
                    </v-card-text>
                  </v-card>
                </v-tab-item>

              </v-tabs-items>

            </v-card>
          </v-col>
        </v-col>
        <!--  -->
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  // layout: 'video',
  data () {
    return {
      column: null,
      row: null,
      tab: null,
      items: [
        { icono: 'mdi-web', contenido: 'www.web.com' },
        { icono: 'mdi-email web', contenido: 'correo@gmail.com' },
        { icono: 'mdi-phone', contenido: '+51 000 000 000' }
      ]
    }
  }
}
</script>
<style scoped>
/* .borde {
  display: flex;
  border: solid 2px red
} */
/* .contenido {
  display: flex;
  justify-content: center;
  padding: 10px 0px;
} */
.usuario-card {
  border-radius: 10px;
}
.usuario-toolbar {
  display: flex;
  justify-content: center;
  margin: auto;
}
h3 {
  font-size: 15px;
}
.imagen {
  display: flex;
  justify-content: center;
  align-content: center;
}

@media only screen and (max-width: 600px) {
h3 {
  font-size: 14px;
}
span {
  font-size: 15px;
}
}
</style>

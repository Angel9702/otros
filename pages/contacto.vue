<template>
  <v-container fluid style="padding:0px">
    <v-row style="padding:0px">
      <v-col cols="5" style="padding: 0px">
        <!-- top:0px; padding-bottom:0px" -->
        <v-card>
          <!-- <v-toolbar color="red" flat>
            <v-list style="padding:0px">
              <v-list-item-avatar>
                <img src="/nick.jpg">
              </v-list-item-avatar>
              <v-spacer />
              <v-icon class="color">
                mdi-power-off
              </v-icon>
              <v-icon class="color">
                mdi-message-text
              </v-icon>
              <v-icon class="color">
                mdi-dots-vertical
              </v-icon>
            </v-list>
          </v-toolbar>
          <v-divider />
          <v-list
            two-line
            subheader
          >
            <v-subheader>
              <v-text-field
                class="compact-form"
                dense
                rounded
                placeholder="Buscar o empezar un nuevo chat"
              >
                <template v-slot:prepend>
                  <v-tooltip
                    bottom
                  >
                    <template v-slot:activator="{ on }">
                      <v-icon style="margin-left: 20px" class="color" v-on="on">
                        mdi-magnify
                      </v-icon>
                    </template>
                  </v-tooltip>
                </template>
              </v-text-field>
            </v-subheader>
            <v-list v-for="(item, index) in usuarios" :key="index" style="padding-bottom: 0px; padding-top: 0px">
              <v-divider />
              <v-list-item>
                <v-list-item-avatar size="45px">
                  <v-img :src="item.icon" />
                </v-list-item-avatar>
                <v-list-item-title>
                  {{ item.nombre }}
                </v-list-item-title>
                <v-list-item-subtitle>
                  {{ item.texto }}
                </v-list-item-subtitle>
              </v-list-item>
            </v-list>
          </v-list> -->
          <v-app>
            <v-card>
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

                <v-btn icon>
                  <v-icon>mdi-power-off</v-icon>
                </v-btn>

                <v-btn icon>
                  <v-icon>mdi-message-text</v-icon>
                </v-btn>

                <v-btn icon>
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
                      <v-icon style="margin-left: 20px" v-on="on">
                        mdi-magnify
                      </v-icon>
                    </template>
                  </template>
                </v-text-field>
              </v-subheader>
              <v-divider />
              <v-list two-line color="#2A2F32" class="espacio">
                <template v-for="(item, index) in usuarios">
                  <v-subheader
                    v-if="item.header"
                    :key="item.header"
                    v-text="item.header"
                  />

                  <v-divider
                    v-else-if="item.divider"
                    :key="index"
                    :inset="item.inset"
                  />

                  <v-list-item
                    v-else
                    :key="item.title"
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
                </template>
              </v-list>
            </v-card>
          </v-app>
        </v-card>
      </v-col>
      <v-col cols="7">
        b
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  layout: 'whatsapp',
  data () {
    return {
      usuarios: [
        { icon: '/celeste.jpg', nombre: 'Celeste', texto: 'que fue :v' },
        { divider: true, inset: true },
        { icon: '/verde.jpg', nombre: 'Verde', texto: 'dssav' },
        { divider: true, inset: true },
        { icon: '/rojo.jpg', nombre: 'Rojo', texto: 'que fue :v' },
        { divider: true, inset: true },
        { icon: '/amarillo.jpg', nombre: 'Amarillo', texto: 'que fue :v' }
      ]
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
  padding-left: 15px;

}
</style>

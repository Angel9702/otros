<template>
  <v-app>
    <v-app-bar
      hide-on-scroll
      app
      flat
      color="rgba(0, 0, 0, 0.6)"
    >
      <div v-if="drawer === false">
        <span class="span_logo">AF</span>
      </div>
      <v-spacer />
      <v-toolbar-title v-if="$vuetify.breakpoint.smOnly || $vuetify.breakpoint.mdOnly || $vuetify.breakpoint.lgOnly || $vuetify.breakpoint.xlOnly">
        <router-link v-for="(item, index) in menus" :key="index" :to="item.to" class="color_Fondo">
          {{ item.nombre }}
        </router-link>
      </v-toolbar-title>
      <v-app-bar-nav-icon v-if="$vuetify.breakpoint.xsOnly" dark @click.stop="drawer = !drawer" />
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" :clipped="miniVariant" color="rgba(0, 0, 0, 0.7)" fixed app>
      <v-list>
        <v-list-item-title>
          <center>
            <span class="span_logo">AF</span>
          </center>
        </v-list-item-title>
        <v-divider />
        <v-list-item
          v-for="(item, index) in menus"
          :key="index"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon color="#FFFFFF">
              {{ item.icono }}
            </v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title class="color_Fondo" v-text="item.nombre" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-main style="padding:0%">
      <nuxt />
    </v-main>

    <v-footer
      color="rgba(0, 0, 0, 0.6)"
      :absolute="!fixed"
      dark
      app
    >
      <v-btn v-for="(item, index) in redes" :key="index" icon :href="item.to" target="_blank">
        <v-icon>
          {{ item.icono }}
        </v-icon>
      </v-btn>
      <v-spacer />
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>
<script>
export default {
  data () {
    return {
      miniVariant: false,
      right: true,
      rightDrawer: false,
      clipped: false,
      drawer: false,
      fixed: false,
      menus: [
        { nombre: 'inicio', icono: 'mdi-home', to: '/' },
        { nombre: 'proyectos', icono: 'mdi-xml', to: '/proyectos' },
        { nombre: 'contacto', icono: 'mdi-account-plus', to: '/contacto' },
        { nombre: 'prueba', icono: 'mdi-account', to: '/prueba' }
      ],
      redes: [
        { icono: 'mdi-facebook', to: 'https://www.facebook.com/franquinacuya/' },
        { icono: 'mdi-instagram', to: '/' }
      ]
    }
  }
}
</script>
<style scoped>
a {
  font-size: 15px;
  text-decoration: none;
  padding: 0px 10px;
  text-transform: uppercase;
  color: black;
}
.span_logo {
  font-family: 'Parisienne', cursive;
  font-size:30px;
  color:#FFFFFF
}
.color_Fondo {
  color:#FFFFFF
}
</style>

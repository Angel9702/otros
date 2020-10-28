<template>
  <v-app>
    <v-app-bar
      app
      flat
      color="rgba(0, 0, 0, 0.6)"
    >
      <!-- v-model="logo1" -->
      <div>
        <span style="font-family: 'Parisienne', cursive; font-size:30px">AFC</span>
      </div>
      <v-spacer />
      <v-toolbar-title v-if="$vuetify.breakpoint.smOnly || $vuetify.breakpoint.mdOnly || $vuetify.breakpoint.lgOnly || $vuetify.breakpoint.xlOnly">
        <router-link v-for="(item, index) in menus" :key="index" :to="item.to">
          {{ item.nombre }}
        </router-link>
      </v-toolbar-title>
      <v-app-bar-nav-icon v-if="$vuetify.breakpoint.xsOnly" @click.stop="drawer = !drawer" />
    </v-app-bar>
    <v-navigation-drawer v-if="$vuetify.breakpoint.xsOnly" v-model="drawer" :clipped="miniVariant" fixed app>
      <v-list>
        <v-list-item-title>
          <center>
            <span style="font-family: 'Parisienne', cursive; font-size:30px">AF</span>
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
            <v-icon>
              {{ item.icono }}
            </v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.nombre" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-main>
      <nuxt />
    </v-main>

    <v-footer
      :absolute="!fixed"
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
        { nombre: 'prueba', icono: 'mdi-account', to: '/prueba' },
        { nombre: 'prueba1', icono: 'mdi-account', to: '/prueba1' },
        { nombre: 'WhatsApp', icono: 'mdi-whatsapp', to: '/whatsapp' },
        { nombre: 'WhatsApp2', icono: 'mdi-whatsapp', to: '/whatsapp2' },
        { nombre: 'video', icono: 'mdi-video', to: '/video' },
        { nombre: 'ejercicio', icono: 'mdi-video', to: '/ejercicio' }
      ],
      redes: [
        { icono: 'mdi-facebook', to: 'https://www.facebook.com/annk97/' },
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
  color: white;
}
</style>

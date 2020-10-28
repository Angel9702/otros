<template>
  <v-container fluid>
    <v-row>
      <v-col>
        <v-text-field id="Texto" v-model="fruta" outlined label="Ingresar Frutas" class="texto2" />
        L<v-btn />
      </v-col>
      <v-col>
        <v-btn color="primary" @click="Agregar()">
          Agregar
        </v-btn>
      </v-col>
    </v-row>
    <div v-for="(item, index) in frutas" :key="index">
      <ul>
        <li>{{ item }}</li>
      </ul>
    </div>
  </v-container>
</template>
<script>
export default {
  data () {
    return {
      fruta: '',
      frutas: []
    }
  },
  methods: {
    Agregar () {
      this.frutas.push(this.fruta)
      this.fruta = ''
    }
  }
}
</script>
<style lang="scss">
  @import "~/assets/variables.scss";
</style>

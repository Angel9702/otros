<template>
  <v-container>
    <h1>Pokedex</h1>
    <div class="buscador">
      <v-row>
        <v-col cols="12" md="9" sm="8" xs="8">
          <v-text-field
            v-model="nombre"
            outlined
            label="Busca tu Pokemon por nombre o ID"
            style="padding-bottom"
            @keyup.enter="consultaPokemon(nombre)"
            @click="limpiar()"
          />
        </v-col>
        <v-col cols="12" md="3" sm="4" xs="4">
          <v-btn color="primary" outlined text @click="aleatorio()">
            Aleatorio
            <v-icon>
              mdi-shuffle
            </v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </div>
    <v-row justify="center" align-content="center">
      <v-col cols="12" md="8" sm="7" xs="6">
        <h2>{{ pokemon.name }}</h2>
        <div v-if="mostrar === true" style="text-align:center">
          <span>
            {{ `N°${pokemon.id}` }}
          </span>
        </div>
        <div style="text-align:center">
          <!-- <v-img v-if="pokemon.sprites" :src="pokemon.sprites.front_default ? pokemon.sprites.front_default : '' " class="imagen" /> -->
          <v-img :src="url" class="imagen" />
          <!-- <v-img v-if="pokemon.sprites" :src="pokemon.sprites.back_default ? pokemon.sprites.back_default: ''" class="imagen" /> -->
        </div>
        <!-- <v-img v-for="(value, key) in pokemon.sprites" :key="key" :src="key && typeof value === 'string' ? value: ''" class="imagen" /> -->
      </v-col>
      <!-- <div>
        <div v-for="(value, key) in pokemon.abilities" :key="key">
          {{ value.ability.name }}
          {{ value.ability. l}}
        </div>
      </div> -->
      <v-col cols="12" md="4" sm="5" xs="6">
        <div v-if="mostrar === true" class="tipo">
          tipo
          <br>
        </div>
        <div v-for="(value, key) in pokemon.types" :key="key" class="tipoDiv ">
          <v-chip :color="color(value.type.name)" class="textTipo">
            {{ español(value.type.name) }}
          </v-chip>
        </div>
      </v-col>
    <!--<div class="container col-lg-2 col-md-6 col-sm-6 col-xs-6 col-xm-12">
        <div v-if="mostrar === true" class="tipo">
          <div v-for="(value, key) in pokemon.types" :key="key" class="tipoDiv">
            <v-chip :color="color(value.type.name)" class="textTipo">
              {{ español(value.type.name) }}
              {{ español(value.type.name) }}
            </v-chip>
          </div>
        </div>
      </div> -->
    </v-row>
  </v-container>
</template>

<script>
import axios from 'axios'
import ruta from '../pokemonApi'
export default {
  async asyncData () {
    const data = await axios.get(`${ruta.URL}`)
    console.log(data.data)
    return { pokemons: data.data.results }
  },
  data () {
    return {
      url: '',
      numero: '',
      mostrar: false,
      aleatorio1: 0,
      nombre: '',
      pokemons: [],
      pokemon: {}
    }
  },
  methods: {
    async consultaPokemon (nombre) {
      this.mostrar = true
      nombre = nombre.toLowerCase()
      try {
        const data = await axios.get(`${ruta.URL}${nombre}`)
        this.pokemons = []
        // console.log('arreglo', this.pokemon)
        this.pokemon = Object.assign({}, data.data)
        this.numero = this.pokemon.id.toString().padStart(3, '0')
        this.url = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${this.numero}.png`
        console.log(this.url)
        console.log(this.numero)
        console.log(data.data)
        // console.log(data)
      } catch (error) {
        console.log(error)
      }
    },
    limpiar () {
      this.url = ''
      this.mostrar = false
      this.nombre = ''
      this.pokemon = {}
      this.llenarArreglo()
    },
    async llenarArreglo () {
      try {
        const data = await axios.get(`${ruta.URL}`)
        this.pokemons = data.data
      } catch (error) {
        console.log(error)
      }
    },
    async aleatorio () {
      this.nombre = ''
      this.mostrar = true
      this.aleatorio1 = Math.round(Math.random() * (894 - 0) + 0)
      const nombre = this.aleatorio1
      this.numero = this.aleatorio1.toString().padStart(3, '0')
      this.url = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${this.numero}.png`
      console.log(this.aleatorio1)
      try {
        const data = await axios.get(`${ruta.URL}${nombre}`)
        this.pokemons = []
        this.pokemon = Object.assign({}, data.data)
        console.log(data.data)
      } catch (error) {
        console.log(error)
      }
      // return Math.random() * (max - min) + min;
    },
    color (value) {
      console.log(value)
      switch (value) {
        case 'poison':
          return '#ea80fc'
        case 'grass':
          return '#64DD17'
        case 'fire':
          return '#F4511E'
        case 'flying':
          return '#B3E5FC'
        case 'water':
          return '#039BE5'
        case 'bug':
          return '#558B2F'
        case 'normal':
          return '#BDBDBD'
        case 'electric':
          return '#FFEA00'
        case 'ground':
          return '#795548'
        case 'fairy':
          return '#FF8A80'
        case 'psychic':
          return '#E57373'
        case 'steel':
          return '#9E9E9E'
        case 'ice':
          return '#81D4FA'
        case 'rock':
          return '#F9A825'
        case 'ghost':
          return '#7E57C2'
        case 'fighting':
          return '#FF5252'
        case 'dragon':
          return '#F06292'
        case 'dark':
          return '#424242'
        default:
          console.log('no hay xd')
          break
      }
    },
    español (value) {
      console.log(value)
      switch (value) {
        case 'poison':
          return 'veneno'
        case 'grass':
          return 'hierba'
        case 'fire':
          return 'fuego'
        case 'flying':
          return 'volador'
        case 'water':
          return 'agua'
        case 'bug':
          return 'bicho'
        case 'normal':
          return 'normal'
        case 'electric':
          return 'electrico'
        case 'ground':
          return 'tierra'
        case 'fairy':
          return 'hada'
        case 'psychic':
          return 'psiquico'
        case 'steel':
          return 'metal'
        case 'ice':
          return 'hielo'
        case 'rock':
          return 'roca'
        case 'ghost':
          return 'fantasma'
        case 'fighting':
          return 'lucha'
        case 'dragon':
          return 'dragon'
        case 'dark':
          return 'siniestro'
        default:
          console.log('no hay xd')
          break
      }
    }
  }
}
</script>

<style scoped>
h1, h2 {
   text-align:center;
   text-transform: uppercase;
}
/* .buscador {
   align-content: center;
  display: flex;
   margin-left: auto;
  margin-right: auto;
} */
.imagen {
  align-content: center;
  width: 390px;
  display: inline-block;
  margin-left: auto;
  margin-right: auto;
}
.tipoNombre {
  padding: 100px;
  margin: 5opx;
}
.tipo {
  text-align:center;
  align-content: center;
  text-transform: uppercase;
}
.tipoDiv {
  display: inline-block;
  margin-left: auto;
  margin-right: auto;
}
.textTipo {
  color: white;
  font-size: 19px;
  text-transform: uppercase;
  margin: 20px;
}

@media only screen and (max-width: 767px) {
.imagen {
  width: 300px;
  padding: 0%;
  align-content: center;
  display: inline-block;
}
.tipo {
  align-content: center;
  display: inline;
  padding: 10px;
}
.textTipo {
  color: white;
  font-size: 19px;
}
}
</style>

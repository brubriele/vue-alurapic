<template>
  <div>
    <h1 class="center">{{ titulo }}</h1>
    <input type="search" class="filtro"  name="" id="" @input="filtro = $event.target.value" placeholder="Filtre por parte do título">
    <ul class="photo-list">
      <li class="photo-list__item" v-for="foto of fotosComFiltro" v-bind:key="foto._id">
              <meu-painel :titulo="foto.titulo">
                <imagem-responsiva :url="foto.url" :titulo="foto.titulo"/>
              </meu-painel>
      </li>
    </ul>
  </div>
</template>

<script>

import Painel from '../shared/painel/Painel.vue';
import ImagemResponsiva from '../shared/imagem-responsiva/imagemResponsiva.vue';

export default {
  components: {
    'meu-painel': Painel,
    'imagem-responsiva': ImagemResponsiva
  },

  data() {
    return {
      titulo: 'Alura Pic',
      fotos: [],
      filtro: ''
    }
  },
  computed: {
    fotosComFiltro() {
      let exp = new RegExp(this.filtro.trim(), 'i');
      return this.filtro ? this.fotos.filter(foto => exp.test(foto.titulo) ) : this.fotos
    }
  },
  created() {
   this.$http.get('http://localhost:3000/v1/fotos')
    .then(res => res.json())
    .then(fotos => this.fotos = fotos, err => console.log(err));

  }

}
</script>

<style>

  .center {
    text-align: center;
  }

  .photo-list {
    list-style: none;
  }

  .photo-list__item {
    display: inline-block;
  }

   .painel {
    padding: 0 auto;
    border: solid 2px grey;
    display: inline-block;
    margin: 5px;
    box-shadow: 5px 5px 10px grey;
    width: 200px;
    height: 100%;
    vertical-align: top;
    text-align: center;
  }

  .painel .painel-titulo {
    text-align: center;
    border: solid 2px;
    background: lightblue;
    margin: 0 0 15px 0;
    padding: 10px;
    text-transform: uppercase;
  }

  .filtro {
    display: block;
    width: 100%;
  }


</style>

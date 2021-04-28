<template>
<div class="body">
  <h1 class="center">{{ titulo }}</h1>

  <ul class="photo-list">
    <li class="photo-list__item" v-for="foto of fotos" v-bind:key="foto._id">
            <meu-painel :titulo="foto.titulo">
              <img :src="foto.url" :alt="foto.itulo" srcset="" class="responsive-img">
            </meu-painel>
    </li>
  </ul>
</div>

</template>

<script>

import Painel from './components/shared/painel/Painel.vue'
export default {
  components: {
    'meu-painel': Painel
  },

  data() {
    return {
      titulo: 'Alura Pic',
      fotos: []
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
  .body {
    font-family: Helvetica, sans-serif;
    width: 71%;
    margin: 0 auto;
  }

  .center {
    text-align: center;
  }

  .photo-list {
    list-style: none;
  }

  .photo-list__item {
    display: inline-block;
  }

  .responsive-img {
    width: 100%;
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


</style>

<template>
  <div>
    <h1 class="center">{{ titulo }}</h1>
    <p v-show="mensagem" class="centralizado">{{ mensagem }}</p>
    <input type="search" class="filtro"  name="" id="" @input="filtro = $event.target.value" placeholder="Filtre por parte do título">
    <ul class="photo-list">
      <li class="photo-list__item" v-for="foto of fotosComFiltro" v-bind:key="foto._id">
              <meu-painel :titulo="foto.titulo" >
                <!-- Add reverse modifier -->
                <!-- <imagem-responsiva :url="foto.url" :titulo="foto.titulo" v-meu-transform.animate.reverse="15"/> -->

                <imagem-responsiva :url="foto.url" :titulo="foto.titulo" v-meu-transform:scale.animate="1.1"/>
                <router-link :to="{ name: 'altera', params: { id: foto._id } }">
                  <meu-botao tipo="button" rotulo="ALTERAR"/>
                </router-link>
                <meu-botao
                tipo="botao"
                rotulo="REMOVER"
                @botaoAtivado="remove(foto)"
                :confirmacao="false"
                estilo="perigo"/>
              </meu-painel>
      </li>
    </ul>
  </div>
</template>

<script>

import Painel from '../shared/painel/Painel.vue';
import ImagemResponsiva from '../shared/imagem-responsiva/imagemResponsiva';
import Botao from '../shared/botao/Botao.vue';
import transform from '../../directives/Transform';
import FotoService from '../../domain/foto/FotoService';

export default {
  components: {
    'meu-painel': Painel,
    'imagem-responsiva': ImagemResponsiva,
    'meu-botao': Botao
  },
  directives:
  {
    'meu-transform': transform
  },

  data() {
    return {
      titulo: 'Alura Pic',
      fotos: [],
      filtro: '',
      mensagem: ''
    }
  },
  computed: {
    fotosComFiltro() {
      let exp = new RegExp(this.filtro.trim(), 'i');
      return this.filtro ? this.fotos.filter(foto => exp.test(foto.titulo) ) : this.fotos
    }
  },
  methods: {
    remove (foto) {
      // alert('remover a foto!' + foto._id)
      this.service.apaga(foto._id)
     .then(() => {
       let indice = this.fotos.indexOf(foto);
       this.fotos.splice(indice, 1);
       this.mensagem = "Foto removida com sucesso"
       }, err => {
       this.mensagem = err.message;
       })
    }
  },
  created() {

    this.service = new FotoService(this.$resource);
    this.service
      .lista()
      .then(fotos => this.fotos = fotos, err => this.mensagem = err.message);
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

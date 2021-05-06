<template>
<button @click="disparaAcao()" class="botao botao-perigo" :type="tipo">{{ rotulo }}</button>

</template>

<script>
export default {
  props: ['tipo', 'rotulo', 'confirmacao'],

  methods: {
    disparaAcao() {
      console.log(typeof this.confirmacao)
      if (this.confirmacao) {
        if(confirm('Confirma operação?')) {
          this.$emit('botaoAtivado')
        }
        return;
      }
      this.$emit('botaoAtivado')
    }
  }
}
</script>

<style>
 .botao {
        display: inline-block;
        padding: 10px;
        border-radius: 3px;
        margin: 10px;
        font-size: 1.2em;
    }

    .botao-perigo {
        background: firebrick;
        color: white;
    }

    .botao-padrao {
        background: darkcyan;
        color: white;
    }

</style>

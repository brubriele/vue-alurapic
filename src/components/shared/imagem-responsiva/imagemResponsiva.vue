<template>
  <img :src="url" :alt="titulo" srcset="" class="responsive-img">
</template>

<script>

export default {
 props: ['url', 'titulo']
}
</script>

<style scoped>
  .responsive-img {
    width: 100%;
  }
</style>


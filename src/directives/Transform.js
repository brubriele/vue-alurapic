import Vue from 'vue';

Vue.directive('meu-transform', {
  bind (el, binding, vnode) {
    console.log('diretiva associada')
    console.log(el)
    let current = 0;

    el.addEventListener('dblclick', function () {
      current+=90;
      el.style.transform = `rotate(${current}deg)`
    })
  }
});

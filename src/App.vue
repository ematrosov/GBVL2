<template>
  <div>
    <Header :message="msg" />
    <button @click="changeMsg">Click</button>

    <ButtonCounter @clicked="onButtenCounterClick" />
    {{ counter }}
  </div>
</template>

<script>
import Header from './Components/Header.vue';
import ButtonCounter from './Components/ButtonCounter'

export default {
  data() {
    return {
      msg: "My Header From App.vue",
    };
  },
  components: {
    Header,
    ButtonCounter,
  },
  methods: {
      changeMsg () {
          this.msg = 'My new massage From App.vue'
      },
      onButtenCounterClick ({ cnt }) {
          this.counter = cnt
        }
}   
</script>

<style module>
.myheader {
  color: red;
}
</style>

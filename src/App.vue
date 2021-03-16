<template>
  <div>
    <Header :message="msg" />
    <List />
    <AddForm />
  </div>
</template>

<script>
import Header from './Components/Header.vue';
import List from './Components/list.vue';
import AddForm from './Components/AddForm.vue'

export default {
  data() {
    return {
      msg: "My Header From App.vue",
    };
  },
  components: {
    Header,
    List,
    AddForm,
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

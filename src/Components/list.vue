<template>
  <div>
    <CartItem v-for="id in productsArray" :id="id" :key="id" />
  </div>
</template>

<script>
import { mapMutations, mapGetters, mapActions } from "vuex";
import CartItem from './Cartitem.vue'
export default {
    components: {
        CartItem,
    },
  methods: {
    ...mapMutations(["setData"]),
  },
  computed: {
      ...mapGetters([
          'getData',
          'getFullPrice'
      ]),
  },
    myState() {
      return this.$store.getters.getData;
    },
  },
  created() {
    this.setData({
      newData: {
        1: { id: 1, name: "Shirt", price: 150, img: "/img/gb.png" },
        2: { id: 2, name: "Socks", price: 250, img: "/img/gb.png" },
        3: { id: 3, name: "Jacket", price: 750, img: "/img/gb.png" },
      },
    });
  },
};
</script>

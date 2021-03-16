<template>
  <div>
    <CartItem v-for="id in getItemsOnPage" :id="id" :key="id" />
    <button @clicked="loadMoreData">Загрузить еще</button>
  </div>
</template>

<script>
import { mapMutations, mapActions } from "vuex";
import CartItem from "./Cartitem.vue";
import Button from "./Button";
import Button from "./Button.vue";
import Button from "./Button.vue";
export default {
  components: {
    CartItem,
    Button,
    Button,
    Button,
  },
  data() {
    return {
      page: 0,
    };
  },
  methods: {
    ...mapActions(["requestData"]),
    loadMoreData() {
      this.page++;
      this.requestData(this.page);
    },
  },
  computed: {
    ...mapGetters(["getItemsOnPage", "getFullPrice"]),
  },

  created() {
    this.loadMoreData();
  },
};
</script>

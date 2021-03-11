<template>
  <div></div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  props: {
    id: Number,
  },
  computed: {
    ...mapGetters(["getData"]),
    getItemData() {
      return this.getData[this.id];
    },
  },
};
</script>
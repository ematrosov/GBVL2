<template>
  <button @click="onClick">click</button>
</template>

<script>
export default {
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    onClick() {
      this.counter++;
      this.$emit("clicked", { cnt: this.counter });
    },
  },
  beforeCreate() {
    this.counter = 1;
  },
  created() {
    this.counter = 2;
  },
  mounted() {},
};
</script>

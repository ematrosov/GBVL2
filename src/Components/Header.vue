<template>
  <div :class="[$style.myheader]">HEADER</div>
</template>

<script>
export default {
  props: {
    message: String,
  },
};
</script>

<style module>
.myheader {
  color: red;
}
</style>


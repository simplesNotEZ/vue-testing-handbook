<template>
  <div>
    <div class="fullname">
      {{ fullname }}
    </div>
  </div>
</template>

<script>
export default {
  name: "ComponentWithVuex",

  data() {
    return {
      fullname: this.$store.getters.fullname
    };
  }
};
</script>

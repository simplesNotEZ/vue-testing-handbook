<template>
  <div></div>
</template>

<script>
export default {
  name: "Emitter",

  methods: {
    emitEvent() {
      this.$emit("crazyEvent", "name", "password");
    }
  }
};
</script>

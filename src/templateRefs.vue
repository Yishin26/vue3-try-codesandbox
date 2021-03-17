<template>
  <div class="template-refs">
    <input type="text" ref="name" />
    <button @click="handleClick()">Click-me</button>
  </div>
</template>

<script>
export default {
  name: "TemplateRefs",
  methods: {
    handleClick() {
      console.log(this.$refs.name);
      this.$refs.name.classList.add("active");
      this.$refs.name.focus();
    },
  },
};
</script>

<style lang="scss">
.template-refs {
  margin-top: 20px;
}
</style>
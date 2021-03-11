<template>
  <div class="model-button">
    <button @click="modalOpen = true">
      Open full screen modal! (With teleport!)
    </button>

    <teleport to="div">
      <div v-if="modalOpen" class="modal">
        <div>
          I'm a teleported modal!
          <button @click="modalOpen = false">Close</button>
        </div>
      </div>
    </teleport>
  </div>
</template>

<script>
export default {
  name: "ModelButton",
  data() {
    return {
      modalOpen: false,
    };
  },
};
</script>

<style lang='scss'>
.modal {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  div {
    color: black;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: white;
    width: 300px;
    height: 300px;
    padding: 5px;
  }
}
</style>
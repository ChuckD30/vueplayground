<template>
  <div class="home">
    <h1>This is the modal page</h1>
    <button @click="toggleModal">Open</button>
    <transition name="fade">
      <div v-if="isOpen" class="modal">
        <button @click="toggleModal">Close</button>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false
    }
  },
  methods: {
    toggleModal() {
      this.isOpen = !this.isOpen
    }
  }
}
</script>

<style>

</style>

<template>
  <div>
    <input type="text" v-model="newContact" placeholder="Name" />
    <button @click="addContact">Add Contact</button>

    <transition-group tag="ul" name="slide-up">
      <li v-for="contact in contacts" :key="contact">
        {{ contact }}
      </li>
    </transition-group>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newContact: '',
      contacts: ['David Chuka', 'Aisha Eyitayo', 'Tammy Daggz']
    }
  },
  methods: {
    addContact() {
      this.contacts.push(this.newContact)
      this.newContact = ''
    }
  }
}
</script>

<style>
input {
  height: 25px;
}

button {
  width: 100px;
  height: 50px;
}

ul {
  list-style-type: none;
}

.slide-up-enter {
  transform: translateY(10px);
  opacity: 0;
}

.slide-up-enter-active {
  transition: all 0.2s ease;
}
</style>

<template>
  <button @click.prevent="activate">+2</button>
</template>

<script>
import store from '../../store'

export default {
  methods: {
    activate () {
      store.commit('INCREMENT_DOUBLE')
    }
  }
}
</script>
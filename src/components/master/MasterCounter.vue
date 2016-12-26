<script>
import store from '../../store'

export default {
  methods: {
    activate () {
      store.dispatch('INCREMENT')
    }
  }
}
</script>
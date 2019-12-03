<template>
  <div id="root">
    <p>{{ greeting }} 分待ち</p>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      greeting: '通信中'
    }
  },
  created() {
    axios.get('/getWaitingTime')
      .then(response => {
        this.greeting = response.data;
      })
  }
}
</script>

<style scoped>
p {
  font-size: 2em;
  text-align: center;
}
</style>
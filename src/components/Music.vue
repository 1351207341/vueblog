<template>
  <div class="music">
    <audio controls>
      <source src="/static/music.mp3" type="audio/mpeg"> 
    </audio>
  </div>
</template>

<script>
export default {
  name: 'music',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    audio_context: function (argument) {
      var context = new AudioContext()
      var source = context.createBufferSource()
      // source.buffer = dogBarkingBuffer
      source.connect(context.destination)
      source.start(0)
    }
  }
}
</script>
<style scoped>

</style>

<template>
  <Navbar />
  <router-view/>
  <Footer />
</template>
<script>
  import Navbar from './components/Navbar.vue'
  import Footer from './components/Footer.vue'

  export default {
    components: {
      Navbar,
      Footer
    }
  }

</script>


<style lang="scss">
  @import "./assets/scss/main.scss";

  body {
    font-size: 17px;
    font-family: 'Noto Sans JP', sans-serif;
    font-family: 'Noto Sans TC', sans-serif;
    font-family: 'Source Sans Pro', sans-serif;
    background-color: $lightGreen;
    overflow-x: hidden;
  }
</style>

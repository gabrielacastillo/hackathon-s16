<template>
  <div id="app" class="body">
    <Header nombreNegocio="Gabthy's :D"/>
    <Navigation/>
    <div class="main">
      <router-view/>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import Navigation from '@/components/Navigation.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'App',
  components: {
    Header, Navigation, Footer,
  },
};
</script>

<style lang="scss">
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.body{
  display: grid;
  grid-template-columns: repeat(5, 1fr);
}

.header{
  /* text-align: center; */
  background-color: #00204a;
  grid-column: span 5;
}

.navigation{
  background-color: #2c438d;
  grid-column: span 5;
}

.main{
  /* background-color: #3298dc; */
  grid-column: span 5;
}

.footer{
  text-align: center;
  background-color: #f14668;
  grid-column: span 5;
}
</style>

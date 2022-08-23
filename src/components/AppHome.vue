<template>
  <!-- 幻燈片 -->
  <div class="headerCarousel">
    <Splide :options="{ rewind: true }">
      <SplideSlide>
        <img v-bind:src="img1">
      </SplideSlide>
      <SplideSlide>
        <img v-bind:src="img2">
      </SplideSlide>
    </Splide>
  </div>
</template>

<script>
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
export default {
  name: 'AppHome',
  components: { Splide, SplideSlide },
  data(){
    return{
      img1: require('../assets/Image/outside/P_20180413_145455.jpg'),
      img2: require('../assets/Image/outside/P_20180413_145313.jpg')
    }
  }
}
</script>

<style lang="scss" scoped>
.headerCarousel{
  img{
    width: 100%;
    height: 800px;
  }
}
</style>
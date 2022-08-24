<template>
  <!-- 幻燈片 -->
  <div class="headerCarousel">
    <Splide :options="{ rewind: true }">
      <SplideSlide v-for="(item) in Img" :key="item">
        <img v-bind:src="item.img" alt="error" style="width:100%">
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
      Img:[
        {img: require('../assets/Image/outside/P_20180413_145455.jpg')},
        {img: require('../assets/Image/outside/P_20180413_145313.jpg')},
        {img: require('../assets/Image/equipment/P_20180413_145423.jpg')},
      ] 
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
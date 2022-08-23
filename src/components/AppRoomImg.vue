<template>
<div class="dataDisplay">
  <div class="container-fluid">
    <div class="row justify-content-center">
      <div class="col-12 col-lg-3 imgInfo">
        <Splide :options="{ rewind: true }">
          <SplideSlide v-for="(item) in roomImg" :key="item">
            <img v-bind:src="item.img" alt="error" style="width:100%">
          </SplideSlide>
        </Splide>
        <h1 id="room"><b>套房環境</b></h1>
          <ul>
            <li><h4>冷氣</h4></li>
            <li><h4>單人床</h4></li>
            <li><h4>衣櫃</h4></li>
            <li><h4>書桌椅</h4></li>
            <li><h4>網路</h4></li>
            <li><h4>電熱水器</h4></li>
          </ul>
      </div>

      <div class="col-12 col-lg-3 imgInfo">
        <Splide :options="{ rewind: true }">
          <SplideSlide v-for="(item) in outsideImg" :key="item">
            <img v-bind:src="item.img" alt="error" style="width:100%">
          </SplideSlide>
        </Splide>
        <h1 id="env"><b>周邊設施</b></h1>
          <ul>
            <li><h4>投幣式洗衣機</h4></li>
            <li><h4>晒衣場</h4></li>
            <li><h4>機車停車場</h4></li>
            <li><h4>門禁管制</h4></li>
          </ul>
      </div>
    </div>
  </div>
</div>

</template>

<script>
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
export default{
    name: 'AppRoomImg', 
    components: { Splide, SplideSlide },
    data(){
      return {
        roomImg:[
          {img: require('../assets/Image/room/3B-1.jpg')},
          {img: require('../assets/Image/room/3B-3.jpg')},
          {img: require('../assets/Image/room/5A-1.jpg')},
        ], 
        outsideImg :[
          {img: require('../assets/Image/equipment/P_20180413_144403.jpg')},
          {img: require('../assets/Image/equipment/P_20180413_144538.jpg')}
        ]
          
      }        
    }
}
</script>

<style>
.imgInfo{
  background-color:rgb(222, 244, 244);
  height:auto;
  margin:1%; 
}

li{
  text-align: left;
}
</style>
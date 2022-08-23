<template>
  <!--跑馬燈-->
  <div class="marquee">
    <div class="text">。鄰近逢甲大學、僑光科技大學 。通勤便利，飲食多樣 。環境清幽，採光佳 。附有機車停車位及洗衣設備 。租金平易近人</div>
  </div>

  <section class="roomInfoSection">
    <div class="container">
      <div class="row">
        
        <!--套房資訊-->
        <div class="col-12 col-lg-6">
          <div class="infoTextContainer">
              <h2><b>套房資訊</b></h2>
              <ul>
                <li>位置: 位於烈美街，西平公園對面巷子，巷口有美而美早餐店</li>
                <li>房租: 22000~23000/半年(不含水電費)</li>
                <li>房間坪數: 約4坪</li>
                <li>房間設備: 冷氣、床、衣櫃、書桌、有線網路</li>
                <li>公共設施: 洗衣機、晒衣場、飲水機、門禁管制</li>
              </ul>
          </div>
        </div>

        

        <!--地圖-->
        <div class="col-12 col-lg-6">
          <div class="iframe-rwd">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1530.3448618298464!2d120.64110348301068!3d24.17895645545411!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3469161896dd5713%3A0xde75aece09782260!2zNDA35Y-w5Lit5biC6KW_5bGv5Y2A54OI576O6KGXNTXlt7c!5e0!3m2!1szh-TW!2stw!4v1651806364427!5m2!1szh-TW!2stw" 
                    style="border:0;" 
                    allowfullscreen="" 
                    loading="lazy" 
                    referrerpolicy="no-referrer-when-downgrade">
            </iframe>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script>
export default {
    name: 'AppHomePage',
    date(){
        return{
        }
    }
}
</script>

<style lang="scss" scoped>

/*跑馬燈*/
.marquee{
  font-size: 5vmin;
  color: red;
  margin: 2%;
  overflow: hidden;

  .text{
    position: relative;
    transform: translateX(10%);
    white-space:nowrap; /*強迫文字不換行*/
    animation: marqueeRunLeft linear 20s infinite; 
  }
}


/* 簡介文字 & 地圖*/
.roomInfoSection{
  /*簡介文字*/
  .infoTextContainer{
    background-color:rgb(186, 233, 217);
    padding: 8%;
    width: 100%;
    animation: infoRunRight 2s ease;

    h2{
      text-align:center;
      margin: 2%;
    }

    ul{
      text-align-last: left;
      font-size:2.5vmin;
    }
  }

  /*地圖*/
  .iframe-rwd {
    position: relative;
    padding-bottom: 60%;
    padding-top: 30px;
    height: 0;
    overflow: hidden;

    iframe {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }
}

@keyframes marqueeRunLeft {
  0%{
      transform:translateX(100%);
  }
  100%{
      transform:translateX(-160%);
  }
}

@keyframes infoRunRight {
  0%{
    transform:translateX(-50%);
  }
  100%{
    transform:translateX(0%);
  }
}

</style>
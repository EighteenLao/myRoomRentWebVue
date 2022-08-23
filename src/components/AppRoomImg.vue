<template>
    <div class="container">
        <div class="row">
            <!--套房環境-->
            <div class="col-12 col-lg-6">
            <div class="title">
                <h1 id="room"><b>套房環境</b></h1>
                <ul>
                    <li>冷氣</li>
                    <li>單人床</li>
                    <li>衣櫃</li>
                    <li>書桌椅</li>
                    <li>有線網路</li>
                </ul>
            </div>
            </div>
            <!--套房相片-->
            <div class="col-12 col-lg-6">
            <div class="carouselContainer">
                <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="../assets/Image/room/3B-1.jpg" class="d-block w-100" alt="...">
                    </div>
                    <div class="carousel-item">
                        <img src="../assets/Image/room/3B-3.jpg" class="d-block w-100" alt="...">
                    </div>
                    <div class="carousel-item">
                        <img src="../assets/Image/room/5A-1.jpg" class="d-block w-100" alt="...">
                    </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                    </button>
                </div>      
            </div>
            </div>
        </div>

        <div class="row">
            <!--套房相片-->
            <div class="col-12 col-lg-6">
            <div class="carouselContainer" style='width: 70%;'>
                <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="../assets/Image/room/4B-2.jpg" class="d-block w-100" alt="...">
                    </div>
                    <div class="carousel-item">
                        <img src="../assets/Image/room/5A-2.jpg" class="d-block w-100" alt="...">
                    </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                    </button>
                </div>      
            </div>
            </div>
            <!--套房環境-->
            <div class="col-12 col-lg-6">
            <div class="title">
                <h1 id="bath"><b>衛浴環境</b></h1>
                <ul>
                    <li>坐式馬桶</li>
                    <li>電熱水器</li>
                    <li>附鏡子的洗手台</li>
                </ul>
            </div>
            </div>
        </div>

        <div class="row">
            <!--套房環境-->
            <div class="col-12 col-lg-6">
                <div class="title">
                    <h1 id="env"><b>周邊設施</b></h1>
                    <ul>
                        <li>投幣式洗衣機</li>
                        <li>晒衣場</li>
                        <li>機車停車場</li>
                        <li>門禁管制</li>
                    </ul>
                </div>
            </div>
            <!--套房相片-->
            <div class="col-12 col-lg-6">
                <div class="carouselContainer" style='width: 70%;'>
                    <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                        <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src="../assets/Image/equipment/P_20180413_144403.jpg" class="d-block w-100" alt="...">
                        </div>
                        <div class="carousel-item">
                            <img src="../assets/Image/equipment/P_20180413_144538.jpg" class="d-block w-100" alt="...">
                        </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                        </button>
                    </div>      
                </div>
            </div>
                
            </div>
    </div>
</template>

<script>
export default{
    name: 'AppRoomImg',
    data(){
        
    }
}
</script>

<style>
  .roomInfoSection {
  /*簡介文字*/
  /*地圖*/
}

  .roomInfoSection .infoTextContainer {
  background-color: #bae9d9;
  padding: 5%;
  width: 100%;
  -webkit-animation: runTop 2s ease;
          animation: runTop 2s ease;
}

  .roomInfoSection .infoTextContainer h2 {
  text-align: center;
  margin: 2%;
}

  .roomInfoSection .infoTextContainer ul {
  text-align-last: left;
  font-size: 2.5vmin;
}

@-webkit-keyframes runTop {
  0% {
    -webkit-transform: translateX(-40%);
            transform: translateX(-40%);
  }
  100% {
    -webkit-transform: translateX(0%);
            transform: translateX(0%);
  }
}

@keyframes runTop {
  0% {
    -webkit-transform: translateX(-40%);
            transform: translateX(-40%);
  }
  100% {
    -webkit-transform: translateX(0%);
            transform: translateX(0%);
  }
}

  .roomInfoSection .iframe-rwd {
  position: relative;
  padding-bottom: 60%;
  padding-top: 30px;
  height: 0;
  overflow: hidden;
}

  .roomInfoSection .iframe-rwd iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

  .roomImgSection .row {
  margin: 4% 0;
}

  .roomImgSection .title {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
  width: 80%;
  height: 400px;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
}

  .roomImgSection .title h1 {
  font-size: 6vmin;
  margin: 5%;
}

  .roomImgSection .title ul li {
  font-size: 3vmin;
}

@media (max-width: 768px) {
    .headerCarousel .carouselContainer img {
    height: 300px;
  }
    .roomInfoSection .infoTextContainer ul {
    font-size: 4vmin;
  }
}
</style>
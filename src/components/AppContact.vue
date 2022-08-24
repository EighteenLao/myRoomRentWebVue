<template>
    <h1><b>聯絡資訊</b></h1>
    <div class="contractText">
        <h3>備註: 不可養寵物、室內禁菸、禁用瓦斯明火</h3>
        <h3>連絡電話: 0965651460</h3>
        <h3>聯絡人: 楊太太</h3>
    </div>

    <div class="endingContainer">
        <div class="container">
            <div class="row">
                <div class="col-12 col-md-3">
                    <img src="../assets/penguinGif.gif" style="width:20%">
                </div>
                <div class="col-12 col-md-6">
                    <p class="welcome">~歡迎來電洽訊~</p>
                </div>
                <div class="col-12 col-md-3">
                    <img src="../assets/penguinGif.gif" style="width:20%">
                </div>
            </div>
        </div>
    </div>
    
</template>

<script>
export default{
    name: 'AppContact',
    data(){
        
    }
}
</script>

<style lang="scss" scoped>
.contractText{
    margin: 1%;
}

.container{
    margin: 5% auto;

    img{
        display: block;
        margin: auto;
    }

    .welcome{
        padding: 1%;
        text-align: center;
        font-size: 8vmin;
        font-weight: 600;
        animation: color-change 3s infinite;
    }
}

@keyframes color-change {
    0% { color: red; }
    30% { color: green; }
    60% { color: blue; }
    100% { color: red; }
}
</style>
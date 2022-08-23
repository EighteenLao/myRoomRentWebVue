<template>
    <div class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
        <!--<a class="navbar-brand" href="#">Navbar</a>-->
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link">
                            <router-link to="/AppHome">首頁 </router-link>
                        </a> 
                    </li>
                    <li class="nav-item">
                        <a class="nav-link">
                            <router-link to="/AppHomePage">套房資訊 </router-link>
                        </a>    
                    </li>
                    <li class="nav-item">
                        <a class="nav-link">
                            <router-link to="/AppRoomImg">套房環境 </router-link>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link">
                            <router-link to="/AppContact">聯絡資訊 </router-link>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'AppNav'
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/nav.scss';
</style>
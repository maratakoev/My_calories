<template>
  <div class="home">
    <div class="content">
      <Header> Главная</Header>
      <!-- <DailyNorm></DailyNorm> -->
      <Bottom-bar></Bottom-bar>

    </div>
  </div>
</template>

<script>
import DailyNorm from '@/components/DailyNorm.vue';
import Header from '@/components/Header.vue';
import BottomBar from '@/components/BottomBar.vue';

export default {
  
  name: "HomeView",
  components: {
    Header, DailyNorm, BottomBar
  },
};
</script>

<style >

.home {
  width: 100%;
  height: 200vh;
  background-color: #C8D2D1;
  /* background-image: url('@/assets/call_wallper.png'); */
  background-size: cover;
  background-position: center;
  background-attachment: fixed; 
}

.content {
  /* min-width: 380px; */
  height: 100vh;
  margin: 0 auto;
  z-index: 2;
  display: flex;
  flex-direction: column;
}
</style>

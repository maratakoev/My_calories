<template>
  <div class="home">
    <div class="content">
      <Header></Header>
      <DailyNorm></DailyNorm>

    </div>
    
  </div>
</template>

<script>
import DailyNorm from '@/components/DailyNorm.vue';
import Header from '@/components/Header.vue';

export default {
  
  name: "HomeView",
  components: {
    Header, DailyNorm,
  },
};
</script>

<style scoped>

.home {
  width: 100%;
  height: 200vh;
  background-image: url('@/assets/call_wallper.png');
  background-size: cover;
  background-position: center;
  background-attachment: fixed; 
}

.content {
  width: 300px;
  height: 100vh;
  margin: 0 auto;
  z-index: 2;
  display: flex;
  flex-direction: column;
}
</style>

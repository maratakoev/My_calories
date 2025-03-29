<template>
  <div class="home">
    <div class="content">
      <Header></Header>

    </div>
    
  </div>
</template>

<script>
import Header from '@/components/Header.vue';

export default {
  
  name: "HomeView",
  components: {
    Header, 
  },
};
</script>

<style scoped>

.home {
  width: 100%;
  height: 100vh;
  background-image: url('@/assets/call_wallper.png');
  background-size: cover;
  background-position: center;
  background-attachment: fixed; 
}

.content {
  width: 600px;
  height: 100vh;
  margin: 0 auto;
  z-index: 2;
  display: flex;
  flex-direction: column;
}
</style>

<template>
  <div class="profile">
    <div class="content">
      <Header></Header>
      <p>Личный профиль</p>
    </div>
    <BottomBar></BottomBar>
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import BottomBar from '@/components/BottomBar.vue';

export default {
  name: "ProfileView",
  components: { Header, BottomBar }
};
</script>

<style>
.profile {
  width: 100%;
  height: 100vh;
  background-color: blue;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>

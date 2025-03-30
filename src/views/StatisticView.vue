<template>
  <div class="statistic">
    <div class="content">
      <Header></Header>
      <p>Статистика</p>
    </div>
    <BottomBar></BottomBar>
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import BottomBar from '@/components/BottomBar.vue';

export default {
  name: "StatisticView",
  components: { Header, BottomBar }
};
</script>

<style>
.statistic {
  width: 100%;
  height: 100vh;
  background-color: lightgreen;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>

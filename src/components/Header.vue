<template>
  <div class="header">
    <img class="header__logo" src="@/assets/logo.png">
    <h1 class="header__title"><slot></slot></h1>
  </div>
</template>

<script setup>


</script>

<style scoped>
.header {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
}

.header__logo {
  width: 70px;
  margin: 0 auto;
  /* height: 100px; */
  color: white;

}

.header__title {
  margin: 0;
  padding: 0;
  font-size: 24px;
  color: #DA6A00;
  
}

</style>
<template>
  <div class="header">
    <img class="header__logo" src="@/assets/logo.png">
    <h1 class="header__title">My calories</h1>
  </div>
</template>

<script setup>


</script>

<style scoped>
.header {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.header__logo {
  width: 100px;
  margin: 0 auto;
  /* height: 100px; */
  color: white;

}

.header__title {
  margin: 0;
  padding: 0;
  
}

</style>
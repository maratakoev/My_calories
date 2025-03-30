<template>
  <div class="bottom-bar">
    <div class="content">
      
      <!-- Кнопки меню -->
      <button 
        v-for="item in menuItems" 
        :key="item.id"
        class="menu-button"
        @click="handleMenuClick(item.action)"
      >
        <img :src="item.icon" alt="icon" class="icon" />
        <span class="label">{{ item.label }}</span>
      </button>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const menuItems = [
  { id: 1, icon: require('@/assets/home.png'), label: 'Главная', action: 'home' },
  { id: 2, icon: require('@/assets/statistic.png'), label: 'Статистика', action: 'statistic' },
  { id: 3, icon: require('@/assets/profile.png'), label: 'Профиль', action: 'profile' }
];


const handleMenuClick = (action) => {
  router.push({ name: action });
};
</script>

<style scoped>
.bottom-bar {
  width: 100%;
  height: 100px;
  background-color: #68904D; /* Цвет фона */
  position: fixed;
  bottom: 0;
  left: 0;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);
  z-index: 1000;
}

.content {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  max-width: 800px;
  margin: 0 auto;
}

.menu-button {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: none;
  color: #14471E;
  cursor: pointer;
  padding: 8px 5%;
  transition: all 0.3s ease;
}

.menu-button:hover {
  transform: translateY(-3px);
}

.icon {
  width: 35px;
  font-size: 25px;
  margin-bottom: 2px;
}

.label {
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 15px;

}

/* Адаптивность для мобильных устройств */
/* @media (max-width: 480px) {
  .bottom-bar {
    height: 90px;
  }
  
  .icon {
    font-size: 18px;
  }
  
  .label {
    font-size: 10px;
  }
} */
</style>

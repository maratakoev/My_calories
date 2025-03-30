<template>
  <div class="water-indicator">
    <h4 class="indicator-title">Вода</h4>
    <div class="water-container">
      <!-- Фон контейнера -->
      <div class="water-background"></div>
      
      <!-- Вода с анимацией волны -->
      <div 
        class="water-fill"
        :style="{ height: fillHeight }"
      >
        <div class="water-wave"></div>
      </div>
      
      <!-- Деления шкалы -->
      <div class="water-scale">
        <div 
          v-for="mark in scaleMarks" 
          :key="mark"
          class="scale-mark"
          :style="{ bottom: `${mark}%` }"
        ></div>
      </div>
      
      <!-- Текущее значение -->
      <div class="water-amount">
        {{ current }} / {{ goal }} мл
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  current: { type: Number, default: 1200 }, // Текущее количество воды
  goal: { type: Number, default: 2500 }     // Целевое количество
});

const fillHeight = computed(() => {
  const percentage = Math.min((props.current / props.goal) * 100, 100);
  return `${percentage}%`;
});

// Деления шкалы (каждые 25%)
const scaleMarks = computed(() => {
  return Array.from({ length: 4 }, (_, i) => i * 25);
});
</script>

<style scoped>
.water-indicator {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80px;
}

.indicator-title {
  font-weight: bold;
  color: #1E88E5;
  margin-bottom: 10px;
}

.water-container {
  position: relative;
  width: 80px;
  height: 145px;
  background-color: #E3F2FD;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.1);
}

.water-background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(to bottom, #BBDEFB, #E3F2FD);
}

.water-fill {
  position: absolute;
  bottom: 0;
  width: 100%;
  background: #4FC3F7;
  transition: height 0.8s ease-out;
}

.water-wave {
  position: absolute;
  top: -10px;
  left: 0;
  width: 200%;
  height: 20px;
  background: url('data:image/svg+xml;utf8,<svg viewBox="0 0 120 20" xmlns="http://www.w3.org/2000/svg"><path d="M0,10 C30,15 50,5 80,10 C110,15 130,5 160,10 L160,20 L0,20 Z" fill="%234FC3F7"/></svg>');
  animation: wave 3s linear infinite;
  opacity: 0.8;
}

.water-scale {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

.scale-mark {
  position: absolute;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: rgba(255, 255, 255, 0.3);
}

.water-amount {
  position: absolute;
  bottom: -30px;
  width: 100%;
  text-align: center;
  font-size: 12px;
  font-weight: bold;
  color: #0D47A1;
}

@keyframes wave {
  0% { transform: translateX(0) translateY(0); }
  50% { transform: translateX(-25%) translateY(-3px); }
  100% { transform: translateX(-50%) translateY(0); }
}
</style>
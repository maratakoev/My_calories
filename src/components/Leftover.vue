<template>
  <div class="calorie-ring">
    <h4 class="title">Еда</h4>
    <svg :width="size" :height="size" viewBox="0 0 100 100">
      <!-- Задний серый круг -->
      <circle class="ring-bg" cx="50" cy="50" r="45" stroke-width="8" />
      <!-- Заполняемый круг -->
      <circle
        class="ring-progress"
        cx="50"
        cy="50"
        r="45"
        stroke-width="8"
        :stroke-dasharray="circumference"
        :stroke-dashoffset="progressOffset"
        transform="rotate(-90 50 50)"
      />
      <!-- Текст в центре -->
      <text x="50" y="55" text-anchor="middle" class="ring-text">
        {{ remainingCalories }}
      </text>
    </svg>
  </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  maxCalories: Number, // Максимальное количество калорий в день
  remainingCalories: Number, // Оставшиеся калории
  size: {
    type: Number,
    default: 100
  }
});

// Вычисляем длину окружности
const circumference = 2 * Math.PI * 45;

// Вычисляем смещение для заполнения
const progressOffset = computed(() => {
  const percentage = props.remainingCalories / props.maxCalories;
  return circumference * (1 - Math.max(percentage, 0));
});
</script>

<style scoped>
.calorie-ring {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.title {
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 10px;
  color: #DA6A00;
}

.ring-bg {
  fill: none;
  stroke: #ddd;
}

.ring-progress {
  fill: none;
  stroke: #EE9B01; /* Цвет индикатора */
  stroke-linecap: round;
  transition: stroke-dashoffset 0.5s;
}

.ring-text {
  font-size: 18px;
  font-weight: bold;
  fill: #DA6A00;
}
</style>

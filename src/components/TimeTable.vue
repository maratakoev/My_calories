<template>
  <div class="ios-calorie-input">
    <h4>Учет калорий</h4>
    <div class="input-container" :class="{ focused: isFocused }">
      <div class="icon">🔥</div>
      <input
        ref="input"
        v-model="calorieValue"
        type="number"
        placeholder="0"
        @focus="isFocused = true"
        @blur="isFocused = false"
        @keypress.enter="saveCalories"
      />
      <div class="label">ккал</div>
      <button 
        class="save-btn"
        :class="{ visible: showSaveButton }"
        @click="saveCalories"
      >
        Готово
      </button>
    </div>
    
    <transition name="bounce">
      <div v-if="showConfirmation" class="confirmation">
        {{ confirmationMessage }}
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue';

const props = defineProps({
  initialValue: {
    type: Number,
    default: 0
  }
});

const emit = defineEmits(['save']);

const calorieValue = ref(props.initialValue);
const isFocused = ref(false);
const showConfirmation = ref(false);
const confirmationMessage = ref('');
const input = ref(null);

const showSaveButton = computed(() => {
  return isFocused.value || calorieValue.value !== props.initialValue;
});

const saveCalories = () => {
  const value = parseInt(calorieValue.value) || 0;
  emit('save', value);
  
  // Показать подтверждение
  confirmationMessage.value = `Сохранено: ${value} ккал`;
  showConfirmation.value = true;
  
  // Скрыть через 2 секунды
  setTimeout(() => {
    showConfirmation.value = false;
  }, 2000);
  
  // Убрать фокус
  input.value.blur();
};

// Фокус на инпут при клике на всю область
const focusInput = () => {
  input.value.focus();
};
</script>

<style scoped>
.ios-calorie-input {
  font-family: -apple-system, BlinkMacSystemFont, sans-serif;
  max-width: 300px;
  margin: 0 auto;
  color: #DA6A00;
}

.input-container {
  display: flex;
  align-items: center;
  background: #F2F2F7;
  border-radius: 10px;
  padding: 12px 16px;
  transition: all 0.3s ease;
  border: 1px solid transparent;
  position: relative;
}

.input-container.focused {
  background: #FFFFFF;
  border-color: #DA6A00;
  box-shadow: 0 0 0 3px rgba(0, 122, 255, 0.1);
}

.icon {
  font-size: 20px;
  margin-right: 12px;
  color: #FF3B30;
}

input {
  flex: 1;
  border: none;
  background: transparent;
  font-size: 24px;
  font-weight: 600;
  color: #DA6A00;
  outline: none;
  min-width: 0;
}

input::placeholder {
  color: #C7C7CC;
  opacity: 1;
}

.label {
  font-size: 17px;
  color: #68904D;
  margin-left: 8px;
}

.save-btn {
  position: absolute;
  right: 16px;
  background: #DA6A00;
  color: white;
  border: none;
  border-radius: 6px;
  padding: 6px 12px;
  font-size: 14px;
  font-weight: 500;
  opacity: 0;
  transform: translateX(10px);
  transition: all 0.3s ease;
  cursor: pointer;
}

.save-btn.visible {
  opacity: 1;
  transform: translateX(0);
}

.save-btn:active {
  background: #EE9B01;
}

.confirmation {
  text-align: center;
  margin-top: 12px;
  font-size: 14px;
  color:  #14471E;
  padding: 8px;
  background: #68904D;
  border-radius: 8px;
}

/* Анимации */
.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0.9);
    opacity: 0;
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}
</style>
<template>
  <div class="container">
    <h2 class="header">Калькулятор дневной нормы калорий</h2>
    
    <div class="input-container">
      <label for="weight" class="input-label">Вес (кг):</label>
      <input type="number" v-model="weight" id="weight" class="input-field" placeholder="Введите ваш вес" />
    </div>

    <div class="input-container">
      <label for="height" class="input-label">Рост (см):</label>
      <input type="number" v-model="height" id="height" class="input-field" placeholder="Введите ваш рост" />
    </div>

    <div class="input-container">
      <label for="age" class="input-label">Возраст:</label>
      <input type="number" v-model="age" id="age" class="input-field" placeholder="Введите ваш возраст" />
    </div>

    <div class="input-container">
      <label for="gender" class="input-label">Пол:</label>
      <select v-model="gender" class="input-field">
        <option value="male">Мужчина</option>
        <option value="female">Женщина</option>
      </select>
    </div>

    <div class="input-container">
      <label for="activity" class="input-label">Тип активности:</label>
      <select v-model="activity" class="input-field">
        <option value="1.2">Низкий (сидячий образ жизни)</option>
        <option value="1.55">Средний (умеренные тренировки)</option>
        <option value="1.9">Высокий (интенсивные тренировки)</option>
      </select>
    </div>

    <button @click="calculateCalories" class="submit-button">Рассчитать</button>

    <div v-if="calories" class="result">
      <h3>Ваша дневная норма калорий: {{ calories }} ккал</h3>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const weight = ref('');
const height = ref('');
const age = ref('');
const gender = ref('male');
const activity = ref(1.2);
const calories = ref(null);

// Функция для расчета дневной нормы калорий
const calculateCalories = () => {
  if (weight.value && height.value && age.value) {
    let bmr;

    // Расчет BMR в зависимости от пола
    if (gender.value === 'male') {
      bmr = 10 * weight.value + 6.25 * height.value - 5 * age.value + 5;
    } else {
      bmr = 10 * weight.value + 6.25 * height.value - 5 * age.value - 161;
    }

    // Расчет TDEE с учетом типа активности
    const tdee = bmr * activity.value;

    // Сохраняем результат
    calories.value = Math.round(tdee);
  } else {
    alert('Пожалуйста, заполните все поля.');
  }
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
  background-color: #f7f7f8;
  padding: 20px;
}

.container {
  max-width: 500px;
  margin: 0 auto;
  padding: 20px;
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.header {
  font-size: 24px;
  text-align: center;
  margin-bottom: 20px;
  color: #333;
}

.input-container {
  margin-bottom: 20px;
}

.input-label {
  font-size: 16px;
  color: #555;
  margin-bottom: 5px;
  display: block;
}

.input-field {
  width: 100%;
  padding: 12px 16px;
  border-radius: 8px;
  border: 1px solid #ccc;
  background-color: #f4f4f4;
  font-size: 16px;
  color: #333;
  margin-top: 5px;
}

.input-field:focus {
  outline: none;
  border-color: #007aff;
  background-color: white;
}

.submit-button {
  width: 100%;
  padding: 14px;
  background-color: #007aff;
  border: none;
  border-radius: 8px;
  color: white;
  font-size: 18px;
  cursor: pointer;
}

.submit-button:hover {
  background-color: #0051a8;
}

.submit-button:active {
  background-color: #003d7a;
}

.result {
  margin-top: 20px;
  text-align: center;
  font-size: 20px;
  color: #333;
}
</style>

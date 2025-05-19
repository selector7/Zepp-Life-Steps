<template>
  <div class="flex flex-col items-center justify-center min-h-screen bg-gray-100">
    <div class="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
      <div class="flex justify-between items-center mb-4">
        <span class="text-2xl font-bold">动动吗</span>
        <span class="bg-green-200 text-green-600 text-xs font-bold px-2 py-1 rounded-full">API在线</span>
      </div>
      <p class="text-gray-600 mb-4">更新您的运动步数数据</p>
      <InputField label="账号" placeholder="请输入账号" v-model="account" />
      <InputField label="密码" placeholder="请输入密码" v-model="password" type="password" />
      <StepSlider v-model="steps" />
      <button class="bg-black text-white px-4 py-2 rounded-lg mt-4" @click="updateSteps">动动吧</button>
    </div>
  </div>
</template>

<script setup>
import InputField from '../components/InputField.vue';
import StepSlider from '../components/StepSlider.vue';
import { ref } from 'vue';

const account = ref('');
const password = ref('');
const steps = ref(54188);

const updateSteps = () => {
  // 这里添加调用后端API更新步数的逻辑
  console.log('账号:', account.value, '密码:', password.value, '步数:', steps.value);
};
</script>

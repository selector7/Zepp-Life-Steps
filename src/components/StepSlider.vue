<template>
  <div class="mb-4">
    <div class="flex justify-between items-center mb-2">
      <span class="text-gray-700 text-sm font-bold">步数</span>
      <span class="text-gray-700 text-sm font-bold">
        <i class="fas fa-info-circle text-yellow-500"></i>
      </span>
    </div>
    <input type="range" min="1" max="98800" v-model="sliderValue" class="w-full">
    <div class="flex justify-between items-center mt-2">
      <span class="text-gray-700 text-sm">{{ sliderValue }}</span>
      <span class="text-gray-700 text-sm">98,800</span>
    </div>
  </div>
</template>

<script setup>
const emits = defineEmits(['update:modelValue']);
const sliderValue = ref(54188);

watch(sliderValue, (newValue) => {
  emits('update:modelValue', newValue);
});
</script>

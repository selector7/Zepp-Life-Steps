<template>
  <div class="mb-4">
    <label :for="id" class="block text-gray-700 text-sm font-bold mb-2">{{ label }}</label>
    <input :id="id" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" :type="type" :placeholder="placeholder" v-model="inputValue">
  </div>
</template>

<script setup>
const props = defineProps({
  label: { type: String, required: true },
  placeholder: { type: String, required: true },
  type: { type: String, default: 'text' }
});

const emits = defineEmits(['update:modelValue']);
const inputValue = ref('');

watch(inputValue, (newValue) => {
  emits('update:modelValue', newValue);
});

const id = `input - ${props.label.toLowerCase().replace(/\s/g, '-')}`;
</script>

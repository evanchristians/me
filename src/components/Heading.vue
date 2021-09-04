<script setup>
defineProps({
  text: String,
});
</script>

<template>
  <h1 class="text-5xl font-light">{{ text }}</h1>
</template>
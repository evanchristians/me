<template>
  <div class="_container">
    <slot></slot>
  </div>
</template>

<style scoped>
._container {
  @apply min-h-screen flex flex-col w-full bg-gray-900 text-white;

  cursor: none;
}
</style>
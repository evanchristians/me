<script setup>
import Container from "./components/Container.vue";
import Cursor from "./components/Cursor.vue";
import Heading from "./components/Heading.vue";
import SkewInText from "./components/SkewInText.vue";
</script>

<template>
  <Container>
    <main
      class="flex flex-col items-center justify-center flex-grow w-full p-10"
    >
      <Heading text="This may take a while." />
      <SkewInText text="maybe a few months..." />
    </main>
    <Cursor />
  </Container>
</template>

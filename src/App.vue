<script setup>
import Heading from "./components/Heading.vue";
import Container from "./components/Container.vue";
import Cursor from "./components/Cursor.vue";
</script>

<template>
  <Container>
    <main
      class="flex flex-col items-center justify-center flex-grow w-full p-10"
    >
      <Heading text="This may take a while." />
    </main>
    <Cursor />
  </Container>
</template> 
<script setup>
import { gsap } from "gsap";
import { ref, onMounted } from "vue";

const { text } = defineProps({
  text: String,
});
const characterRefs = ref([]);
const characters = text.split("");

onMounted(() => {
  characterRefs.value.forEach((characterRef, i) => {
    gsap.from(characterRef, {
      y: 500,
      duration: 1.5 + 0.05 * i,
      skewY: 60,
      transformOrigin: "left",
      ease: "power2.out",
      delay: 4 + 0.005 * i,
    });
  });
});
</script>

<template>
  <div class="overflow-hidden">
    <h2 class="font-light text-xl mt-4 flex whitespace-pre">
      <span
        class="block"
        v-for="(character, key) in characters"
        :ref="(el) => (characterRefs[key] = el)"
      >
        {{ character }}
      </span>
    </h2>
  </div>
</template>

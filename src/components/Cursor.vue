<script setup>
import { gsap } from "gsap";
import { times } from "lodash";

const handleMouseEnterExit = (selector, delay = 0) => {
  document.addEventListener("mouseenter", () => {
    gsap.fromTo(
      selector,
      { opacity: 0, scale: 0 },
      { opacity: 1, scale: 1, duration: 0.2, delay }
    );
  });
  document.addEventListener("mouseleave", (ev) => {
    gsap.to(selector, { opacity: 0, scale: 0, duration: 0.2 });
  });
};

const handleMouseMove = (selector, delayAndDuration = 0) => {
  document.addEventListener("mousemove", (ev) => {
    const left = ev.clientX;
    const top = ev.clientY;
    gsap.to(selector, {
      left,
      top,
      opacity: 1,
      scale: 1,
      duration: delayAndDuration,
      delay: delayAndDuration,
      ease: "power1.out",
    });
  });
};

handleMouseEnterExit("#cursor");
handleMouseMove("#cursor");

const shadows = 1;

times(shadows, (i) => {
  const opts = {
    selector: `#cursor-follow-${i + 1}`,
    delayAndDuration: ((i + 1) * 0.1) / shadows,
  };

  handleMouseEnterExit(opts.selector, opts.delayAndDuration);
  handleMouseMove(opts.selector, opts.delayAndDuration);
});
</script>

<template>
  <div class="cursor" id="cursor"></div>
  <div
    v-for="i in shadows"
    class="cursor follow"
    :id="`cursor-follow-${i}`"
    :key="i"
  ></div>
</template>

<style lang="scss" scoped>
.cursor {
  @apply fixed w-4 h-4 rounded-full bg-primary bg-opacity-70 opacity-0
    transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2;
  z-index: 1;
  &.follow {
    @apply bg-secondary bg-opacity-70;
    z-index: 0;
  }
}
</style>

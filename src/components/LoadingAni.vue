<template>
  <Motion
    class="t-h-[1px] t-w-[1px] t-bg-red-700 t-rounded-[50%] motion"
    :initial="{ translateX: '-50%', translateY: '-50%', scale: 1 }"
  />
</template>

<script setup>
import { onMounted } from "vue";
import { Motion } from "motion/vue";
import { timeline } from "motion";

const emit = defineEmits(["loadingAniFin"]),
  sequence = [
    [".motion", { translateX: "-50%", translateY: "-50%", scale: 1 }],
    [
      ".motion",
      {
        scale: [80, 100, 80, 100, 80, 100, 80, 200, 150, 3000, 0],
      },
      { duration: 5 },
    ],
  ];

onMounted(() => {
  timeline(sequence).finished.then(() => {
    emit("loadingAniFin");
  });
});
</script>

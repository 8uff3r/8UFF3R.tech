<template>
  <!-- <div class="card w-96 backdrop-blur-md border-[.1px]">
    <figure><img src="https://placeimg.com/400/225/arch" alt="car!" /></figure>
    <div class="card-body">
      <h2 class="card-title">Life hack</h2>
      <p>How to park your car at your garage?</p>
      <div class="card-actions justify-end">
        <button class="btn btn-primary">Learn now!</button>
      </div>
    </div>
  </div>
  > -->
  <main id="main"
    class="mx-auto translate-y-2/3 mb-0 text-center grid grid-cols-1 md:grid-cols-2 grid-rows-4 md:grid-rows-2 grid-flow-row font-extrabold text-4xl sm:text-6xl md:text-8xl gap-x-16 select-none p-20">
    <!-- ? Iterate over words and set the needed classes -->
    <div v-for="(t, tIndex) in mainText" :key="tIndex" :class="[
      tIndex == 0 || tIndex == 2 ? 'md:text-right' : 'md:text-left',
      tIndex == 0 || tIndex == 1 ? 'self-end' : '',
    ]">
      <!--? Iterate over each letter in each word and set the drop shadow based on their distance from the center -->
      <span v-for="(c, cIndex) in t" :key="cIndex" :class="`md:drop-shadow-[${cIndex + flShadow[tIndex]
      }px_0px_0px_#4444dd]`">
        {{ c }}
      </span>
    </div>
  </main>
</template>

<script setup>
import { ref } from "vue";

// the main text shown on the home page
const mainText = ["Hi", "I'm a", "Frontend", "Developer"];

//sets the drop-shadow of the first letter in each word
const flShadow = [-6, 4, -11, 4];
</script>
<style>

</style>

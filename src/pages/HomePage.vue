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
  <div class="">
    <main id="main"
      class="mx-auto sm:mt-auto text-left flex font-extrabold select-none px-20 pt-3 md:pt-20 flex-col md:bg-gradient-to-br bg-gradient-to-b text-transparent bg-clip-text from-[#fff] via-[#4444dd]">
      <!-- ? Iterate over words and set the needed classes -->
      <div>
        <div class="text-3xl font-extrabold text-transparent sm:text-5xl">
          Hi I'm a
        </div>
      </div>
      <div class="flex flex-col lg:flex-row text-5xl sm:text-6xl md:text-8xl">
        <div>Frontend&nbsp;</div>
        <div>Developer</div>
      </div>
    </main>
    <p class="font-bold text-2xl mt-16 ml-10 drop-shadow-[-6px_0px_0px_#4444dd]">
      Sample Projects
    </p>
    <SampleProjectsComp class="flex-grow-0 w-1/2 bottom-56 ml-20 mt-10" />
  </div>
</template>

<script setup>
import { ref } from "vue";
import SampleProjectsComp from "../components/SampleProjectsComp.vue";

// the main text shown on the home page
const mainText = ["Hi I'm a", "Frontend Developer"];

//sets the drop-shadow of the first letter in each word
const flShadow = [-20, 20, -11, 4];
</script>
<style>

</style>

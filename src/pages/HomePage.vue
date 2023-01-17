<!--
██╗  ██╗ ██████╗ ███╗   ███╗███████╗██████╗  █████╗  ██████╗ ███████╗
██║  ██║██╔═══██╗████╗ ████║██╔════╝██╔══██╗██╔══██╗██╔════╝ ██╔════╝
███████║██║   ██║██╔████╔██║█████╗  ██████╔╝███████║██║  ███╗█████╗  
██╔══██║██║   ██║██║╚██╔╝██║██╔══╝  ██╔═══╝ ██╔══██║██║   ██║██╔══╝  
██║  ██║╚██████╔╝██║ ╚═╝ ██║███████╗██║     ██║  ██║╚██████╔╝███████╗
╚═╝  ╚═╝ ╚═════╝ ╚═╝     ╚═╝╚══════╝╚═╝     ╚═╝  ╚═╝ ╚═════╝ ╚══════╝-->

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
  <main
    id="main"
    class="mx-auto sm:mt-auto text-left flex font-extrabold select-none px-20 pt-3 md:pt-20 flex-col absolute bg-gradient-to-br text-transparent bg-clip-text from-[#fff] via-[#4444dd]"
  >
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
</template>

<script setup>
import { ref } from "vue";

// the main text shown on the home page
const mainText = ["Hi I'm a", "Frontend Developer"];

//sets the drop-shadow of the first letter in each word
const flShadow = [-20, 20, -11, 4];
</script>
<style></style>

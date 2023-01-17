<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div v-show="render" class="max-h-screen text-white">
    <nav-bar />

    <router-view />
  </div>
  <!-- <ani
    @loading-ani-fin="render = true"
    v-if="!render"
    class="t-top-[50%] t-left-[50%] t-fixed t-overflow-hidden"
  /> -->
</template>

<script setup>
import NavBar from "../components/NavBar.vue";
import ani from "../components/LoadingAni.vue";
import { ref } from "vue";

const render = ref(true);
</script>

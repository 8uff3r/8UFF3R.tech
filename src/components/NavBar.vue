<template v-slot:append>
  <nav class="navbar px-24 pt-2 sm:pt-10">
    <router-link to="/" class="md:navbar-start md:ml-0 mx-auto">
      <button
        class="font-extrabold text-[30px] btn btn-outline border-2 hover:bg-transparent drop-shadow-[-6px_0px_0px_#4444dd] hover:drop-shadow-[5px_-5px_0px_#4444dd] text-white hover:text-white"
      >
        <span class=""> 8UFF3R </span>
      </button>
    </router-link>
    <!-- #1d57df -->
    <!-- <button class="btn" icon="" @click="isDark = !isDark">
      <i :icon="iconTheme" />
    </button> -->

    <div class="md:navbar-end [&>*>*]:normal-case hidden md:flex">
      <router-link to="/about">
        <button
          id="about"
          class="btn btn-ghost text-2xl drop-shadow-[6px_0px_0px_#4444dd] hover:drop-shadow-[2px_0px_0px_#4444dd] font-extrabold"
        >
          About
        </button>
      </router-link>
      <router-link to="/#contact">
        <button
          id="contact"
          class="btn btn-ghost text-2xl hover:drop-shadow-[3px_0px_0px_#4444dd] font-extrabold"
        >
          Contact&nbsp;Me
        </button>
      </router-link>
    </div>
  </nav>
</template>

<script setup>
import { ref, computed, watch } from "vue";
import { RouterLink } from "vue-router";

// const isDark = ref(true);
// const theme = useTheme();
// const iconTheme = computed(() => {
//   return isDark.value ? "fas fa-sun" : "fas fa-moon";
// });
// const tbColor = computed(() => {
//   return isDark.value ? "#121212" : "white";
// });
// watch(isDark, () => {
//   theme.global.name.value = isDark.value ? "dark" : "light";
// });
</script>

<style lang="scss">
#contact {
  filter: drop-shadow(-15px 4px 1px #4444dd) drop-shadow(15px -4px 1px #5151cf);
}
#contact:hover {
  filter: drop-shadow(7px 0px 0px #4444dd);
  /* drop-shadow(-7px 0px 0px #00597738); */
  /* drop-shadow(0px 5px 0px #005a7738) drop-shadow(0px -5px 0px #005a7738); */
}
#about {
  filter: drop-shadow(-15px 4px 1px #4444dd) drop-shadow(15px -4px 1px #5151cf);
}
#about:hover {
  filter: drop-shadow(7px 0px 0px #4444dd);
}
</style>

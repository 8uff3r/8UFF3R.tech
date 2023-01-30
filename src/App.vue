<template>
  <Particles class="hidden lg:flex" id="tsparticles" :particlesInit="particlesInit" :options="particlesOptions" />
  <router-view />
</template>

<script setup>
import { loadFull } from "tsparticles";
import { loadTrianglesPreset } from "tsparticles-preset-triangles";
const particlesOptions = {
  preset: "triangles",
  background: {
    color: {
      value: "#0F1729",
    },
  },
  fullScreen: {
    enable: true, // enabling this will make the canvas fill the entire screen, it's enabled by default
    zIndex: -1, // this is the z-index value used when the fullScreen is enabled, it's 0 by default
  },
  ZIndex: -1,
  fpsLimit: 24,
  particles: {
    color: {
      value: "#4444DD",
    },
    size: {
      value: 4,
    },
    move: {
      speed: 1,
    },
    links: {
      distance: 125,
      enable: true,
      triangles: {
        enable: true,
        opacity: 0.3,
        color: "#4444DD",
      },
    },
  },
  interactivity: {
    events: {
      // onClick: {
      //   enable: true,
      //   mode: "attract",
      // },
      // onDiv: {
      //   selectors: ".repulse",
      //   enable: true,
      //   mode: "repulse",
      //   type: "circle",
      // },
      onHover: {
        enable: true,
        mode: "grab",
      },
      // resize: {
      //   delay: 0.5,
      //   enable: true,
      // },
    },
    modes: {
      // attract: {
      //   distance: 200,
      //   duration: 1,
      //   easing: "ease-out-quad",
      //   factor: 1,
      //   maxSpeed: 10,
      //   speed: 3,
      // },
      // bounce: {
      //   distance: 200,
      // },
      // bubble: {
      //   distance: 400,
      //   duration: 2,
      //   mix: false,
      //   opacity: 0.8,
      //   size: 40,
      //   divs: {
      //     distance: 200,
      //     duration: 0.4,
      //     mix: false,
      //   },
      // },
      // connect: {
      //   distance: 80,
      //   links: {
      //     opacity: 0.5,
      //   },
      //   radius: 60,
      // },
      grab: {
        distance: 150,
        links: {
          blink: true,
          consent: false,
          opacity: 0.5,
        },
      },
      // slow: {
      //   factor: 3,
      //   radius: 100,
      // },
      // repulse: {
      //   distance: 20,
      //   duration: 0.4,
      //   factor: 200,
      //   speed: 1,
      //   smooth: 10,
      //   maxSpeed: 50,
      //   easing: "ease-out-quad",
      //   divs: {
      //     distance: 200,
      //     duration: 0.4,
      //     factor: 100,
      //     speed: 1,
      //     maxSpeed: 50,
      //     easing: "ease-out-quad",
      //   },
      // },
      // push: {
      //   enable: true,
      //   quantity: 10,
      // },
    },
  },
};

const particlesOptions2 = {
  background: {
    color: "#000", // this sets a background color for the canvas
  },
  fullScreen: {
    enable: true, // enabling this will make the canvas fill the entire screen, it's enabled by default
    zIndex: -1, // this is the z-index value used when the fullScreen is enabled, it's 0 by default
  },
  interactivity: {
    events: {
      onClick: {
        enable: true, // enables the click event, it's disabled by default
        mode: "push", // adds the particles on click
      },
      onHover: {
        enable: true, // enables the mouse hover event, it's disabled by default
        mode: "repulse", // repulse the particles on mouse hover
      },
    },
    modes: {
      push: {
        quantity: 10, // number of particles to add on click
      },
      repulse: {
        distance: 300, // distance of the particles from the cursor
      },
    },
  },
  particles: {
    links: {
      distance: 200, // maximum distance for linking the particles
      enable: true, // enabling this will make the particles linked together
    },
    move: {
      enable: true, // enabling this will make particles move in the canvas
      speed: { min: 1, max: 5 }, // using a range in speed value will make particles move in a random speed between min/max values, each particle has its own value, it won't change over time by default
    },
    opacity: {
      value: { min: 0.3, max: 0.7 }, // using a different opacity, to have some semitransparent effects
    },
    size: {
      value: { min: 1, max: 3 }, // let's randomize the particles size a bit
    },
  },
};
async function particlesInit(engine) {
  await loadFull(engine);
  await loadTrianglesPreset(engine);
}
</script>

<template>
  <!-- //수정 -->
  <div class="Navbar">
    <p class="navbar_logo" @click="moveToNavbar">KJH's Portfolio</p>
    <ul class="navbar_menu">
      <!-- <li @click="moveToSection('aboutme')">about me</li>
      <li @click="moveToSection('skills')">skills</li>
      <li @click="moveToSection('archiving')">Archiving</li>
      <li @click="moveToSection('projects')">Projects</li> -->
      <li
        v-show="navbar_menu"
        v-for="item in navbarItems"
        :key="item.id"
        @click="item.moveToSection"
      >
        {{ item.title }}
      </li>
    </ul>
    <div class="navbar_bar">
      <img src="@/assets/navbar/bar.png" @click="toggleMenu" />
    </div>
  </div>
</template>

<script setup>
import { defineEmits, ref } from "vue";

const navbar_menu = ref(true);

const toggleMenu = () => {
  navbar_menu.value = !navbar_menu.value;
};
const moveToNavbar = () => {
  scrollTo({ top: 0, behavior: "smooth" });
};

const emit = defineEmits([
  "moveToAboutme",
  "moveToSkills",
  "moveToArchiving",
  "moveToProjects",
  "moveToBoard",
]);

const navbarItems = [
  {
    title: "About Me",
    moveToSection: () => {
      emit("moveToAboutme");
    },
  },
  {
    title: "Skills",
    moveToSection: () => {
      emit("moveToSkills");
    },
  },
  {
    title: "Archiving",
    moveToSection: () => {
      emit("moveToArchiving");
    },
  },
  {
    title: "Projects",
    moveToSection: () => {
      emit("moveToProjects");
    },
  },
  {
    title: "Board",
    moveToSection: () => {
      emit("moveToBoard");
    },
  },
];
</script>
<style lang="scss" scoped>
.Navbar {
  padding: 0 80px;
  line-height: 72px;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 2;
  height: 72px;
  color: black;
  background-color: white;
  display: flex;
  justify-content: space-between;
  white-space: nowrap;
  font-size: 1.5em;
  opacity: 0.7;
  .navbar_menu {
    @media screen and (max-width: 768px) {
      display: block;
    }
  }
  .navbar_bar {
    display: none;
    cursor: pointer;
    img {
      margin-top: 10px;
      width: 50px;
    }
    @media screen and (max-width: 768px) {
      display: block;
      padding: 0 20px;
      font-size: 1em;
    }
  }

  @media (max-width: 500px) {
    & {
      padding: 0;
      font-size: 0.8em;
    }
  }
  p {
    cursor: pointer;
  }

  ul {
    display: flex;
    gap: 40px;
    @media (max-width: 500px) {
      & {
        display: none;
      }
    }
    li {
      background-color: white;
      cursor: pointer;
      list-style: none;
    }
    li:hover {
      background-color: gray;
      border-radius: 4px;
    }
  }
}
</style>

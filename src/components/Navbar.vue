<template>
  <div class="Navbar">
    <p @click="moveToNavbar">KJH's Portfolio</p>
    <ul>
      <!-- <li @click="moveToSection('aboutme')">about me</li>
      <li @click="moveToSection('skills')">skills</li>
      <li @click="moveToSection('archiving')">Archiving</li>
      <li @click="moveToSection('projects')">Projects</li> -->
      <li
        v-for="item in navbarItems"
        :key="item.id"
        @click="item.moveToSection"
      >
        {{ item.title }}
      </li>
    </ul>
    <p class="open">open</p>
  </div>
</template>

<script setup>
import { defineEmits } from "vue";

const moveToNavbar = () => {
  scrollTo({ top: 0, behavior: "smooth" });
};

const emit = defineEmits([
  "moveToAboutme",
  "moveToSkills",
  "moveToArchiving",
  "moveToProjects",
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
  @media (max-width: 768px) {
    & {
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
      cursor: pointer;
      list-style: none;
    }
  }
  .open {
    display: none;
    @media (max-width: 500px) {
      & {
        display: block;
      }
    }
  }
}
</style>

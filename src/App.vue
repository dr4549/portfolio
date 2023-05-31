<template>
  <div class="home">
    <Navbar
      @moveToAboutme="moveToAboutme"
      @moveToSkills="moveToSkills"
      @moveToArchiving="moveToArchiving"
      @moveToProjects="moveToProjects"
      @moveToBoard="moveToBoard"
    />
    <div ref="myselfRef">
      <Myself />
    </div>
    <div ref="aboutmeRef">
      <Aboutme />
    </div>
    <div ref="skillsRef">
      <Skills />
    </div>
    <div ref="archivingRef">
      <Archiving />
    </div>
    <div ref="projectsRef">
      <Projects />
    </div>
    <div ref="boardRef">
      <Board />
    </div>
    <div>
      <Footer />
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import Navbar from "./components/Navbar.vue";
import Myself from "./components/Myself.vue";
import Aboutme from "./components/Aboutme.vue";
import Skills from "./components/Skills.vue";
import Archiving from "./components/Archiving.vue";
import Projects from "./components/Projects.vue";
import Footer from "./components/Footer.vue";
import Board from "./components/Board.vue";

const myselfRef = ref();
const aboutmeRef = ref();
const skillsRef = ref();
const archivingRef = ref();
const projectsRef = ref();
const boardRef = ref();

const moveToAboutme = () => {
  scrollTo({ top: aboutmeRef.value.offsetTop - 72, behavior: "smooth" });
};
const moveToSkills = () => {
  scrollTo({ top: skillsRef.value.offsetTop - 72, behavior: "smooth" });
};
const moveToArchiving = () => {
  scrollTo({ top: archivingRef.value.offsetTop - 72, behavior: "smooth" });
};
const moveToProjects = () => {
  scrollTo({ top: projectsRef.value.offsetTop - 72, behavior: "smooth" });
};
const moveToBoard = () => {
  scrollTo({ top: boardRef.value.offsetTop - 72, behavior: "smooth" });
};
</script>

<style lang="scss">
@import "@/assets/style.scss";

// $title-color: green;
// .home {
//   p {
//     color: $title-color;
//   }
// }
.title {
  font-weight: 800;
  margin-bottom: 100px;
  top: 0;
  font-size: 4em;
}
.home {
  width: 100%;
  margin: 0, outo;
  min-width: 480px;
}
</style>

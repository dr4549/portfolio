<template>
  <div class="projects">
    <p class="title">Projects</p>
    <div>
      <p>To Do List</p>
    </div>
  </div>
</template>
<script setup></script>
<style lang="scss" scoped>
.projects {
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 600px;
  background-color: gray;

  div {
    background-color: white;
    padding: 50px;
    border-radius: 1rem;
    font-size: 2em;
  }
}
</style>

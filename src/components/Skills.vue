<template>
  <div class="skills">
    <p class="title">Skills</p>
    <ul class="frontend">
      <li>
        <h1>frontend</h1>
        <ol>
          <li><img src="@/assets/skills/html.png" /></li>
          <li><img src="@/assets/skills/css.png" /></li>
          <li><img src="@/assets/skills/vuejs.png" /></li>
        </ol>
      </li>
    </ul>
    <ul class="backend"></ul>
    <ul class="version Control"></ul>
  </div>
</template>
<script setup></script>
<style lang="scss" scoped>
.skills {
  position: relative;
  width: 100%;
  display: flex;
  background-color: gray;
  //justify-content: center;
  align-items: center;
  flex-direction: column;
  li {
    list-style: none;
    img {
      height: 40px;
    }
  }
}
</style>

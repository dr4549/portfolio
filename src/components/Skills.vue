<template>
  <div class="skills">
    <p class="title">Skills</p>
    <div class="logos">
      <div class="circle"><img src="@/assets/skills/vue.png" /></div>
      <div class="circle"><img src="@/assets/skills/github.png" /></div>
      <div class="circle"><img src="@/assets/skills/scss.png" /></div>
      <div class="circle"><img src="@/assets/skills/firebase.png" /></div>
    </div>
  </div>
</template>
<script setup></script>
<style lang="scss" scoped>
.skills {
  position: relative;
  width: 100%;
  height: 600px;
  display: flex;
  background-color: gray;
  //   justify-content: center;
  align-items: center;
  flex-direction: column;
  .logos {
    display: flex;
    gap: 30px;

    .circle {
      width: 200px;
      height: 200px;
      border-radius: 50%;
      background-color: white;
      flex-direction: column;
      img {
        height: 50%;
        position: relative;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
      }
    }
  }
}
</style>

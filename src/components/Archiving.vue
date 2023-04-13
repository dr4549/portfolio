<template>
  <div class="archiving">
    <p class="title">Archiving</p>
    <div>
      <img src="@/assets/skills/github.png" />GitHub
      <a href="https://www.github.com/dr4549">github.com/dr4549</a>
      <p>-코드 저장소 입니다.</p>
    </div>
  </div>
</template>
<script setup></script>
<style lang="scss" scoped>
.archiving {
  height: 600px;
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  div {
    font-size: 3em;
    font-weight: 700;
    text-align: center;
    img {
      width: 100px;
      margin-right: 30px;
    }

    a {
      color: #258ddb;
    }
  }
}
</style>

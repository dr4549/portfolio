<template>
  <div class="myself">
    <div class="wrapper">
      <p class="p1">웹 개발자 <br />포트폴리오<br />-김정환-</p>

      <p class="p2">
        안녕하세요.<br />정신력과 개발을 겸비한 개발자 김정환입니다.
      </p>
    </div>
  </div>
</template>
<script setup></script>
<style lang="scss" scoped>
//font-face {
//   font-family: "ClimateCrisisKR-1979";
//   src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2212@1.0/ClimateCrisisKR-1979.woff2")
//     format("woff2");,klm, m,
// font-weight: 900;
//  font-style: normal;
//}
.myself {
  position: relative;
  margin-top: 72px;
  height: calc(100vh - 72px);

  .wrapper {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center; //display:flex; 가 있어야 사용가능
    align-items: center; //display:flex; 가 있어야 사용가능
    gap: 50px;
    flex-direction: column;
    text-align: center;
    z-index: 1;
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
      url("@/assets/myself/pic1.jpg");

    p {
      color: white;
      background-clip: text;
      font-size: 4em;
      //   font-family: "Roboto", sans-serif;
      //   font-family: "Open Sans";
      //   font-family: "Source Sans Pro";
      font-family: "Lato";
      //   font-family: "Montserrat";
      //   font-family: "ClimateCrisisKR-1979";
    }
    .p1 {
      font-size: 3em;
    }
    .p2 {
      font-size: 2em;
    }
  }
}
</style>

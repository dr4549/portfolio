<template>
  <div class="aboutme" ref="aboutRef">
    <p>about me</p>
    <ul>
      <li><img src="@/assets/aboutme/name.webp" />이름 : 김정환</li>
      <li><img src="@/assets/aboutme/date.webp" />생년월일 : 1998.03.10</li>
      <li>
        <img src="@/assets/aboutme/addresses.webp" />주소 : 경기도 의정부시
      </li>
      <li>
        <img src="@/assets/aboutme/email.webp" />이메일 : dr4549@naver.com
      </li>
      <li><img src="@/assets/aboutme/phon.webp" />연락처 : 010-3912-3964</li>
      <li>
        <img src="@/assets/aboutme/acadmic.webp" />학력 : 서일대(소프트공학과)
      </li>
    </ul>
  </div>
</template>
<script setup>
import { ref, onMounted } from "vue";

const aboutRef = ref();

onMounted(() => {});
</script>
<style lang="scss" scoped>
.aboutme {
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  p {
    font-weight: 800;
    margin-bottom: 100px;
    top: 0;
    font-size: 4em;
  }
  img {
    margin-right: 20px;
    width: 35px;
    height: 35px;
    vertical-align: middle;
  }
  ul {
    position: relative;
    left: 50%;
    transform: translate(-50%, 0);
    display: flex;
    flex-wrap: wrap;
    gap: 80px 0px;
    margin-bottom: 80px;
    li {
      width: 30%;
      font-size: 1.25em;
      line-height: 20px;
      display: inline-block;
      white-space: nowrap;

      @media (max-width: 1000px) {
        & {
          width: 45%;
        }
      }
      @media (max-width: 500px) {
        //모바일
        & {
          width: 80%;
          text-align: center;
        }
      }
    }
  }
}
</style>

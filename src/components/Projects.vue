<template>
  <div class="projects">
    <p class="title">Projects</p>
    <div class="box">
      <p>To Do List</p>
      <swiper
        :pagination="{
          dynamicBullets: true,
        }"
        :modules="[Navigation, Pagination]"
        :spaceBetween="20"
        :loop="true"
        class="mySwiper"
      >
        <swiper-slide>
          <img src="@/assets/projects/todolist/todo1.png" />
        </swiper-slide>
        <swiper-slide>
          <img src="@/assets/projects/todolist/todo2.png" />
        </swiper-slide>
        <swiper-slide>
          <img src="@/assets/projects/todolist/todo3.png" />
        </swiper-slide>
        <swiper-slide
          ><img src="@/assets/projects/todolist/todo4.png" />
        </swiper-slide>
      </swiper>
      asdf
    </div>
  </div>
</template>
<script setup>
import { Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
</script>
<style lang="scss" scoped>
.projects {
  position: relative;
  width: 100%;
  flex-direction: column;
  background-color: gray;
  display: flex;
  justify-content: center;
  align-items: center;
  .box {
    width: 70%;
    background-color: rgb(150, 211, 247);
    padding: 40px;
    border-radius: 1rem;
    font-size: 2em;
    font-weight: 600;
    text-align: center;
  }
  .swiper {
    width: 100%;
  }
  .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;
  }

  .swiper-slide img {
    width: 100%;
    object-fit: cover;
    cursor: pointer;
  }
}
</style>

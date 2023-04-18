<template>
  <div class="board" ref="Board">
    <p class="title">Board</p>
    <form @submit.prevent="addComment">
      <input v-model="name" type="text" placeholder="이름" />
      <input v-model="comment" type="text" placeholder="댓글" />
      <button type="submit">제출</button>
      <p v-show="emptyValue" class="warning">이름 또는 댓글을 적어주세요</p>
    </form>
    <div v-for="(comment, index) in comments" :key="index">
      <strong>{{ comment.name }}:</strong> {{ comment.comment }}
      <!-- <small
        >작성일:{{
          new Date(comment.date?.seconds * 1000).toLocaleString()
        }}</small -->
      <small
        >작성일: {{ new Date(comment.date.toMillis()).toLocaleString() }}</small
      >
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import db from "../firebase";
import {
  collection,
  getDocs,
  addDoc,
  orderBy,
  query,
} from "firebase/firestore";
// import { serverTimestamp } from "firebase/firestore";
const name = ref("");
const comment = ref("");
const comments = ref([]);
const emptyValue = ref(false);

async function loadComments() {
  const commentRef = collection(db, "comments");
  const q = query(commentRef, orderBy("date", "asc"));
  const snapshot = await getDocs(q);
  comments.value = snapshot.docs.map((doc) => doc.data());
}

async function addComment() {
  if (name.value && comment.value) {
    emptyValue.value = false;
    await addDoc(collection(db, "comments"), {
      name: name.value,
      comment: comment.value,
      //   date: serverTimestamp(),
      date: new Date(),
    });
    name.value = "";
    comment.value = "";
    loadComments();
  } else {
    emptyValue.value = true;
  }
}

onMounted(() => {
  loadComments();
});
</script>
<style lang="scss">
.board {
  width: 100%;
  height: 700px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.warning {
  color: red;
}
</style>

<template>
  <div class="board" ref="Board">
    <p class="title">Board</p>
    <span>감상평을 남겨주세요.</span>
    <form @submit.prevent="addComment">
      <div class="inputwrapper">
        <input v-model="name" type="text" class="name" placeholder="이름" />
        <input
          v-model="comment"
          type="text"
          class="comment"
          placeholder="댓글"
        />
      </div>
      <button type="submit" class="submit">제출</button>
    </form>
    <p v-show="emptyValue" class="warning">이름 또는 댓글을 적어주세요</p>
    <div class="asd">
      <table>
        <th>Name</th>
        <th>Comments</th>
        <th>Date</th>

        <tr v-for="(comment, index) in comments" :key="index">
          <td>{{ comment.name }}</td>
          <td>
            {{ comment.comment }}
          </td>
          <!-- <small
        >작성일:{{
          new Date(comment.date?.seconds * 1000).toLocaleString()
        }}</small -->
          <td>
            <small>
              {{ new Date(comment.date.toMillis()).toLocaleString() }}</small
            >
          </td>
        </tr>
      </table>
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
  const q = query(commentRef, orderBy("date", "desc"));
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
  margin-bottom: 100px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  span {
    font-size: 2em;
    margin-bottom: 30px;
  }
  form {
    width: 80%;
    margin: 20px 0px;
    display: flex;
    position: relative;
    left: 50%;
    transform: translate(-50%, 0);
    justify-content: space-between;

    .inputwrapper {
      display: flex;
      gap: 30px;
      ::-webkit-input-placeholder {
        text-align: center;
        padding-right: 5px;
      }
      input {
        border-radius: 10px;
        border: 2px solid black;
        padding-left: 5px;
      }
    }
    .submit {
      width: 50px;
      height: 30px;
      border-radius: 10px;
    }
  }

  table {
    width: 80%;
    position: relative;
    left: 50%;
    transform: translate(-50%, 0);
    border-collapse: collapse;

    th {
      font-weight: bold;
    }
    td {
      border: 1px solid gray;
      padding: 5px;
    }
    tr:nth-child(2n) {
      background-color: #bbdefb;
    }
    tr:nth-child(2n + 1) {
      background-color: #e3f2fd;
    }
  }
}

.warning {
  color: red;
}
</style>

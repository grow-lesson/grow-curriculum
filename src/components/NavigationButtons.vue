<template>
  <div class="navigation-buttons">
    <button @click="goToPrevious"><span class="arrow-left"></span></button>
    <button @click="goToNext"><span class="arrow-right"></span></button>
  </div>
</template>

<script>
import { useRouter } from 'vue-router';

export default {
  props: {
    previousPageName: String,
    nextPageName: String
  },
  setup(props) {
    const router = useRouter();

    const goToPrevious = () => {
      router.push({ name: props.previousPageName });
    };

    const goToNext = () => {
      router.push({ name: props.nextPageName });
    };

    return {
      goToPrevious,
      goToNext
    };
  }
};
</script>

<style scoped>
.navigation-buttons {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  padding-bottom: 20px;
}

.navigation-buttons button {
  width: 80px;
  height: 45px;
  background: linear-gradient(135deg, #6a11cb, #2575fc); /* サイドバーボタンと同じグラデーション */
  color: #ffffff;
  border: none;
  border-radius: 50px; /* 丸みを帯びたボタン */
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2); /* 立体感のある影 */
  font-family: 'Roboto', sans-serif; /* モダンなフォントを使用 */
}

.navigation-buttons button:hover {
  background: linear-gradient(135deg, #a8d0fa, #706bff); /* ホバー時に柔らかいグラデーションに変更 */
  transform: translateY(-3px); /* ホバー時に浮く効果 */
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3); /* ホバー時の影を強化 */
}

/* フォーカスが外れたときの色（ブラー時） */
.navigation-buttons button:focus, .navigation-buttons button:active {
  background: linear-gradient(135deg, #ff758c, #ff7eb3); /* フォーカス外れたときの色 */
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3); /* フォーカス時の影を変更 */
  outline: none; /* デフォルトのフォーカスアウトラインを消す */
}

.arrow-left, .arrow-right {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 0;
  height: 0;
  border-style: solid;
}

.arrow-left {
  border-width: 8px 12px 8px 0;
  border-color: transparent #ffffff transparent transparent;
  left: 20px;
}

.arrow-right {
  border-width: 8px 0 8px 12px;
  border-color: transparent transparent transparent #ffffff;
  right: 20px;
}
</style>

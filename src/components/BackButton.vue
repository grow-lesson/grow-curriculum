<template>
  <button class="back-button" @click="goBack">
    <i class="fa fa-arrow-left"></i> 戻る
  </button>
</template>

<script>
export default {
  methods: {
    goBack() {
      // ブラウザの履歴を1つ戻る
      window.history.back();
    },
  },
};
</script>

<style>
/* 画面を戻るボタンのスタイル */
.back-button {
  display: inline-flex;
  align-items: center;
  font-size: 18px;
  padding: 8px 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.back-button i {
  margin-right: 8px;
}
</style>

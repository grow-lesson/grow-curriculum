<template>
  <div class="fancy-document">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
.fancy-document {
  background-color: #f9fffec2;
  padding: 20px 50px;
  margin: 0 50px 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

.content {
  color: #101010;
  font-size: 18px;
  font-family: "Helvetica Neue",
    Arial,
    "Hiragino Kaku Gothic ProN",
    "Hiragino Sans",
    Meiryo,
    sans-serif;
}

@media (max-width: 648px) {
  .fancy-document {
    padding: 20px;
    margin: 0 10px 20px;
  }
  .content {
    font-size: small;
  }
}
</style>

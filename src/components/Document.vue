<template>
  <div class="fancy-document">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
.fancy-document {
  background-color: #ffffff;
  padding: 40px;
  margin: 20px 50px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.content {
  margin-bottom: 20px;
  color: #333;
}

.markup-word {
  color: rgb(37, 139, 255);
}
</style>

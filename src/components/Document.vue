<template>
  <div class="fancy-document">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
.fancy-document {
  background-color: #f5f5f5;
  color: #333;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.content {
  margin-bottom: 20px;
}
</style>

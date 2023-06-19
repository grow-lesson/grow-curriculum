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
  padding: 20px;
  margin: 0 50px 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.content {
  color: #333;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}

</style>

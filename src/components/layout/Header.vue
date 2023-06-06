<template>
  <div>
    <header class="header">
      <nav class="navbar">
        <a class="logo" href="#">Grow 学習サイト</a>
        <ul class="nav-menu">
          <li><a href="#">ホーム</a></li>
          <li><a href="#">コース</a></li>
          <li><a href="#">カリキュラムの流れ</a></li>
          <li><a href="#">お知らせ</a></li>
        </ul>
      </nav>
    </header>
  </div>
</template>

<script>
export default {
  name: "Header",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* Header */
.header {
  background-color: #fff;
  padding: 20px;
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  font-size: 24px;
  font-weight: bold;
  text-decoration: none;
  color: #333;
}

.nav-menu li {
  display: inline-block;
  margin-left: 10px;
}

.nav-menu li:first-child {
  margin-left: 0;
}

.nav-menu a {
  text-decoration: none;
  color: #666;
}
</style>

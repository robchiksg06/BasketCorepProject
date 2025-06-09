<template>
  <div class="home-content">
    <main>
      <h2>Basketball?</h2>
      <p>
        Yes, here you will be able to view your favorite player's statistics and game schedule.
        Additionally, you can track their performance throughout the season.
      </p>
      <img src="@/assets/basket.jpeg" alt="BasketCore logo" />
    </main>

    <aside>
      <h3>Related Articles</h3>
      <ul>
        <li><RouterLink to="#">Best basketball players from 2024 season</RouterLink></li>
        <li><RouterLink to="#">NBA seasonal review</RouterLink></li>
        <li><RouterLink to="#">Latvian basketball stars</RouterLink></li>
      </ul>
    </aside>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>

<style scoped>
.home-content {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  padding: 30px;
  justify-content: space-between;
}
main {
  flex: 2;
  min-width: 300px;
}
main img {
  max-width: 100%;
  height: auto;
  border-radius: 12px;
  margin-top: 20px;
}
aside {
  flex: 1;
  min-width: 250px;
  background-color: #f1f1f1;
  padding: 20px;
  border-radius: 12px;
}
ul {
  list-style: disc;
  padding-left: 20px;
}
a {
  text-decoration: none;
  color: #007bff;
}
</style>

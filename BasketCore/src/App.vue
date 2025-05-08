<template>
  <div class="home-container" :class="{ 'dark-mode': isDarkMode }">
    <header>
      <h1>BasketCore</h1>
      <div style="display: flex;">
        <div class="dropdown">
          <span>MENU</span>
          <div class="drop-content">
            <router-link to="/about">About</router-link>
            <router-link to="/contact">Contact</router-link>
            <router-link to="/players">Players</router-link>
            <router-link to="/teams">Teams</router-link>
          </div>
        </div>
        <div class="toggle-container">
          <label class="switch">
            <input type="checkbox" id="slider-input" v-model="isDarkMode">
            <span class="slider round"></span>
          </label>
        </div>
      </div>
    </header>

    <main>
      <h2>Basketball?</h2>
      <p>Yes, here you will be able to view your favorite player's statistics and game schedule. Additionally, you can track their performance throughout the season.</p>
      <img src="@/assets/basket.jpeg" alt="BasketCore logo" />
    </main>

    <aside :class="{ 'aside-dark-mode': isDarkMode }">
      <h3>Related Articles</h3>
      <ul>
        <li><router-link to="/articles/2024-players">Best basketball players from 2024 season</router-link></li>
        <li><router-link to="/articles/nba-review">NBA seasonal review</router-link></li>
        <li><router-link to="/articles/latvian-stars">Latvian basketball stars</router-link></li>
      </ul>
    </aside>

    <footer>
      <p class="footer-text">&copy; 2024, Roberts Mačs</p>
      <p class="footer-link">
        <a href="https://www.instagram.com/r.machs/" target="_blank">Instagram</a>
      </p>
    </footer>
  </div>
</template>

<script>
export default {
  name: "BasketcoreHomePage",
  data() {
    return {
      isDarkMode: false
    };
  }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: 'Roboto', sans-serif;
  background-color: #f0f2f5;
  color: #333;
  line-height: 1.6;
}

.dark-mode {
  background-color: #121212;
  color: white;
}

header {
  background-color: #222;
  color: #fff;
  padding: 20px;
  position: sticky;
  top: 0;
  z-index: 1000;
}

header h1 {
  font-size: 2.5em;
  text-align: center;
}

.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
}

.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  transition: .4s;
}

.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}

input:checked + .slider {
  background-color: #2196F3;
}

.drop-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
}

.dropdown:hover .drop-content {
  display: block;
}

.container {
  display: flex;
  justify-content: space-between;
  max-width: 1200px;
  margin: 20px auto;
}

main img {
  max-width: 50%;
  height: auto;
  border-radius: 12px;
}

footer {
  background-color: #222;
  color: #fff;
  text-align: center;
  padding: 20px;
}

.footer-link a {
  color: #ffc107;
  text-decoration: none;
}
</style>

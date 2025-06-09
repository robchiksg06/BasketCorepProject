<template>
  <div :class="{ 'dark-mode': isDarkMode }">
    <header>
      <div class="header-top">
        <h1>BasketCore</h1>
        <label class="switch">
          <input type="checkbox" v-model="isDarkMode" />
          <span class="slider round"></span>
        </label>
      </div>
      <nav class="nav-links">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/login">Login</RouterLink>
        <RouterLink to="/register">Register</RouterLink>
      </nav>
    </header>

    <RouterView />

    <footer>
      <p>&copy; 2024, Roberts Mačs</p>
    </footer>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { RouterLink, RouterView } from 'vue-router'

const isDarkMode = ref(false)
</script>

<style>
/* Layout */
body, html {
  margin: 0;
  padding: 0;
  font-family: Arial, sans-serif;
}

/* Header & Footer */
header,
footer {
  background-color: #222;
  color: white;
  padding: 15px;
}

header .header-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav-links {
  display: flex;
  gap: 15px;
  margin-top: 10px;
}

.nav-links a {
  color: white;
  text-decoration: none;
  padding: 6px 12px;
  background-color: #444;
  border-radius: 4px;
}

/* Dark Mode */
.dark-mode {
  background-color: #121212;
  color: #e0e0e0;
}

.dark-mode header,
.dark-mode footer {
  background-color: #1a1a1a;
  color: #e0e0e0;
}

.dark-mode .nav-links a {
  background-color: #333;
  color: #e0e0e0;
}

/* Toggle switch */
.switch {
  position: relative;
  display: inline-block;
  width: 40px;
  height: 22px;
}

.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  background-color: #ccc;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  transition: 0.4s;
  border-radius: 22px;
}

.slider::before {
  position: absolute;
  content: "";
  height: 16px;
  width: 16px;
  left: 3px;
  bottom: 3px;
  background-color: white;
  transition: 0.4s;
  border-radius: 50%;
}

input:checked + .slider {
  background-color: #2196f3;
}

input:checked + .slider::before {
  transform: translateX(18px);
}
</style>

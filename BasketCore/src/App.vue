
<template>
  <div class="home-container">
    <header class="header">
      <h1 class="title">Basketcore</h1>
      <p class="subtitle">Your hub for everything basketball.</p>
    </header>
    
    <main class="main-content">
      <div class="hero-section">
        <img src="@/assets/hero-image.jpg" alt="Basketball Hero" class="hero-image" />
        <button @click="explore" class="explore-button">Explore Now</button>
      </div>
      
      <section class="features">
        <div class="feature-card" v-for="(feature, index) in features" :key="index">
          <h2>{{ feature.title }}</h2>
          <p>{{ feature.description }}</p>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
export default {
  name: "BasketcoreHomePage",
  data() {
    return {
      features: [
        { title: "Live Scores", description: "Stay updated with real-time game scores." },
        { title: "Player Stats", description: "Get insights into your favorite players." },
        { title: "Game Highlights", description: "Watch the best moments from every game." }
      ]
    };
  },
  methods: {
    explore() {
      this.$router.push("/explore");
    }
  }
};
</script>

<style scoped>
.home-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 20px;
}

.header {
  margin-bottom: 20px;
}

.title {
  font-size: 3em;
  color: #333;
}

.subtitle {
  font-size: 1.2em;
  color: #555;
}

.hero-section {
  position: relative;
  margin-bottom: 30px;
}

.hero-image {
  width: 100%;
  height: auto;
  border-radius: 10px;
}

.explore-button {
  position: absolute;
  bottom: 20px;
  right: 20px;
  padding: 10px 20px;
  background-color: #ff5722;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.features {
  display: flex;
  gap: 15px;
}

.feature-card {
  flex: 1;
  border: 1px solid #eee;
  padding: 15px;
  border-radius: 5px;
  background-color: #fafafa;
}
</style>

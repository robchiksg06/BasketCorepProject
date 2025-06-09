<template>
  <div class="login-page">
    <h2>Login</h2>
    <form @submit.prevent="handleLogin">
      <input type="email" v-model="email" placeholder="Email" required />
      <input type="password" v-model="password" placeholder="Password" required />
      <button type="submit" :disabled="loading">Login</button>
      <p v-if="error" class="error">{{ error }}</p>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import axios from 'axios'

const email = ref('')
const password = ref('')
const loading = ref(false)
const error = ref('')

const handleLogin = async () => {
  error.value = ''
  loading.value = true
  try {
    await axios.get('/sanctum/csrf-cookie')
    await axios.post('/login', {
      email: email.value,
      password: password.value
    }, { withCredentials: true })
    alert('Login successful!')
  } catch (e) {
    error.value = 'Login failed'
  } finally {
    loading.value = false
  }
}
</script>

<style scoped>
.login-page {
  max-width: 400px;
  margin: 50px auto;
}
input {
  display: block;
  margin: 10px 0;
  padding: 8px;
  width: 100%;
}
button {
  padding: 10px 20px;
}
.error {
  color: red;
  margin-top: 10px;
}
</style>

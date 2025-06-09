<template>
  <div class="register-form">
    <h2>Register</h2>
    <form @submit.prevent="register">
      <input v-model="email" type="email" placeholder="Email" required />
      <input v-model="password" type="password" placeholder="Password" required />
      <input v-model="password_confirmation" type="password" placeholder="Confirm Password" required />
      <button type="submit">Register</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Register',
  data() {
    return {
      email: '',
      password: '',
      password_confirmation: ''
    }
  },
  methods: {
    async register() {
      try {
        // CSRF cookie paņemšana
        await axios.get('/sanctum/csrf-cookie', { withCredentials: true })

        // Reģistrācija
        await axios.post('/register', {
          email: this.email,
          password: this.password,
          password_confirmation: this.password_confirmation
        }, {
          withCredentials: true
        })

        alert('Registration successful!')
        this.$router.push('/login')
      } catch (error) {
        console.error(error)
        alert('Registration failed.')
      }
    }
  }
}
</script>

<style scoped>
.register-form {
  max-width: 400px;
  margin: auto;
  padding: 2rem;
  background-color: #f3f3f3;
  border-radius: 10px;
}
input {
  display: block;
  margin-bottom: 1rem;
  width: 100%;
  padding: 0.5rem;
}
button {
  width: 100%;
  padding: 0.5rem;
  background-color: #222;
  color: white;
  border: none;
  border-radius: 5px;
}
</style>

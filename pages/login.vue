<template>
  <v-container>
    <v-card  max-width="744">
      <v-card-title class="text-h5">Login</v-card-title>
      <v-card-text>
        <v-form @submit.prevent="handleLogin" v-model="isValid">
          <v-text-field
            v-model="username"
            label="Username"
            required
            :rules="[rules.required]"
            prepend-icon="mdi-account"
          ></v-text-field>

          <v-text-field
            v-model="password"
            label="Password"
            type="password"
            required
            :rules="[rules.required]"
            prepend-icon="mdi-lock"
          ></v-text-field>

          <v-btn type="submit" :disabled="!isValid" color="primary" block>Login</v-btn>
        </v-form>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script setup lang="ts">
const username = ref('')
const password = ref('')
const isValid = ref(false)
const rules = {
  required: (v: string) => !!v || 'Required',
}
const { login } = useAuth()

const handleLogin = async () => {
  try {
    await login(username.value, password.value)
    navigateTo('/todo')
  } catch (error) {
    console.error('Login failed:', error)
  }
}
</script>

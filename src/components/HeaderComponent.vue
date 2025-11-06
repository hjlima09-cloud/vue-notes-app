<script setup>
import logo from '../assets/logoApp.png'
</script>

<template>
  <header class="header">
      <router-link to="/" class="logo-link">
      <img :src="logo" alt="Logo My Note App" class="logo" width="80px" />
    </router-link>
    <h1>My note App</h1>
    <nav>
      <ul class="nav-list">
        <li>
          <router-link to="/">Home</router-link>
        </li>
        <li>
          <router-link to="/notes">Notes</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style>
.header {
  background-color: aquamarine;
  color: #2c3d38;
  padding: 1%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.nav-list {
  display: flex;
  justify-content: end;
  gap: 1.5rem;
}
.nav-list li a {
  color: #2c3d38;
  text-decoration: none;
  font-weight: 500;
   transition: background-color 0.3s ease, color 0.3s ease;
}

.nav-list a:hover {
  color:#6E968A;

}
.logo-link{
  margin: 1%;
}
</style>

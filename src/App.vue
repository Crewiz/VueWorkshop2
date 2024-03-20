<template>
  <div class="base-layout">
    <header>
      <h1>Welcome to My Movie List</h1>
      <nav>
        <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>
        <router-link to="/product">Products</router-link>
        <router-link to="/some-list">Movie List</router-link>
      </nav>
      <p>Explore a selection of cinematic masterpieces.</p>
    </header>

    <main>
      <router-view></router-view> 
    </main>

    <footer>
      <p>&copy; 2023 Movie Enthusiast</p>
      <p>All about movies!</p>
    </footer>
  </div>
</template>

<script setup lang="ts">
</script>

<style>
.base-layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

header {
  padding: 1rem;
  background-color: #181818; 
  text-align: center; 
}

main {
  flex: 1; 
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

footer {
  padding: 1rem;
  background-color: #181818; 
  text-align: center;
}

nav {
  border: 2px solid white; 
  padding: 10px;
  border-radius: 10px; 
  text-align: center; 
}

nav a {
  margin: 0 10px; 
  font-size: 1.2em; 
  text-decoration: none; 
  color: inherit; 
}

nav a:hover {
  text-decoration: none;
}

</style>

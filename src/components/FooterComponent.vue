<script setup>
</script>

<template>
  <footer class="footer">
    <div class="footer-left">
      &copy; 2025 My Note App. All rights reserved.
    </div>
    <div class="footer-right">
      <a href="#" target="_blank" class="social-icon">
        <font-awesome-icon icon="fa-brands fa-facebook-f" class="social-icon" />
      </a>
      <a href="#" target="_blank" class="social-icon">
        <font-awesome-icon icon="fa-brands fa-twitter" class="social-icon" />
      </a>
      <a href="#" target="_blank" class="social-icon">
        <font-awesome-icon icon="fa-brands fa-instagram" class="social-icon" />
      </a>
      <a href="#" target="_blank" class="social-icon">
        <font-awesome-icon icon="fa-brands fa-linkedin-in" class="social-icon" />
      </a>
    </div>
  </footer>
</template>

<style>
.footer {
  width: 100%;
  background-color: #2c3d38;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  flex-wrap: wrap;
}

.footer-left {
  font-weight: 300;
}

.footer-right {
  display: flex;
  gap: 1rem;
}

.social-icon {
  color: white;
  transition: color 0.3s;
  font-size: 1.2rem;
}

.social-icon:hover {
  color: #2EBFC9;
}
</style>

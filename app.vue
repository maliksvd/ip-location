<script setup lang="ts">
// Import the useIPAPI composables
const { data, error } = useIPAPI()
</script>
<template>
  <section>
    <h1>IP Location</h1>
    <section v-if="data">
      <h2>{{ data.ip }}</h2>
      <div class="section">
        <h1 class="section-title"><Icon class="section-icon" name="material-symbols:location-home" /> Information location</h1>
        <p>City: {{ data.city }}</p>
        <p>Region: {{ data.region }}</p>
        <p>Country: {{ data.country_name }}</p>
        <p>Is in Europe: {{ data.in_eu }}</p>
      </div>
      <div class="section">
        <h1 class="section-title"><Icon class="section-icon" name="material-symbols:clock-loader-20" /> Timezone details</h1>
        <p>Timezone: {{ data.timezone }}</p>
        <p>UTC: {{ data.utc_offset }}</p>
        <p>Country TLD: {{ data.country_tld }}</p>
      </div>
      <div class="section">
        <h1 class="section-title"><Icon class="section-icon" name="material-symbols:map" /> Map location</h1>
        <p>Latitude: {{ data.latitude }}</p>
        <p>Longitude: { data.longitude }}</p>
      </div>
      <div class="section">
        <h1 class="section-title"><Icon class="section-icon" name="material-symbols:language" /> Languages</h1>
        {{ data.languages }}
      </div>
      <div class="section">
        <h1 class="section-title"><Icon class="section-icon" name="material-symbols:currency-exchange" /> Currency details</h1>
        <p>Currency: {{ data.currency }}</p>
        <p>Currency Name: {{ data.currency_name }}</p>
      </div>
    </section>
    <p v-else-if="error">{{ error }}</p>
    <p v-else>Loading...</p>
    <Footer />
  </section>
</template>
<style>
:root {
  font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
  line-height: 1.5;
  font-weight: 400;

  color-scheme: light dark;
  color: rgba(255, 255, 255, 0.87);
  background-color: #141619;

  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-text-size-adjust: 100%;
}

body {
  max-width: 90rem;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  place-items: center;
  place-content: center;
  min-width: 320px;
  min-height: 100vh;
}

h1 {
  font-size: 3.2em;
  line-height: 1.1;
}
h2 {
  font-size: 1.125rem; /* 18px */
  line-height: 1.75rem; /* 28px */
}

#app {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
}
.section {
  display: flex;
  flex-direction: column;
  align-items: start;
  align-content: center;
  justify-items: center;
  justify-content: center;
  background-color: #222428;
  border-radius: 8px;
  margin-top: 1rem;
  padding: 2rem;
}

.section-title {
  display: flex;
  flex-direction: row;
  align-items: center;
  align-content: center;
  justify-items: center;
  font-size: 1.125rem;
  margin-bottom: 1rem;
}

.section-icon {
  margin-right: 0.5rem;
  font-size: 1.6rem;
}
</style>

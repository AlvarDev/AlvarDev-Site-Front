<template>
  <div>
    <!-- You can add content here if you want, but it will be replaced by the redirect -->
    <v-btn to="/gemini" color="primary">Try Gemini</v-btn>
  </div>
</template>

<script>
export default {
  mounted() {
    // Redirect to the new site
    // window.location.href = 'https://www.google.com/'; // Replace with your desired URL
  }
};
</script>   
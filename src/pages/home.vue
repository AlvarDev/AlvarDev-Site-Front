<template>
  <div class="my-header">
    <img
      :style="{ width: '7%', margin: '10px', borderRadius: '50%'}"
      src="https://storage.googleapis.com/sre-demos-files/Me.png">
  </div>
  <About />
  <MyMenu />
  
</template>

<script>
  import MyMenu from '@/src/components/menu.vue'
  import About from '@/src/pages/about.vue'

  export default {
    components: { MyMenu, About },
    data: () => ({
      icons: [
        'mdi-github',
        'mdi-twitter',
        'mdi-linkedin',
        'mdi-instagram',
      ],
    }),
  }
</script>

<style>
.my-header{
  background-color: #2b2b2b;
  width: 100%;
  text-align: center;
}
.my-header v-img{
  display: inline-block;
}
</style>
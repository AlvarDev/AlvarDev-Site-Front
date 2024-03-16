<template>
  <div class="mdl-layout mdl-js-layout mdl-layout--fixed-header">
        <header class="mdl-layout__header mdl-layout__header--waterfall portfolio-header">
            <div class="mdl-layout__header-row portfolio-logo-row">
                <span class="mdl-layout__title">
                    <div class="portfolio-logo"></div>
                </span>
            </div>
        </header>
        <main class="mdl-layout__content">
            <div class="mdl-tabs mdl-js-tabs mdl-js-ripple-effect">

              <v-tabs
                v-model="tab"
                align-tabs="center"
              >
                <v-tab :value="'posts'">Blog</v-tab>
                <v-tab :value="'about'">About</v-tab>
              </v-tabs>

              <v-window v-model="tab">
                <v-window-item
                  :key="'posts'"
                  :value="'posts'"
                >
                  <Posts />
                </v-window-item>

                <v-window-item
                  :key="'about'"
                  :value="'about'"
                >
                  <About />
                </v-window-item>

              </v-window>


            </div>
        </main>
</div>
  
</template>

<script>
  import Posts from '@/src/pages/posts.vue'
  import About from '@/src/pages/about.vue'

  export default {
    components: { About, Posts },
    data () {
      return {
        tab: 'posts',
        value: 'posts',
      }
    },
    computed: {
      color () {
        switch (this.value) {
          case 0: return 'blue-grey'
          case 1: return 'teal'
          case 2: return 'brown'
          case 3: return 'indigo'
          default: return 'blue-grey'
        }
      },
    },
  }
</script>

<style>
.portfolio-header {
  position: relative;
	background-color: #2b2b2b;
}

.portfolio-header .mdl-layout__header-row {
  padding: 0;
  -webkit-justify-content: center;
      -ms-flex-pack: center;
          justify-content: center;
}

.mdl-layout__title {
  font-size: 14px;
  text-align: center;
  font-weight: 300;
}

.is-compact .mdl-layout__title span {
  display: none;
}

.portfolio-logo-row {
  min-height: 200px;
}

.is-compact .portfolio-logo-row {
  min-height: auto;
}

.portfolio-logo {
  background: url('https://storage.googleapis.com/alvardev-images/Me.png') 50% no-repeat;
  background-size: cover;
	border: 50%;
  height: 150px;
  width: 150px;
  margin: auto auto 10px;
  border-radius: 50%;
}

.is-compact .portfolio-logo {
  height: 50px;
  width: 50px;
  margin-top: 7px;
}

.portfolio-navigation-row {
  background-color: rgba(0, 0, 0, 0.08);
  text-transform: uppercase;
  height: 45px;
}

.portfolio-navigation-row  .mdl-navigation {
  text-align: center;
  max-width: 900px;
  width: 100%;
}

.portfolio-navigation-row .mdl-navigation__link {
  -webkit-flex: 1;
      -ms-flex: 1;
          flex: 1;
  line-height: 42px;
}

.portfolio-header .mdl-layout__drawer-button {
    background-color: rgba(197, 197, 197, 0.44);
}

.portfolio-navigation-row .is-active {
  position: relative;
  font-weight: bold;
}

.portfolio-navigation-row .is-active:after {
  content: "";
  width: 70%;
  height: 2px;
  display: block;
  position: absolute;
  bottom: 0;
  left: 0;
  background-color: rgb(255,64,129);
  left: 15%;
}

.portfolio-card .mdl-card__title {
  padding-bottom: 0;
}

.portfolio-blog-card-compact .mdl-card__title {
  padding-bottom: 0;
}

.portfolio-blog-card-bg > .mdl-card__actions {
  height: 52px;
  padding: 16px;
  background: rgba(0, 0, 0, 0.2);
}

img.article-image {
  width: 100%;
  height: auto;
}

.portfolio-max-width {
  max-width: 900px;
  margin: auto;
}

.portfolio-copy {
  max-width: 700px;
}

.no-padding {
  padding: 0;
}

.no-left-padding{
  padding-left: 0;
}

.no-bottom-padding {
  padding-bottom: 0;
}

.padding-top {
  padding: 10px 0 0;
}

.portfolio-share-btn {
  position: relative;
  float: right;
  top: -4px;
}

.demo-card-event > .mdl-card__actions {
    -webkit-align-items: center;
        -ms-flex-align: center;
            align-items: center;
    box-sizing: border-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
}

.portfolio-contact .mdl-textfield {
  width: 100%;
}

.portfolio-contact form {
  max-width: 550px;
  margin: auto;
}

</style>
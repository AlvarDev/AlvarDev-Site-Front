<template>
  <div class="mdl-tabs__panel" id="portafolio-panel">
    <div class="mdl-grid portfolio-max-width">

          <div
            v-for="card in cards" 
            class="mdl-cell mdl-card mdl-shadow--4dp portfolio-card">
            <div class="mdl-card__media">
              <v-img
                style="width: 100%; height: 300px;"
                cover
                :src=card.src
              />
            </div>
            <div class="mdl-card__title">
                <h2 class="mdl-card__title-text">{{ card.title }}</h2>
            </div>
            <div class="mdl-card__supporting-text">
                {{ card.description }}
            </div>
            <div class="mdl-card__actions mdl-card--border">
                <a class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect mdl-button--accent"
                    href="portfolio-example01.html">Read more</a>
            </div>
          </div>

    </div>
  </div>
</template>

<script lang="ts">
  import { usePostsService, type IApiPost } from '../services/usePostsService'
  
  export default {
    setup () {
      return {
        postsService: usePostsService(),
      }
    },

    data () {
      return {
        cards: [] as IApiPost[],
      }
    },

    async mounted () {
      // this.setLoadingAppState(true)
      await this.loadPosts()
      // this.setLoadingAppState(false)
    },

    methods: {
      openLinkInNewTab(link: any) {
        window.open(link, '_blank');
      },

      async loadPosts () {
        try {
          let response = await this.postsService.loadPosts()
          this.cards = response.posts
          console.log(this.cards)
        } catch (err) {
          console.error(err)
        }
      },
    }
  }
</script>

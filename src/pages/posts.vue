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

<script>
  export default {
    data: () => ({
      cards: [
        { title: 'Pre-fab homes', src: 'https://storage.googleapis.com/sre-demos-files/google-experts-socialbanner-linkedin-cloud.png', flex: 12 , type: 'video', description:'This is a description', link:'https://alvardev.com/'},
        { title: 'Favorite road trips', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg', flex: 6, type: 'video', description:'This is a description', link:'https://alvardev.com/'},
        { title: 'Best airlines', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', flex: 6, type: 'video', description:'This is a description', link:'https://alvardev.com/'},
      ],
    }),
    methods: {
    openLinkInNewTab(link) {
      window.open(link, '_blank');
    }
  }
  }
</script>

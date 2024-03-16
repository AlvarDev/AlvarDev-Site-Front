<template>

<div class="mdl-tabs__panel" id="about-panel">
    <div class="mdl-grid portfolio-max-width">

        <div class="mdl-cell mdl-cell--12-col mdl-card mdl-shadow--4dp">
            <div class="mdl-card__media">
                <img class="article-image" src="https://storage.googleapis.com/sre-demos-files/google-experts-socialbanner-linkedin-cloud.png" border="0" alt="">
            </div>
            <br>

            <div class="mdl-grid portfolio-copy">
                <h3 class="mdl-cell mdl-cell--12-col mdl-typography--headline">Um pouco sobre mim: </h3>
                <div class="mdl-cell mdl-cell--8-col mdl-card__supporting-text no-padding ">
                    <p>
                      Apaixonado por comunidades e compartilhamento de conhecimento, sempre procurando maneiras de facilitar a vida dos desenvolvedores. 
                      Adoro viajar e aprender sobre novas culturas, comida e música (gosto de rock e metal mas sempre é bom ouvir um pagode) e já fiquei 
                      viradas completas jogando videogames e assistindo animes.
                    </p>
                </div>

                <v-card-actions>

                <v-btn icon="mdi-github" color="#2b2b2b" @click="openLinkInNewTab('https://github.com/AlvarDev')" />

                <v-btn icon="mdi-twitter" color="rgb(29, 155, 240)" @click="openLinkInNewTab('https://twitter.com/AlvarDev')" />

                <v-btn icon="mdi-youtube" color="#ea4335" @click="openLinkInNewTab('https://www.youtube.com/watch?v=i3epeCk8ldc')"/>
                
                <v-btn icon="mdi-linkedin" color="#5865f2" @click="openLinkInNewTab('https://www.linkedin.com/in/alvardev/')"/>

                </v-card-actions>
            </div>
        </div>
    </div>
</div>
    <!-- <v-card
      class="mx-auto"
      elevation="16"
      style="margin: 1%; width: 70%;"
    >
      <v-img
        class="align-end text-white"
        style="height: 40%;"
        src="https://storage.googleapis.com/sre-demos-files/google-experts-socialbanner-linkedin-cloud.png"
        cover
      >
        <v-card-title>Alvaro David</v-card-title>
      </v-img>
  
      <v-card-subtitle class="pt-4">
        Google Developer Expert in Google Cloud - Serverless
      </v-card-subtitle>
  
      <v-card-text>
        <div>Um pouco sobre mim:</div>
        <br>
        <div>Apaixonado por comunidades e compartilhamento de conhecimento, sempre procurando maneiras de facilitar a vida dos desenvolvedores. Adoro viajar e aprender sobre novas culturas, comida e música (gosto de rock e metal mas sempre é bom ouvir um pagode) e já fiquei viradas completas jogando videogames e assistindo animes.</div>
      </v-card-text>
  
      <v-card-actions>

        <v-btn icon="mdi-github" color="#2b2b2b" @click="openLinkInNewTab('https://github.com/AlvarDev')" />

        <v-btn icon="mdi-twitter" color="rgb(29, 155, 240)" @click="openLinkInNewTab('https://twitter.com/AlvarDev')" />

        <v-btn icon="mdi-youtube" color="#ea4335" @click="openLinkInNewTab('https://www.youtube.com/watch?v=i3epeCk8ldc')"/>

        <v-btn icon="mdi-linkedin" color="#5865f2" @click="openLinkInNewTab('https://www.linkedin.com/in/alvardev/')"/>
        
      </v-card-actions>
    </v-card> -->
</template>

<script>
export default {
  methods: {
    openLinkInNewTab(link) {
      window.open(link, '_blank');
    }
  }
}
</script>
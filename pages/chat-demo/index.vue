<template>
    <!-- Search widget element is not visible by default -->
    <gen-search-widget
      configId="283f7fb1-901a-430b-96fc-74228affc07e"
      triggerId="searchWidgetTrigger">
    </gen-search-widget>

    <!-- Element that opens the widget on click. It does not have to be an input -->
    <v-btn 
      prepend-icon="$vuetify" 
      id="searchWidgetTrigger" 
      class="text-none text-subtitle-1"
      color="#5865f2"
      size="small"
      variant="flat"
      >
      Search here
    </v-btn>
  </template>
  
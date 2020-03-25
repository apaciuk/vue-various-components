<template>
    <v-layout row wrap>
        <v-flex xs12>
          <v-card target="_blank" :href="url" :color="color" class="white--text">
            <v-container fluid grid-list-lg>
              <v-layout row>
                <v-flex xs7>
                  <div>
                    <h2 class="headline">{{title}}</h2>
                    <h4>{{artistName}}</h4>
                  </div>
              <div class="my-2">
              <v-btn class="white--text" target="_blank" :href="url" text small>View Album</v-btn>
                </div>
                </v-flex>
                <v-flex xs5>
                    <v-card-media
                      :src="image"
                      height="100px"
                      contain
                    ></v-card-media>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card>
        </v-flex>
      </v-layout>
  </template>
<script>
export default {
  props: ['title', 'image', 'artistName', 'url', 'color']

}
</script>

<template>
  <div>
    <v-dialog
      v-model="dialogPhoto"
      scrollable
    >
      <template v-slot:activator="{ on, attrs }">
        <v-icon v-bind="attrs" v-on="on" class="arrowBtn">mdi-arrow-expand-all</v-icon>
      </template>
      <v-card>
        <v-card-title>
          <a :href="image.source" target="_blank" v-if="image.source && image.source.length > 0">Источник</a>
          <v-spacer></v-spacer>
          <v-icon @click="dialogPhoto = false">mdi-close</v-icon>
        </v-card-title>
        <v-divider></v-divider>
        <v-card-text style="padding: 20px 24px 10px;font-size: 15px;line-height: 1.6;text-align:center;">
          <div v-html="image.description" v-if="image.description && image.description.length > 0"></div>
          <img :src="image.url" style="max-width: 100%; margin: auto;">
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
  export default {
    name: 'PhotoModal',

    props: {
      image: {
          default: {},
          type: Object
      },
    },

    data() {
      return {
        dialogPhoto: false,
      }
    },

    methods: {
      loadPage() {},
    },

    created() {
      this.loadPage()
    },

    computed: {},

    watch: {},
  }
</script>
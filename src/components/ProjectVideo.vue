<template>
  <v-row justify="center">
    <v-dialog
      v-model="dialog"
      scrollable
      max-width="608px"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          style="background-color: #6c757d;border: 1px solid #6c757d;"
          dark
          class="mainWrapBtn"
          v-bind="attrs"
          v-on="on"
        >
          Фильм
        </v-btn>
      </template>
      <v-card>
        <v-card-title>
          Забытые улицы Надыма
          <v-spacer></v-spacer>
          <v-icon @click="dialog = false">mdi-close</v-icon>
        </v-card-title>
        <v-divider></v-divider>
        <v-card-text style="padding: 20px 24px 10px;font-size: 15px;line-height: 1.6;">
          <iframe width="100%" height="315" src="https://www.youtube.com/embed/4DWgss1AM4A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
  export default {
    data () {
      return {
        dialog: false,
      }
    },
  }
</script>
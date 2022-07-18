<template>
  <v-row justify="center">
    <v-dialog
      v-model="dialog"
      scrollable
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          style="background-color: #198754;border: 1px solid #198754;"
          dark
          class="mainWrapBtn"
          v-bind="attrs"
          v-on="on"
        >
          Карта
        </v-btn>
      </template>
      <v-card>
        <v-card-title>
          Карта
          <v-spacer></v-spacer>
          <v-icon @click="dialog = false">mdi-close</v-icon>
        </v-card-title>
        <v-divider></v-divider>
        <v-card-text style="padding: 20px 24px 10px;font-size: 15px;line-height: 1.6;">
          <div style="position:relative;overflow:hidden;"><iframe src="https://yandex.ru/map-widget/v1/-/CCUNj8HvCC" width="100%" height="400" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe></div>
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
  export default {
    data () {
      return {
        dialogm1: '',
        dialog: false,
      }
    },
  }
</script>
<template>
  <v-row justify="center">
    <v-dialog
      v-model="dialog"
      scrollable
      max-width="600px"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          style="background-color: #0d6efd;border: 1px solid #0d6efd;"
          dark
          class="mainWrapBtn"
          v-bind="attrs"
          v-on="on"
        >
          О проекте
        </v-btn>
      </template>
      <v-card>
        <v-card-title>
          О проекте
          <v-spacer></v-spacer>
          <v-icon @click="dialog = false">mdi-close</v-icon>
        </v-card-title>
        <v-divider></v-divider>
        <v-card-text style="padding: 20px 24px 10px;font-size: 15px;line-height: 1.6;">
            <p>
              История Надыма началась задолго до 9 марта 1972 года, когда он получил статус города.
              Днём рождения можно считать 22 апреля 1949 года, когда санно-тракторный поезд из Салехарда высадил на берегу реки Надым первый десант строителей 501 стройки.
              Именно тогда на карте появился Новый Надым (так назывался наш город до 1970-х гг.).
            </p>
            <p>
              Проект "Новый Надым 1960-х" представляет собой <a href="https://yandex.ru/maps/-/CCUmuWWElC" target="_blank">карту Нового Надыма 1969-70 гг.</a>,
              дополненную воспоминаниями <a href="https://vk.com/id150551000" target="_blank">Валерия Мартынова</a>, почётного гражданина Надыма, проживающем здесь с 1966 года.
            </p>
            <p>
              Карта Нового Надыма нанесена поверх карты современного Надыма, чтобы можно было понять, где находился тот или иной дом.
              Карта является интерактивной: при нажатии на дом открывается его описание.
            </p>
            <p>
              Проект разработан <a href="https://vk.com/history_photo_nadym" target="_blank">сообществом "Надым в объективе"</a>.
            </p>
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
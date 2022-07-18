<template>
  <v-row justify="center">
    <v-dialog
      v-model="dialog"
      scrollable
      max-width="600px"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          style="background-color: #6c757d;border: 1px solid #6c757d;"
          dark
          class="mainWrapBtn"
          v-bind="attrs"
          v-on="on"
        >
          Объект
        </v-btn>
      </template>
      <v-card v-if="this.object">
        <v-card-title style="word-break: break-word;">
          {{object.id}}
          &nbsp;
          {{object.title}}
          <v-spacer></v-spacer>
          <v-icon @click="dialog = false;$router.push({ path: '/' })">mdi-close</v-icon>
        </v-card-title>
        <v-divider></v-divider>
        <v-card-text style="padding: 20px 24px 10px;font-size: 15px;line-height: 1.6;">
          <div v-html="object.description"></div>
          <div v-html="object.mapUrl"></div>

          <template v-if="object.images && object.images.length > 0">
            <h2 class="subheader">Галерея</h2>
            <v-carousel v-model="model" height="350" class="customCarousel">
              <v-carousel-item
                v-for="(image, i) in object.images"
                :key="i"
              >
                <app-photo-modal :image='image'></app-photo-modal>
                <img :src="image.url" style="max-width: 100%; max-height: 100%;margin: auto;">
              </v-carousel-item>
            </v-carousel>
          </template>

          <template v-if="object.comments && object.comments.length > 0">
            <h2 class="subheader">Воспоминания старожилов</h2>
            <figure
                v-for="(comment, i) in object.comments"
                :key="i">
                <blockquote class="blockquote" v-html="comment.text"></blockquote>
                <figcaption class="blockquote-footer">
                  <cite title="Source Title" v-html="comment.author"></cite>
                </figcaption>
              </figure>
          </template>
        </v-card-text>
      </v-card>
      <v-card v-else>
        <v-card-title>
          <v-spacer></v-spacer>
          <v-icon @click="dialog = false;$router.push({ path: '/' })">mdi-close</v-icon>
        </v-card-title>
        <v-divider></v-divider>
        <v-card-text style="padding: 20px 24px 10px;font-size: 15px;line-height: 1.6;">
          <v-alert
            dense
            outlined
            type="error"
          >
            По данной ссылке объектов нет
          </v-alert>
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
  export default {
    name: 'Object',

    props: {},

    data() {
      return {
        id: this.$route.params.id,
        dialog: true,
        object: {},
        model: 0,
      }
    },

    methods: {
      loadPage() {
        this.object = this.$store.state.objects.find(item => item.id == this.id);
      },
    },

    created() {
      this.loadPage()
    },

    computed: {},

    watch: {
      $route(toR, fromR) {
        this.id = toR.params['id']
        this.loadPage()
      },
    },
  }
</script>

<style>
  .mapWrap{
    overflow:hidden;
    position:relative;
    text-align: center;
  }
  
  .mapWrap iframe{
    max-width: 100% !important;
  }

  .customCarousel{
    background: #eeeeee;
  }

  .customCarousel .v-responsive__content{
    display: flex !important;
  }

  .subheader{
    font-family: 'Segoe UI Light';
    font-weight: 600;
    margin: 30px 0 10px;
    text-align: center;
  }

  .arrowBtn{
    position: absolute !important;
    right: 5px;
    top: 5px;
    background: white;
    padding: 5px;
    border-radius: 5px;
  }

  figure{
    margin-bottom: 30px;
  }

  .blockquote{
    font-size: 16px !important;
    padding: 0 !important;
  }

  .blockquote-footer{
    font-size: 15px !important;
    text-align: right;
  }
</style>
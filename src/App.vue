<template>
  <v-app>
    <v-main>
      <div class="mainWrap">
        <div class="titleWrap" :class="{'titleWrapSmall': $vuetify.breakpoint.xs}">
          <a href="/"><img src="./assets/logoS.png" alt="Logo" class="mainLogo"></a>
          <h1 class="mainTitle">501-я в объективе</h1>

          <app-project-description style="display: inline;margin: 0 2px;"></app-project-description>
          <app-project-map style="display: inline;margin: 0 2px;"></app-project-map>
          <router-view style="display: inline;"/>
          <hr style="margin-top:20px;">
          <p class="signature">&copy; 2022 <a href="https://t.me/history_501" target="_blank">Сообщество "501-я в объективе"</a></p>
        </div>
      </div>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data () {
      return {
        dialog: false,
        id: this.$route.params.id,
      }
    },
};
</script>

<style>
  @font-face {
    font-family: 'Segoe UI Light';
    src: url('assets/fonts/SegoeUI-Light.eot');
    src: url('assets/fonts/SegoeUI-Light.eot?#iefix') format('embedded-opentype'),
    url('assets/fonts/SegoeUI-Light.woff') format('woff'),
    url('assets/fonts/SegoeUI-Light.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
    }
  html, body{
    height:100%;
    overflow: hidden !important;
    width: 100%;
  }

  .mainWrap{
    background: url(assets/images/main.jpg) no-repeat;
    background-position: center;
    background-size: cover;
    /*display: flex;*/
    height:100%;
    padding: 12px;
    width:100%;
  }

  .titleWrap{
    background: rgba(226, 227, 229, 0.8);
    border: 1px solid #d3d6d8;
    border-radius: .25rem;
    color: #212529;
    margin: 5% auto;
    padding: 16px 16px 0;
    text-align: center;
    width: 456px;
  }

  .titleWrapSmall{
    width: 100%;
  }

  .mainLogo{
    height: 72px;
    margin: 0 auto;
    width: 72px;
  }

  .mainTitle{
    font-size: calc(1.375rem + 1.5vw);
    font-family: 'Segoe UI Light';
    font-weight: 300;
    margin-bottom: 30px;
  }

  .mainWrapBtn{
    margin-right: 10px;
    margin-bottom: 10px;
    text-transform: inherit !important;
    font-weight: 300 !important;
    font-size: 0.9rem !important;
  }
  
  .signature{
    font-size: 0.85rem;
    margin: 10px 0 !important;
  }

  iframe{
    border: 0px;
  }
</style>
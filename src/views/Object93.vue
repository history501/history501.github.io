<template>
  <div class="object93-page object-page" id="top">
    <header class="site-header">
      <router-link class="brand" to="/l93" aria-label="На главную">
        <img class="brand-mark" src="@/assets/images/l93/logo.png" alt="Открываю Ямал">
        <span>
          <small>МУЗЕЙ ПОД ОТКРЫТЫМ НЕБОМ</small>
          <strong>
            ЛАГЕРЬ №93
            <br>У РАЗЪЕЗДА ЩУЧИЙ
          </strong>
        </span>
      </router-link>

      <nav class="main-nav" :class="{ 'is-open': menuOpen }" aria-label="Основная навигация">
        <router-link to="/l93#history" @click.native="menuOpen = false">История</router-link>
        <router-link to="/l93#camp" @click.native="menuOpen = false">О лагере</router-link>
        <router-link to="/l93#map" @click.native="menuOpen = false">Карта</router-link>
        <router-link to="/l93#objects" @click.native="menuOpen = false">Объекты</router-link>
      </nav>

      <div class="header-actions">
        <button class="menu-toggle" type="button" aria-label="Открыть меню" @click="menuOpen = !menuOpen">
          <span></span><span></span>
        </button>
      </div>
    </header>

    <main>
      <section class="object-intro">
        <div class="breadcrumbs">
          <router-link to="/">501-Я СТРОЙКА</router-link>
          <span>/</span>
          <router-link to="/l93#objects">ЛАГЕРЬ №93</router-link>
          <span>/</span>
          <span>{{ objectTitle }}</span>
        </div>

        <div class="object-title">
          <h1>{{ objectTitle }}</h1>
          <p v-if="object && object.safety">Состояние: {{ object.safety }}</p>
        </div>
      </section>

      <section class="object-hero-photo" v-if="object && object.images && object.images.length">
        <img :src="object.images[0].url" :alt="objectTitle">
      </section>

      <section class="object-story" v-if="object && object.description">
        <div class="story-label">
          <h2>Описание объекта</h2>
        </div>

        <div class="story-content" v-html="object.description"></div>
      </section>

      <section class="object-plan" v-if="object && object.plan">
        <div class="plan-copy">
          <h2>План объекта</h2>
        </div>

        <div class="plan-drawing">
          <img :src="object.plan" :alt="'План: ' + objectTitle">
        </div>
      </section>

      <section class="object-gallery archive-gallery" v-if="galleryPhotos.length">
        <div class="gallery-title">
          <h2>Фотографии объекта</h2>
        </div>

        <div class="object-slider">
          <div class="object-slider-frame">
            <img :src="galleryPhotos[photoIndex].url" :alt="galleryPhotos[photoIndex].source || objectTitle">
            <button
              v-if="galleryPhotos.length > 1"
              class="object-slider-nav prev"
              type="button"
              aria-label="Предыдущее фото"
              @click="prevPhoto"
            >←</button>
            <button
              v-if="galleryPhotos.length > 1"
              class="object-slider-nav next"
              type="button"
              aria-label="Следующее фото"
              @click="nextPhoto"
            >→</button>
          </div>
          <p v-if="galleryPhotos[photoIndex].source" class="object-slider-caption">{{ galleryPhotos[photoIndex].source }}</p>
          <div class="object-slider-dots" v-if="galleryPhotos.length > 1">
            <button
              v-for="(photo, i) in galleryPhotos"
              :key="i"
              type="button"
              :class="{ active: photoIndex === i }"
              :aria-label="photo.source || ('Фото ' + (i + 1))"
              @click="photoIndex = i"
            ></button>
          </div>
        </div>
      </section>

      <section class="object-location" v-if="object && object.mapUrl">
        <div class="location-copy">
          <h2>Расположение на карте</h2>
        </div>

        <div class="location-map" v-html="object.mapUrl"></div>
      </section>

      <nav class="object-pagination" aria-label="Навигация по объектам">
        <router-link
          v-if="prevObject"
          class="pagination-prev"
          :to="'/l93/p' + prevObject.id"
        >
          <small>← ПРЕДЫДУЩИЙ</small>
          <strong>{{ prevObject.title }}</strong>
        </router-link>
        <span v-else class="pagination-prev"></span>

        <router-link to="/l93#objects" class="all-objects">
          <span>●</span>
          <small>ВСЕ ОБЪЕКТЫ</small>
        </router-link>

        <router-link
          v-if="nextObject"
          class="pagination-next"
          :to="'/l93/p' + nextObject.id"
        >
          <small>СЛЕДУЮЩИЙ →</small>
          <strong>{{ nextObject.title }}</strong>
        </router-link>
        <span v-else class="pagination-next"></span>
      </nav>
    </main>

    <footer class="site-footer">
      <p><strong>© 2024-26</strong> Историко-культурный проект «Открываю Ямал»</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'Object93',

  data() {
    return {
      menuOpen: false,
      photoIndex: 0,
    }
  },

  computed: {
    object() {
      return this.$store.state.objects.find(item => item.id == this.$route.params.id) || null
    },
    objectTitle() {
      return this.object ? this.object.title : ''
    },
    galleryPhotos() {
      return (this.object && this.object.images) || []
    },
    campObjects() {
      return this.$store.state.objects.filter(item => String(item.id).startsWith('93-'))
    },
    objectIndex() {
      if (!this.object) return -1
      return this.campObjects.findIndex(item => item.id == this.object.id)
    },
    prevObject() {
      return this.objectIndex > 0 ? this.campObjects[this.objectIndex - 1] : null
    },
    nextObject() {
      return this.objectIndex >= 0 && this.objectIndex < this.campObjects.length - 1
        ? this.campObjects[this.objectIndex + 1]
        : null
    },
  },

  created() {
    this.resetGallery()
  },

  mounted() {
    this.ensureFont()
    document.body.classList.add('object93-body')
    this.scrollTop()
  },

  watch: {
    $route() {
      this.resetGallery()
      this.scrollTop()
    },
  },

  beforeDestroy() {
    document.body.classList.remove('object93-body')
  },

  methods: {
    ensureFont() {
      if (document.getElementById('l93-montserrat')) return
      const link = document.createElement('link')
      link.id = 'l93-montserrat'
      link.rel = 'stylesheet'
      link.href = 'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&display=swap'
      document.head.appendChild(link)
    },
    scrollTop() {
      this.$nextTick(() => {
        window.scrollTo(0, 0)
      })
    },
    resetGallery() {
      this.photoIndex = this.galleryPhotos.length > 1 ? 1 : 0
    },
    prevPhoto() {
      this.photoIndex = (this.photoIndex + this.galleryPhotos.length - 1) % this.galleryPhotos.length
    },
    nextPhoto() {
      this.photoIndex = (this.photoIndex + 1) % this.galleryPhotos.length
    },
  },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&display=swap');

.object93-body {
  background: #f6f5f0;
}

.object93-body .v-application {
  background: #f6f5f0 !important;
  font-family: Montserrat, Arial, sans-serif;
}

.v-application .object93-page a {
  color: inherit;
  text-decoration: none;
}

.v-application .object93-page button {
  font: inherit;
}

.v-application .object93-page .eyebrow.blue {
  color: #36a9e1 !important;
  background-color: transparent !important;
  border-color: transparent !important;
}
</style>

<style scoped>
.object93-page {
  --navy: #1e325a;
  --navy-dark: #141b31;
  --blue: #36a9e1;
  --paper: #f6f5f0;
  --white: #fff;
  --ink: #242424;
  --muted: #747474;
  --line: #deded8;
  --max: 1440px;
  box-sizing: border-box;
  background: var(--paper);
  color: var(--ink);
  font-family: Montserrat, Arial, sans-serif;
  font-size: 15px;
  line-height: 1.6;
  min-height: 100vh;
  width: 100%;
  overflow-x: hidden;
}

.object93-page *,
.object93-page *::before,
.object93-page *::after {
  box-sizing: border-box;
}

.object93-page h1,
.object93-page h2,
.object93-page h3,
.object93-page strong {
  font-weight: 700;
}

.site-header {
  height: 78px;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 38px;
  position: sticky;
  top: 0;
  z-index: 20;
  border-bottom: 1px solid #eee;
}

.brand {
  display: flex;
  align-items: center;
  gap: 12px;
  line-height: 1.05;
}

.brand-mark {
  height: 30px;
  width: auto;
  display: block;
}

.brand strong {
  display: block;
  font-size: 12px;
  letter-spacing: .02em;
}

.brand small {
  display: block;
  font-size: 7px;
  margin-top: 5px;
  letter-spacing: .08em;
  color: #666;
}

.main-nav {
  display: flex;
  gap: 30px;
  margin-left: auto;
  margin-right: 50px;
}

.main-nav a,
.language {
  font-size: 10px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: .03em;
}

.header-actions {
  display: flex;
  align-items: center;
  gap: 20px;
}

.menu-toggle {
  width: 25px;
  height: 20px;
  border: 0;
  background: transparent;
  padding: 0;
  display: none;
  align-content: center;
  gap: 7px;
  cursor: pointer;
}

.menu-toggle span {
  display: block;
  height: 1px;
  background: #222;
  width: 22px;
}

.eyebrow {
  font-size: 10px;
  font-weight: 700;
  letter-spacing: .13em;
  margin: 0 0 16px;
}

.eyebrow.blue {
  color: var(--blue);
}

.button {
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  gap: 35px;
  padding: 14px 20px;
  border: 1px solid currentColor;
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: .04em;
  transition: .2s;
}

.button:hover {
  transform: translateY(-2px);
}

.button-light {
  color: #fff;
}

.button-dark {
  background: var(--navy);
  color: #fff;
  border-color: var(--navy);
}

.object-page {
  background: #f6f5f0;
}

.object93-page > main {
  width: 920px;
  max-width: 100%;
  margin: 0 auto;
}

.object-intro {
  padding: 34px 0 38px;
  display: grid;
  grid-template-columns: 1fr auto;
  grid-template-areas:
    "crumbs counter"
    "title counter";
  align-items: end;
  gap: 20px;
}

.breadcrumbs {
  grid-area: crumbs;
  display: flex;
  gap: 9px;
  font-size: 8px;
  font-weight: 700;
  letter-spacing: .08em;
  color: #8a8a86;
  text-transform: uppercase;
}

.breadcrumbs a {
  color: #555;
}

.object-counter {
  grid-area: counter;
  display: flex;
  align-items: center;
  gap: 16px;
  align-self: start;
  padding-top: 3px;
}

.object-counter span {
  font-size: 9px;
  font-weight: 700;
  color: #777;
}

.object-counter button {
  border: 0;
  background: none;
  font-size: 18px;
  cursor: pointer;
  color: #202020;
}

.object-title {
  grid-area: title;
  padding-top: 10px;
}

.object-title h1 {
  font-size: clamp(44px, 5vw, 70px);
  line-height: .95;
  letter-spacing: -.05em;
  text-transform: uppercase;
  margin: 0 0 13px;
}

.object-title > p:last-child {
  color: #777;
  font-size: 15px;
  margin: 0;
}

.object-hero-photo {
  height: min(62vh, 650px);
  min-height: 420px;
  overflow: hidden;
  background: #6f7865;
}

.object-hero-photo img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.photo-placeholder {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
}

.photo-placeholder > span {
  position: absolute;
  left: 20px;
  bottom: 18px;
  z-index: 2;
  color: #fff;
  font-size: 9px;
  font-weight: 700;
  letter-spacing: .12em;
}

.photo-barrack {
  background:
    linear-gradient(130deg, #172b1b 0%, #6c7e5f 40%, #b9a581 41%, #765d43 42%, #987d59 63%, #31462f 100%);
}

.photo-barrack:before {
  content: "";
  position: absolute;
  left: 25%;
  top: 28%;
  width: 50%;
  height: 43%;
  background:
    linear-gradient(#8e7758 0 15%, transparent 15%),
    repeating-linear-gradient(90deg, #5d4937 0 7px, #816a4e 8px 20px);
  border: 9px solid #4d3b2d;
  box-shadow: 0 35px 30px #1117;
}

.photo-barrack:after {
  content: "";
  position: absolute;
  left: 20%;
  right: 20%;
  bottom: 12%;
  height: 25%;
  background:
    linear-gradient(155deg, transparent 48%, #655039 49% 52%, transparent 53%),
    linear-gradient(25deg, transparent 48%, #655039 49% 52%, transparent 53%);
  opacity: .8;
}

.object-facts {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  border-bottom: 1px solid #d9d9d2;
  padding: 34px 0 35px;
}

.fact {
  display: flex;
  gap: 14px;
  align-items: center;
  padding: 0 30px;
  border-right: 1px solid #ddd;
}

.fact:first-child {
  padding-left: 0;
}

.fact:last-child {
  border-right: 0;
}

.fact-icon {
  width: 34px;
  height: 34px;
  border: 1px solid #c8c8c0;
  display: grid;
  place-items: center;
  color: #1e325a;
  font-size: 15px;
}

.fact small {
  display: block;
  color: #858585;
  font-size: 8px;
  font-weight: 700;
  margin-bottom: 5px;
  letter-spacing: .05em;
}

.fact strong {
  display: block;
  font-size: 11px;
}

.object-story {
  padding: 115px 0;
  display: grid;
  grid-template-columns: .7fr 1.3fr;
  gap: 100px;
}

.story-label h2,
.gallery-title h2,
.plan-copy h2,
.location-copy h2 {
  font-size: clamp(36px, 4vw, 58px);
  line-height: 1;
  letter-spacing: -.05em;
  margin: 0;
}

.story-content {
  max-width: 650px;
}

.story-content p {
  font-size: 14px;
  color: #626262;
  line-height: 1.85;
  margin: 0 0 24px;
}

.story-content .story-lead {
  font-size: 20px;
  line-height: 1.5;
  color: #292929;
  margin-bottom: 30px;
}

.object-gallery {
  padding: 115px 0;
}

.gallery-title {
  display: flex;
  justify-content: space-between;
  align-items: end;
  margin-bottom: 45px;
}

.object-slider-frame {
  position: relative;
  height: 430px;
  overflow: hidden;
  background: #6f7865;
}

.object-slider-frame img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.object-slider-nav {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 44px;
  height: 44px;
  border: 0;
  background: var(--navy);
  color: #fff;
  font-size: 20px;
  cursor: pointer;
  display: grid;
  place-items: center;
  transition: .2s;
}

.object-slider-nav:hover {
  background: var(--blue);
}

.object-slider-nav.prev {
  left: 16px;
}

.object-slider-nav.next {
  right: 16px;
}

.object-slider-caption {
  margin: 14px 0 0;
  font-size: 12px;
  color: var(--muted);
  text-align: center;
}

.object-slider-dots {
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-top: 14px;
}

.object-slider-dots button {
  width: 9px;
  height: 9px;
  padding: 0;
  border: 0;
  border-radius: 50%;
  background: #cfcfc8;
  cursor: pointer;
}

.object-slider-dots button.active {
  background: var(--navy);
}

.archive-1 {
  background:
    linear-gradient(160deg, #757b71, #aaa18d 45%, #56564d 46%, #77715e);
  filter: grayscale(1);
}

.archive-2 {
  background:
    linear-gradient(135deg, #51534d, #aaa18a 48%, #5f5e54 49%, #8c866f);
  filter: grayscale(1);
}

.archive-3 {
  background:
    linear-gradient(170deg, #888475, #b4a78a 45%, #55544d 46%, #6f6a59);
  filter: grayscale(1);
}

.object-plan {
  position: relative;
  isolation: isolate;
  padding: 105px 0;
  display: grid;
  grid-template-columns: .7fr 1.3fr;
  gap: 90px;
  align-items: center;
}

.object-plan::before {
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  left: 50%;
  width: 100vw;
  transform: translateX(-50%);
  background: #fff;
  z-index: -1;
}

.plan-copy > p:last-child {
  max-width: 380px;
  color: #777;
  font-size: 13px;
  line-height: 1.8;
  margin-top: 25px;
}

.plan-drawing {
  text-align: center;
}

.plan-drawing img {
  max-width: 100%;
  max-height: 300px;
  width: auto;
  height: auto;
  display: block;
  margin: 0 auto;
}

.plan-house {
  height: 310px;
  max-width: 680px;
  margin: 0 auto 18px;
  border: 2px solid #303030;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: 1fr 1fr;
  position: relative;
  background:
    linear-gradient(90deg, transparent 19.8%, #333 20%, transparent 20.2% 39.8%, #333 40%, transparent 40.2% 59.8%, #333 60%, transparent 60.2% 79.8%, #333 80%, transparent 80.2%),
    linear-gradient(transparent 49.8%, #333 50%, transparent 50.2%);
}

.plan-house:before {
  content: "";
  position: absolute;
  left: 46%;
  top: -2px;
  height: 55%;
  width: 8%;
  border-left: 2px solid #333;
  border-right: 2px solid #333;
  background: #fff;
}

.room {
  display: grid;
  place-items: center;
  font-size: 10px;
  color: #888;
}

.plan-drawing > small {
  color: #888;
  font-size: 9px;
}

.current-gallery {
  padding-top: 115px;
}

.current-grid {
  display: grid;
  grid-template-columns: 1.6fr 1fr 1fr;
  gap: 15px;
  height: 430px;
}

.current-main {
  background:
    linear-gradient(125deg, #2d4a30, #718167 44%, #b4a17f 45%, #6e5a43 46%, #889177 70%, #263a28);
}

.current-main:after {
  content: "";
  position: absolute;
  left: 28%;
  top: 31%;
  width: 44%;
  height: 38%;
  border: 8px solid #4e3c2e;
  background: #806b4e;
  box-shadow: 0 25px 25px #0005;
}

.current-detail {
  background: linear-gradient(140deg, #203825, #72836c 47%, #8d795a 48%, #3c4a38);
}

.current-interior {
  background: repeating-linear-gradient(90deg, #4c3b2c 0 14px, #816b4d 15px 28px, #594634 29px 39px);
}

.object-testimony {
  background: #1e325a;
  color: #fff;
  padding: 90px 0;
  display: grid;
  grid-template-columns: 100px 1fr;
  gap: 35px;
}

.testimony-mark {
  font-size: 100px;
  line-height: .7;
  color: #36a9e1;
}

.object-testimony blockquote {
  font-size: 27px;
  line-height: 1.35;
  letter-spacing: -.025em;
  margin: 10px 0 20px;
}

.object-testimony cite {
  color: #c5ccd7;
  font-size: 10px;
  font-style: normal;
}

.object-location {
  position: relative;
  isolation: isolate;
  padding: 115px 0;
  display: grid;
  grid-template-columns: .7fr 1.3fr;
  gap: 90px;
  align-items: center;
}

.object-location::before {
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  left: 50%;
  width: 100vw;
  transform: translateX(-50%);
  background: #fff;
  z-index: -1;
}

.location-copy > p:not(.eyebrow) {
  color: #737373;
  font-size: 13px;
  line-height: 1.8;
  max-width: 390px;
  margin: 28px 0;
}

.location-map {
  height: 390px;
  position: relative;
  overflow: hidden;
  background: #bdc5b2;
}

.location-map iframe {
  width: 100%;
  height: 100%;
  border: 0;
  display: block;
}

.location-pin {
  position: absolute;
  left: 43%;
  top: 53%;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: #1e325a;
  color: #fff;
  border: 2px solid #fff;
  display: grid;
  place-items: center;
  font-size: 10px;
  font-weight: 700;
  box-shadow: 0 2px 10px #0005;
}

.object-pagination {
  border-top: 1px solid #d9d9d2;
  padding: 35px 0 70px;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  gap: 30px;
  align-items: center;
}

.pagination-prev {
  text-align: left;
}

.pagination-next {
  text-align: right;
}

.object-pagination small {
  display: block;
  color: #8a8a8a;
  font-size: 8px;
  font-weight: 700;
  letter-spacing: .08em;
  margin-bottom: 6px;
}

.object-pagination strong {
  font-size: 13px;
}

.all-objects {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  color: #1e325a;
}

.all-objects span {
  font-size: 20px;
}

.site-footer {
  background: var(--navy);
  color: #fff;
  padding: 40px 6vw;
  text-align: center;
  font-size: 13px;
}

.site-footer p {
  margin: 0;
}

@media (max-width: 900px) {
  .site-header {
    padding: 0 20px;
  }

  .main-nav {
    display: none;
  }

  .menu-toggle {
    display: grid;
  }

  .main-nav.is-open {
    display: flex;
    position: absolute;
    top: 68px;
    left: 0;
    right: 0;
    padding: 25px;
    background: #fff;
    flex-direction: column;
    gap: 18px;
    margin: 0;
  }

  .object93-page > main {
    padding-left: 7vw;
    padding-right: 7vw;
  }

  .object-story,
  .object-plan,
  .object-location {
    grid-template-columns: 1fr;
    gap: 45px;
  }

  .current-grid {
    height: 550px;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1.4fr 1fr;
  }

  .current-main {
    grid-column: span 2;
  }
}

@media (max-width: 600px) {
  .site-header {
    height: 68px;
  }

  .brand strong {
    font-size: 10px;
  }

  .object-intro {
    grid-template-columns: 1fr;
    grid-template-areas:
      "crumbs"
      "counter"
      "title";
    padding-top: 28px;
  }

  .object-counter {
    justify-content: flex-start;
  }

  .object-hero-photo {
    height: 320px;
    min-height: 0;
  }

  .object-facts {
    grid-template-columns: 1fr;
    gap: 20px;
    padding: 25px 0;
  }

  .fact,
  .fact:first-child {
    border-right: 0;
    padding: 0;
  }

  .object-story {
    padding-top: 75px;
    padding-bottom: 75px;
    gap: 35px;
  }

  .story-content .story-lead {
    font-size: 17px;
  }

  .object-gallery {
    padding-top: 75px;
    padding-bottom: 75px;
  }

  .gallery-title {
    display: block;
  }

  .gallery-title h2 {
    margin-top: 10px;
  }

  .object-slider-frame {
    height: 260px;
  }

  .object-slider-nav {
    width: 36px;
    height: 36px;
    font-size: 16px;
  }

  .object-plan {
    padding-top: 75px;
    padding-bottom: 75px;
  }

  .plan-house {
    height: 220px;
  }

  .object-testimony {
    padding: 70px 0;
    grid-template-columns: 1fr;
    gap: 5px;
  }

  .testimony-mark {
    font-size: 75px;
  }

  .object-testimony blockquote {
    font-size: 22px;
  }

  .object-location {
    padding-top: 75px;
    padding-bottom: 75px;
  }

  .location-map {
    height: 300px;
  }

  .object-pagination {
    grid-template-columns: 1fr 1fr;
  }

  .all-objects {
    grid-column: 1 / -1;
    grid-row: 1;
    margin-bottom: 10px;
  }

  .pagination-prev {
    grid-column: 1;
    grid-row: 2;
  }

  .pagination-next {
    grid-column: 2;
    grid-row: 2;
  }
}
</style>

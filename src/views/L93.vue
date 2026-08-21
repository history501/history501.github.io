<template>
  <div class="l93-page" id="top">
    <header class="site-header">
      <a class="brand" href="#top" aria-label="На главную" @click.prevent="scrollTo('top')">
        <img class="brand-mark" src="@/assets/images/l93/logo.png" alt="Открываю Ямал">
        <span>
          <small>МУЗЕЙ ПОД ОТКРЫТЫМ НЕБОМ</small>
          <strong>
            ЛАГЕРЬ №93
            <br>У РАЗЪЕЗДА ЩУЧИЙ
          </strong>
        </span>
      </a>

      <nav class="main-nav" :class="{ 'is-open': menuOpen }" aria-label="Основная навигация">
        <a href="#history" @click.prevent="scrollTo('history')">История</a>
        <a href="#camp" @click.prevent="scrollTo('camp')">О лагере</a>
        <a href="#map" @click.prevent="scrollTo('map')">Карта</a>
        <a href="#objects" @click.prevent="scrollTo('objects')">Объекты</a>
      </nav>

      <div class="header-actions">
        <button class="menu-toggle" type="button" aria-label="Открыть меню" @click="menuOpen = !menuOpen">
          <span></span><span></span>
        </button>
      </div>
    </header>

    <main>
      <section class="hero">
        <img src="@/assets/images/l93/camp-map.jpg" alt="Вид сверху на территорию 93-го лагеря" class="hero-image">
        <div class="hero-overlay"></div>
        <div class="hero-content">
          <p class="eyebrow">ИСТОРИКО-КУЛЬТУРНЫЙ ПРОЕКТ</p>
          <h1>
            лагерь №93
            <br>У РАЗЪЕЗДА ЩУЧИЙ
            <br>стройки №501
          </h1>
          <p class="hero-subtitle">Музей под открытым небом</p>
          <p class="hero-description">
            История строительства Трансполярной магистрали
            и&nbsp;жизни людей, оказавшихся здесь.
          </p>
          <a class="button button-light" href="#map" @click.prevent="scrollTo('map')">Исследовать территорию</a>
        </div>
      </section>

      <section class="section history" id="history">
        <div class="section-heading">
          <p class="eyebrow blue">ИСТОРИЯ</p>
          <h2>История 501-й стройки</h2>
        </div>

        <div class="history-columns">
          <p>Изыскания трассы будущей 501-й стройки начались ещё в 1943 г. В 1947 г. началось её строительство от станции Чум на Полярном Урале. В конце 1948 г. дорога дошла до ст. Лабытнанги. В 1949 г. строительство продолжилось от Оби в сторону Надыма и Пура, а также началось возведение дороги от Енисея к западной (Строительство 503).</p>
          <p>В целом в сооружении дороги приняло участие более 100 тыс. человек. В основном это были заключённые. В конце марта 1953 г. Л.И. Берн предложил правительству СССР прекратить стройку, и правительственными постановлениями от 25 марта 1953 г. она была прекращена.</p>
        </div>

        <img
          class="history-map"
          src="@/assets/images/l93/map.jpg"
          alt="Карта Сталинской железной дороги — Трансполярная магистраль, стройки 501–503"
        >
      </section>

      <section class="section camp-about" id="camp">
        <div class="camp-about-inner">
          <div class="section-heading">
            <p class="eyebrow blue">ЛАГПУНКТ</p>
            <h2>О лагере №93</h2>
          </div>

          <p class="camp-about-text">
            Объект культурного наследия лагерный пункт № 93 являлся рабочим городком для сооружения одного из участков строившейся в период с 1947 по 1953 годы железной дороги от Полярного Урала до реки Енисей. Общая протяженность железной дороги должна была составить 1 480 км. В лагерном пункте № 93 содержалось 300 заключенных-строителей. Их трудом был создан разъезд «Щучий».
          </p>

          <div class="camp-slider">
            <div class="camp-slider-frame">
              <img
                :src="campPhotos[campPhotoIndex].src"
                :alt="campPhotos[campPhotoIndex].caption"
              >
              <button class="camp-slider-nav prev" type="button" aria-label="Предыдущее фото" @click="prevCampPhoto">←</button>
              <button class="camp-slider-nav next" type="button" aria-label="Следующее фото" @click="nextCampPhoto">→</button>
            </div>
            <p class="camp-slider-caption">{{ campPhotos[campPhotoIndex].caption }}</p>
            <div class="camp-slider-dots">
              <button
                v-for="(photo, i) in campPhotos"
                :key="photo.caption"
                type="button"
                :class="{ active: campPhotoIndex === i }"
                :aria-label="photo.caption"
                @click="campPhotoIndex = i"
              ></button>
            </div>
          </div>
        </div>
      </section>

      <section class="territory-map section" id="map">
        <div class="territory-map-inner">
          <div class="section-heading">
            <p class="eyebrow blue">ИССЛЕДОВАНИЕ</p>
            <h2>Карта территории</h2>
          </div>
        </div>
        <div class="territory-map-frame">
          <iframe
            src="https://yandex.ru/map-widget/v1/-/CTsVyRyK"
            title="Карта территории лагеря №93"
            width="100%"
            height="520"
            allowfullscreen
          ></iframe>
        </div>
      </section>

      <section class="map-section" id="objects">
        <div class="map-sidebar">
          <div class="section-heading">
            <p class="eyebrow blue">ИССЛЕДОВАНИЕ</p>
            <h2>Объекты лагпункта</h2>
          </div>

          <div class="map-filters">
          </div>

          <div class="object-list">
            <router-link
              v-for="item in filteredObjects"
              :key="item.id"
              class="object-row"
              :to="'/l93/p' + item.id"
            >
              <span class="num">{{ item.number }}</span>
              <div>
                <strong>{{ item.title }}</strong>
              </div>
            </router-link>
          </div>
        </div>
      </section>
    </main>

    <footer class="site-footer">
      <p><strong>© 2024-26</strong> Историко-культурный проект «Открываю Ямал»</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'L93',

  data() {
    return {
      menuOpen: false,
      mapFilter: 'all',
      mapZoom: 1,
      campPhotoIndex: 0,
      campPhotos: [
        { src: require('@/assets/images/l93/Лагерь №93, 1967 год.jpg'), caption: 'Лагерь №93, 1967 год' },
        { src: require('@/assets/images/l93/Лагерь №93, 1994 год.jpg'), caption: 'Лагерь №93, 1994 год' },
        { src: require('@/assets/images/l93/Лагерь №93, 2026 год.jpg'), caption: 'Лагерь №93, 2026 год' },
      ],
      filters: [
        { id: 'all', label: 'Все' },
        { id: 'living', label: 'Жилые' },
        { id: 'service', label: 'Служебные' },
        { id: 'infra', label: 'Инфраструктура' },
      ],
    }
  },

  computed: {
    filteredObjects() {
      return this.$store.state.objects
        .filter(item => String(item.id).startsWith('93-'))
        .slice()
        .sort((a, b) => (a.number || 0) - (b.number || 0))
    },
  },

  mounted() {
    this.ensureFont()
    document.body.classList.add('l93-body')
  },

  beforeDestroy() {
    document.body.classList.remove('l93-body')
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
    zoomIn() {
      this.mapZoom = Math.min(1.8, this.mapZoom + 0.15)
    },
    zoomOut() {
      this.mapZoom = Math.max(1, this.mapZoom - 0.15)
    },
    resetMap() {
      this.mapZoom = 1
    },
    prevCampPhoto() {
      this.campPhotoIndex = (this.campPhotoIndex + this.campPhotos.length - 1) % this.campPhotos.length
    },
    nextCampPhoto() {
      this.campPhotoIndex = (this.campPhotoIndex + 1) % this.campPhotos.length
    },
    scrollTo(id) {
      this.menuOpen = false
      const el = this.$el.querySelector('#' + id)
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    },
  },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&display=swap');

.l93-body {
  background: #f6f5f0;
}

.l93-body .v-application {
  background: #f6f5f0 !important;
  font-family: Montserrat, Arial, sans-serif;
}

.v-application .l93-page a {
  color: inherit;
  text-decoration: none;
}

.v-application .l93-page button {
  font: inherit;
}

.v-application .l93-page .eyebrow.blue {
  color: #36a9e1 !important;
  background-color: transparent !important;
  border-color: transparent !important;
}
</style>

<style scoped>
.l93-page {
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
}

.l93-page *,
.l93-page *::before,
.l93-page *::after {
  box-sizing: border-box;
}

.l93-page h1,
.l93-page h2,
.l93-page h3,
.l93-page strong {
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

.language {
  background: none;
  border: 0;
  cursor: pointer;
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

.hero {
  height: calc(100vh - 78px);
  min-height: 620px;
  position: relative;
  overflow: hidden;
  color: #fff;
}

.hero-image {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: saturate(.85);
}

.hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(90deg, rgba(8, 20, 20, .82), rgba(8, 20, 20, .28) 58%, rgba(8, 20, 20, .1));
}

.hero-content {
  position: absolute;
  left: 6vw;
  top: 50%;
  transform: translateY(-50%);
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

.hero h1 {
  font-size: clamp(46px, 6vw, 88px);
  line-height: 1.15;
  text-transform: uppercase;
  letter-spacing: -.045em;
  margin: 0 0 20px;
}

.hero-subtitle {
  font-size: 23px;
  margin: 0 0 20px;
}

.hero-description {
  font-size: 15px;
  max-width: 470px;
  margin-bottom: 32px;
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

.scroll-hint {
  position: absolute;
  bottom: 26px;
  left: 6vw;
  font-size: 9px;
  font-weight: 700;
  letter-spacing: .08em;
}

.scroll-hint span {
  font-size: 18px;
  margin-right: 8px;
}

.hero-index {
  position: absolute;
  right: 30px;
  top: 45%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  font-size: 11px;
}

.hero-index span {
  height: 34px;
  width: 1px;
  background: #fff;
}

.hero-index small {
  opacity: .6;
}

.section {
  padding: 105px 6vw;
}

.section-heading h2,
.gallery h2,
.visit h2,
.about h2,
.object-detail h2 {
  font-size: clamp(38px, 4vw, 62px);
  line-height: 1.03;
  letter-spacing: -.045em;
  margin: 0;
}

.history {
  max-width: 920px;
  margin: auto;
}

.history-columns {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px 70px;
  margin-top: 40px;
}

.history-columns p {
  margin: 0;
  font-size: 16px;
  line-height: 1.65;
  color: #555;
}

.history-map {
  display: block;
  width: 100%;
  height: auto;
  margin-top: 50px;
}

.camp-about {
  background: #fff;
  padding-left: 0;
  padding-right: 0;
}

.camp-about-inner {
  max-width: 920px;
  margin: auto;
  padding-left: 6vw;
  padding-right: 6vw;
}

.territory-map {
  background: #e8e8e3;
  padding: 105px 0 0;
}

.territory-map-inner {
  max-width: 920px;
  margin: auto;
  padding-left: 6vw;
  padding-right: 6vw;
}

.territory-map-frame {
  margin-top: 40px;
}

.territory-map-frame iframe {
  display: block;
  width: 100%;
  height: 520px;
  border: 0;
}

.camp-about-text {
  margin: 40px 0 0;
  font-size: 16px;
  line-height: 1.65;
  color: #555;
}

.camp-slider {
  margin-top: 50px;
}

.camp-slider-frame {
  position: relative;
  min-height: 420px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.camp-slider-frame img {
  display: block;
  width: 100%;
  max-height: 620px;
  object-fit: contain;
}

.camp-slider-nav {
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

.camp-slider-nav:hover {
  background: var(--blue);
}

.camp-slider-nav.prev {
  left: 16px;
}

.camp-slider-nav.next {
  right: 16px;
}

.camp-slider-caption {
  margin: 14px 0 0;
  font-size: 12px;
  color: var(--muted);
  text-align: center;
}

.camp-slider-dots {
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-top: 14px;
}

.camp-slider-dots button {
  width: 9px;
  height: 9px;
  padding: 0;
  border: 0;
  border-radius: 50%;
  background: #cfcfc8;
  cursor: pointer;
}

.camp-slider-dots button.active {
  background: var(--navy);
}

.timeline {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
  margin: 90px 0 35px;
  position: relative;
}

.timeline:before {
  content: "";
  height: 1px;
  background: var(--navy);
  position: absolute;
  top: 8px;
  left: 10px;
  right: 10px;
}

.timeline-item {
  position: relative;
  padding-top: 38px;
}

.timeline-item:before {
  content: "";
  position: absolute;
  top: 3px;
  left: 0;
  width: 11px;
  height: 11px;
  background: var(--navy);
  border-radius: 50%;
}

.timeline-year {
  font-size: 18px;
  font-weight: 700;
  color: var(--navy);
  margin-bottom: 13px;
}

.timeline h3 {
  font-size: 14px;
  margin: 0 0 8px;
}

.timeline p {
  font-size: 12px;
  color: var(--muted);
  max-width: 210px;
}

.text-link {
  font-size: 10px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: .05em;
  color: var(--navy);
}

.text-link span {
  font-size: 18px;
  margin-left: 10px;
}

.map-section {
  min-height: 650px;
  background: #fff;
}

.map-sidebar {
  max-width: 920px;
  margin: auto;
  padding: 90px 5vw;
}

.map-filters {
  display: flex;
  gap: 20px;
  border-bottom: 1px solid var(--line);
  padding: 35px 0 13px;
  margin-bottom: 4px;
}

.filter {
  border: 0;
  background: none;
  padding: 0;
  color: #888;
  font-size: 9px;
  text-transform: uppercase;
  font-weight: 700;
  cursor: pointer;
}

.filter.active {
  color: var(--navy);
}

.object-list {
  column-count: 2;
  column-gap: 32px;
  margin-bottom: 35px;
}

.object-row {
  display: flex;
  align-items: center;
  gap: 13px;
  padding: 13px 8px;
  border-bottom: 1px solid #eee;
  cursor: pointer;
  text-decoration: none;
  color: inherit;
  break-inside: avoid;
}

.object-row:hover,
.object-row.active {
  background: #f3f3ee;
}

.object-row .num {
  width: 24px;
  height: 24px;
  flex-shrink: 0;
  border-radius: 50%;
  background: var(--navy);
  color: #fff;
  display: grid;
  place-items: center;
  font-size: 9px;
}

.object-row strong {
  font-size: 11px;
  display: block;
}

.object-row small {
  font-size: 9px;
  color: #888;
}

.object-row .arrow {
  margin-left: auto;
  color: var(--navy);
}

.interactive-map {
  position: relative;
  overflow: hidden;
  background: #cad1bd;
  min-height: 650px;
}

.interactive-map > img {
  width: 100%;
  height: 100%;
  min-height: 650px;
  object-fit: cover;
  display: block;
  transition: transform .25s;
}

.map-pin {
  position: absolute;
  width: 29px;
  height: 29px;
  border-radius: 50%;
  background: var(--navy);
  color: #fff;
  display: grid;
  place-items: center;
  font-size: 10px;
  font-weight: 700;
  border: 2px solid #fff;
  box-shadow: 0 2px 8px #0004;
  cursor: pointer;
  transform: translate(-50%, -50%);
  transition: .2s;
}

.map-pin:hover,
.map-pin.active {
  background: var(--blue);
  transform: translate(-50%, -50%) scale(1.15);
}

.map-controls {
  position: absolute;
  right: 20px;
  bottom: 20px;
  background: #fff;
  display: grid;
}

.map-controls button {
  border: 0;
  border-bottom: 1px solid #ddd;
  background: #fff;
  width: 40px;
  height: 40px;
  cursor: pointer;
  font-size: 18px;
  color: var(--navy);
}

.objects {
  max-width: var(--max);
  margin: auto;
}

.split-heading {
  display: flex;
  justify-content: space-between;
  gap: 60px;
  align-items: end;
  margin-bottom: 55px;
}

.section-intro {
  max-width: 390px;
  color: var(--muted);
  font-size: 14px;
}

.object-cards {
  display: grid;
  grid-template-columns: 1.4fr 1fr 1fr;
  gap: 20px;
}

.object-card {
  background: #fff;
}

.object-placeholder {
  height: 270px;
  background: #b9ad8f;
  position: relative;
  overflow: hidden;
}

.object-card.large .object-placeholder {
  height: 390px;
}

.abstract-image {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
}

.abstract-image:before {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, #314f3c, #78896d 48%, #bdad8d 49%, #6d5c43 50%, #354938 100%);
}

.abstract-image:after {
  content: "";
  position: absolute;
  inset: 18% 15%;
  border: 5px solid #5c4634;
  box-shadow: 0 0 0 22px #9b8665aa, 80px 20px 0 -10px #67533e;
}

.path:before {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(120deg, #25412e, #8c9970 42%, #bda982 43%, #879374 55%, #2b482f);
}

.path:after {
  content: "";
  position: absolute;
  width: 70%;
  height: 15%;
  left: 15%;
  top: 45%;
  background: #c3b38f;
  transform: rotate(-10deg);
  border-radius: 50%;
}

.tower:after {
  content: "";
  position: absolute;
  left: 36%;
  bottom: 8%;
  width: 28%;
  height: 72%;
  background:
    linear-gradient(90deg, transparent 45%, #544735 46% 52%, transparent 53%),
    linear-gradient(45deg, transparent 48%, #544735 49% 52%, transparent 53%),
    linear-gradient(-45deg, transparent 48%, #544735 49% 52%, transparent 53%);
  border-top: 35px solid #4b3a2c;
}

.barrack:after {
  content: "";
  position: absolute;
  left: 20%;
  top: 36%;
  width: 60%;
  height: 32%;
  background: #76644e;
  box-shadow: inset 0 10px #9c8a6c, 0 20px 25px #0004;
}

.card-body {
  padding: 20px;
}

.card-body > span {
  font-size: 9px;
  font-weight: 700;
  color: #888;
  letter-spacing: .08em;
}

.card-body h3 {
  font-size: 19px;
  margin: 10px 0 5px;
}

.card-body p {
  font-size: 11px;
  color: var(--muted);
  margin: 0 0 17px;
}

.card-body a {
  font-size: 10px;
  font-weight: 700;
  color: var(--navy);
}

.gallery {
  max-width: var(--max);
  margin: auto;
  background: var(--paper);
}

.gallery-header {
  display: flex;
  justify-content: space-between;
  align-items: end;
  margin-bottom: 40px;
}

.gallery-header > p {
  max-width: 400px;
  color: var(--muted);
  font-size: 13px;
}

.gallery-grid {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  grid-template-rows: 250px 250px;
  gap: 14px;
}

.gallery-image {
  overflow: hidden;
}

.gallery-main {
  grid-row: span 2;
}

.gallery-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.abstract-image.trees:before {
  background: linear-gradient(120deg, #193323, #526e4b 50%, #8e997a);
}

.abstract-image.wood:before {
  background: repeating-linear-gradient(90deg, #564432 0 16px, #78654b 17px 30px, #473827 31px 38px);
}

.abstract-image.watch:before {
  background: linear-gradient(155deg, #9a8b70, #52634b 52%, #243a28);
}

.quote-section {
  background: var(--navy);
  color: #fff;
  padding: 100px 15vw;
  position: relative;
  overflow: hidden;
}

.quote-section:after {
  content: "";
  position: absolute;
  right: -70px;
  bottom: -100px;
  width: 450px;
  height: 450px;
  border: 1px solid #ffffff22;
  transform: rotate(45deg);
}

.quote-mark {
  font-size: 110px;
  line-height: .5;
  color: var(--blue);
}

blockquote {
  font-size: clamp(25px, 3vw, 44px);
  line-height: 1.25;
  letter-spacing: -.03em;
  max-width: 1000px;
  margin: 30px 0;
}

cite {
  font-style: normal;
  font-size: 11px;
  color: #b8c1d0;
}

.visit {
  max-width: var(--max);
  margin: auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
}

.visit-info {
  display: grid;
  gap: 20px;
}

.visit-info > div {
  display: grid;
  grid-template-columns: 38px 1fr;
  column-gap: 15px;
  border-top: 1px solid var(--line);
  padding-top: 20px;
}

.visit-info span {
  grid-row: span 2;
  color: var(--blue);
  font-weight: 700;
}

.visit-info strong {
  font-size: 11px;
}

.visit-info p {
  font-size: 12px;
  color: var(--muted);
  margin: 6px 0 0;
}

.object-detail {
  background: #fff;
  max-width: none;
  padding-left: 10vw;
  padding-right: 10vw;
}

.detail-top {
  display: flex;
  justify-content: space-between;
  align-items: end;
  margin-bottom: 50px;
}

.detail-lead {
  color: var(--muted);
  font-size: 15px;
}

.detail-arrows {
  font-size: 20px;
  color: var(--navy);
}

.detail-grid {
  display: grid;
  grid-template-columns: 1.1fr .9fr;
  gap: 70px;
  max-width: 1200px;
  margin: auto;
}

.detail-photo {
  height: 560px;
  overflow: hidden;
}

.barrack-large:before {
  background: linear-gradient(130deg, #172d1c, #72805e 42%, #a9916e 43%, #574936 44%, #8b7a5c 70%, #263a28);
}

.barrack-large:after {
  inset: 32% 20%;
  border: 7px solid #4d3b2d;
  box-shadow: inset 0 0 0 20px #8b7858;
}

.detail-text {
  padding-top: 10px;
}

.facts {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 15px;
  border-bottom: 1px solid var(--line);
  padding-bottom: 30px;
  margin-bottom: 45px;
}

.facts span {
  display: block;
  font-size: 8px;
  color: #888;
  margin-bottom: 8px;
}

.facts strong {
  font-size: 10px;
}

.detail-text h3 {
  font-size: 12px;
  text-transform: uppercase;
  margin-bottom: 13px;
}

.detail-text p {
  font-size: 13px;
  color: #5f5f5f;
  max-width: 480px;
}

.detail-text .button {
  margin-top: 25px;
}

.about {
  max-width: var(--max);
  margin: auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 100px;
  background: var(--paper);
}

.about-text {
  padding-top: 45px;
  max-width: 540px;
}

.about-text p {
  font-size: 16px;
  color: #555;
  margin: 0 0 25px;
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

.mobile-menu {
  display: none;
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

  .hero {
    min-height: 620px;
  }

  .hero-content {
    left: 7vw;
    right: 7vw;
  }

  .map-section,
  .visit,
  .detail-grid,
  .about {
    grid-template-columns: 1fr;
  }

  .history-columns {
    grid-template-columns: 1fr;
  }

  .map-sidebar {
    padding: 65px 7vw;
  }

  .territory-map-frame iframe {
    height: 400px;
  }

  .object-list {
    column-count: 1;
  }

  .interactive-map {
    min-height: 520px;
  }

  .interactive-map > img {
    min-height: 520px;
  }

  .object-cards {
    grid-template-columns: 1fr 1fr;
  }

  .object-card.large {
    grid-column: span 2;
  }

  .gallery-grid {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 280px 200px 200px;
  }

  .gallery-main {
    grid-row: span 2;
  }
}

@media (max-width: 600px) {
  .site-header {
    height: 68px;
  }

  .brand strong {
    font-size: 10px;
  }

  .hero {
    height: calc(100vh - 68px);
    min-height: 600px;
  }

  .hero h1 {
    font-size: 42px;
  }

  .hero-subtitle {
    font-size: 19px;
  }

  .section {
    padding: 70px 6vw;
  }

  .territory-map {
    padding: 70px 0 0;
  }

  .timeline {
    grid-template-columns: 1fr 1fr;
    gap: 35px 20px;
    margin-top: 55px;
  }

  .timeline:before {
    display: none;
  }

  .map-filters {
    overflow: auto;
    white-space: nowrap;
  }

  .object-cards {
    grid-template-columns: 1fr;
  }

  .object-card.large {
    grid-column: auto;
  }

  .object-card.large .object-placeholder,
  .object-placeholder {
    height: 280px;
  }

  .split-heading,
  .gallery-header {
    display: block;
  }

  .section-intro,
  .gallery-header > p {
    margin-top: 25px;
  }

  .gallery-grid {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 300px 220px 220px 220px;
  }

  .gallery-main {
    grid-row: auto;
  }

  .camp-slider-frame {
    min-height: 260px;
  }

  .camp-slider-frame img {
    max-height: 360px;
  }

  .camp-slider-nav {
    width: 36px;
    height: 36px;
    font-size: 16px;
  }

  .quote-section {
    padding: 75px 8vw;
  }

  .quote-mark {
    font-size: 80px;
  }

  .facts {
    grid-template-columns: 1fr;
  }

  .detail-photo {
    height: 350px;
  }

  .object-detail {
    padding-left: 6vw;
    padding-right: 6vw;
  }
}
</style>

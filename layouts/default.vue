<template>
  <v-app>
    <!-- Navbar -->
    <v-app-bar fixed app color="#f5f5f5">
      <!-- LOGO -->
      <div
        style="cursor: pointer; color: #3c3a3b"
        class="font-weight-bold d-flex"
        @click="$router.push('/')"
      >
        <v-icon color="#3C3A3B">mdi-film</v-icon>
        <span class="text-uppercase">Film Everywhere</span>
      </div>

      <v-spacer />

      <!-- Start Menu Desktop Size -->
      <v-layout v-show="$vuetify.breakpoint.mdAndUp" justify-end>
        <v-flex v-for="(item, index) in items" :key="index" class="shrink">
          <v-btn tile active-class="no-active" text block :to="item.to">
            <span style="color: #3c3a3b"> {{ item.title }}</span>
          </v-btn>
        </v-flex>
      </v-layout>

      <!-- Start Menu Mobile Size -->
      <v-btn
        v-show="$vuetify.breakpoint.smAndDown"
        text
        @click.stop="rightDrawer = !rightDrawer"
      >
        <v-icon>mdi-menu</v-icon>
      </v-btn>
    </v-app-bar>

    <!-- Content -->
    <v-main>
      <div v-if="$route.name === 'index'">
        <nuxt />
      </div>
      <v-container v-else class="py-12">
        <nuxt />
      </v-container>
    </v-main>

    <!-- List Menu Mobile -->
    <v-navigation-drawer v-model="rightDrawer" :right="right" temporary fixed>
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <!-- Footer -->
    <Footer />
  </v-app>
</template>

<script>
import Footer from '~/components/footer/footer.vue'
export default {
  components: {
    Footer,
  },
  data() {
    return {
      drawer: false,
      fixed: false,
      image:
        'https://images.unsplash.com/photo-1562813733-b31f71025d54?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1280&q=80',
      items: [
        {
          icon: 'mdi-home',
          title: 'Home',
          to: '/',
        },
        {
          icon: 'mdi-pinterest',
          title: 'Post',
          to: '/posts',
        },
        {
          icon: 'mdi-clipboard-account',
          title: 'About',
          to: '/about',
        },
        {
          icon: 'mdi-email',
          title: 'Contact',
          to: '/contact',
        },
      ],
      right: true,
      rightDrawer: false,

      cycle: false,
    }
  },
}
</script>

<style lang="css">
#app {
  font-family: 'Prompt', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: #f5f5f5;
  color: #3c3a3b;
}
.v-btn--active.no-active::before {
  opacity: 0 !important;
}
.v-btn--active.no-active {
  border-bottom: 1px solid #3c3a3b;
  color: #3c3a3b;
  font-weight: bold;
}
.menu-btn {
  color: #3c3a3b;
}
.bg-heroes {
  height: 100%;
  width: 100%;
  background-position: 50%;
  background-size: cover;
}

.banner-title {
  font-size: 2rem;
  text-align: left;
}

.con-box-slide .theme--dark.v-btn.v-btn--icon {
  color: #fff;
}
.con-box-slide i.v-icon.notranslate.mdi.mdi-minus.theme--dark {
  font-size: 25px !important;
}

@media only screen and (min-width: 600px) {
  .con-box-slide .v-carousel__controls {
    justify-content: flex-end !important;
  }
  .box-slide {
    position: absolute;
    border-radius: 50%;
    border-collapse: collapse;
    color: #fff;
    right: 0;
    height: 100%;
    width: 30%;
    padding: 10px 3rem;
    background-color: rgba(0, 0, 0, 0.5);
  }
  .con-box-slide .word-line-clamp {
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 5;
    -webkit-box-orient: vertical;
    font-size: 12px;
  }
}
@media only screen and (max-width: 600px) {
  .con-box-slide .v-carousel__controls {
    justify-content: flex-center !important;
  }
  .box-slide {
    position: absolute;
    border-radius: 50%;
    border-collapse: collapse;
    color: #fff;
    bottom: 0;
    left: 50%;
    right: 50%;
    transform: translate(-50%, -35%);
    height: 130px;
    width: 90%;
    padding: 10px 2rem;
    background-color: rgba(0, 0, 0, 0.5);
  }
  .con-box-slide .word-line-clamp {
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    font-size: 12px;
  }
}
</style>

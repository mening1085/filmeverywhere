<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      color="#EBE9E0"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
    >
      <v-list dense class="py-0">
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon color="#304055">{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content style="color: #304055">
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <!-- Navber -->
    <v-app-bar :clipped-left="clipped" fixed app color="#304055" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-btn icon @click.stop="miniVariant = !miniVariant">
        <v-icon>mdi-{{ `chevron-${miniVariant ? 'right' : 'left'}` }}</v-icon>
      </v-btn>
      <v-icon color="#fff">mdi-film</v-icon>
      <span class="text-uppercase font-weight-bold">Film Everywhere</span>
      <v-spacer />
      <v-layout justify-end class="d-flex align-center">
        <v-flex shrink mr-2>
          <v-avatar size="40">
            <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" />
          </v-avatar>
        </v-flex>
        <v-flex shrink>
          <div>Admin</div>
        </v-flex>
        <v-flex shrink>
          <v-menu offset-y>
            <template #activator="{ on, attrs }">
              <v-btn icon fab small v-bind="attrs" v-on="on">
                <v-icon>mdi-menu-down</v-icon>
              </v-btn>
            </template>
            <v-list>
              <v-list-item v-for="(item, index) in acountList" :key="index">
                <v-list-item-title>
                  <v-btn block small depressed>
                    <v-icon color="#304055">{{ item.icon }}</v-icon>
                    <span style="color: #304055">{{ item.title }}</span>
                  </v-btn>
                </v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </v-flex>
      </v-layout>
    </v-app-bar>

    <!-- Content -->
    <v-main>
      <v-container fluid class="pt-8 px-10">
        <Nuxt />
      </v-container>
    </v-main>

    <!-- Footer -->
    <v-footer app color="#304055" dark>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      clipped: true,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-view-dashboard',
          title: 'Dashboard',
          to: '/admin',
        },
        {
          icon: 'mdi-blogger',
          title: 'Post',
          to: '/admin/post',
        },
      ],
      acountList: [
        {
          icon: 'mdi-apps',
          title: 'Profile',
          to: '/admin/profile',
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Logout',
          to: '/admin/login',
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'BoxMe Management',
    }
  },
}
</script>

<template>
  <v-footer padless>
    <v-card color="#304055" class="flex" flat tile>
      <v-card-title
        v-if="$vuetify.breakpoint.smAndUp"
        style="background-color: #e4e4e2"
      >
        <strong v-if="$vuetify.breakpoint.smAndUp" class="subheading">
          Get connected with us on social networks!
        </strong>

        <v-spacer></v-spacer>

        <v-btn v-for="icon in icons" :key="icon" class="mx-4" dark icon>
          <v-icon size="24px" color="#6A3A36">
            {{ icon }}
          </v-icon>
        </v-btn>
      </v-card-title>

      <v-card-title v-else style="background-color: #e4e4e2">
        <div class="text-center" style="font-size: 18px">
          Get connected with us on social networks!
        </div>
        <v-layout
          class="d-flex justify-center align-center text-center"
          style="font-size: 18px"
        >
          <v-flex xs12>
            <v-btn v-for="icon in icons" :key="icon" class="mx-4" dark icon>
              <v-icon size="24px" color="#6A3A36">
                {{ icon }}
              </v-icon>
            </v-btn>
          </v-flex>
        </v-layout>
      </v-card-title>

      <v-card-text class="py-2 white--text text-center">
        {{ new Date().getFullYear() }} — <strong>X.MMEENN</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>
<script>
export default {
  data: () => ({
    icons: ['mdi-facebook', 'mdi-twitter', 'mdi-linkedin', 'mdi-instagram'],
  }),
}
</script>

<style scoped>
.footer {
  background-color: #304055;
}
</style>

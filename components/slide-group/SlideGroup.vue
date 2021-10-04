<template>
  <v-sheet color="#DEBA68" class="mx-auto">
    <v-slide-group
      v-model="model"
      class="pa-4 d-flex justify-center"
      show-arrows
      center-active
    >
      <v-slide-item v-for="n in 5" :key="n" v-slot="{ active, toggle }">
        <v-card
          :color="active ? '#7D6855' : '#fff'"
          class="ma-4"
          height="200"
          width="100"
          @click="toggle"
        >
          <v-row class="fill-height" align="center" justify="center">
            <!-- <v-scale-transition>
              <v-icon
                v-if="active"
                color="white"
                size="48"
                v-text="'mdi-close-circle-outline'"
              ></v-icon>
            </v-scale-transition> -->
          </v-row>
        </v-card>
      </v-slide-item>
    </v-slide-group>

    <v-expand-transition>
      <v-sheet v-if="model != null" height="200" tile>
        <v-row class="fill-height" align="center" justify="center">
          <h3 class="text-h6">Selected {{ model }}</h3>
        </v-row>
      </v-sheet>
    </v-expand-transition>
  </v-sheet>
</template>

<script>
export default {
  data: () => ({
    model: null,
  }),
}
</script>

<style>
.v-slide-group__content {
  justify-content: center;
}
</style>

<template>
  <div>
    <v-hover v-slot="{ hover }">
      <v-card
        flat
        :elevation="hover ? 12 : 0"
        :class="{ 'on-hover': hover }"
        class="mx-auto"
        style="background-color: #fff; cursor: pointer"
        @click="$router.push(`/posts/${postId}`)"
      >
        <v-img
          lazy-src="https://picsum.photos/id/11/10/6"
          class="white--text align-end"
          aspect-ratio="4/3"
          :src="image"
          :alt="cardTitle"
        >
          <template #placeholder>
            <v-row class="fill-height ma-0" align="center" justify="center">
              <v-progress-circular
                indeterminate
                color="grey lighten-5"
              ></v-progress-circular>
            </v-row>
          </template>
        </v-img>
        <div class="px-4 py-2">
          <div>{{ cardTitle }}</div>

          <div style="color: #304055; font-size: 13px" class="word-line-clamp">
            {{ description }}
          </div>

          <div class="d-flex mt-2 align-center">
            <div style="color: #a0b1b9; font-size: 12px">by: {{ name }}</div>
            <v-spacer></v-spacer>
            <div style="color: #a0b1b9; font-size: 12px">
              {{ dateTime }}
            </div>
            <!-- <v-btn
              color="#304055"
              text
              @click="$router.push(`/post/${postId}`)"
            >
              See More
            </v-btn> -->
          </div>
        </div>
      </v-card>
    </v-hover>
  </div>
</template>

<script>
export default {
  props: {
    image: {
      type: String,
      default: 'https://cdn.vuetifyjs.com/images/cards/docks.jpg',
    },
    cardTitle: {
      type: String,
      default: 'Top 10 Australian beaches',
    },
    dateTime: {
      type: String,
      default: '01/01/2100',
    },
    description: {
      type: String,
      default: 'Whitsunday Island, Whitsunday Island',
    },
    name: {
      default: 'anonymous',
      type: String,
    },
    postId: {
      default: null,
      type: Number,
    },
  },
}
</script>

<style scope>
.word-line-clamp {
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  font-size: 14px;
}
</style>

<template>
  <div v-if="post">
    <v-layout class="d-flex align-center">
      <v-flex style="cursor: pointer" shrink @click="$router.push('/posts')">
        POST
      </v-flex>
      <v-flex shrink>
        <v-icon>mdi-chevron-right</v-icon>
      </v-flex>
      <v-flex shrink> {{ post.title }} </v-flex>
      <v-spacer />
      <v-flex shrink style="font-size: 12px; color: gray">
        <div>ผู้เขียน : {{ post.by }}</div>
      </v-flex>
    </v-layout>
    <div class="text-right" style="font-size: 12px; color: gray">
      วันที่ : {{ post.date }}
    </div>

    <img
      class="my-6"
      height="500"
      width="100%"
      style="object-fit: cover"
      :src="post.image"
    />

    <div style="font-size: 2rem" class="text-center">
      {{ post.title }}
    </div>

    <div class="v-html mt-3" v-html="detail"></div>
  </div>
</template>

<script>
import service from '../../../services'
export default {
  // validate(data) {
  //   return /^\d+$/.test(data.params.id)
  // },
  data() {
    return {
      post: null,
    }
  },
  computed: {
    detail() {
      return this.post.detail.replace(
        /<img/g,
        "<img style='max-width:100%;height:auto;'"
      )
    },
  },
  created() {
    this.getPostById()
  },
  methods: {
    getPostById() {
      service.post.getPostById(this.$route.params.id).then((res) => {
        this.post = res
      })
    },
  },
}
</script>

<style lang="css">
.v-html /deep/ img {
  max-width: 100%;
  height: auto;
}

.v-html /deep/ iframe {
  width: 100%;
  height: 600px;
}
</style>

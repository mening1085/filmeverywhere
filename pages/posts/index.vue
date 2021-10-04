<template>
  <div>
    <v-row justify="start">
      <v-col v-for="(post, i) in posts" :key="i" cols="12" sm="6" md="4">
        <v-hover>
          <CardPost
            :post-id="post._id"
            :image="post.image"
            :card-title="post.title"
            :date-time="post.date"
            :description="post.description"
            :name="post.by"
          />
        </v-hover>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import service from '../../services'
export default {
  data() {
    return {
      posts: [],
    }
  },
  created() {
    this.getPosts()
  },
  methods: {
    getPosts() {
      service.post.getPosts().then((res) => {
        this.posts = res
      })
    },
  },
}
</script>

<style></style>

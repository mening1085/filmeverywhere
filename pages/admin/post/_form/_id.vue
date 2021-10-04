<template>
  <div>
    <v-layout class="mb-6">
      <v-flex
        style="cursor: pointer"
        shrink
        @click="$router.push('/admin/post')"
      >
        Post Management
      </v-flex>
      <v-flex shrink>
        <v-icon>mdi-chevron-right</v-icon>
      </v-flex>
      <v-flex shrink> Edit </v-flex>
    </v-layout>

    <FormPost :data="post" />
  </div>
</template>

<script>
import service from '../../../../services'
import FormPost from '~/components/admin-form/FormPost.vue'

export default {
  components: { FormPost },
  layout: 'adminLayout',

  data() {
    return {
      post: null,
    }
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

<style></style>

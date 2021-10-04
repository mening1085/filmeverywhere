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
      <v-flex shrink> Create </v-flex>
    </v-layout>

    <FormPost />
  </div>
</template>

<script>
import FormPost from '~/components/admin-form/FormPost.vue'
export default {
  components: { FormPost },
  layout: 'adminLayout',
}
</script>

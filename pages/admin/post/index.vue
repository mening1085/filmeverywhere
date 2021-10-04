<template>
  <div>
    <v-layout>
      <v-flex class="mb-6"> Post Management </v-flex>
      <v-spacer></v-spacer>
      <v-flex shrink>
        <v-btn dark color="#514338" depressed to="/admin/post/create/">
          <v-icon class="mr-2">mdi-plus-box</v-icon>
          Add
        </v-btn>
      </v-flex>
    </v-layout>

    <v-data-table
      :headers="headers"
      :items="data"
      :items-per-page="5"
      class="elevation-1 table-post"
    >
      <template #[`item.description`]="{ item }">
        <div class="word-line-clamp ellipsis-3">
          {{ item.description }}
        </div>
      </template>

      <template #[`item.created_by`]="{ item }">
        <div>
          {{ item.created_by }}
        </div>
      </template>

      <template #[`item.image`]="{ item }">
        <img class="image pa-3" :alt="item.title" :src="item.image" />
      </template>

      <template #[`item.actions`]="{ item }">
        <v-layout>
          <v-flex>
            <v-btn icon color="green" :to="'/admin/post/edit/' + item._id">
              <v-icon>mdi-pencil-box-outline</v-icon>
            </v-btn>
          </v-flex>
          <v-flex>
            <v-btn icon dark color="red" @click="deleteItem(item._id)">
              <v-icon>mdi-delete-variant</v-icon>
            </v-btn>
          </v-flex>
        </v-layout>
      </template>
    </v-data-table>
  </div>
</template>

<script>
// import post from '../../../content/posts.json'
import service from '../../../services'
export default {
  layout: 'adminLayout',
  data: () => ({
    dialog: false,
    dialogDelete: false,
    headers: [
      { text: 'Title', value: 'title', sortable: false, width: '30%' },
      {
        text: 'Description',
        value: 'description',
        sortable: false,
        width: '30%',
      },
      {
        text: 'Created By',
        value: 'created_by',
        sortable: false,
        width: '10%',
      },
      { text: 'Image', value: 'image', sortable: false, width: '20%' },
      {
        text: 'Action',
        value: 'actions',
        sortable: false,
        width: '10%',
        align: 'center',
      },
    ],
    data: [],
  }),
  created() {
    this.getData()
  },
  methods: {
    getData() {
      service.post.getPosts().then((res) => {
        this.data = res
      })
    },
    randomImage() {
      return `https://picsum.photos/id/${Math.floor(
        Math.random() * 500
      )}/300/200`
    },
    editItem(id) {
      console.log(id)
    },
    deleteItem(id) {
      this.$swal({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#587A6D',
        cancelButtonColor: '#E8A465',
        confirmButtonText: 'Yes, delete it!',
      }).then((result) => {
        if (result.value) {
          service.post.delete(id).then((res) => {
            this.$swal('Deleted!', `Your post has been deleted.`, 'success')
            this.getData()
          })
        }
      })
    },
  },
}
</script>

<style>
.table-post .word-line-clamp {
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}
.image {
  object-fit: cover;
  width: 300px;
  height: 150px;
}
.ellipsis-3 {
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  display: -webkit-box;
  -webkit-box-orient: vertical;
}
</style>

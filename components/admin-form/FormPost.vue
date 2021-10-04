<template>
  <div>
    <v-form ref="form" v-model="valid" lazy-validation>
      <v-text-field
        v-model="form.title"
        dense
        outlined
        :rules="requireFeild"
        label="Title"
        required
      ></v-text-field>

      <v-text-field
        v-model="form.description"
        dense
        outlined
        :rules="requireFeild"
        label="Description"
        required
      ></v-text-field>

      <v-text-field
        v-model="form.image"
        dense
        outlined
        :rules="requireFeild"
        label="Image URL"
        required
      ></v-text-field>

      <v-textarea
        v-model="form.detail"
        :rules="requireFeild"
        outlined
        dense
        name="input-7-1"
        label="Detail"
      ></v-textarea>

      <v-btn :disabled="!valid" color="success" class="mr-4" @click="validate">
        Save
      </v-btn>

      <v-btn color="gray" class="mr-4" @click="$router.push('/admin/post')">
        Cancel
      </v-btn>
    </v-form>
  </div>
</template>

<script>
import service from '../../services'
export default {
  props: {
    data: {
      default: null,
      type: Object,
    },
  },
  data: () => ({
    valid: true,
    requireFeild: [(v) => !!v || `input is required`],
    form: {
      title: '',
      description: '',
      detail: '',
      image: '',
      date: Date.now(),
      created_by: 'xmmeenn',
    },
  }),
  watch: {
    data(val) {
      if (val) {
        this.form = this.data
      }
    },
  },
  methods: {
    validate() {
      if (this.$refs.form.validate()) {
        this.save()
      }
    },

    reset() {
      this.$refs.form.reset()
    },
    resetValidation() {
      this.$refs.form.resetValidation()
    },
    save() {
      if (!this.form._id) {
        // Create

        const monthNames = [
          'January',
          'February',
          'March',
          'April',
          'May',
          'June',
          'July',
          'August',
          'September',
          'October',
          'November',
          'December',
        ]
        const dateObj = new Date()
        const month = monthNames[dateObj.getMonth()]
        const day = String(dateObj.getDate()).padStart(2, '0')
        const year = dateObj.getFullYear()
        const date = month + '\n' + day + ',' + year
        this.form.date = date
        service.post
          .save(this.form)
          .then((res) => {
            this.$swal('Saving!', `Create Post successfully.`, 'success')
            this.$router.push('/admin/post')
          })
          .catch((err) => {
            console.log(err)
          })
      } else {
        // Update
        service.post
          .update(this.form)
          .then((res) => {
            this.$swal('Saving!', `Update Post successfully.`, 'success')
            this.$router.push('/admin/post')
          })
          .catch((err) => {
            console.log(err)
          })
      }
    },
  },
}
</script>
<style></style>

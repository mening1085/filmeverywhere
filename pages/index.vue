<template>
  <div>
    <!-- Banner -->
    <v-carousel
      v-if="$route.name === 'index'"
      class="con-box-slide mb-10"
      :continuous="false"
      :show-arrows="false"
      hide-delimiter-background
      delimiter-icon="mdi-minus"
      cycle
    >
      <v-carousel-item v-for="(item, i) in posts" :key="i">
        <v-card
          flat
          tile
          class="bg-heroes"
          :style="{
            'background-image': 'url(' + item.image + ')',
          }"
        >
          <div class="box-slide">
            <div class="fill-height d-flex justify-center flex-column">
              <div class="banner-title">
                {{ item.title }}
              </div>
              <div class="detail word-line-clamp">
                {{ item.description }}
              </div>
            </div>
          </div>
        </v-card>
      </v-carousel-item>
    </v-carousel>

    <v-container class="section-card">
      <v-row justify="center" align="center">
        <v-col cols="12">
          <!-- New Post -->
          <div class="mb-12">
            <v-layout>
              <v-flex
                shrink
                class="font-weight-bold"
                style="font-size: 2rem; color: #304055"
              >
                New Post
              </v-flex>

              <v-flex pl-3 class="d-flex align-center">
                <div class="line"></div>
              </v-flex>
              <v-flex shrink class="d-flex align-center">
                <v-btn
                  class="ml-0 pl-0"
                  text
                  small
                  @click="$router.push('/posts')"
                >
                  <v-icon
                    class="mr-1"
                    style="-webkit-transform: scaleX(-1); transform: scaleX(-1)"
                    small
                    color="#304055"
                  >
                    mdi-more
                  </v-icon>
                  More
                </v-btn>
              </v-flex>
            </v-layout>
            <v-row justify="center" align="center">
              <v-col
                v-for="(post, i) in posts.slice(0, 5)"
                :key="i"
                cols="12"
                :sm="i === 0 ? '12' : '6'"
                :md="i === 0 || i === 1 ? '6' : '4'"
              >
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
        </v-col>
      </v-row>
    </v-container>

    <v-container>
      <!-- Recommend Posr -->
      <div class="mb-12">
        <v-layout class="">
          <v-flex
            shrink
            class="font-weight-bold"
            style="font-size: 2rem; color: #304055"
          >
            Recommend Post
          </v-flex>

          <v-flex pl-3 class="d-flex align-center">
            <div class="line"></div>
          </v-flex>
          <v-flex shrink class="d-flex align-center">
            <v-btn class="ml-0 pl-0" text small>
              <v-icon
                class="mr-1"
                style="-webkit-transform: scaleX(-1); transform: scaleX(-1)"
                small
                color="#304055"
                @click="$router.push('/posts')"
              >
                mdi-more
              </v-icon>
              More
            </v-btn>
          </v-flex>
        </v-layout>
        <!--  -->
        <v-row justify="center" align="center">
          <v-col v-for="(post, i) in posts" :key="i" cols="12" sm="6" md="3">
            <CardPost
              :post-id="post._id"
              :image="post.image"
              :card-title="post.title"
              :date-time="post.date"
              :description="post.description"
              :name="post.by"
            />
          </v-col>
        </v-row>
      </div>
    </v-container>
  </div>
</template>

<script>
import service from '../services'
import CardPost from '~/components/card/CardPost.vue'
export default {
  components: { CardPost },
  layout: 'default',
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

<style lang="css">
.line {
  height: 2px;
  width: 100%;
  background-color: #304055;
}
.left-card {
  /* background: #587a6d; */
}
.right-card {
  background: #e8a465;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  margin-left: -6rem;
}
</style>

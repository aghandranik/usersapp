<template>
  <div class="container mt-2">
    <div class="mx-auto" style="max-width: 540px;">
      <div class="card">
        <div class="row no-gutters">
          <div class="col-md-4 pmd-card-icon">
            <img
              :src="imageUrl"
              class="card-img rounded-circle img-fluid m-2"
              alt="Card image cap"
              width="120"
            />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">{{ fullName }}</h5>
              <div class="card-text">
                <i class="fas fa-user"></i> <small> Username </small>
                <span class="badge badge-success p-2">{{ userName }}</span>
              </div>
              <div class="card-text mt-2">
                <i class="fas fa-rss"></i>
                <small> Followers </small>
                <span class="badge badge-success p-2">{{ getRandomInt(100) }}</span>
              </div>
              <div class="card-text mt-2">
                <i class="fas fa-user-friends"></i>
                <small>
                  Following
                  <span class="badge badge-success p-2">{{
                    getRandomInt(500)
                  }}</span>
                </small>
              </div>
              <div class="card-text mt-4">
                <router-link
                  class="btn btn-sm pmd-ripple-effect btn-primary"
                  :to="{ name: 'main', query: { page: currentPage } }"
                  ><i class="fas fa-home"></i> Home
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentPage: 0,
      userData: [],
    };
  },
  methods: {
    getRandomInt(max) {
      return Math.floor(Math.random() * Math.floor(max));
    },
  },
  created() {
    this.userData = this.$route.params.profileData;
    this.currentPage = this.$route.params.currentPage;
  },
  computed: {
    imageUrl() {
      return this.userData.picture.large;
    },
    fullName() {
      return this.userData.name.first + ' ' + this.userData.name.last;
    },
    userName() {
      return (
        this.userData.name.first.substring(0, 3).toLowerCase() +
        '_' +
        this.userData.name.last.toLowerCase()
      );
    },
  },
};
</script>

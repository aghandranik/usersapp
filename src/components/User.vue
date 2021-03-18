<template>
  <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3 mb-5 ">
    <div class="card pmd-card mb-4">
      <!-- Card Body -->
      <div class="card-body text-center">
        <!-- Card Iocn -->
        <div class="pmd-card-icon">
          <img
            :src="userImage"
            class="rounded-circle img-fluid"
            alt="User"
            width="150"
          />
        </div>
        <h5 class="card-title sm">{{ fullName }}</h5>
        <p class="card-subtitle mb-3">{{ userName }}</p>
        <router-link class="btn btn-sm pmd-ripple-effect btn-primary" :to="{ name: 'profile', params: {profileData: userData, currentPage:currentPage } }">View More</router-link>
        
      </div>
    </div>
   
  </div>
</template>

<script>
export default {
  data() {
    return {
     
    };
  },
  props: ['userFirstname', 'userLastname', 'userImage', 'userData','currentPage'],
  computed: {
    fullName() {
      return this.userFirstname + ' ' + this.userLastname;
    },
    userName() {
      return (
        this.userFirstname.substring(0, 3).toLowerCase() +
        '_' +
        this.userLastname.toLowerCase()
      );
    },
  },
};
</script>

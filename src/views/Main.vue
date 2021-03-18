<template>
  <div class="container">
   
    <div class="row">
      <User 
        v-for="user in perPageUsers"
        :key="user.login.sha256"
        :user-firstname="user.name.first"
        :user-lastname="user.name.last"
        :user-image="user.picture.large"        
        :user-data="user"
        :current-page="page"
      ></User>
    </div>
     <div class="row justify-content-center">
      <paginate
        v-model="page"
        :page-count="pageCount"
        :page-range="10"
        :margin-pages="2"
        :click-handler="pageChangeHandler"
        :prev-text="'Prev'"
        :next-text="'Next'"
        :container-class="'pagination'"
        :page-class="'page-item'"
        :prev-class="'page-item'"
        :next-class="'page-item'"
        :next-link-class="'page-link'"
        :prev-link-class="'page-link'"
        :page-link-class="'page-link'"
      >
      </paginate>
    </div>

  </div>
</template>



<script>


export default {
  data() {
    return {     
      page: this.$route.query.page || 1,
      pageSize: 12,
      pageCount: 0,
      allUsers: [],
      perPageUsers: [],
      
    };
  },
  methods: {
    async fetchAsync() {
      const url =
        'https://randomuser.me/api/?results=120&inc=name,id,picture,login,location&nat=us';

      try {
        let getUsers = [];
        const response = await fetch(url);
        const data = await response.json();
        Array.from(data.results).forEach((element) => {
          getUsers.push(element);
        });
        this.setupPagination(getUsers);
      } catch (e) {
        console.log(e);
      }
    },
    setupPagination(allUsers) {
      this.allUsers = _.chunk(allUsers, this.pageSize);
      this.pageCount = _.size(this.allUsers);
      this.perPageUsers = this.allUsers[this.page - 1] || this.allUsers[0];
    },
    pageChangeHandler(page) {
       this.$router.push(`${this.$route.path}?page=${page}`) 
       this.perPageUsers = this.allUsers[page - 1] || this.allUsers[0];
    },
  },
  created() {
    this.fetchAsync();
  },
};
</script>

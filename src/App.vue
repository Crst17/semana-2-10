<template>
  
  <!-- APP Container -->
  <div id="app">
    
    <!-- News -->
    <div class="container">
      <news-card></news-card>      
    </div>
    <!-- News -->

    <!-- Team -->
    <div class="container-xl my-5">      
      <div class="row">
        <div class="col" v-for="member in members" :key="member.codigo">
          <team-card :member="member"></team-card>
        </div>
      </div>
    </div>
    <!-- Team -->

  </div>
  <!-- APP Container -->
</template>

<script>
import NewsCard from './components/NewsCard.vue'
import TeamCard from './components/TeamCard.vue'
import membersJson from './assets/json/members.json'

export default {
  name: 'App',
  data: function() {
    return {
      members: membersJson.values(),
    }
  },
  components: {
    NewsCard,
    TeamCard
  }
}
</script>


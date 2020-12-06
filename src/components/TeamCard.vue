<template>

    <div class="card" >
    <div class="image-overflow">
      <img
        v-bind:src="member.image"
        class="card-img-top img-fluid"
        alt="image"
      />
    </div>
    <div class="text-center mt-2">
      <h5>
        Team member:
        <span class="badge badge-primary">{{ member.codigo }}</span>
      </h5>
    </div>
    <div class="text-center">
      <h4>{{ member.rol }}</h4>
    </div>
    <div class="card-body text-center mt-2">
      <h5 class="card-title">{{ member.nombre }}</h5>
      <p class="card-text">{{ member.descripcion }}</p>
      <!-- <a href="#" class="btn btn-primary">View Profile</a> -->
    </div>
    </div>

</template>

<script>
    export default {
        name: "TeamCard",
        props: ['member']
    }
</script>

<style scoped>
    .card {
    min-height: 736px;
}
.image-overflow {
    height: 130px;
    overflow: hidden;
}
</style>

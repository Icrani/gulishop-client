<template>
  <div>
    Search
    <br>
    params:{{ $route.params.keyword }}
    <br>
    query:{{ $route.query.keyword1 }}
    <br>
  </div>


</template>

<script>

export default {
  name: 'Search'


}
</script>

<style scoped>

</style>

<template>
  <div>
    <h1>AAAAAAAAAAAAAAA</h1>
    <v-container fluid>
      <v-checkbox v-model="store.systemBar">systemBar</v-checkbox>
      <v-checkbox v-model="store.appBarTop">appBarTop</v-checkbox>
      <v-checkbox v-model="store.appBarBottom">appBarBottom</v-checkbox>
      <v-checkbox v-model="store.navigationDrawerLeftOne">navigationDrawerLeftOne</v-checkbox>
      <v-checkbox v-model="store.navigationDrawerLeftTwo">navigationDrawerLeftTwo</v-checkbox>
      <v-checkbox v-model="store.navigationDrawerRight">navigationDrawerRight</v-checkbox>
    </v-container>
  </div>
</template>

<script lang="ts" setup>



// return {
//     systemBar,
//     appBarTop,
//     appBarBottom,
//     navigationDrawerLeftOne,
//     navigationDrawerLeftTwo,
//     navigationDrawerRight,
//   };

const store = useLayoutStore()




</script>

<style></style>
<template>
    <v-system-bar v-if="store.systemBar"  color="grey-darken-3"></v-system-bar>
</template>
<script lang="ts" setup>

const store = useLayoutStore()
</script>
<template>
  <v-app class="rounded rounded-md">
    <!-- <system-bar></system-bar> -->
    <app-bar-top></app-bar-top>
    <navigation-drawer-left-one></navigation-drawer-left-one>
    <navigation-drawer-left-two></navigation-drawer-left-two>
    <navigation-drawer-right></navigation-drawer-right>
    <app-bar-bottom></app-bar-bottom>
    <main-content>
      <slot />
    </main-content>
  </v-app>
</template>
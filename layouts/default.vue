<template>
  <v-layout class="rounded rounded-md">
    <system-bar></system-bar>
    <navigation-drawer-left-one></navigation-drawer-left-one>
    <navigation-drawer-left-two></navigation-drawer-left-two>
    <app-bar-top></app-bar-top>
    <navigation-drawer-right></navigation-drawer-right>
    <app-bar-bottom></app-bar-bottom>
    <main-content>
      <slot />
    </main-content>
  </v-layout>
</template>
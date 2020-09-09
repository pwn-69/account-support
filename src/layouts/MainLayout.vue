<template>
  <q-layout class="layout-page" view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar class="toolbar">
        <q-toolbar-title>Accounting</q-toolbar-title>

        <div>PWN</div>
      </q-toolbar>
    </q-header>
    <br />
    <q-page-container>
      <home-cards />
    </q-page-container>
  </q-layout>
</template>

<script>
import HomeCards from "components/HomeCards.vue";

export default {
  name: "MainLayout",
  components: { HomeCards },
};
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=PT+Sans+Narrow&display=swap");
.toolbar {
  background: radial-gradient(circle, #35a2ff 0%, #014a88 100%);
}
.layout-page {
  font-family: "PT Sans Narrow", sans-serif;
}
</style>

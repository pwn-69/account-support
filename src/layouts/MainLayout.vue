<template>
  <q-layout class="layout-page" view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar class="toolbar bg-primary">
        <q-toolbar-title>Accounting</q-toolbar-title>

        <q-btn flat round icon="menu_book" @click="isOpenFullscreen = true"></q-btn>
      </q-toolbar>
    </q-header>
    <br />
    <q-page-container>
      <full-screen-dialog :isOpen="isOpenFullscreen" @closeFullscreen="isOpenFullscreen = false"></full-screen-dialog>
      <home-cards />
    </q-page-container>
  </q-layout>
</template>

<script>
import FullScreenDialog from "components/ui/FullScreenDialog.vue";
import HomeCards from "components/HomeCards.vue";
export default {
  name: "MainLayout",
  data() {
    return {
      isOpenFullscreen: false,
    };
  },
  components: { FullScreenDialog, HomeCards },
};
</script>
<style>
.toolbar {
  font-family: "Acme", sans-serif;
}
</style>

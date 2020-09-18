<template>
  <q-layout class="layout-page" view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar class="toolbar">
        <q-toolbar-title>Accounting</q-toolbar-title>

        <q-btn flat @click="isOpenFullscreen = true">
          <img src="https://img.icons8.com/material-outlined/24/000000/documents--v2.png" />
        </q-btn>
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
@import url("https://fonts.googleapis.com/css2?family=Acme&display=swap");
.toolbar {
  background: #ba000d;
  font-family: "Acme", sans-serif;
}
</style>

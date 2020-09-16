<template>
  <q-layout class="layout-page" view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar class="toolbar">
        <q-toolbar-title>Accounting</q-toolbar-title>

        <q-btn flat @click="dialog = true">
          <img src="https://img.icons8.com/material-outlined/24/000000/documents--v2.png" />
        </q-btn>
      </q-toolbar>
    </q-header>
    <br />
    <q-page-container>
      <q-dialog
        v-model="dialog"
        persistent
        :maximized="maximizedToggle"
        transition-show="slide-up"
        transition-hide="slide-down"
      >
        <q-card class="text-white" style="background: #f44336;
  font-family: 'Acme', sans-serif;">
          <q-bar>
            <q-space />

            <q-btn
              dense
              flat
              icon="minimize"
              @click="maximizedToggle = false"
              :disable="!maximizedToggle"
            >
              <q-tooltip v-if="maximizedToggle" content-class="bg-white text-primary">Minimize</q-tooltip>
            </q-btn>
            <q-btn
              dense
              flat
              icon="crop_square"
              @click="maximizedToggle = true"
              :disable="maximizedToggle"
            >
              <q-tooltip v-if="!maximizedToggle" content-class="bg-white text-primary">Maximize</q-tooltip>
            </q-btn>
            <q-btn dense flat icon="close" v-close-popup>
              <q-tooltip content-class="bg-white text-primary">Close</q-tooltip>
            </q-btn>
          </q-bar>

          <q-card-section>
            <div class="text-h6">Documentation</div>
          </q-card-section>

          <q-card-section
            class="q-pt-none"
          >Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum repellendus sit voluptate voluptas eveniet porro. Rerum blanditiis perferendis totam, ea at omnis vel numquam exercitationem aut, natus minima, porro labore.</q-card-section>
        </q-card>
      </q-dialog>
      <home-cards />
    </q-page-container>
  </q-layout>
</template>

<script>
import HomeCards from "components/HomeCards.vue";

export default {
  name: "MainLayout",
  data() {
    return {
      dialog: false,
      maximizedToggle: true,
    };
  },
  components: { HomeCards },
};
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Acme&display=swap');
.toolbar {
  background: #ba000d;
  font-family: 'Acme', sans-serif;
}

</style>

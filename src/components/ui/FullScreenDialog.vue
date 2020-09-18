<template>
  <div>
    <q-dialog
      v-model="isOpen"
      persistent
      maximized
      transition-show="slide-up"
      transition-hide="slide-down"
    >
      <q-card class="text-white" style="background: #f44336;
  font-family: 'Acme', sans-serif;">
        <q-bar>
          <q-space />
          <q-btn dense flat icon="close" v-close-popup @click="closeDialog">
            <q-tooltip content-class="bg-white text-primary">Close</q-tooltip>
          </q-btn>
        </q-bar>

        <q-card-section>
          <div class="text-h6">Documentation</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <i>Write the Documentation</i>
          <br />Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit voluptatem distinctio hic accusamus, id aut odit cum ratione ullam similique ipsam! Temporibus dolorem consectetur molestiae labore quia tenetur deleniti a.
        </q-card-section>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
export default {
  name: "fullscreen-dialog",
  props: {
    isOpen: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    closeDialog() {
      this.$emit("closeFullscreen");
    },
  },
};
</script>

<style lang="css" scoped>
</style>
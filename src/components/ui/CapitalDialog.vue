<template>
  <div>
    <q-dialog v-model="isOpen">
      <q-card>
        <q-card-section>
          <div class="text-h6">Calculated Capital</div>
        </q-card-section>

        <q-separator />

        <q-card-section style="width: 70vh;">
          <p>Assets = Capital + Liabilites</p>
        </q-card-section>

        <q-separator />

        <q-card-actions align="center">
          <q-btn label="Calculate formula" color="primary" v-close-popup />
        </q-card-actions>
        <q-card-actions align="center">
          <q-btn flat label="Add manually " color="primary" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
export default {
  name: "CapitalDialog",
  props: {
    isOpen: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
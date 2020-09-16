<template>
  <div>
    <q-dialog v-model="isOpen" persistent transition-show="rotate" transition-hide="rotate">
      <q-card class="create-card">
        <q-card-section style="background: #f44336;
  font-family: 'Acme', sans-serif;">
          <div class="text-h6">Insert Amounts</div>
        </q-card-section>

        <q-separator />

        <q-card-section>
          <div class="column justify-center">
            <div class="col-4 col-md-6">
              <q-select
                v-model="name"
                :options="options"
                label="Add an account"
                :readonly="isReadonly"
                @input="onValueChange"
                emit-value
                map-options
              ></q-select>
            </div>
            <div class="col-4 col-md-6">
              <q-input v-model="amount" label="Amount" placeholder="0" ref="amountRef" />
            </div>
          </div>
        </q-card-section>

        <q-separator />

        <q-card-actions align="right">
          <q-btn @click="cancelForm" label="Cancel" v-close-popup flat />
          <q-btn @click="submitForm" label="Add" :disabled="!name || !amount" style="background-color: #ff7961;" />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
export default {
  name: "input-dialog",
  props: {
    isOpen: {
      type: Boolean,
      default: false,
    },
    defaultValue: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      focus: false,
      name: "",
      amount: "",
      options: [],
      isReadonly: false,
    };
  },
  watch: {
    isOpen(newValue, oldValue) {
      if (newValue) {
        this.isReadonly = false;
        if (this.defaultValue) {
          this.name = this.defaultValue;
          this.isReadonly = true;
        }
        this.options = this.itemStates;
      }
    },
  },
  methods: {
    cancelForm() {
      this.$emit("submitted", "");
      this.name = "";
      this.amount = "";
    },
    submitForm() {
      if (!this.defaultValue) {
        this.$store.dispatch("ItemStates/SET_ITEM_DISABLE", this.name);
      }
      this.$emit("submitted", { name: this.name, amount: Number(this.amount) });
      this.name = "";
      this.amount = "";
    },
    onValueChange() {
      this.$refs.amountRef.focus();
    },
  },
  computed: {
    itemStates() {
      return this.$store.state.ItemStates.items;
    },
  },
};
</script>

<style scoped>
.create-card {
  width: 100%;
  max-width: 300px;
}
</style>
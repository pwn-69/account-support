
<template>
  <div>
    <q-card class="my-card">
      <q-card-section class="card-title">{{param.value}}</q-card-section>
      <q-separator />
      <q-card-section>
        <q-list v-for="(item, index) in list" :key="index">
          <q-item class="row">
            <q-item-section class="col-5">{{item.name}}</q-item-section>
            <q-item-section class="col-6" side v-if="item.amount !== 0">{{item.amount}}</q-item-section>
            <q-item-section class="col" side v-if="item.amount !== 0">
              <q-btn
                @click="removeItem(item)"
                icon="remove"
                padding="none"
                color="primary"
                size="sm"
              ></q-btn>
            </q-item-section>
            <q-item-section v-else>
              <q-btn
                outline
                rounded
                color="secondary"
                label="Calculate"
                padding="none"
                @click="show()"
              ></q-btn>
            </q-item-section>
          </q-item>
        </q-list>
      </q-card-section>
      <div class="q-pa-md q-gutter-sm">
        <q-btn round color="primary" icon="add" @click="openDialog()" />
      </div>
    </q-card>
    <InputDialog :isOpen="isOpen" :defaultValue="defaultValue" @submitted="submitData($event)" />
  </div>
</template>

<script>
import InputDialog from "./InputDialog";
import { ITEM_CAPITAL, Actions } from "../../shared/constants";
export default {
  name: "card",
  props: {
    param: {
      type: Object,
    },
    list: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      isOpen: false,
      defaultValue: "",
    };
  },
  components: {
    InputDialog,
  },
  created() {},
  methods: {
    openDialog(_defaultValue = "") {
      console.log("open dialog...");
      this.isOpen = true;
      this.defaultValue = _defaultValue;
    },
    submitData(data) {
      if (data) {
        this.$emit("postedData", { key: this.param.name, value: data });
      }
      this.isOpen = false;
    },
    removeItem(item) {
      console.log(item.name);
      if (item.name !== ITEM_CAPITAL) {
        this.$store.dispatch("ItemStates/SET_ITEM_ENABLE", item.name);
      }
      this.$emit("deleteData", { key: this.param.name, value: item.name });
    },
    show(grid) {
      this.$q
        .bottomSheet({
          message: "Calculated Capital Amount",
          grid,
          actions: [
            {
              label: "Auto Calculate",
              icon: "donut_large",
              type: Actions.AUTO,
            },
            {
              label: "Manual Input",
              icon: "create",
              type: Actions.MANUAL,
            },
            {},
            {
              label: "Cancel",
              icon: "arrow_back_ios",
              type: Actions.CANCEL,
            },
          ],
        })
        .onOk((action) => {
          switch (action.type) {
            case Actions.AUTO:
              this.$emit("autoCalculate");
              break;
            case Actions.MANUAL:
              this.openDialog(ITEM_CAPITAL);
              break;
            default:
              console.log("cancel");
          }
        })
        .onCancel(() => {
          console.log("Dismissed");
        });
    },
  },
  computed: {
    calculateAuto() {
      return this.list;
    },
  },
};
</script>

<style scoped>
.card-title {
  font-size: 30px;
}
.my-card {
  width: 100%;
  height: 100%;
  border-radius: 20px;
}
.my-card .q-pa-md {
  text-align: right;
}
</style>
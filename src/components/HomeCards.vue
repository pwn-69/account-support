<template>
  <div>
    <VueSlickCarousel v-bind="settings">
      <div class="q-pa-md doc-container" v-for="(title, key) in accountNames" :key="key">
        <card
          :param="{name: key, value: title}"
          :list="accountMap.get(key)"
          :canCalculateCapital="isCalculateCaptial"
          @autoCalculate="calculateAuto()"
          @postedData="addAccountData($event)"
          @deleteData="deleteItem($event)"
        />
      </div>
    </VueSlickCarousel>
    <div class="row justify-center bottom-columns">
      <div class="col-4">Assets</div>
      <div class="col-4">{{Assets}}</div>
    </div>
    <div class="row justify-center bottom-columns">
      <div class="col-4">Capitals</div>
      <div class="col-4">{{Capitals}}</div>
    </div>
    <div class="row justify-center bottom-columns">
      <div class="col-4">Liabilities</div>
      <div class="col-4">{{Liabilities}}</div>
    </div>
    <br />

    <div v-if="isGeneratePdf" class="row justify-center bottom-columns">
      <q-btn @click="createPDF()" round>
        <img src="https://img.icons8.com/office/30/000000/export-pdf.png" />
      </q-btn>
    </div>
  </div>
</template>

<script>
import { jsPDF } from "jspdf";
import card from "./ui/Card";
import {
  ACCOUNTS,
  ACCOUNT_NAMES,
  ITEM_NAMES,
  ITEM_CAPITAL,
  ITEM_DRAWING,
} from "../shared/constants";

import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
export default {
  name: "HomeCards",
  data() {
    return {
      pdfBtn: true,
      isAutoCapital: false,
      accountNames: [], // account names
      accountMap: new Map(), // for all account data
      fixedAssets: [],
      currentAssets: [],
      capitals: [],
      liabilities: [],
      settings: {
        centerMode: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    };
  },
  components: {
    VueSlickCarousel,
    card,
  },
  methods: {
    calculateAuto() {
      if (this.Assets && this.Liabilities) {
        this.isAutoCapital = true;
        const value = this.Assets - this.Liabilities;
        const data = { name: ITEM_CAPITAL, amount: value };
        this.addAccountData({ key: ACCOUNTS.CAPITAL, value: data });
      } else {
        console.log("No data");
      }
    },
    createPDF() {
      const fixedAssets = this.fixedAssets.reduce(
        (total, value) => Number(total) + Number(value.amount),
        0
      );
      const currentAssets = this.currentAssets.reduce(
        (total, value) => Number(total) + Number(value.amount),
        0
      );
      const totalAssets = fixedAssets + currentAssets;
      console.log(totalAssets);

      const liability = this.liabilities.reduce(
        (total, value) => Number(total) + Number(value.amount),
        0
      );
      const capital = this.capitals.reduce(
        (total, value) => Number(total) + Number(value.amount),
        0
      );
      const totalCapital = liability + capital;
      console.log(totalCapital);

      if (
        totalAssets == totalCapital &&
        totalAssets != 0 &&
        totalCapital != 0
      ) {
        const doc = new jsPDF();
        doc.text("Hello world!", 10, 10);
        doc.save("two-by-four.pdf");
      } else {
      }
    },

    addAccountData(_data) {
      if (!_data.value) {
        return;
      }
      if (_data.value.name === ITEM_DRAWING) {
        _data.value.amount = -_data.value.amount;
      }
      const data = this.accountMap.get(_data.key);

      if (_data.value.name === ITEM_CAPITAL) {
        const capitalData = data.find((item) => item.name === ITEM_CAPITAL);
        capitalData.amount = _data.value.amount;
      } else {
        data.push(_data.value);
        if (this.isAutoCapital) {
          this.resetCapitalItem();
        }
      }

      switch (_data.key) {
        case ACCOUNTS.FIXED_ASSET:
          this.fixedAssets = data;
          break;
        case ACCOUNTS.CURRENT_ASSET:
          this.currentAssets = data;
          break;
        case ACCOUNTS.CAPITAL:
          this.capitals = data;
          break;
        default:
          this.liabilities = data;
          break;
      }
    },

    deleteItem(_data) {
      console.log(_data.key, _data.value);

      const data = this.accountMap.get(_data.key);
      const del = data.findIndex((v) => {
        return v.name === _data.value;
      });
      // specific account control
      if (_data.value === ITEM_CAPITAL) {
        data[del].amount = 0;
      } else {
        data.splice(del, 1);
        if (this.isAutoCapital) {
          this.resetCapitalItem();
        }
      }

      this.accountMap.set(_data.key, data);
      switch (_data.key) {
        case ACCOUNTS.FIXED_ASSET:
          this.fixedAssets = data;
          break;
        case ACCOUNTS.CURRENT_ASSET:
          this.currentAssets = data;
          break;
        case ACCOUNTS.CAPITAL:
          this.capitals = data;
          break;
        default:
          this.liabilities = data;
          break;
      }
    },

    resetCapitalItem() {
      const capitalAccounts = this.accountMap.get(ACCOUNTS.CAPITAL);
      const capitalItem = capitalAccounts.find(
        (item) => item.name === ITEM_CAPITAL
      );
      capitalItem.amount = 0;
      this.isAutoCapital = false;
      this.$q.notify({
        type: "info",
        message: `Capital item has been reset.`,
      });
    },
  },

  created() {
    this.accountNames = ACCOUNT_NAMES;
    Object.keys(ACCOUNT_NAMES).forEach((key) => {
      this.accountMap.set(key, []);
    });
    const preparedItems = ITEM_NAMES.map((item) => {
      return { label: item, value: item, disable: false };
    });
    this.$store.dispatch("ItemStates/IMPORT_ITEMS", preparedItems);

    // initialize capital item
    const capitalAccounts = this.accountMap.get(ACCOUNTS.CAPITAL);
    capitalAccounts.push({ name: ITEM_CAPITAL, amount: 0 });
  },
  computed: {
    Assets() {
      const fixedAssets = this.fixedAssets.reduce(
        (total, value) => Number(total) + Number(value.amount),
        0
      );
      const currentAssets = this.currentAssets.reduce(
        (total, value) => Number(total) + Number(value.amount),
        0
      );
      return fixedAssets + currentAssets;
    },
    Capitals() {
      return this.capitals.reduce(
        (total, value) => Number(total) + Number(value.amount),
        0
      );
    },
    Liabilities() {
      return this.liabilities.reduce(
        (total, value) => Number(total) + Number(value.amount),
        0
      );
    },

    isGeneratePdf() {
      if (this.Assets == 0) return false;

      if (this.Assets == this.Liabilities + this.Capitals) {
        return true;
      } else {
        return false;
      }
    },

    isCalculateCaptial() {
      return this.Assets > 0 && this.Liabilities > 0;
    },
  },
};
</script>
<style>
.doc-container {
  outline: none;
}
.bottom-columns {
  font-size: 15px;
  font-family: "Acme", sans-serif;
}
</style>

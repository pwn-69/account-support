<template>
  <div>
    <q-dialog
      v-model="isOpen"
      persistent
      maximized
      transition-show="slide-up"
      transition-hide="slide-down"
    >
      <q-card class="text-white bg-primary document_card">
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

          <q-list bordered class="rounded-borders">
            <q-card-section class="bg-secondary">
              <div class="text-h4">The Accounting Equation</div>
              <div class="text-h6">Assets = Capital + Liabilities</div>
              <q-list bordered class="rounded-borders">
                <q-expansion-item expand-separator label="Assets">
                  <q-card-section>Assets are all items that can be classed by 'Property' and have a value to the business.</q-card-section>
                  <q-expansion-item
                    :header-inset-level="1"
                    expand-separator
                    icon="receipt"
                    label="Fixed Assets and Current Assets"
                  >
                    <q-expansion-item
                      switch-toggle-side
                      dense-toggle
                      label="Fixed Assets"
                      :header-inset-level="1"
                      :content-inset-level="2"
                    >
                      <q-card-section>
                        Fixed assets will tend to be more costly and will have a longer life.
                        Eg-
                        <q-item clickable v-ripple>
                          <q-item-section>Premises</q-item-section>
                        </q-item>

                        <q-item clickable v-ripple>
                          <q-item-section>Machinery</q-item-section>
                        </q-item>

                        <q-item clickable v-ripple>
                          <q-item-section>car</q-item-section>
                        </q-item>
                        <q-item clickable v-ripple>
                          <q-item-section>Equipment</q-item-section>
                        </q-item>
                      </q-card-section>
                    </q-expansion-item>

                    <q-expansion-item
                      switch-toggle-side
                      dense-toggle
                      label="Current Assets"
                      :header-inset-level="1"
                      :content-inset-level="2"
                    >
                      <q-card-section>
                        Current assets are more likely to be lower in value.
                        Eg-
                        <q-item clickable v-ripple>
                          <q-item-section>Cash in hand</q-item-section>
                        </q-item>
                        <q-item clickable v-ripple>
                          <q-item-section>Cash at bank</q-item-section>
                        </q-item>
                        <q-item clickable v-ripple>
                          <q-item-section>Debtors</q-item-section>
                        </q-item>
                        <q-item clickable v-ripple>
                          <q-item-section>Prepayment</q-item-section>
                        </q-item>
                      </q-card-section>
                    </q-expansion-item>
                  </q-expansion-item>
                </q-expansion-item>
                <q-expansion-item expand-separator label="Liabilities">
                  <q-card-section>
                    Liabilities are all items that are owned by the business to outsider;consists of
                    <q-item clickable v-ripple>
                      <q-item-section>trade creditors</q-item-section>
                    </q-item>

                    <q-item clickable v-ripple>
                      <q-item-section>bank loan</q-item-section>
                    </q-item>

                    <q-item clickable v-ripple>
                      <q-item-section>mortgage</q-item-section>
                    </q-item>
                  </q-card-section>
                </q-expansion-item>
                <q-expansion-item expand-separator label="Capital">
                  <q-card-section>Capital is the money invested in the business by the owner(s).</q-card-section>
                </q-expansion-item>
              </q-list>
            </q-card-section>
          </q-list>

          <br>
          <br>

          <q-markup-table class="text-white" flat bordered>
            <thead class="bg-primary">
              <tr>
                <th class="text-center">Fixed Assets</th>
                <th class="text-center">Current Assets</th>
                <th class="text-center">Captial</th>
                <th class="text-center">Liabilities</th>
              </tr>
            </thead>
            <tbody class="bg-secondary">
              <tr>
                <td class="text-center">Premises</td>
                <td class="text-center">Stock</td>
                <td class="text-center">Captial</td>
                <td class="text-center">Credictors</td>
              </tr>
              <tr>
                <td class="text-center">Motor Vehicle</td>
                <td class="text-center">Debtors</td>
                <td class="text-center">Profit</td>
                <td class="text-center">Etc....</td>
              </tr>
              <tr>
                <td class="text-center">Fixture & Fitting</td>
                <td class="text-center">Cash at bank</td>
                <td class="text-center">Etc....</td>
                <th class="text-center"></th>
              </tr>
              <tr>
                <td class="text-center">Etc....</td>
                <td class="text-center">Etc....</td>
                <th class="text-center"></th>
                <th class="text-center"></th>
              </tr>
            </tbody>
          </q-markup-table>

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
.document_card{
  font-family: "Acme", sans-serif;
}
</style>
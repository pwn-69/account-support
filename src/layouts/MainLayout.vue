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
            <div class="text-h2">Documentation</div>
          </q-card-section>
             <q-list bordered class="rounded-borders">
           <q-card-section class="bg-purple">

              <div class="text-h4">The Accounting Equation</div>
            <div class="text-h6">Assets = Capital + Liabilities </div>
             <q-list bordered class="rounded-borders">
      <q-expansion-item
        expand-separator
        
        label="Assets"
        
        default-opened
        
      ><q-card-section>
                Assets are all items that can be classed by 'Property' and have a value to the business.
              </q-card-section>
        <q-expansion-item
          :header-inset-level="1"
          expand-separator
          icon="receipt"
          label="Fixed Assets and Current Assets"
          default-opened
        >

          <q-expansion-item switch-toggle-side dense-toggle label="Fixed Assets" :header-inset-level="1" :content-inset-level="2">
            
             <q-card-section>
                Fixed assets will tend to be more costly and will have a longer life.
               Eg-
                <q-item clickable v-ripple>
        <q-item-section>
          Premises
        </q-item-section>
      </q-item>

      <q-item clickable v-ripple>
        <q-item-section>
         Machinery
        </q-item-section>
      </q-item>

      <q-item clickable v-ripple>
        <q-item-section>
          car
        </q-item-section>
      </q-item>
       <q-item clickable v-ripple>
        <q-item-section>
         Equipment
        </q-item-section>
      </q-item>

              </q-card-section>
         
          </q-expansion-item>

          <q-expansion-item switch-toggle-side dense-toggle label="Current Assets" :header-inset-level="1" :content-inset-level="2">
            
              <q-card-section>
               Current assets are more likely to be lower in value.
               Eg-
                <q-item clickable v-ripple>
        <q-item-section>
          Cash in hand
        </q-item-section>
      </q-item>
       <q-item clickable v-ripple>
        <q-item-section>
          Cash at bank
        </q-item-section>
      </q-item>
       <q-item clickable v-ripple>
        <q-item-section>
        Debtors
        </q-item-section>
      </q-item>
       <q-item clickable v-ripple>
        <q-item-section>
          Prepayment
        </q-item-section>
      </q-item>
              </q-card-section>
           
          </q-expansion-item>

        </q-expansion-item>
 
      </q-expansion-item>
        <q-expansion-item
        expand-separator
        
        label="Liabilities"
        
        default-opened
        
      ><q-card-section>
               Liabilities are all items that are owned by the business to outsider;consists of 
               
      <q-item clickable v-ripple>
        <q-item-section>
          trade creditors
        </q-item-section>
      </q-item>

      <q-item clickable v-ripple>
        <q-item-section>
         bank loan
        </q-item-section>
      </q-item>

      <q-item clickable v-ripple>
        <q-item-section>
          mortgage
        </q-item-section>
      </q-item>
   
              </q-card-section>
              </q-expansion-item>
                 <q-expansion-item
        expand-separator
        
        label="Capital"
        
        default-opened
        
      ><q-card-section>
              Capital is the money invested in the business by the owner(s).
              </q-card-section>
              </q-expansion-item>

    </q-list>
          </q-card-section>
             </q-list>

         
         <q-markup-table flat bordered> 
          <thead class="bg-orange">
                    <tr>
          <th class="text-center">Fixed Assets</th>
          <th class="text-center">Current Assets</th>
          <th class="text-center">Captial</th>
          <th class="text-center">Liabilities</th>
          
        </tr>
      </thead>
       <tbody class="bg-red-3">
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
          <th class="text-center"> </th>
         
        </tr>
         <tr>
          <td class="text-center">Etc....</td>
           <td class="text-center">Etc....</td>
            <th class="text-center"> </th>
             <th class="text-center"> </th>
        </tr>
        </tbody>
 
          </q-markup-table>
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

<template>
  <div class="fullscreen bg-teal text-white text-center q-pa-md flex flex-center">
    <div>
      <div style="font-size: 15vh">
        404
      </div>

      <div class="text-h5" style="opacity:.4">
        Are you lost, baby girl?
      </div>

      <q-btn
        class="q-mt-xl"
        color="white"
        text-color="teal"
        unelevated
        to="/"
        label="Go Home"
        no-caps
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Error404'
}
</script>

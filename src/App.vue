<script setup>

import {ref} from "vue";

const params = new URLSearchParams(window.location.search);
const name = params.get("uuu");

const uuu = ref("http://acrh17-gz.v6.rocks:60123/s/" + name)
</script>

<template>
<!--  <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld :msg=name />
    </div>
  </header>-->
  {{uuu}}
  <iframe :src=name style="height: 98vh; width: 200vh; position: fixed; place-items: flex-start"/>
<!--  <main >
&lt;!&ndash;    <TheWelcome :msg="name"/>&ndash;&gt;
  </main>-->
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

</style>

<script setup lang="ts">
import { Authenticator } from "@aws-amplify/ui-vue";
import "@aws-amplify/ui-vue/styles.css";
</script>

<template>
  
  <main>
    <authenticator >
      <template v-slot="{ signOut }">
        <router-view />
        <button @click="signOut">Sign Out</button>
      </template>
    </authenticator>
  </main>
</template>


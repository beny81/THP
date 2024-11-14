<script  lang="ts">
import AppNavigation from "../components/AppNavigation.vue";
import AppFooter from "../components/AppFooter.vue";
import AppLogo from "../components/AppLogo.vue";
import SearchBar from "../components/SearchBar.vue";
import UserProfil from "../components/UserProfil.vue";

export default {
  components: {
    AppNavigation,
    AppFooter,
    AppLogo,
    SearchBar,
    UserProfil


  }
};

</script>

<template>
  <div class="container-fluid  ">
    <div class="row pt-0">
    <header class="   col-3">
      <AppNavigation />
      <UserProfil />
    </header>

    <main class="mh-100 border border-white p-2 mb-2 border-opacity-25 text-center col-5">
      <slot />
    </main>

    <aside class=" col-4 text-center">
      <SearchBar />
      <slot name="aside" />
      <AppFooter />
    </aside>
   </div>
  </div>
</template>
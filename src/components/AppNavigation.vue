<script setup lang="ts"> 
  import NavItem from "./NavItem.vue"
  import AppLogo from "./AppLogo.vue"
</script>

<template>
  <main class=" row"> 

    <ul class=" col offset-2  nav flex-column">
      <AppLogo />
     
      <NavItem :to="'/'" item="Accueil" > 
        <image href="../assets/iconBootsrap/accueil.svg" x="0" y="0" width="30" height="25" />
      </NavItem>
      <NavItem :to="'#'" item="Explorer" > 
        <image href="../assets/iconBootsrap/search.svg" x="0" y="0" width="30" height="25" />
      </NavItem>
      <NavItem :to="'#'" item="Notifications" > 
        <image href="../assets/iconBootsrap/bell.svg" x="0" y="0" width="30" height="25" />
      </NavItem>
      <NavItem :to="'#'" item="Events" > 
        <image href="../assets/iconBootsrap/calender.svg" x="0" y="0" width="30" height="25" />
      </NavItem>
      <NavItem :to="'#'" item="Maps" > 
        <image href="../assets/iconBootsrap/maps.svg" x="0" y="0" width="30" height="25" />
      </NavItem>
      <NavItem :to="'/profil'" item="Profil" > 
        <image href="../assets/iconBootsrap/person-fill.svg" x="0" y="0" width="30" height="25" />
      </NavItem> 
    </ul>
  </main>  
</template>
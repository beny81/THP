<script setup  lang="ts">

  
    defineProps({
  to: {
    type: String,
    required: false,
  },
  item: {
    type: String,
    required: false,
  }
});
</script>

<template>
   <li class="h4 hoverLink rounded me-auto">
    
        <router-link class="my-link link-light" :to="to">
          <svg  width="30" height="30">
      <!-- Add the image -->
       <!-- <slot /> -->
      <!-- <image href={{iconLink}} x="0" y="0" width="30" height="20" /> -->
       <slot/>

    </svg>
        <span class="light p-2">{{ item }}</span>
        </router-link>
      </li>
</template>
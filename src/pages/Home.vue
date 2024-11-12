<script lang="ts">
    import ThreeColumn from "../layouts/ThreeColumn.vue"

    export default {
  components: {
    ThreeColumn,
  },
};
</script>

<template>
    <ThreeColumn>
        <h2>Homepage content</h2>
        <template #aside>
         <h3>aside</h3>
        </template>
  </ThreeColumn>
</template>
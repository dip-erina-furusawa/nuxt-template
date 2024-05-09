<script setup lang="ts">
const props = defineProps({
  label: {
    type: String,
    required: true,
  },
});
</script>
<template>
  <Button>
    {{ label }}
  </Button>
</template>
<style scoped></style>

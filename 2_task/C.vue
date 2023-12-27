<template>
  <div class="C-component">
    <slot name="CComponentSlot" :item="item" :index="index"></slot>
  </div>
</template>

<script>
export default {
  data() {
    return {
      item: "Test Item",
      index: "Test Index"
    }
  }
}
</script>

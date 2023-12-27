<template>
  <div class="B-component">
    <CComponent>
      <template #CComponentSlot="{ item, index }">
        <slot name="CComponentSlot" :item=item :index=index></slot>
      </template>
    </CComponent>
  </div>
</template>

<script>
import CComponent from "./C.vue";

export default {
  components: {
    CComponent
  }
}
</script>

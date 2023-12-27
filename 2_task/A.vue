<template>
  <div class="A-component">
    <BComponent>
      <template #CComponentSlot="{ item, index }">
        <slot name="CComponentSlot" :item=item :index=index></slot>
      </template>
    </BComponent>
  </div>
</template>

<script>
import BComponent from "./B.vue";

export default {
  components: {
    BComponent
  }
}
</script>

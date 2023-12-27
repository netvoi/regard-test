<template>
  <AComponent>
    <template #CComponentSlot="{ item, index }">
      <div>
        item: {{ item }}
      </div>
      <div>
        index: {{ index }}
      </div>
    </template>
  </AComponent>
</template>

<script>
import AComponent from "./A.vue";

export default {
  components: {
    AComponent
  }
}
</script>

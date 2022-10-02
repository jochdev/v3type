<template>
  <div class="home">
    <ItemsListComponentVue :items="items" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ItemsListComponentVue from "@/components/items/ItemsList.component.vue";

export default defineComponent({
  name: "Home",
  components: {
    ItemsListComponentVue,
  },

  setup() {
    const items: any[] = [
      {
        id: 1,
        name: "Item 1",
      },
      {
        id: 12,
        name: "Item 2",
      },
      {
        id: 3,
        name: "Item 3",
      },
      {
        id: 4,
        name: "Item 4",
      },
    ];

    return {
      items,
    };
  },
});
</script>

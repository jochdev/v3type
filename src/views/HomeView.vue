<template>
  <div class="home">
    <ItemsListComponent
      :items="items"
      :loading="loading"
      @selectItem="onSelectItem"
    />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted } from "vue";
import ItemsListComponent from "@/components/items/ItemsList.component.vue";
import { ItemInterface } from "@/models/items/Item.interface";
import store from "@/store";

export default defineComponent({
  name: "Home",
  components: {
    ItemsListComponent,
  },

  setup() {
    const onSelectItem = (item: ItemInterface) => {
      store.dispatch("selectItem", {
        id: item.id,
        selected: !item.selected,
      });
    };
    // const items: ItemInterface[] = reactive([
    //   {
    //     id: 1,
    //     name: "Item 1",
    //     selected: false,
    //   },
    //   {
    //     id: 2,
    //     name: "Item 2",
    //     selected: false,
    //   },
    //   {
    //     id: 3,
    //     name: "Item 3",
    //     selected: false,
    //   },
    //   {
    //     id: 4,
    //     name: "Item 4",
    //     selected: false,
    //   },
    // ]);

    const items = computed(() => {
      return store.state.items;
    });

    const loading = computed(() => {
      return store.state.loading;
    });

    onMounted(() => {
      store.dispatch("loadItems");
    });
    return {
      items,
      loading,
      onSelectItem,
    };
  },
});
</script>

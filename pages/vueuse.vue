<template>
  <div>
    <h1>https://vueuse.org/</h1>
    <div ref="el" :style="style" style="position: fixed">
      Drag me! I am at {{ x }}, {{ y }}
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useDraggable } from "@vueuse/core";

const el = (ref < HTMLElement) | (null > null);

// `style` will be a helper computed for `left: ?px; top: ?px;`
const { x, y, style } = useDraggable(el, {
  initialValue: { x: 200, y: 200 },
});
</script>

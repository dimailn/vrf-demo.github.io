<template>

<div style="display: flex">
  <div
    class="rf-select-adapter__image"
    :class="{'rf-select-adapter__image_selected': option.id == $value}"
    v-for="option in $_options"
    :key="option.id"
    @click="onClick(option.id)"
    style="width: 200px"
  >
    <img
      :src="option.image"
      height="100"

    />
  </div>


</div>

</template>

<script>

import {descriptors} from 'vrf'

export default {
  extends: descriptors.select,
  methods: {
    onClick(id) {
      this.$value = id

      this.$emit('input', id)
    }
  }
}

</script>

<style>
.rf-select-adapter__image:hover {
  cursor: pointer;
}

.rf-select-adapter__image_selected {
  border-color: #BBDEFB;
  border-style: solid;
  border-width: 1px;
}
</style>
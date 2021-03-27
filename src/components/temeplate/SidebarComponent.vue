<template>
   <div
      class="sidebar column"
      :class="{block: showSettings}"
   >
      <div class="icon" @click="showSettings = !showSettings">
         <transition name="fade" mode="out-in">
            <svg
               viewBox="0 0 512 512"
               class="settings"
               :class="{opened: showSettings}"
            >
               <g class="fa-group"><path fill="currentColor" d="M496 64H288v64h208a16 16 0 0 0 16-16V80a16 16 0 0 0-16-16zM16 128h176V64H16A16 16 0 0 0 0 80v32a16 16 0 0 0 16 16zm0 160h304v-64H16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16zm480-64h-80v64h80a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm0 160H160v64h336a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zM0 400v32a16 16 0 0 0 16 16h48v-64H16a16 16 0 0 0-16 16z" class="fa-secondary"></path><path fill="currentColor" d="M272 32h-32a16 16 0 0 0-16 16v96a16 16 0 0 0 16 16h32a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16zm128 160h-32a16 16 0 0 0-16 16v96a16 16 0 0 0 16 16h32a16 16 0 0 0 16-16v-96a16 16 0 0 0-16-16zM144 352h-32a16 16 0 0 0-16 16v96a16 16 0 0 0 16 16h32a16 16 0 0 0 16-16v-96a16 16 0 0 0-16-16z" class="fa-primary"></path></g>
            </svg>
         </transition>
      </div>
   </div>
</template>

<script>
    export default {
        name: "SidebarComponent",
        data() {
            return {
                showSettings: false,
            }
        },
    }
</script>

<style lang="scss">
   @import "../../assets/scss/sidebar/sidebar";
</style>

<template>
    <header class="header row">
        <top-logo/>
        <menu-nav/>
    </header>
</template>

<script>
    import TopLogo from "@/components/temeplate/header/TopLogo";
    import MenuNav from "@/components/temeplate/header/MenuNav";
    export default {
        name: "HeaderComponent",
        components: {MenuNav, TopLogo},
    }
</script>

<style lang="scss">
    @import "../../assets/scss/header/header";
</style>

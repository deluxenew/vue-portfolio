<template>
    <div id="app">
        <header-component/>
        <div class="main-wrap">
            <main-component/>
            <sidebar-component/>
        </div>
        <footer-component/>
    </div>
</template>

<script>
    import HeaderComponent from "@/components/temeplate/HeaderComponent";
    import SidebarComponent from "@/components/temeplate/SidebarComponent";
    import MainComponent from "@/components/temeplate/MainComponent";
    import FooterComponent from "@/components/temeplate/FooterComponent";

    export default {
        name: 'App',
        components: {
            FooterComponent,
            MainComponent,
            SidebarComponent,
            HeaderComponent,
        }
    }
</script>

<style lang="scss">

    #app {
        display: flex;
        flex-direction: column;
        min-height: 100vh;

        * {
            font-family: $font;
        }
    }

    .main-wrap {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        flex-grow: 1;
    }
</style>

<script>
    import ContainerSidbebar from "../components/ContainerSidbebar/ContainerSidbebar.svelte";
    import "iconify-icon";
    import "../app.css";
    import "agnostic-svelte/css/common.min.css";

    let showSidebar = false;
    const nav = [
        { title: "Home", path: "/svelte-ui-frameworks/home" },
        { title: "Component comparison", path: "/svelte-ui-frameworks/component-comparison" },
        { title: "About", path: "/svelte-ui-frameworks/about" },
    ];

    function showHideMenue() {
        showSidebar = !showSidebar;
        console.log(showSidebar);
    }
</script>

<!-- For overriding styles in hole project with sveltestrap/bootstrap styles
    if this isnt there it is not manageble to use all the different UI-Libraries in one Project without 
    of css conflicts
-->
<link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css"
/>

<iconify-icon
    icon="mdi:menu"
    on:click={showHideMenue}
    on:keydown={showHideMenue}
    style="cursor: pointer; font-size: 1.7em"
/>

<main class="main-content">
    <ContainerSidbebar {showSidebar} {showHideMenue} {nav} />

    <!-- slot is standing for rendering the page content -->
    <slot />
</main>
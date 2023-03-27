<script>
    import { goto } from '$app/navigation';

</script>

<h1>Svelte UI-Frameworks comparison</h1>
<p>This sample app compares nine sample Svelte UI-Frameworks. These are:</p>
<ul>
    <li>
        <a href="https://github.com/hperrin/svelte-material-ui" target="_blank"
            >Svelte Material UI</a
        >
    </li>
    <li>
        <a href="https://github.com/svelteuidev/svelteui" target="_blank"
            >Svelte UI</a
        >
    </li>
    <li>
        <a href="https://github.com/rgossiaux/svelte-headlessui" target="_blank"
            >Headless UI</a
        >
    </li>
    <li>
        <a href="https://github.com/saadeghi/daisyui" target="_blank"
            >Daisyui</a
        >
    </li>
    <li>
        <a href="https://github.com/bestguy/sveltestrap" target="_blank"
            >Sveltestrap</a
        >
    </li>
    <li>
        <a href="https://github.com/illright/attractions" target="_blank"
            >Attractions</a
        >
    </li>
    <li>
        <a href="https://github.com/matyunya/smelte" target="_blank"
            >Smelter</a
        >
    </li>
    <li>
        <a href="https://github.com/carbon-design-system/carbon-components-svelte" target="_blank"
            >Carbon Components</a
        >
    </li>
    <li>
        <a href="https://github.com/agnosticui/agnosticui" target="_blank"
            >Agnosticui</a
        >
    </li>
</ul>

<p>
    Since all frameworks have a different number of components, the most
    important ones have been selected in this example and compared with each
    other. For a complete list of components, visit the website of the
    respective framework.
</p>
<p>
    It is recommended to view the website on a device with a larger screen so
    that the frameworks can be better compared with each other.
</p>

<button on:click={() => goto("/ui-framework-comparison")}>UI-Framework comparison</button>

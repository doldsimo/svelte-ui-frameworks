<script>
// @ts-nocheck

    // This is done in a single file for clarity. A more factored version here: https://svelte.dev/repl/288f827275db4054b23c437a572234f6?version=3.38.2
    import { flip } from "svelte/animate";
    import { dndzone } from "svelte-dnd-action";

    import TestComponent from "../TestComponent/TestComponent.svelte";
    import SvelteMaterialUi from "../Frameworks/SvelteMaterialUI/SvelteMaterialUI.svelte";
    import SvelteStrap from "../Frameworks/SvelteStrap/SvelteStrap.svelte";
    import SvelteUI from "../Frameworks/SvelteUI/SvelteUI.svelte";
    import HeadlessUI from "../Frameworks/HeadlessUI/HeadlessUI.svelte";
    import DaisyUI from "../Frameworks/DaisyUI/DaisyUI.svelte";
    let columnItems = [
        {
            id: 1,
            name: "Svelte Material UI",
            component: SvelteMaterialUi,
        },
        {
            id: 2,
            name: "Svelte UI",
            component: SvelteUI,
        },
        {
            id: 3,
            name: "Headless UI",
            component: HeadlessUI,
        },
        {
            id: 4,
            name: "Daisyui",
            component: DaisyUI,
        },
        {
            id: 5,
            name: "Sveltestrap",
            component: SvelteStrap,
        },
        {
            id: 6,
            name: "Attractions",
            component: TestComponent,
        },
        {
            id: 7,
            name: "Smelter",
            component: TestComponent,
        },
        {
            id: 8,
            name: "Carbon Components",
            component: TestComponent,
        },
        {
            id: 9,
            name: "Agnosticui",
            component: TestComponent,
        },
    ];

    const flipDurationMs = 200;
    function handleDndConsiderColumns(e) {
        columnItems = e.detail.items;
    }
    function handleDndFinalizeColumns(e) {
        columnItems = e.detail.items;
    }
</script>

<section
    class="board"
    use:dndzone={{ items: columnItems, flipDurationMs, type: "columns" }}
    on:consider={handleDndConsiderColumns}
    on:finalize={handleDndFinalizeColumns}
>
    
    {#each columnItems as column (column.id)}
        <div class="column" animate:flip={{ duration: flipDurationMs }}>
            <div class="column-title">
                <h3>{column.name}</h3>
                <iconify-icon
                    icon="iconoir:drag-hand-gesture"
                    class="drag-icon"
                />
            </div>

            <div class="column-content">
                <svelte:component this={column.component} />
            </div>
        </div>
    {/each}
</section>


<style>
    .board {
        white-space: nowrap;
        height: 90vh;
        /* this width is for scrollable x-axis */
        width: 285em;
        padding: 0.5em;
        margin-bottom: 40px;
    }
    .column {
        position: relative;
        cursor: default;
        height: 100%;
        width: 25em;
        padding: 0.5em;
        margin: 1em;
        float: left;
        border: 1px solid #333333;
        /*Notice we make sure this container doesn't scroll so that the title stays on top and the dndzone inside is scrollable*/
        overflow-y: hidden;
        background-color: white;
    }
    .column-content {
        cursor: default;
        height: 100%;
        /* Notice that the scroll container needs to be the dndzone if you want dragging near the edge to trigger scrolling */
        /* overflow-y: scroll; */
    }
    .column-title {
        margin-bottom: 1em;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .card {
        height: 15%;
        width: 100%;
        margin: 0.4em 0;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #dddddd;
        border: 1px solid #333333;
    }
    .drag-icon {
        color: rgb(143, 0, 0);
        font-size: 1.5em;
        position: absolute;
        top: 0px;
        right: 0px;
    }
</style>

<script>
    import { flip } from "svelte/animate";
    import { dndzone } from "svelte-dnd-action";
    let items = [
        { id: 0, name: "item43" },
        { id: 1, name: "item41" },
        { id: 2, name: "item42" },
        { id: 3, name: "item43" },
        { id: 4, name: "item42" },
        { id: 5, name: "item43" },
        { id: 6, name: "item42" },
        { id: 7, name: "item43" },
        { id: 8, name: "item42" },
        { id: 9, name: "item43" },
    ];
    export let containerWidth = "200vw";
    export let itemWidth = "15em";
    const flipDurationMs = 300;
    function handleDndConsider(e) {
        items = e.detail.items;
    }
    function handleDndFinalize(e) {
        items = e.detail.items;
    }

    let rows = [
        { id: 0, name: "item43" },
        { id: 1, name: "item41" },
        { id: 2, name: "item42" },
        { id: 3, name: "item43" },
        { id: 4, name: "item42" },
        { id: 5, name: "item43" },
        { id: 6, name: "item42" },
        { id: 7, name: "item43" },
        { id: 8, name: "item42" },
        { id: 9, name: "item43" },
    ];
</script>

<svelte:head>
    <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css"
    />
</svelte:head>

<div
    class="container"
    use:dndzone={{ items, flipDurationMs }}
    on:consider={handleDndConsider}
    on:finalize={handleDndFinalize}
>
    <div class="row">
        {#each items as item (item.id)}
            <div
                class="col"
                style="flex: 0 0 {itemWidth}; background-color: red"
                animate:flip={{ duration: flipDurationMs }}
            >
                sdf saf sadfsda
                {item.name}
            </div>
        {/each}
    </div>
</div>

<!-- <style>
    .container {
        display: grid;
        flex-wrap: wrap;
        width: 100%;
        /* display: inline-block; */
        justify-content: space-between;
        /* padding: 0.9em; */
        /* border: 1px solid blue; */
        /* margin: 0 0.15em; */
    }
    .container::after {
        content: "";
        flex: auto;
    }

    .elements {
        /* display: inline-block; */
        padding: 0.9em;
        border: 1px solid blue;
        /* margin: 0 0.15em; */
    }
</style> -->

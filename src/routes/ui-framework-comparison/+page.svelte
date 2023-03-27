<script>
    import { flip } from "svelte/animate";
    import { dndzone } from "svelte-dnd-action";
    import HorizontalList from "../../components/HorizontalList/HorizontalList.svelte";
    import VerticalList from "../../components/VerticalList/VerticalList.svelte";
    let items = [
        { id: 1, name: "item1" },
        { id: 2, name: "item2" },
        { id: 3, name: "item3" },
        { id: 4, name: "item4" },
    ];
    const flipDurationMs = 300;
    function handleDndConsider(e) {
        items = e.detail.items;
    }
    function handleDndFinalize(e) {
        items = e.detail.items;
    }
</script>

<h1>UI-Framework comparison</h1>

<!-- <HorizontalList/> -->

<VerticalList />

<!-- <HorizontalList /> -->

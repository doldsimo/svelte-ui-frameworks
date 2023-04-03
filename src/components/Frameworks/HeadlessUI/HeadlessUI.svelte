<script>
    // @ts-nocheck
    import Dialog from "./Dialog/Dialog.svelte";
    import { primaryColor, secondaryColor } from "../../../store/stores";

    let colorP;
    let colorS;

    primaryColor.subscribe((color) => {
        colorP = color;
    });

    secondaryColor.subscribe((color) => {
        colorS = color;
    });
</script>

<!-- <Dialog/> -->
<div class="container-ui-comparison">
    <div class="sub-container-button">
        <button
            class="btn"
            style={"background-color:" + colorP + "; color:" + colorS}
            >Click me</button
        >
    </div>
</div>

<!-- <h1 class="text-3xl font-bold underline">Test Heading</h1> -->

<!-- styles must be added to component which is using tailwind classes -->
<!-- <style global lang="postcss">
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
</style>  -->

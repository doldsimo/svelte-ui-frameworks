<script>
    // @ts-nocheck
    import "agnostic-svelte/css/common.min.css";
    import { Button } from "agnostic-svelte";

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

<Button mode="primary"  style={"background-color:" + colorP + "; color:" + colorS}>Test</Button>

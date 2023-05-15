<script>
    // @ts-nocheck
    import { primaryColor, secondaryColor } from "../../../store/stores";
    //import {Button, Chip, Divider, Loading, Tabs } from "attractions"

    let colorP;
    let colorS;

    primaryColor.subscribe((color) => {
        colorP = color;
    });

    secondaryColor.subscribe((color) => {
        colorS = color;
    });

    let open = false;

    let selectedTab = 'Main dishes';
</script>

<div class="container-ui-comparison">
    <p>
        Very bad svelte kit support, <br>so no Integration of attractions
    </p>
</div>




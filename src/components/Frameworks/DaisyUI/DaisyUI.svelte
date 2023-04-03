<script>
    // @ts-nocheck
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



<button class="btn" style={"background-color:" + colorP + "; color:" + colorS}>Button</button>



<!-- styles must be added to component which is using tailwind classes -->
<style global lang="postcss">
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
</style> 
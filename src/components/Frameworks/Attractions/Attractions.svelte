<script>
    // @ts-nocheck
    import { primaryColor, secondaryColor } from "../../../store/stores";
    import { Button, Accordion, AccordionSection, Badge } from "attractions";

    let colorP;
    let colorS;

    primaryColor.subscribe((color) => {
        colorP = color;
    });

    secondaryColor.subscribe((color) => {
        colorS = color;
    });

    let open = false;

    let selectedTab = "Main dishes";
</script>

<div class="container-ui-comparison">
    <p>
        Very bad svelte kit support, <br />so no Integration of attractions
    </p>
    <div class="sub-container-button">
        <Button round neutral  outline style={"background-color:" + colorP + "; color:" + colorS}
            >Click me</Button
        >
    </div>
    <div class="sub-container-button">
        <Badge>used on some text</Badge>
    </div>

    <Accordion let:closeOtherPanels>
        {#each [0, 1, 2, 3, 4] as idx}
          <AccordionSection on:panel-open={closeOtherPanels}>
            <div slot="handle" let:toggle>
              <Button on:click={toggle}>
                open panel {idx}
              
              </Button>
            </div>
            Content of panel {idx}
          </AccordionSection>
        {/each}
      </Accordion>
</div>

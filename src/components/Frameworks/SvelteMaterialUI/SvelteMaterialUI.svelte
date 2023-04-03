<script>
    // @ts-nocheck

    import FormField from "@smui/form-field";
    import Button from "@smui/button";
    import Switch from "@smui/switch";
    import Radio from "@smui/radio";
    import Checkbox from "@smui/checkbox";
    import Chip, { Set, Text } from "@smui/chips";
    import SegmentedButton, { Segment } from "@smui/segmented-button";
    import { Label } from "@smui/common";
    import Dialog, { Title, Content, Actions } from "@smui/dialog";
    import Accordion, {
        Panel,
        Header,
        Content as ContentAcc,
    } from "@smui-extra/accordion";
    import List, { Item, Separator, Text as TextList } from "@smui/list";
    import Textfield from "@smui/textfield";
    import HelperText from "@smui/textfield/helper-text";

    import { primaryColor, secondaryColor } from "../../../store/stores";

    let colorP;
    let colorS;

    primaryColor.subscribe((color) => {
        colorP = color;
    });

    secondaryColor.subscribe((color) => {
        colorS = color;
    });

    // Helper variables for Components
    let checked1 = false;
    let onoff = "On";
    let choices = ["Morning", "Afternoon", "Evening", "Night"];
    let selected = "Morning";
    let segment = ["One", "Two", "Three"];
    let segmentSel = "One";
    let open = false;
    let valueA = "";
</script>

<!-- Needed for styles -->
<link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/svelte-material-ui@6.0.0/bare.min.css"
/>

<div class="container-ui-comparison">
    <div class="sub-container-button">
        <Button
            class="elements"
            variant="raised"
            style={"background-color:" + colorP + "; color:" + colorS}
            >Click me</Button
        >
    </div>
    <div class="sub-container-button">
        <Switch bind:checked={checked1} />
    </div>
    <div class="sub-container-button">
        <div class="radio-demo">
            {#each ["On", "Off"] as option}
                <FormField>
                    <Radio bind:group={onoff} value={option} touch />
                    <span slot="label">{option}</span>
                </FormField>
            {/each}
        </div>
    </div>
    <div class="sub-container-button">
        <FormField>
            <Checkbox />
            <span slot="label">Check me</span>
        </FormField>
    </div>
    <div class="sub-container-button">
        <Set chips={choices} let:chip choice bind:selected>
            <Chip {chip}>
                <Text>{chip}</Text>
            </Chip>
        </Set>
    </div>
    <div class="sub-container-button">
        <SegmentedButton
            segments={segment}
            let:segment
            singleSelect
            bind:segmentSel
        >
            <!-- Note: the `segment` property is required! -->
            <Segment {segment}>
                <Label>{segment}</Label>
            </Segment>
        </SegmentedButton>
    </div>
    <div class="sub-container-button">
        <Dialog
            bind:open
            aria-labelledby="simple-title"
            aria-describedby="simple-content"
        >
            <!-- Title cannot contain leading whitespace due to mdc-typography-baseline-top() -->
            <Title id="simple-title">Dialog Title</Title>
            <Content id="simple-content"
                >Hello from Svelte Material UI Dialog</Content
            >
            <Actions>
                <Button on:click={() => (clicked = "No")}>
                    <Label>No</Label>
                </Button>
                <Button on:click={() => (clicked = "Yes")}>
                    <Label>Yes</Label>
                </Button>
            </Actions>
        </Dialog>

        <Button on:click={() => (open = true)}>
            <Label>Open Dialog</Label>
        </Button>
    </div>
    <div
        class="sub-container-button"
        style="height: 100%; margin-top: 1em; margin-bottom: 1em"
    >
        <Accordion style="width: 100%">
            <Panel>
                <Header>Panel 1</Header>
                <ContentAcc>
                    The content for panel 1.

                    <ul>
                        <li>Some</li>
                        <li>List</li>
                        <li>Items</li>
                    </ul>
                </ContentAcc>
            </Panel>
            <Panel>
                <Header>Panel 2</Header>
                <ContentAcc>The content for panel 2.</ContentAcc>
            </Panel>
            <Panel>
                <Header>Panel 3</Header>
                <ContentAcc>
                    The content for panel 3.

                    <ul>
                        <li>Some</li>
                        <li>More</li>
                        <li>List</li>
                        <li>Items</li>
                        <li>To</li>
                        <li>Show</li>
                        <li>Big</li>
                        <li>Height</li>
                    </ul>
                </ContentAcc>
            </Panel>
            <Panel>
                <Header>Panel 4</Header>
                <ContentAcc>Content for Panel 4</ContentAcc>
            </Panel>
        </Accordion>
    </div>
    <div
        class="sub-container-button"
        style="height: 100%; margin-top: 1em; margin-bottom: 1em"
    >
        <List style="width: 100%">
            <Item on:SMUI:action={() => (clicked = "Cut")}
                ><TextList>Cut</TextList></Item
            >
            <Item on:SMUI:action={() => (clicked = "Copy")}
                ><TextList>Copy</TextList></Item
            >
            <Item on:SMUI:action={() => (clicked = "Paste")}
                ><TextList>Paste</TextList></Item
            >
            <Separator />
            <Item on:SMUI:action={() => (clicked = "Delete")}
                ><TextList>Delete</TextList></Item
            >
        </List>
    </div>
    <div class="sub-container-button">
        <Textfield variant="outlined" bind:value={valueA} label="Label" />
    </div>
</div>

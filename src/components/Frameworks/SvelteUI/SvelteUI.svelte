<script>
    // @ts-nocheck

    import {
        Button,
        Switch,
        RadioGroup,
        Checkbox,
        ChipGroup,
        Modal,
        Group,
        Input,
        Text,
        Timeline,
        Center,
        Image
    } from "@svelteuidev/core";

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
    let value = "On";
    let chipVal;
    let opened = false;
</script>

<div class="container-ui-comparison">
    <div class="sub-container-button">
        <Button style={"background-color:" + colorP + "; color:" + colorS}
            >Click me</Button
        >
    </div>
    <div class="sub-container-button">
        <Switch checked />
    </div>
    <div class="sub-container-button">
        <RadioGroup
            items={[
                { label: "On", value: "On" },
                { label: "Off", value: "Off" },
            ]}
            bind:value
        />
    </div>
    <div class="sub-container-button">
        <Checkbox label="Check me" />
    </div>
    <div class="sub-container-button">
        <ChipGroup
            bind:chipVal
            items={[
                { label: "Morning", value: "one" },
                { label: "Afternoon", value: "two" },
                { label: "Evening", value: "three" },
            ]}
        />
    </div>
    <div class="sub-container-button" />
    <div class="sub-container-button">
        <Modal
            {opened}
            on:close={() => (opened = false)}
            title="Introduce yourself!"
            target={"body"}
        >
            Hello from Svelte UI Modal
        </Modal>

        <Group position="center">
            <Button on:click={() => (opened = true)} variant="outline"
                >Open Modal</Button
            >
        </Group>
    </div>
    <div class="sub-container-button">
        <Input placeholder="Your email" />
    </div>
    <div class="sub-container-button" style="width: 100%; height: 100%; margin-top: 1em; margin-bottom: 1em">
        <Timeline active={1} bulletSize={24} lineWidth={2}>
            <Timeline.Item title='Bullet One'>
                <Text color='dimmed' size='sm'>
                    Number One
                </Text>
            </Timeline.Item>
            <Timeline.Item  title='Bullet Two'>
                <Text color='dimmed' size='sm'>
                    Number Two
                </Text>
            </Timeline.Item>
            <Timeline.Item title='Bullet Three'>
                <Text color='dimmed' size='sm'>
                    Number Three
                </Text>
            </Timeline.Item>
            <Timeline.Item title='Bullet Four'>
                <Text color='dimmed' size='sm'>
                    Number Four
                </Text>
            </Timeline.Item>
        </Timeline>
    </div>
</div>

<script>
    // @ts-nocheck
    import { primaryColor, secondaryColor } from "../../../store/stores";
    import { Button, Accordion, AccordionSection, Badge, Switch, Checkbox, CheckboxGroup, RadioChip, Tabs, Dialog, Modal, TextField, Table } from "attractions";

    let colorP;
    let colorS;

    primaryColor.subscribe((color) => {
        colorP = color;
    });

    secondaryColor.subscribe((color) => {
        colorS = color;
    });

    let open = false;

    let selectedTab = "Tab 2";

    const colors = [
    { value: '#ffffff' },
    { value: '#000000' },
    ];

    let modalOpen = false;
    let cardNumber = '';

    const headers = [
    { text: '#', value: '#' },
    { text: 'Elements', value: 'Elements' },
  ];
  const items = [
    { "#": '0', Elements: 'List Element 0', },
    { "#": '1', Elements: 'List Element 1'},
    { "#": '2', Elements: 'List Element 2'},
  ];
</script>

<div class="container-ui-comparison">
    <div class="sub-container-button">
        <Button filled  style={"background-color:" + colorP + "; color:" + colorS}>Click me</Button>
    </div>
    <div class="sub-container-button">
      <Switch />
    </div>
    <div class="sub-container-button">
      <div style="display: flex">
        <CheckboxGroup
          class="flex"
          color
          round
          items={colors}
          name="colors[]"
          max={1}
        />
      </div>
    </div>
    <div class="sub-container-button">
      <div style="display:flex">
        <Checkbox
          name="subscribe"
          value="newsletter"
          title="Check me"
        >
       </Checkbox>
        Check me
      </div>
    </div>

    <div class="sub-container-button">
      <RadioChip value="Morning" name="selection" outline>Morning</RadioChip>
      <RadioChip value="Afternoon" name="selection" outline>Afternoon</RadioChip>
      <RadioChip value="Evening" name="selection" outline>Evening</RadioChip>
    </div>

    <div class="sub-container-button">
      <Tabs
        name="menu"
        items={['Tab 1', 'Tab 2', 'Tab 3']}
        bind:value={selectedTab}
      />
    </div>

    <div class="sub-container-button">
      <Button on:click={() => modalOpen = true}>click me</Button>
      <Modal bind:open={modalOpen} let:closeCallback>
        <Dialog title="Attractions Modal" {closeCallback}>
          <div>
            <br/>
            <p>Hello from Attractions Modal</p>
          </div>
        </Dialog>
      </Modal>
    </div>

    <div class="sub-container-button"   style="width: 100%; height: 100%; margin-top: 1em; margin-bottom: 1em">
      <TextField
        placeholder="Your Email"
        bind:value={cardNumber}
        error={cardNumber.startsWith('2') && 'We do not serve your bank.'}
      />
    </div>

    <Accordion let:closeOtherPanels>
        {#each [0, 1, 2, 3] as idx}
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

<div class="sub-container-button"   style="width: 100%; height: 100%; margin-top: 1em; margin-bottom: 1em">
  <Table {headers} {items} />
</div>

<style>
  .flex{
    display: "flex";
    margin: 1em;
    padding: 1em;
    
  }
  </style>
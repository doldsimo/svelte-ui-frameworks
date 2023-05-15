<script lang="ts">
    import {
      Switch,
      SwitchGroup,
      SwitchLabel,
      Tab,
      TabGroup,
      TabList,
      TabPanel,
      TabPanels,
    } from "@rgossiaux/svelte-headlessui";
  
    function classNames(...classes: (string | false | null | undefined)[]) {
      return classes.filter(Boolean).join(" ");
    }
  
    let tabs = [
      { name: "One", content: "Tab content one" },
      { name: "Two", content: "Tab content two", disabled: false },
      { name: "Three", content: "Tab content three" },
    ];
  
    let manual = false;
  </script>
  
  <div
    class="flex flex-col items-start w-screen h-full p-12 space-y-12"
  >  
    <TabGroup class="flex flex-col max-w-3xl w-full" as="div" {manual}>
      <TabList
        class="relative z-0 rounded-lg shadow flex divide-x divide-gray-200"
      >
        {#each tabs as tab, tabIdx (tab.name)}
          <Tab
            key={tab.name}
            disabled={tab.disabled}
            class={({ selected }) =>
              classNames(
                selected ? "text-gray-900" : "text-gray-500 hover:text-gray-700",
                tabIdx === 0 ? "rounded-l-lg" : "",
                tabIdx === tabs.length - 1 ? "rounded-r-lg" : "",
                tab.disabled && "opacity-50",
                "group relative min-w-0 flex-1 overflow-hidden bg-white py-4 px-4 text-sm font-medium text-center hover:bg-gray-50 focus:z-10"
              )}
            let:selected
          >
            <span>{tab.name}</span>
            {#if tab.disabled}
              <small class="inline-block px-4 text-xs">(disabled)</small>
            {/if}
            <span
              aria-hidden="true"
              class={classNames(
                selected ? "bg-indigo-500" : "bg-transparent",
                "absolute inset-x-0 bottom-0 h-0.5"
              )}
            />
          </Tab>
        {/each}
      </TabList>
  
      <TabPanels class="mt-4">
        {#each tabs as tab (tab.name)}
          <TabPanel class="bg-white rounded-lg p-4 shadow" key={tab.name}>
            {tab.content}
          </TabPanel>
        {/each}
      </TabPanels>
    </TabGroup>
  </div>
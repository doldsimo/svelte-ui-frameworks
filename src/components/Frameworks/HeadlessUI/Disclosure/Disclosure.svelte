<script>
    import {
      Disclosure,
      DisclosureButton,
      DisclosurePanel,
      Transition,
    } from "@rgossiaux/svelte-headlessui";
  </script>
  
  <div class="flex justify-center w-screen h-full p-12">
    <div class="w-full max-w-xs mx-auto">
      <Disclosure>
        <DisclosureButton class="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">Click</DisclosureButton>
  
        <Transition
          enter="transition duration-1000 ease-out"
          enterFrom="transform scale-95 opacity-0"
          enterTo="transform scale-100 opacity-100"
          leave="transition duration-1000 ease-out"
          leaveFrom="transform scale-100 opacity-100"
          leaveTo="transform scale-95 opacity-0"
        >
          <DisclosurePanel class="px-4 pt-4 pb-2 text-sm text-gray-500">Content</DisclosurePanel>
        </Transition>
      </Disclosure>
    </div>
  </div>
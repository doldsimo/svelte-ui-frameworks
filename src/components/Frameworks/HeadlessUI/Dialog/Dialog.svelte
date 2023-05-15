<script lang="ts">
	import {
	  Dialog,
	  DialogOverlay,
	  DialogTitle,
	  Menu,
	  MenuButton,
	  MenuItem,
	  MenuItems,
	  Transition,
	  TransitionChild,
	} from "@rgossiaux/svelte-headlessui";
	import { createPopperActions } from "svelte-popperjs";
  
	const [popperRef, popperContent] = createPopperActions();
	const popperOptions = {
	  placement: "bottom-end",
	  strategy: "fixed",
	  modifiers: [{ name: "offset", options: { offset: [0, 10] } }],
	};
  
	function classNames(...classes: (string | false | null | undefined)[]) {
	  return classes.filter(Boolean).join(" ");
	}
  
	function resolveClass({
	  active,
	  disabled,
	}: {
	  active: boolean;
	  disabled: boolean;
	}) {
	  return classNames(
		"flex justify-between w-full px-4 py-2 text-sm leading-5 text-left",
		active ? "bg-gray-100 text-gray-900" : "text-gray-700",
		disabled && "cursor-not-allowed opacity-50"
	  );
	}
  
	let isOpen = false;
	let nested = false;
  </script>
  
  <button
	type="button"
	on:click={() => (isOpen = !isOpen)}
	class="m-12 px-4 py-2 text-base font-medium leading-6 text-gray-700 transition duration-150 ease-in-out bg-white border border-gray-300 rounded-md shadow-sm hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue sm:text-sm sm:leading-5"
  >
	Open Modal
  </button>
  {#if nested}
	<Nested on:close={() => (nested = false)} />
  {/if}
  <Transition show={isOpen} afterLeave={() => console.log("done")}>
	<Dialog on:close={() => (isOpen = false)}>
	  <div class="fixed z-10 inset-0 overflow-y-auto">
		<div
		  class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"
		>
		  <TransitionChild
			enter="ease-out duration-300"
			enterFrom="opacity-0"
			enterTo="opacity-75"
			leave="ease-in duration-200"
			leaveFrom="opacity-75"
			leaveTo="opacity-0"
			entered="opacity-75"
		  >
			<DialogOverlay class="fixed inset-0 bg-gray-500 transition-opacity" />
		  </TransitionChild>
  
		  <TransitionChild
			enter="ease-out transform duration-300"
			enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
			enterTo="opacity-100 translate-y-0 sm:scale-100"
			leave="ease-in transform duration-200"
			leaveFrom="opacity-100 translate-y-0 sm:scale-100"
			leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
		  >
			<!-- This element is to trick the browser into centering the modal contents. -->
			<span
			  class="hidden sm:inline-block sm:align-middle sm:h-screen"
			  aria-hidden="true"
			>
			  &#8203;
			</span>
			<div
			  class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
			>
			  <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
				<div class="sm:flex sm:items-start">
				  <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
					<DialogTitle
					  as="h3"
					  class="text-lg leading-6 font-medium text-gray-900"
					>
					  Headless UI 
					</DialogTitle>
					<div class="mt-2">
					  <p class="text-sm text-gray-500">
						Hello From Headless UI Dialog
					  </p>
					  <div class="relative inline-block text-left mt-10">
					
					  </div>
					</div>
				  </div>
				</div>
			  </div>
			  <div
				class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse"
			  >
				<button
				  type="button"
				  on:click={() => (isOpen = false)}
				  class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:text-gray-500 sm:mt-0 sm:w-auto sm:text-sm"
				>
				  Cancel
				</button>
			  </div>
			</div>
		  </TransitionChild>
		</div>
	  </div>
	</Dialog>
  </Transition>
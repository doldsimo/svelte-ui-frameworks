<script>
    import { Button } from '@rgossiaux/svelte-headlessui';
  
    export let buttonText = 'Click me';
  
    function handleClick() {
      alert('Button clicked!');
    }
  </script>
  
  <Button on:click={handleClick}>{buttonText}</Button>
  
  <style>
    :global(.headlessui-btn) {
      background-color: #4caf50;
      color: #fff;
      padding: 10px 20px;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }
  </style>
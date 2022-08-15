<script>
  let clicked = false;

  const handle_click = () => {
    if (clicked) return;

    clicked = true;
    setTimeout(() => {
      clicked = false;
    }, 1000);
  };
</script>

<div class="wrapper">
  <button on:click={handle_click}>Click me</button>

  {#if clicked}
    <div class="animation">
      Yay<span class="accent">!</span>
    </div>
  {/if}
</div>

<style>
  .wrapper {
    display: flex;
    justify-content: center;
    margin: 4rem 0rem;
  }

  button {
    padding: 0.75rem 1.5rem;
    border-radius: 0.5rem;
    background-color: var(--golden);
    font-weight: 700;
    font-size: 1.25rem;
    transition: opacity 200ms ease;
  }

  button:hover {
    opacity: 0.5;
  }

  @keyframes fly {
    from {
      transform: translateX(100vw);
    }

    to {
      transform: translateX(-100vw);
    }
  }

  .animation {
    font-size: 50vw;
    font-weight: 900;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    animation-name: fly;
    animation-duration: 1s;
    animation-timing-function: cubic-bezier(0.165, 0.84, 0.44, 1);
    transform: translateX(-100vw);
  }

  .accent {
    color: var(--golden);
  }
</style>

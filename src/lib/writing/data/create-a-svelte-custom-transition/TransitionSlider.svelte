<script lang="ts">
  let value = 0;

  $: time = value / 100;
</script>

<div class="wrapper">
  <div class="img-wrapper">
    <img
      style="opacity: {time};"
      src="https://media.giphy.com/media/gjgWQA5QBuBmUZahOP/giphy-downsized.gif"
      alt="Awkward Dance"
      loading="lazy"
    />
  </div>

  <input
    type="range"
    name="transition_slider"
    id="transition_slider"
    min="0"
    max="100"
    aria-label="Transition Slider"
    bind:value
  />

  <output for="transition_slider">
    {time}
  </output>
</div>

<style>
  .wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    max-width: 24rem;
    margin: 4rem auto;
  }

  .img-wrapper {
    position: relative;
    width: 10rem;
    height: 10rem;
    border: 1px solid var(--white-smoke-25);
    border-radius: 0.75rem;
  }

  img {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }

  output {
    font-size: 1.5rem;
    font-weight: 700;
  }

  input {
    width: 100%;
    background: transparent;
    -webkit-appearance: none;
  }

  input::-webkit-slider-thumb {
    -webkit-appearance: none;
  }

  input:focus {
    outline: none;
  }

  input::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 9999px;
    background: var(--golden);
    cursor: pointer;
    margin-top: -0.5rem;
  }

  input::-moz-range-thumb {
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 9999px;
    background: var(--golden);
    cursor: pointer;
  }

  /****** Slider Track CSS ******/
  input::-webkit-slider-runnable-track {
    width: 100%;
    height: 0.5rem;
    cursor: pointer;
    background: var(--white);
    transition: background-color 0.25s ease;
    border-radius: 0.25rem;
  }

  input::-moz-range-track {
    width: 100%;
    height: 0.5rem;
    cursor: pointer;
    background: var(--white);
    transition: background-color 0.25s ease;
    border-radius: 0.25rem;
  }

  input:focus::-webkit-slider-runnable-track {
    background: var(--white-smoke-25);
  }

  input:focus::-moz-range-track {
    background: var(--white-smoke-25);
  }
</style>

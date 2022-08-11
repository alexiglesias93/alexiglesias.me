import { cubicOut } from 'svelte/easing';
import type { EasingFunction, TransitionConfig } from 'svelte/transition';

/**
 * Fades and slides an element.
 * @param node
 * @param config
 */
export const falide = (
  node: Element,
  {
    delay = 0,
    duration = 400,
    easing = cubicOut
  }: { delay?: number; duration?: number; easing?: EasingFunction } = {}
): TransitionConfig => {
  const style = getComputedStyle(node);
  const opacity = +style.opacity;
  const height = parseFloat(style.height);
  const padding_top = parseFloat(style.paddingTop);
  const padding_bottom = parseFloat(style.paddingBottom);
  const margin_top = parseFloat(style.marginTop);
  const margin_bottom = parseFloat(style.marginBottom);
  const border_top_width = parseFloat(style.borderTopWidth);
  const border_bottom_width = parseFloat(style.borderBottomWidth);
  return {
    delay,
    duration,
    easing,
    css: (t) => {
      const first_half_t = Math.min(t * 2, 1);
      const second_half_t = Math.max((t - 0.5) * 2, 0);

      return (
        'overflow: hidden;' +
        `height: ${first_half_t * height}px;` +
        `padding-top: ${first_half_t * padding_top}px;` +
        `padding-bottom: ${first_half_t * padding_bottom}px;` +
        `margin-top: ${first_half_t * margin_top}px;` +
        `margin-bottom: ${first_half_t * margin_bottom}px;` +
        `border-top-width: ${first_half_t * border_top_width}px;` +
        `border-bottom-width: ${first_half_t * border_bottom_width}px;` +
        `opacity: ${second_half_t * opacity}`
      );
    }
  };
};

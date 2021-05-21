/**
 * @returns The distance of the from the top of the screen
 * @param element
 */
export function getElementOffset(element: Element): DOMRect;
export function getElementOffset<T extends keyof ReturnType<Element['getBoundingClientRect']>>(
  element: Element,
  property: T
): DOMRect[T];
export function getElementOffset<T extends keyof ReturnType<Element['getBoundingClientRect']>>(
  element: Element,
  property?: T
): DOMRect[T] | DOMRect {
  if (property) return element.getBoundingClientRect()[property];

  return element.getBoundingClientRect();
}

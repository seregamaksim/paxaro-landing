export function getCenterTopPosition(
  toElement: HTMLElement,
  targetElement: HTMLElement
) {
  const targetElemPosition = {
    left: targetElement.getBoundingClientRect().left,
    top: targetElement.getBoundingClientRect().top,
  };
  const toElemPosition = {
    left: toElement.getBoundingClientRect().left,
    top: toElement.getBoundingClientRect().top,
  };
  return {
    x: toElemPosition.left - targetElemPosition.left,
    y: toElemPosition.top - targetElemPosition.top,
  };
}

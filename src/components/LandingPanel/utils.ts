export const getDistance = (deltaX: number, deltaY: number) =>
  Math.sqrt(Math.pow(deltaX, 2) + Math.pow(deltaY, 2));

export const getRelativeDistance = (
  event,
  referenceElement,
  maxDistance = 99999
) => {
  const position = {
    x: event.pageX,
    y: event.pageY,
  };

  const offset = {
    left: referenceElement.offsetLeft,
    top: referenceElement.offsetTop,
    width: referenceElement.clientWidth,
    height: referenceElement.clientHeight,
  };

  let reference = referenceElement.offsetParent;

  while (reference) {
    offset.left += reference.offsetLeft;
    offset.top += reference.offsetTop;
    reference = reference.offsetParent;
  }

  const centerX =
    (position.x - offset.left - offset.width / 2) / (offset.width / 2);
  const centerY =
    (position.y - offset.top - offset.height / 2) / (offset.height / 2);

  const distance = getDistance(centerX, centerY);
  return distance > maxDistance ? maxDistance : distance;
};

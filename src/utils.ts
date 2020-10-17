export function offsetParent(node: HTMLElement) {
  if (typeof node.offsetLeft !== "undefined" && typeof node.offsetTop !== "undefined") {
    return {
      left: node.offsetLeft,
      top: node.offsetTop,
      width: node.offsetParent.getBoundingClientRect().width,
      height: node.offsetParent.getBoundingClientRect().height
    };
  }

  const rect = node.getBoundingClientRect();

  let parent = node;
  while (parent = parent.parentNode as HTMLElement) {
    if (!["absolute", "relative"].includes(getComputedStyle(parent).position)) continue;

    const prect = parent.getBoundingClientRect();

    return { left: rect.left - prect.left, top: rect.top - prect.top, width: prect.width, height: prect.height };
  }

  return { left: rect.left, top: rect.top, width: innerWidth, height: innerHeight };
}

export function extractRefs<T>(o: {[key: string]: React.MutableRefObject<T>;}): {[key: string]: T} {
  const ret = {};
  for (let key in o) {
    ret[key] = o[key].current;
  }
  return ret;
}

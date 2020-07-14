const render = (element: HTMLElement|null, node: HTMLElement) => {
    if (!element) {
        return;
    }
    element.appendChild(node);
}
export default render;
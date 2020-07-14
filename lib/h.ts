const h = (tagName: string, attributes?: { [key: string]: any }, child?: HTMLElement) => {
    const element = document.createElement(tagName);
    if (attributes) {
        Object.keys(attributes).forEach((key: string) => {
            let value = attributes[key];
            // 这是一个动态变量
            if (value.target && typeof value.target === 'object' && value.key) {
                const target = value.target;
                const targetKey = value.key;
                let targetVal = target[targetKey];
                Object.defineProperty(target, targetKey, {
                    get() {
                        console.log('get: ', targetVal);
                        return targetVal;
                    },
                    set(value) {
                        console.log('set: ', arguments);
                        targetVal = value;
                        element.setAttribute(key, value);
                    }
                });
                value = value.target[value.key];
            }
            element.setAttribute(key, value);
        });
    }
    if (child) {
        element.appendChild(child);
    }
    return element;
}

export default h;
const createState = <T>(state:T):T => {
    const handler = {
        get(target:any, key:string) {
            const value = target[key];
            const valType = typeof value;
            return {target, key};
        }
    };
    return new Proxy(state as any, handler);
}

export default createState;
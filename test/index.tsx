import lc from '../lib/index';

const state = lc.createState({
    inputVal: 'test',
    list: ['one', 'two', 'three'],
});
const listComponent = state.list.map(each => <li>{each}</li>)
const RootComponent = <div>
    <input value={state.inputVal} placeholder="placeholder" />
    <ul>{listComponent}</ul>
</div>;

lc.render(document.getElementById('app'), RootComponent);

setTimeout(() => {
    state.inputVal = 'test2';
}, 1000);
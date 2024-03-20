export function orderByProps(obj, order) {
    const sortedProps = [];
    const otherProps = [];

    for (const prop in obj) {
        if (order.includes(prop)) {
            sortedProps.push({ key: prop, value: obj[prop] });
        } else {
            otherProps.push({ key: prop, value: obj[prop] });
        }
    }

    sortedProps.sort((a, b) => order.indexOf(a.key) - order.indexOf(b.key));
    otherProps.sort((a, b) => a.key.localeCompare(b.key));

    return sortedProps.concat(otherProps);
}


const obj = { name: 'мечник', health: 10, level: 2, attack: 80, defence: 40 };
const ordered = orderByProps(obj, ["name", "level"]);
console.log(ordered);

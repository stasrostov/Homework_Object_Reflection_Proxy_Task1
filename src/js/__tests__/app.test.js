import { orderByProps } from '../app.js';

test('orderByProps function test', () => {
    const obj = { name: 'мечник', health: 10, level: 2, attack: 80, defence: 40 };
    const ordered = orderByProps(obj, ["name", "level"]);

    expect(ordered).toHaveLength(5);
    expect(ordered[0]).toEqual({ key: 'name', value: 'мечник' });
    expect(ordered[1]).toEqual({ key: 'level', value: 2 });
    expect(ordered[2]).toEqual({ key: 'attack', value: 80 });
    expect(ordered[3]).toEqual({ key: 'defence', value: 40 });
    expect(ordered[4]).toEqual({ key: 'health', value: 10 });

    console.log('All tests passed successfully');
});

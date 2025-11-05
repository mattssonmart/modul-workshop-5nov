export function convertHeight(value, from, to) {
    let meters = value;

    if (from === 'm') {
        meters = value;
    } else if (from === 'cm') {
        meters = value / 100;
    } else if (from === 'in') {
        meters = value * 0.0254;
    } else if (from === 'ft') {
        meters = value * 0.3048;
    } else {
        throw new Error('Could not convert');
    }

    if (to === 'm') {
        return meters;
    } else if (to === 'cm') {
        return meters * 100;
    } else if (to === 'in') {
        return meters / 0.0254;
    } else if (to === 'ft') {
        return meters / 0.3048
    } else {
        throw new Error('Could not convert');
    }
}
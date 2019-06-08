const order: any = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
order.first = '-9999';
order.last = '9999';
order.none = '0';

const zIndex: any = [0, 10, 20, 30, 40, 50];
zIndex.auto = 'auto';

export default {
    flex: {
        '1': '1 1 0%',
        auto: '1 1 auto',
        initial: '0 1 auto',
        none: 'none',
    },
    flexGrow: {
        '0': '0',
        default: '1',
    },
    flexShrink: {
        '0': '0',
        default: '1'
    },
    objectPosition: {
        bottom: 'bottom',
        center: 'center',
        left: 'left',
        'left-bottom': 'left bottom',
        'left-top': 'left top',
        right: 'right',
        'right-bottom': 'right bottom',
        'right-top': 'right top',
        top: 'top',
    },
    order,
    zIndex
}
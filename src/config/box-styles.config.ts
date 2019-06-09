const borderWidth: any = [0, '2px', '4px', '8px'];
borderWidth.default = '1px';

export default {
    backgroundPosition: {
        bottom: 'bottom',
        center: 'center',
        left: 'left',
        'left-bottom': 'left bottom',
        'left-top': 'left top',
        right: 'right',
        'right-bottom': 'right bottom',
        'right-top': 'right top',
        top: 'top'
    },
    backgroundSize: {
        auto: 'auto',
        cover: 'cover',
        contain: 'contain'
    },
    boxShadow: {
        default: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
        md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
        outline: '0 0 0 3px rgba(66, 153, 225, 0.5)',
        none: 'none'
    },
    cursor: {
        auto: 'auto',
        default: 'default',
        pointer: 'pointer',
        wait: 'wait',
        text: 'text',
        move: 'move',
        'not-allowed': 'not-allowed'
    },
    inset: {
        '0': '0',
        auto: 'auto'
    },
    listStyleType: {
        none: 'none',
        disc: 'disc',
        decimal: 'decimal'
    },
    opacity: [0, 0.25, 0.5, 0.75, 1],
    borderRadius: {
        none: '0',
        sm: '0.125rem',
        default: '0.25rem',
        lg: '0.5rem',
        full: '9999px'
    },
    borderWidth: borderWidth
}
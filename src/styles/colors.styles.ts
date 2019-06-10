// @ts-ignore
import { system } from 'styled-system';
import colorDefaults from '../config/colors.config';

const createSystem = (property: string) => system({
    property,
    scale: property,
    defaultScale: colorDefaults
});

const colorConfig = {
    color: {
        property: 'color',
        scale: 'colors',
        defaultScale: colorDefaults
    },
    backgroundColor: {
        property: 'backgroundColor',
        scale: 'colors',
        defaultScale: colorDefaults
    },
    bg: {},
    textColor: {},
    opacity: true
};

colorConfig.bg = colorConfig.backgroundColor;
colorConfig.textColor = colorConfig.color;

export const color = system(colorConfig);
export const stroke = createSystem('stroke');
export const fill = createSystem('fill');
export const borderColor = createSystem('borderColor');
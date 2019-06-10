// @ts-ignore
import { system } from 'styled-system';
import boxStylesConfig from '../config/box-styles.config';

type PropertyTypes = 'backgroundPosition' | 'backgroundSize' | 'boxShadow' | 'cursor' | 'inset' | 'listStyleType' | 'opacity' | 'borderRadius' | 'borderWidth';
const createSystem = (property: PropertyTypes) => system({
    property,
    scale: property,
    defaultScale: boxStylesConfig[property]
});

export const backgroundPosition = createSystem('backgroundPosition');
export const backgroundSize = createSystem('backgroundSize');
export const boxShadow = createSystem('boxShadow');
export const cursor = createSystem('cursor');
export const inset = createSystem('inset');
export const listStyleType = createSystem('listStyleType');
export const opacity = createSystem('opacity');
export const borderRadius = createSystem('borderRadius');
export const borderWidth = createSystem('borderWidth');


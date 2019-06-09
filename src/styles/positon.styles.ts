// @ts-ignore
import { system } from 'styled-system';
import positionConfig from '../config/position.config';

type PropertyTypes = 'flex' | 'flexGrow' | 'flexShrink' | 'objectPosition' | 'order' | 'zIndex';
const createSystem = (property: PropertyTypes) => system({
    property,
    scale: property,
    defaultScale: positionConfig[property]
});

export const flex = createSystem('flex');
export const flexGrow = createSystem('flexGrow');
export const flexShrink = createSystem('flexShrink');
export const objectPosition = createSystem('objectPosition');
export const order = createSystem('order');
export const zIndex = createSystem('zIndex');
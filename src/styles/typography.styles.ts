// @ts-ignore
import { system } from 'styled-system';
import typographyConfig from '../config/typography.config';

type PropertyTypes = 'fontFamily' | 'fontSize' | 'fontWeight' | 'letterSpacing' | 'lineHeight';
const createSystem = (property: PropertyTypes) => system({
    property,
    scale: property,
    defaultScale: typographyConfig[property]
});

export const fontFamily = createSystem('fontFamily');
export const fontSize = createSystem('fontSize');
export const fontWeight = createSystem('fontWeight');
export const letterSpacing = createSystem('letterSpacing');
export const lineHeight = createSystem('lineHeight');
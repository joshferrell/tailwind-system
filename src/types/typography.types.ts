import { ResponsiveValue } from 'styled-system';
import CSS from 'csstype';

type FontFamilyTypes = 'sans' | 'serif' | 'mono';
export interface FontFamilyProps<TLength = FontFamilyTypes> {
    fontFamily?: ResponsiveValue<CSS.FontFamilyProperty | TLength>;
}

type FontSizeTypes = 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl';
export interface FontSizeProps<TLength = FontSizeTypes> {
    fontSize?: ResponsiveValue<CSS.FontSizeProperty<TLength>>;
}

type FontWeightTypes = 'hairline' | 'thin' | 'light' | 'normal' | 'medium' | 'semibold' | 'bold' | 'extrabold' | 'black';
export interface FontWeightProps<TLength = FontWeightTypes> {
    fontWeight?: ResponsiveValue<CSS.FontSizeProperty<TLength>>;
}

type LetterSpacingTypes = 'tighter' | 'tight' | 'normal' | 'wide' | 'wider' | 'widest';
export interface LetterSpacingProps<TLength = LetterSpacingTypes> {
    letterSpacing?: ResponsiveValue<CSS.LetterSpacingProperty<TLength>>;
}

type LineHeightTypes = 'none' | 'tight' | 'snug' | 'normal' | 'relaxed' | 'loose';
export interface LineHeightProps<TLength = LineHeightTypes> {
    lineHeight?: ResponsiveValue<CSS.LineHeightProperty<TLength>>;
}
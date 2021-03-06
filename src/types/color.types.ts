import { ResponsiveValue } from 'styled-system';
import CSS from 'csstype';

export type ColorTypes = 'transparent' | 
    'positive' | 
    'negative' | 
    'primary.l6' | 
    'primary.l5' | 
    'primary.l4' | 
    'primary.l3' | 
    'primary.l2' | 
    'primary.l1' | 
    'primary.primary' | 
    'primary.dark1' | 
    'primary.dark2' |
    'secondary.l6' | 
    'secondary.l5' | 
    'secondary.l4' | 
    'secondary.l3' | 
    'secondary.l2' | 
    'secondary.l1' | 
    'secondary.primary' | 
    'secondary.dark1' | 
    'secondary.dark2' |
    'tertiary.l6' | 
    'tertiary.l5' | 
    'tertiary.l4' | 
    'tertiary.l3' | 
    'tertiary.l2' | 
    'tertiary.l1' | 
    'tertiary.primary' | 
    'tertiary.dark1' | 
    'tertiary.dark2' |
    'neutral.l6' | 
    'neutral.l5' | 
    'neutral.l4' | 
    'neutral.l3' | 
    'neutral.l2' | 
    'neutral.l1' | 
    'neutral.primary' | 
    'neutral.dark1' | 
    'neutral.dark2' |
    'danger.l6' | 
    'danger.l5' | 
    'danger.l4' | 
    'danger.l3' | 
    'danger.l2' | 
    'danger.l1' | 
    'danger.primary' | 
    'danger.dark1' | 
    'danger.dark2' |
    'warning.l6' | 
    'warning.l5' | 
    'warning.l4' | 
    'warning.l3' | 
    'warning.l2' | 
    'warning.l1' | 
    'warning.primary' | 
    'warning.dark1' | 
    'warning.dark2' |
    'success.l6' | 
    'success.l5' | 
    'success.l4' | 
    'success.l3' | 
    'success.l2' | 
    'success.l1' | 
    'success.primary' | 
    'success.dark1' | 
    'success.dark2' |
    'info.l6' | 
    'info.l5' | 
    'info.l4' | 
    'info.l3' | 
    'info.l2' | 
    'info.l1' | 
    'info.primary' | 
    'info.dark1' | 
    'info.dark2' |
    'highlight.l6' | 
    'highlight.l5' | 
    'highlight.l4' | 
    'highlight.l3' | 
    'highlight.l2' | 
    'highlight.l1' | 
    'highlight.primary' | 
    'highlight.dark1' | 
    'highlight.dark2';

export interface ColorProps<TLength = ColorTypes> {
    color?: ResponsiveValue<TLength>;
    textColor?: ResponsiveValue<TLength>;
    backgroundColor?: ResponsiveValue<CSS.BackgroundProperty<TLength>>;
    bg?: ResponsiveValue<CSS.BackgroundProperty<TLength>>;
}

export interface StrokeProps<TLength = ColorTypes> {
    stroke?: ResponsiveValue<TLength>;
}

export interface FillProps<TLength = ColorTypes> {
    fill?: ResponsiveValue<TLength>;
}
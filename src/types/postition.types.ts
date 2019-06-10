import { ResponsiveValue } from 'styled-system';
import CSS from 'csstype';

type OrderTypes = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 'first' | 'last' | 'none';
export interface OrderProps<TLength = OrderTypes> {
    order?: ResponsiveValue<CSS.PaintOrderProperty | TLength>;
}

type IndexTypes = 0 | 1 | 2 | 3 | 4 | 5 | 'auto';
export interface ZIndexProps<TLength = IndexTypes> {
    index?: ResponsiveValue<CSS.ZIndexProperty | TLength>;
}

type FlexTypes = 1 | '1' | 'auto' | 'initial' | 'none';
export interface FlexProps<TLength = FlexTypes> {
    flex?: ResponsiveValue<CSS.FlexProperty<TLength>>;
}

type GrowTypes = '0' | 0 | 'default';
export interface GrowProps<TLength = GrowTypes> {
    flexGrow?: ResponsiveValue<TLength>;
}

type ShrinkTypes = '0' | 0 | 'default';
export interface ShrinkProps<TLength = ShrinkTypes> {
    flexShrink?: ResponsiveValue<TLength>;
}

type ObjectPositionTypes = 'bottom' | 'center' | 'left' | 'left-bottom' | 'left-top' | 'right' | 'right-bottom' | 'right-top' | 'top';
export interface ObjectPositionProps<TLength = ObjectPositionTypes> {
    objectPosition?: ResponsiveValue<CSS.ObjectPositionProperty<TLength>>;
}
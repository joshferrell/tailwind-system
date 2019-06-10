import { ResponsiveValue } from 'styled-system';
import CSS from 'csstype';

type BackgroundPositionTypes = 'bottom' | 'center' | 'left' | 'left-bottom' | 'left-top' | 'right' | 'right-bottom' | 'right-top' | 'top';
export interface BackgroundPositionProps<TLength = BackgroundPositionTypes> {
    backgroundPosition?: ResponsiveValue<
        CSS.BackgroundPositionProperty<TLength>
    >;
}

type BackgroundSizeTypes = 'auto' | 'cover' | 'contain';
export interface BackgroundSizeProps<TLength = BackgroundSizeTypes> {
    backgroundSize?: ResponsiveValue<CSS.BackgroundSizeProperty<TLength>>;
}


type BoxShadowTypes = 'default' | 'md' | 'lg' | 'xl' | 'inner' | 'outline' | 'none';
export interface BoxShadowProps<TLength = BoxShadowTypes> {
    boxShadow?: ResponsiveValue<CSS.BoxShadowProperty | number | TLength>;
}

type CursorTypes = 'auto' | 'default' | 'pointer' | 'wait' | 'text' | 'move' | 'not-allowed';
export interface CurosrProps<TLength = CursorTypes> {
    cursor?: ResponsiveValue<CSS.CursorProperty | TLength>;
}

type InsetTypes = '0' | 0 | 'auto';
export interface InsetProps<TLength = InsetTypes> {
    inset?: ResponsiveValue<CSS.InsetProperty<TLength>>;
}

type ListStyleTypes = 'none' | 'disc' | 'decimal';
export interface ListStyleProps<TLength = ListStyleTypes> {
    lightStyleType?: ResponsiveValue<CSS.ListStyleTypeProperty | TLength>;
}

type OpacityTypes = 0 | 1 | 2 | 3 | 4;
export interface OpacityProps<TLength = OpacityTypes> {
    opacity?: ResponsiveValue<TLength>;
}

type BorderRadiusTypes = 'none' | 'sm' | 'default' | 'lg' | 'full';
export interface BorderRadiusProps<TLength = BorderRadiusTypes> {
    borderRadius?: ResponsiveValue<CSS.BorderRadiusProperty<TLength>>;
}

type BorderWidthTypes = 0 | 1 | 2 | 3 | 'default';
export interface BorderWidthProperty<TLength = BorderWidthTypes> {
    borderWidth?: ResponsiveValue<CSS.BorderWidthProperty<TLength>>;
}
export type ContainerProps = {
    flex?: number,
    background?: string,
    align?: string,
    justify?: string,
    spacing?: string | number,
    right?: string | number,
    left?: string | number,
    top?: string | number,
    bottom?: string | number,
    wrap?: string,
    row?: boolean,
    width?: string,
    maxWidth?: string,
    minWidth?: string,
    height?: string,
    maxHeight?: string,
    minHeight?: string,
    hasPadding?: boolean,
    customPadding?: string,
    removePaddingTop?: string | boolean,
    removePaddingBottom?: string | boolean,
    radius?: boolean,
    customRadius?: string,
    border?: number,
    borderColor?: string
}

export type ScrollViewProps = {
    spacing?: string | number,
    right?: string | number,
    left?: string | number,
    top?: string | number,
    bottom?: string | number,
    hasPadding?: boolean,
    customPadding?: string,
    removePaddingTop?: string,
    removePaddingBottom?: string,
    background?: string,
    verticalScrollIndicator?: boolean,
    horizontalScrollIndicator?: boolean
}

export type TouchableProps = {
    flex?: number,
    background?: string,
    align?: string,
    justify?: string,
    spacing?: string,
    wrap?: string,
    row?: boolean,
    width?: string,
    maxWidth?: string,
    height?: string,
    maxHeight?: string,
    hasPadding?: boolean,
    customPadding?: string,
    removePaddingTop?: string | boolean,
    removePaddingBottom?: string | boolean,
    radius?: boolean,
    customRadius?: string,
    border?: number,
    borderColor?: string
}

export type GradientProps = {
    flex?: number,
    align?: string,
    justify?: string,
    row?: boolean,
    hasPadding?: boolean,
    customPadding?: string,
    radius?: boolean | number,
    customRadius?: number,
    width?: string,
    height?: string,
    spacing?: string | number,
    right?: string | number,
    left?: string | number,
    top?: string | number,
    bottom?: string | number,
}

export type SpacerProps = {
    size?: number,
    vertical?: boolean
}

export type TextProps = {
    color?: string,
    small?: boolean,
    big?: boolean,
    size?: string,
    bold?: boolean,
    align?: string,
    scale?: string,
    hasPadding?: boolean,
    customPadding?: string,
    opacity?: number,
    decoration?: string,
    spacing?: string | number,
    right?: string | number,
    left?: string | number,
    top?: string | number,
    bottom?: string | number,
    family?: string,
    upper?: boolean
}

export type ButtonProps = {
    background?: string,
    block?: boolean,
    half?: boolean,
    textColor?: string,
}

export type TextInputProps = {
    error: boolean | string
}

export type HelperTextProps = {
    type?: string,
}

export type ActivityIndicatorProps = {
    color?: string,
    size?: string
}

export type SnackbarProps = {
    background?: string,
    time?: number,
    style?: string
}

export type OnboardingProps = {
    bottomBarHeight?: number,
    bottomBarColor?: string
}

export type ModalProps = {
    adjust?: boolean,
    background?: string,
    handleColor?: string
}

export type CoverProps = {
    mode?: string,
    width?: string | number,
    height?: string | number,
    justify?: string,
    align?: string,
    hasPadding?: boolean,
    spacing?: string,
    radius?: number | string,
    border?: number,
    customPadding?: string
}

export type DividerProps = {
    vertical?: boolean,
    size?: number,
    background?: string,
    margin?: string | number,
    right?: string | number,
    left?: string | number,
    top?: string | number,
    bottom?: string | number,
    spacing?: string | number
}

export type ImageProps = {
    mode?: string,
    width?: number,
    height?: number,
    radius?: number,
    spacing?: string,
    border?: number,
    borderColor?: string
}

export type LottieProps = {
    height?: number,
    opacity?: number
  }




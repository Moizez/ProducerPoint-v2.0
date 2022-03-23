import styled from 'styled-components/native';
import { colors } from './theme.json'
import { toAlpha } from '../utils/helpers';
import { LinearGradient } from 'expo-linear-gradient';
import OnboardingApp from 'react-native-onboarding-swiper';
import { Modalize } from 'react-native-modalize';
import LottieView from 'lottie-react-native'

import {
  ContainerProps, SpacerProps, TextProps, ButtonProps, SnackbarProps, TextInputProps,
  HelperTextProps, ScrollViewProps, ActivityIndicatorProps, OnboardingProps, ImageProps,
  ModalProps, CoverProps, TouchableProps, GradientProps, DividerProps, LottieProps
} from './TStyles'

import {
  Button as ButtonPaper,
  TextInput as TextInputPaper,
  HelperText as HelperTextPaper,
  Snackbar as SnackbarPaper,
  ActivityIndicator as ActivityIndicatorPaper,
  Searchbar as SearchbarPaper,
  DataTable as TablePaper,
  Menu as MenuPaper,
  ProgressBar as ProgressBarPaper,
  Checkbox as CheckboxPaper
} from 'react-native-paper';

export const Container = styled.View<ContainerProps>`
  flex: ${props => props.flex ? props.flex : props.flex == 0 ? 'none' : 1}
  flex-wrap: ${props => props.wrap || 'nowrap'};
  flex-direction: ${props => props.row ? 'row' : 'column'};
  justify-content: ${props => props.justify || 'flex-start'};
  align-items: ${props => props.align || 'flex-start'};

  width: ${props => props.width || '100%'};
  height: ${props => props.height || 'auto'};
  max-width: ${props => props.maxWidth || '100%'};
  max-height: ${props => props.maxHeight || 'auto'};

  padding: ${props => props.hasPadding ? '20px' : props.customPadding ? props.customPadding : '0'};
  margin: ${(props) => props.spacing || 0};
  margin-right:${props => props.right || 0}px;
  margin-left: ${props => props.left || 0}px;
  margin-top: ${props => props.top || 0}px;
  margin-bottom: ${props => props.bottom || 0}px;
  border-radius: ${props => props.radius ? '10px' : props.customRadius ? props.customRadius : '0'};
  border-width: ${props => `${props.border || 0}px`};
  border-color: ${props => `${props.theme[props?.borderColor] || props?.borderColor || '#000'}`};
  background: ${props => `${props.theme[props?.background] || props?.background || 'transparent'}`};
`;

export const ScrollView = styled.ScrollView.attrs<ScrollViewProps>(props => ({
  showsVerticalScrollIndicator: props.verticalScrollIndicator || false,
  showsHorizontalScrollIndicator: props.horizontalScrollIndicator || false
})) <ScrollViewProps>`
  width: 100%;
  margin: ${props => props.spacing || 0};
  margin-right:${props => props.right || 0}px;
  margin-left: ${props => props.left || 0}px;
  margin-top: ${props => props.top || 0}px;
  margin-bottom: ${props => props.bottom || 0}px;
  padding: ${props => props.hasPadding ? '20px' : props.customPadding ? props.customPadding : '0'};
  background: ${props => `${props.theme[props?.background] || props?.background || 'transparent'}`};
`;

export const ContainerKeyboardAvoiding = styled.KeyboardAvoidingView<ContainerProps>`
  flex: ${props => props.flex ? props.flex : props.flex === 0 ? 'none' : 1};
  flex-wrap: ${props => props.wrap || 'nowrap'};
  flex-direction: ${props => props.row ? 'row' : 'column'};
  justify-content: ${props => props.justify || 'flex-start'};
  align-items: ${props => props.align || 'flex-start'};

  width: ${props => props.width || '100%'};
  height: ${props => props.height || 'auto'};
  max-width: ${props => props.maxWidth || '100%'};
  max-height: ${props => props.maxHeight || 'auto'};

  padding: ${props => props.hasPadding ? '20px' : props.customPadding ? props.customPadding : '0'};
  margin: ${props => props.spacing || 0};
  border-radius: ${props => props.radius ? '10px' : props.customRadius ? props.customRadius : '0'};
  border-width: ${props => `${props.border || 0}px`};
  border-color: ${props => `${props.theme[props?.borderColor] || props?.borderColor || '#000'}`};
  background: ${props => `${props.theme[props?.background] || props?.background || 'transparent'}`};
`;

export const Touchable = styled.TouchableOpacity<TouchableProps>`
  flex: ${props => props.flex ? props.flex : 'none'};
  flex-wrap: ${props => props.wrap || 'nowrap'};
  flex-direction: ${props => props.row ? 'row' : 'column'};
  justify-content: ${props => props.justify || 'flex-start'};
  align-items: ${props => props.align || 'flex-start'};

  max-width: ${props => props.maxWidth || '100%'};
  height: ${props => props.height || 'auto'};
  width: ${props => props.width || 'auto'};
  max-height: ${props => props.maxHeight || 'auto'};

  padding: ${props => props.hasPadding ? '20px' : props.customPadding ? props.customPadding : '0'};
  margin: ${props => props.spacing || 0};
  border-radius: ${props => props.radius ? '10px' : props.customRadius ? props.customRadius : '0'};
  border: ${props => props.border || 'none'};

  background: ${props => `${props.theme[props?.background] || props?.background || 'transparent'}`};
`;

export const Cover = styled.ImageBackground.attrs<CoverProps>(props => ({
  resizeMode: props.mode || 'cover',
})) <CoverProps>`
  width: ${props => props.width || '100%'};
  height: ${props => props.height || '100px'};
  justify-content: ${props => props.justify || 'flex-start'};
  align-items: ${props => props.align || 'flex-start'};
  padding: ${props => props.hasPadding ? '20px' : props.customPadding ? props.customPadding : '0'};
  margin: ${props => props.spacing || 0};
  border-radius: ${props => props.radius || 0}px;
  border: ${props => props.border || 'none'};
  overflow: hidden;
`;

export const Image = styled.Image.attrs<ImageProps>(props => ({
  resizeMode: props.mode || 'contain',
})) <ImageProps>`
  width: ${props => props.width + 'px' || '100px'};
  height: ${props => props.height + 'px' || '100px'};
  border-radius: ${props => props.radius || 0}px;
  border-width: ${props => `${props.border || 0}px`};
  border-color: ${props => `${props.theme[props?.borderColor] || props?.borderColor || '#000'}`};
  margin: ${props => props.spacing || 0};
`;

export const Title = styled.Text <TextProps>`
  font-size: ${props => props.small ? '20px' : props.big ? '35px' : props.size ? props.size : '22px'};
  text-align: ${props => props.align || 'left'};
  /* letter-spacing: ${props => props.spacing ? props.spacing + 'px' : '0'}; */
  /* font-weight: ${props => props.bold ? 'bold' : 'normal'}; */
  color: ${props => `${props.theme[props?.color] || props.color || colors.dark}`};
  margin: ${props => props.spacing || 0};
  margin-right:${props => props.right || 0}px;
  margin-left: ${props => props.left || 0}px;
  margin-top: ${props => props.top || 0}px;
  margin-bottom: ${props => props.bottom || 0}px;
  padding: ${props => props.hasPadding ? '20px' : props.customPadding ? props.customPadding : '0'};
  opacity: ${props => props.opacity || 1};
  text-decoration: ${props => props.decoration || 'none'};
  text-transform: ${props => props.upper ? 'uppercase' : 'none'};
  font-family: ${props => props.bold ? 'Quantico_700Bold' : 'Quantico_400Regular'};
`;

export const Text = styled.Text <TextProps>`
  color: ${props => `${props.theme[props?.color] || props.color || colors.dark}`};
  font-size: ${props => props.small ? '13px' : props.big ? '17px' : props.size ? props.size : '15px'};
  margin: ${props => props.spacing || 0};
  margin-right:${props => props.right || 0}px;
  margin-left: ${props => props.left || 0}px;
  margin-top: ${props => props.top || 0}px;
  margin-bottom: ${props => props.bottom || 0}px;
  /* font-weight: ${props => props.bold ? 'bold' : 'normal'}; */
  padding: ${props => props.hasPadding ? '20px' : props.customPadding ? props.customPadding : '0'};
  opacity: ${props => props.opacity || 1};
  text-align: ${props => props.align || 'left'};
  text-decoration: ${props => props.decoration || 'none'};
  text-transform: ${props => props.upper ? 'uppercase' : 'none'};
  font-family: ${props => props.bold ? 'Quantico_700Bold' : 'Quantico_400Regular'};
`;

export const Button = styled(ButtonPaper).attrs<ButtonProps>(props => ({
  color: props.theme[props.background] || props.background || props.theme.primary,
  width: props.block ? '100%' : props.half ? '50%' : 'auto',
  labelStyle: {
    color: props.theme[props.textColor || 'light'],
    letterSpacing: 0,
    fontSize: 18,
    //fontFamily: 'Ubuntu_300Light',
  },
  uppercase: false,
  mode: props.mode || 'contained',
})) <ButtonProps>``;

export const TextInput = styled(TextInputPaper).attrs<TextInputProps>(props => ({
  mode: props.mode || 'outlined',
  outlineColor: props.theme.primary,
  underlineColor: props.theme.primary,
  selectionColor: props.theme.primary,
  theme: {
    colors: {
      text: props.disabled ? props.theme.muted : props.theme.primary,
      primary: props.theme.primary,
      background: props.theme.light,
      placeholder: props.theme.primary,
    },
  }
})) <TextInputProps>`
  width: 100%;
  font-size: 15px;
`;

export const GradientView = styled(LinearGradient) <GradientProps>`
  flex: ${props => props.flex ? props.flex : 'none'};
  flex-direction: ${props => props.row ? 'row' : 'column'};
  padding: ${props => props.hasPadding ? '20px' : props.customPadding ? props.customPadding : '0'};
  justify-content: ${(props) => props.justify || 'flex-start'};
  align-items: ${(props) => props.align || 'flex-start'};
  border-radius: ${props => props.radius ? '10px' : props.customRadius ? props.customRadius : '0'};
  width: ${props => props.width || '100%'};
  height: ${props => props.height || 'auto'};
  margin: ${(props) => props.spacing || 0};
  margin-right:${props => props.right || 0}px;
  margin-left: ${props => props.left || 0}px;
  margin-top: ${props => props.top || 0}px;
  margin-bottom: ${props => props.bottom || 0}px;
`;

export const HelperText = styled(HelperTextPaper).attrs(props => ({
  type: 'error',
})) <HelperTextProps>``;

export const Snackbar = styled(SnackbarPaper).attrs<SnackbarProps>(props => ({
  duration: props.time ? props.time : 3000,
})) <SnackbarProps>`
  flex: 1;
  background-color: ${props => `${props.theme[props?.background] || props?.background || props.theme.danger}`};
`;

export const ActivityIndicator = styled(ActivityIndicatorPaper).attrs<ActivityIndicatorProps>(props => ({
  size: props.size || 'large',
  color: props.theme[props.color] || props.color || colors.primary
})) <ActivityIndicatorProps>`
  flex: 1;
`;

export const Onboarding = styled(OnboardingApp).attrs<OnboardingProps>(props => ({
  controlStatusBar: false,
  bottomBarHeight: props.bottomBarHeight,
  bottomBarColor: props.bottomBarColor
})) <OnboardingProps>``;

export const Spacer = styled.View<SpacerProps>`
  width: ${props => props.vertical ? '25px' : '100%'};
  height: ${props => props.size ? props.size + 'px' : props.vertical ? '100%' : '10px'};
`;

export const Divider = styled.View<DividerProps>`
  width: 100%;
  height: ${props => props.size ? props.size + 'px' : '1px'};
  background: ${props => `${props.theme[props?.background] || props?.background || '#ddd'}`};
  margin: ${props => props.spacing || 0};
`;

export const Searchbar = styled(SearchbarPaper) <SpacerProps>``;

export const Table = styled(TablePaper)``;

export const Menu = styled(MenuPaper)`
    width: 100%;
`;

export const Checkbox = styled(CheckboxPaper).attrs({
  uncheckedColor: colors.primary
})``;

export const FlatList = styled.FlatList`
  width: 100%;
`;

type ProgressBarProps = {
  width?: string,
  height?: number,
  background?: string
}

export const ProgressBar = styled(ProgressBarPaper).attrs<ProgressBarProps>(props => ({
  color: props.theme[props.color] || props.theme.primary,
})) <ProgressBarProps>`
  width: ${props => props.width || '100%'};
  height: ${props => props.height || 5 + 'px'};
  border-radius: 10px;
  background: ${props => `${props.theme[props?.background] || props?.background || 'transparent'}`};
`;

export const Lottie = styled(LottieView).attrs<LottieProps>(props => ({
  autoPlay: true,
  loop: true,
})) <LottieProps>`
  height: ${props => props.height || 'auto'};
  opacity: ${props => props.opacity || 1};
`;

export const RefreshControl = styled.RefreshControl``;

export const Modal = styled(Modalize).attrs<ModalProps>(props => ({
  handleStyle: {
    backgroundColor: props.handleColor || colors.muted,
  },
  modalStyle: {
    backgroundColor: props.background || colors.light,
  }
})) <ModalProps>``;






import { type Theme } from '@rainbow-me/rainbowkit';

const defaultTheme: Theme = {
  colors: {
    actionButtonSecondaryBackground: 'rgba(0, 0, 0, 0.06)',
    connectButtonBackgroundError: '#FF494A',
    connectButtonInnerBackground: 'linear-gradient(0deg, rgba(0, 0, 0, 0.03), rgba(0, 0, 0, 0.06))',
    connectButtonTextError: '#FFF',
    connectionIndicator: '#30E000',

    error: '#FF494A',
    generalBorder: 'rgba(0, 0, 0, 0.06)',
    generalBorderDim: 'rgba(0, 0, 0, 0.03)',
    menuItemBackground: 'rgba(60, 66, 66, 0.1)',
    modalTextDim: 'rgba(60, 66, 66, 0.3)',
    selectedOptionBorder: 'rgba(60, 66, 66, 0.1)',
    standby: '#FFD641',
    // #region Our theme
    downloadBottomCardBackground:
      'hsl(var(--nextui-content1)/var(--nextui-content1-opacity,var(--tw-backdrop-opacity)))',
    downloadTopCardBackground: 'hsl(var(--nextui-content1)/var(--nextui-content1-opacity,var(--tw-backdrop-opacity)))',
    profileActionHover: 'hsl(var(--nextui-primary))',
    profileAction: 'hsl(var(--nextui-primary))',
    profileForeground: 'hsl(var(--nextui-content1)/var(--nextui-content1-opacity,var(--tw-backdrop-opacity)))',
    accentColor: 'hsl(var(--nextui-primary))',
    accentColorForeground: 'hsl(var(--nextui-primary-foreground))',
    modalBackground: 'hsl(var(--nextui-content1)/var(--nextui-content1-opacity,var(--tw-backdrop-opacity)))',
    modalBorder: 'transparent',
    modalText: 'hsl(var(--nextui-foreground))',
    modalTextSecondary: 'hsl(var(--nextui-secondary-500))',
    closeButtonBackground: 'transparent',
    closeButton: 'hsl(var(--nextui-foreground-500))',
    // modalBackdrop: 'hsl(var(--nextui-overlay) / var(--nextui-disabled-opacity))',
    modalBackdrop: 'hsla(0, 0%, 0%, 0.5)',
    actionButtonBorder: 'transparent',
    actionButtonBorderMobile: 'transparent',
    connectButtonBackground: 'hsl(var(--nextui-primary))',
    connectButtonText: 'hsl(var(--nextui-primary-foreground))'
    // #endregion
  },
  shadows: {
    connectButton: '0px 4px 12px rgba(0, 0, 0, 0.1)',
    profileDetailsAction: '0px 2px 6px rgba(37, 41, 46, 0.04)',
    selectedOption: '0px 2px 6px rgba(0, 0, 0, 0.24)',
    selectedWallet: '0px 2px 6px rgba(0, 0, 0, 0.12)',
    walletLogo: '0px 2px 16px rgba(0, 0, 0, 0.16)',
    // #region Our theme
    dialog: 'var(--nextui-box-shadow-small)'
    // #endregion
  },
  fonts: {
    body: 'var(--font-inter)'
  },
  radii: {
    actionButton: '9999px',
    modalMobile: '28px',
    // #region Our theme
    connectButton: 'var(--nextui-radius-medium)',
    menuButton: 'var(--nextui-radius-medium)',
    modal: 'var(--nextui-radius-large)'
    // #endregion
  },
  blurs: {
    modalOverlay: 'blur(4px)'
  }
};

export const rainbowkitConfig: Theme = {
  lightMode: defaultTheme,
  darkMode: defaultTheme
};

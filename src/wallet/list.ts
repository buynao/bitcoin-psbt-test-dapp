/* eslint-disable @typescript-eslint/no-explicit-any */
import bitgetWalletIcon from './icons/bitget-wallet.svg';
import okxIcon from './icons/okx.svg';
import oneKeyIcon from './icons/onekey.svg';
import { ImTokenWallet, imTokenProvider } from './providers/imToken_wallet';
import { OKXWallet, okxProvider } from './providers/okx_wallet';
import { OneKeyWallet, oneKeyProvider } from './providers/onekey_wallet';

interface IntegratedWallet {
  name: string;
  icon: string;
  wallet: any;
  linkToDocs: string;
  provider?: string;
  isQRWallet?: boolean;
}

// Special case for the browser wallet. i.e injected wallet
export const BROWSER_INJECTED_WALLET_NAME = 'Browser';

export const walletList: IntegratedWallet[] = [
  {
    name: 'OKX',
    icon: okxIcon,
    wallet: OKXWallet,
    provider: okxProvider,
    linkToDocs: 'https://www.okx.com/web3',
  },
  {
    name: 'OneKey',
    icon: oneKeyIcon,
    wallet: OneKeyWallet,
    provider: oneKeyProvider,
    linkToDocs: 'https://onekey.so/download',
  },
  {
    name: 'imToken Wallet',
    icon: bitgetWalletIcon,
    wallet: ImTokenWallet,
    provider: imTokenProvider,
    linkToDocs: 'https://web3.bitget.com',
  },
];

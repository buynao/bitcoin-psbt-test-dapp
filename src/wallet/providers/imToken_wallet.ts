/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Fees,
  Network,
  UTXO,
  WalletInfo,
  WalletProvider,
} from '../wallet_provider';
export const imTokenProvider = 'imTokenBtc';

export class ImTokenWallet extends WalletProvider {
  private imTokenAccount: WalletInfo | undefined;
  private imTokenProvider: any;

  constructor() {
    super();

    // check whether there is an imToken Wallet extension
    if (!window[imTokenProvider]) {
      throw new Error('imToken Wallet extension not found');
    }

    this.imTokenProvider = window[imTokenProvider];
  }

  connectWallet = async (): Promise<this> => {
    let account = null;
    try {
      account = await this.imTokenProvider.request('connect');
      return this;
    } catch (error) {
      throw new Error('Could not get account in imToken Wallet');
    }
    console.log('>>>>>>>>>account', account);
    const { address, publicKey } = account;

    if (publicKey && address) {
      this.imTokenAccount = {
        ...account,
        address,
        publicKeyHex: publicKey,
      };
      return this;
    }
    throw new Error('Could not connect to imToken Wallet');
  };

  getWalletProviderName = async (): Promise<string> => {
    return 'imTokenBtc';
  };

  getAccount = async (): Promise<WalletInfo> => {
    return await this.imTokenProvider.request('btc_getAccount');
  };

  getAddress = async (): Promise<string> => {
    const account = await this.getAccount();
    return account.address;
  };

  getPublicKeyHex = async (): Promise<string> => {
    const account = await this.getAccount();
    return account.publicKeyHex;
  };

  getNetwork = async (): Promise<Network> => {
    return Network.SIGNET;
  };

  getBalance = async (): Promise<number> => {
    const account = await this.getAccount();
    return await this.imTokenProvider.request('btc_getBalance', { account });
  };

  getNetworkFees = async (): Promise<Fees> => {
    const account = await this.getAccount();
    return await this.imTokenProvider.request('getNetworkFees', { account });
  };

  getUtxos = async (address: string, amount: number): Promise<UTXO[]> => {
    const account = await this.getAccount();
    return await this.imTokenProvider.request('btc_getUtxos', {
      account,
      address,
      amount,
    });
  };

  getBTCTipHeight = async (): Promise<number> => {
    return await this.imTokenProvider.request('getBTCTipHeight');
  };

  pushTx = async (txHex: string): Promise<string> => {
    return await this.imTokenProvider.request('pushTx', { txHex });
  };

  on = async (eventName: string, callBack: () => void) => {
    if (eventName === 'accountChanged') {
      return await this.imTokenProvider.on(eventName, callBack);
    }
  };

  signPsbt = async (psbtHex: string): Promise<string> => {
    return await this.imTokenProvider.request('signPsbt', { psbtHex });
  };

  signPsbts = async (psbtsHexes: string[]): Promise<string[]> => {
    return await this.imTokenProvider.request('signPsbts', { psbtsHexes });
  };

  signMessageBIP322 = async (message: string): Promise<string> => {
    return await this.imTokenProvider.request('signMessageBIP322', { message });
  };
}

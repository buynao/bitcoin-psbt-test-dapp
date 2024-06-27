/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Fees,
  Network,
  UTXO,
  WalletInfo,
  WalletProvider,
} from '../wallet_provider';
export const imTokenProvider = 'bitcoin';

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
    try {
      await this.imTokenProvider.request({
        method: 'btc_requestAccounts',
      });
      return this;
    } catch (error) {
      throw new Error(error.message);
    }
  };

  getWalletProviderName = async (): Promise<string> => {
    return 'imTokenBtc';
  };

  getAccount = async (): Promise<WalletInfo> => {
    return await this.imTokenProvider.request({
      method: 'btc_requestAccounts',
    });
  };

  getAddress = async (): Promise<string> => {
    const account = await this.getAccount();
    console.log('>>>>account', account);
    return account[0];
  };

  getPublicKeyHex = async (): Promise<string> => {
    const account = await this.getAccount();
    return account?.publicKeyHex;
  };

  getNetwork = async (): Promise<Network> => {
    return Network.SIGNET;
  };

  getBalance = async (): Promise<number> => {
    return await this.imTokenProvider.request({
      method: 'btc_getBalance',
    });
  };

  getNetworkFees = async (): Promise<Fees> => {
    return await this.imTokenProvider.request({
      method: 'getNetworkFees',
    });
  };

  getUtxos = async (address: string, amount: number): Promise<UTXO[]> => {
    const utxos = await this.imTokenProvider.request({
      method: 'btc_getUnspent',
      params: [address, amount],
    });
    if (!utxos || utxos.length === 0) return [];
    return utxos?.map((utxo) => {
      return {
        ...utxo,
        value: utxo?.value ?? utxo?.amount,
        txid: utxo?.txid ?? utxo?.txHash,
      };
    });
  };

  getBTCTipHeight = async (): Promise<number> => {
    return await this.imTokenProvider.request({
      method: 'getBTCTipHeight',
    });
  };

  pushTx = async (txHex: string): Promise<string> => {
    return await this.imTokenProvider.request({
      method: 'pushTx',
      params: [txHex],
    });
  };

  on = async (eventName: string, callBack: () => void) => {
    if (eventName === 'accountChanged') {
      return await this.imTokenProvider.on(eventName, callBack);
    }
  };

  signPsbt = async (psbtHex: string): Promise<string> => {
    return await this.imTokenProvider.request({
      method: 'btc_signPsbt',
      params: [psbtHex],
    });
  };

  signPsbts = async (psbtsHexes: string[]): Promise<string[]> => {
    return await this.imTokenProvider.request({
      method: 'btc_signPsbts',
      params: [psbtsHexes],
    });
  };

  signMessageBIP322 = async (message: string): Promise<string> => {
    return await this.imTokenProvider.request({
      method: 'btc_signMessage',
      params: [message],
    });
  };
}

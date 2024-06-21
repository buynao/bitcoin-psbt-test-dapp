/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from 'antd';
import { walletList } from '../wallet/list';
import { WalletProvider } from '../wallet/wallet_provider';
import { useCallback, useEffect, useState } from 'react';

function Connect({
  btcWallet,
  setWallet,
}: {
  btcWallet: WalletProvider | null;
  setWallet: (w: WalletProvider | null) => void;
}) {
  const [walletName, setWalletName] = useState('');
  const [address, setAddress] = useState('');
  const [balance, setBalance] = useState(0);

  const initWalletProvider = useCallback(async (btcWallet) => {
    if (btcWallet) {
      const name = await btcWallet.getWalletProviderName();
      const address = await btcWallet.getAddress();
      const balanceInSatoshis = await btcWallet.getBalance();
      const balanceInBTC = balanceInSatoshis / 100000000;
      setWalletName(name);
      setAddress(address);
      setBalance(balanceInBTC);
    }
  }, []);

  const handleConnectBTC = useCallback(
    async (btcWallet: WalletProvider) => {
      const result = await btcWallet.connectWallet();
      initWalletProvider(btcWallet);
      setWallet(result);
    },
    [initWalletProvider, setWallet],
  );
  // Subscribe to account changes
  useEffect(() => {
    if (btcWallet) {
      let once = false;
      console.log('>>>>>>>>>add accountChanged');
      btcWallet.on('accountChanged', () => {
        console.log('>>>>>>>>>accountChanged');
        if (!once) {
          handleConnectBTC(btcWallet);
        }
      });
      return () => {
        once = true;
      };
    }
  }, [btcWallet, handleConnectBTC]);

  const resetWalletProvider = () => {
    setWalletName('');
    setAddress('');
    setWallet(null);
    setBalance(0);
  };
  return (
    <div style={{ margin: '20px' }}>
      {!btcWallet &&
        walletList.map((w) => {
          return (
            <Button
              key={w.name}
              disabled={!window[w.provider]}
              onClick={async () => {
                const walletProvider = new w.wallet() as WalletProvider;
                handleConnectBTC(walletProvider);
              }}
            >
              Connect {w.name}
            </Button>
          );
        })}
      <div style={{ marginBottom: 10 }}>
        {!!walletName && <h3>{walletName}</h3>}
        {!!btcWallet && (
          <Button onClick={resetWalletProvider}>Disconnect</Button>
        )}
      </div>
      {!!address && <p>address: {address}</p>}
      {!!address && <p>balance: {balance} BTC</p>}
    </div>
  );
}

export default Connect;

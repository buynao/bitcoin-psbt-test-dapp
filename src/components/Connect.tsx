/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, message } from 'antd';
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
    if (!btcWallet) {
      return;
    }
    try {
      const name = await btcWallet.getWalletProviderName();
      const address = await btcWallet.getAddress();
      const balanceInSatoshis = await btcWallet.getBalance();
      const balanceInBTC = balanceInSatoshis / 100000000;
      setWalletName(name);
      setAddress(address);
      setBalance(balanceInBTC);
    } catch (e) {
      message.error(e.message);
    }
  }, []);

  const handleConnectBTC = useCallback(
    async (btcWallet: WalletProvider) => {
      try {
        const result = await btcWallet.connectWallet();
        initWalletProvider(btcWallet);
        setWallet(result);
      } catch (e) {
        message.error(e.message);
      }
    },
    [initWalletProvider, setWallet],
  );
  // Subscribe to account changes
  useEffect(() => {
    if (btcWallet) {
      let once = false;
      btcWallet.on('accountChanged', () => {
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

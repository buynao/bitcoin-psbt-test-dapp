import { useState } from 'react';
import { WalletProvider } from '../wallet/wallet_provider';
import { Button, message } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import PsbtList from './PsbtList';

function BabylonStaking({ btcWallet }: { btcWallet: WalletProvider }) {
  const [psbtHex, setPsbtHex] = useState(
    '70736274ff0100db02000000012c0502945546bb9003837d1d2aef32073f0e026c92b27a222dda74bf874e3cea0200000000fdffffff0350c3000000000000225120326c983f992efe39a22b5568b7565ca953116470e6d88177aa41eddf2ee044200000000000000000496a476262743400aff94eb65a2fe773a57c5bd54e62d8436a5467573565214028422b41bd43e29bc333bf065809ed12b162dc3c849f8cf65219125fdfde98770c2b285f04ff9960fa0008aaba0000000000225120ea20ffb077323528b8345c7fa517a2ebee1b52649ee2559a6d5ea87160b50b2e080803000001012ba56ebb0000000000225120ea20ffb077323528b8345c7fa517a2ebee1b52649ee2559a6d5ea87160b50b2e011720aff94eb65a2fe773a57c5bd54e62d8436a5467573565214028422b41bd43e29b00000000',
  );
  const [result, setResult] = useState('');

  const signPsbt = async (
    needSigns: boolean = false,
    isUnisat: boolean = false,
  ) => {
    if (!psbtHex) {
      return message.error(' psbtHex 不能为空');
    }
    try {
      const wallet = isUnisat && window.unisat ? window.unisat : btcWallet;
      const result = needSigns
        ? await wallet.signPsbts([psbtHex, psbtHex])
        : await wallet.signPsbt(psbtHex);
      message.success('签名成功');
      setResult(result.toString());
    } catch (e) {
      message.error(e.message);
    }
  };
  if (!btcWallet) return null;
  return (
    <div style={{ width: 400, margin: '0 auto', marginBottom: 20 }}>
      <h3>Mock psbtHex</h3>
      <PsbtList handleChange={(hex) => setPsbtHex(hex)} />
      <TextArea
        style={{
          marginBottom: 20,
          marginTop: 20,
          width: '100%',
          height: 300,
        }}
        value={psbtHex}
        onChange={(e) => setPsbtHex(e.target.value)}
        placeholder="psbtHex"
      />
      <Button style={{ marginRight: 10 }} onClick={() => signPsbt()}>
        Sign Psbt
      </Button>
      <Button onClick={() => signPsbt(true)}>Sign Psbts</Button>
      {window.unisat && (
        <div style={{ marginTop: 10 }}>
          <Button
            style={{ marginRight: 10 }}
            onClick={() => signPsbt(false, true)}
          >
            Unisat Psbt
          </Button>
          <Button onClick={() => signPsbt(true, true)}>Unisat Psbts</Button>
        </div>
      )}
      {result && <p style={{ marginTop: 10 }}>签名结果：{result}</p>}
    </div>
  );
}

export default BabylonStaking;

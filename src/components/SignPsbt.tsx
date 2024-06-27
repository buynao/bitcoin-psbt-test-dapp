import { useState } from 'react';
import { WalletProvider } from '../wallet/wallet_provider';
import { Button, message } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import PsbtList, { list } from './PsbtList';

function BabylonStaking({ btcWallet }: { btcWallet: WalletProvider }) {
  const [psbtHex, setPsbtHex] = useState(list[0].value);
  const [decodePsbt, setDecodePsbt] = useState(list[0].json);
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
      <PsbtList
        handleChange={(v) => {
          setPsbtHex(v.value);
          setDecodePsbt(v.json);
        }}
      />
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
      <Button
        onClick={() => {
          try {
            if (navigator.clipboard) {
              navigator.clipboard.writeText(
                JSON.stringify(decodePsbt, null, 2),
              );
            }
            document.execCommand(JSON.stringify(decodePsbt, null, 2), true);
            message.success('复制成功');
          } catch (e) {
            message.error('数据异常');
          }
        }}
      >
        复制 decodePsbt{' '}
      </Button>
      <TextArea
        style={{
          marginBottom: 20,
          marginTop: 20,
          width: '100%',
          height: 300,
        }}
        value={JSON.stringify(decodePsbt, null, 2)}
        placeholder="decode psbt"
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

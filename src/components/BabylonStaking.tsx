import { useCallback, useEffect, useState } from 'react';
import { WalletProvider } from '../wallet/wallet_provider';
import { Psbt } from 'bitcoinjs-lib';
import { toNetwork } from '../wallet';

import * as bitcoinjs from 'bitcoinjs-lib';
import * as ecc from '@bitcoin-js/tiny-secp256k1-asmjs';

import { Button, message, Spin } from 'antd';
import { OutputForm, Output } from './OutputForm';
import { InputForm, Input } from './InputForm';
import { v4 } from 'uuid';

function BabylonStaking({ btcWallet }: { btcWallet: WalletProvider }) {
  const [inputs, setInputs] = useState<Input[]>([]);
  const [outputs, setOutputs] = useState<Output[]>([
    {
      uuid: v4(),
      address: 'tb1pl2udxg48udx7r8yq2sz28ywpznd4zwv3mrecsg44g7ad5nssjsusnrvlwr',
      value: '50000',
    },
  ]);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState('');
  const getInputs = useCallback(async (btcWallet: WalletProvider) => {
    try {
      setLoading(true);
      const utxos = await btcWallet.getUtxos(await btcWallet.getAddress());
      setInputs(utxos);
      setLoading(false);
    } catch (e) {
      message.error(e.message);
      console.warn(e);
    }
  }, []);

  useEffect(() => {
    bitcoinjs.initEccLib(ecc);
  }, []);

  useEffect(() => {
    if (btcWallet) {
      getInputs(btcWallet);
    }
  }, [btcWallet, getInputs]);

  const signStaking = async (
    needSigns: boolean = false,
    isUnisat: boolean = false,
  ) => {
    if (!inputs.length || !outputs.length) {
      return message.error(' utxo 不能为空');
    }
    try {
      const network = await btcWallet.getNetwork();
      const stakingPsbt = new Psbt({ network: toNetwork(network) });
      stakingPsbt.setVersion(2);
      inputs.forEach((input) => {
        stakingPsbt.addInput({
          hash: input.txid,
          index: input.vout,
          witnessUtxo: {
            script: Buffer.from(input.scriptPubKey, 'hex'),
            value: Number(input.value),
          },
          // tapInternalKey: Buffer.from(publicKeyNoCoord, 'hex'),
          sequence: 4294967293,
        });
      });
      outputs.forEach((out) => {
        stakingPsbt.addOutput({
          address: out.address,
          value: Number(out.value),
        });
      });
      const psbtHex = stakingPsbt.toHex();
      console.log('>>>>>>>>psbtHex', psbtHex);
      const wallet = isUnisat && window.unisat ? window.unisat : btcWallet;
      const result = needSigns
        ? await wallet.signPsbts([psbtHex, psbtHex])
        : await wallet.signPsbt(psbtHex);
      console.log('>>>>>>>>result', psbtHex);
      message.success('签名成功');
      setResult(result.toString());
    } catch (e) {
      message.error(e.message);
    }
  };
  const isGetInputs = loading && !!btcWallet;
  if (!btcWallet) return null;
  return (
    <div style={{ marginBottom: 20 }}>
      {isGetInputs ? (
        <Spin size="small">正在加载 utxos</Spin>
      ) : (
        <InputForm inputs={inputs} setInputs={setInputs} />
      )}
      <OutputForm outputs={outputs} setOutputs={setOutputs} />
      <Button style={{ marginRight: 10 }} onClick={() => signStaking()}>
        Sign Psbt
      </Button>
      <Button onClick={() => signStaking(true)}>Sign Psbts</Button>
      {window.unisat && (
        <div style={{ marginTop: 10 }}>
          <Button
            style={{ marginRight: 10 }}
            onClick={() => signStaking(false, true)}
          >
            Unisat Psbt
          </Button>
          <Button onClick={() => signStaking(true, true)}>Unisat Psbts</Button>
        </div>
      )}
      {result && <p style={{ marginTop: 10 }}>签名结果：{result}</p>}
    </div>
  );
}

export default BabylonStaking;

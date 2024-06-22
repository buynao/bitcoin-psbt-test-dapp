/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, Input, List } from 'antd';
import { v4 } from 'uuid';

export type Input = {
  txid: string;
  vout: number;
  value: number;
  scriptPubKey: string;
};

const InputForm = ({
  inputs,
  setInputs,
}: {
  inputs: Input[];
  setInputs: (outputs: Input[]) => void;
}) => {
  return (
    <div style={{ marginBottom: 20 }}>
      <h2>Inputs List</h2>
      {inputs.map((out, index) => {
        return (
          <List
            key={out.txid}
            style={{ width: 500, margin: '0 auto', textAlign: 'left' }}
          >
            <List.Item.Meta
              title={<h4>第{index + 1}组</h4>}
              description={
                <List>
                  <List.Item.Meta
                    style={{ marginBottom: 20, marginTop: 0 }}
                    title={<h4>txid</h4>}
                    description={
                      <Input
                        value={out.txid}
                        placeholder="txid"
                        onChange={(e) => {
                          const updateOutputs = inputs.slice();
                          updateOutputs[index].txid = e.target.value;
                          setInputs([...updateOutputs]);
                        }}
                      />
                    }
                  />
                  <List.Item.Meta
                    title={<h4>vout</h4>}
                    description={
                      <Input
                        value={out.vout}
                        placeholder="vout"
                        onChange={(e) => {
                          const updateOutputs = inputs.slice();
                          updateOutputs[index].vout = Number(e.target.value);
                          setInputs([...updateOutputs]);
                        }}
                      />
                    }
                  />
                  <List.Item.Meta
                    title={<h4>scriptPubKey</h4>}
                    description={
                      <Input
                        value={out.scriptPubKey}
                        placeholder="scriptPubKey"
                        onChange={(e) => {
                          const updateOutputs = inputs.slice();
                          updateOutputs[index].scriptPubKey = e.target.value;
                          setInputs([...updateOutputs]);
                        }}
                      />
                    }
                  />
                  <List.Item.Meta
                    title={<h4>value</h4>}
                    description={
                      <Input
                        value={out.value}
                        placeholder="value"
                        onChange={(e) => {
                          const updateOutputs = inputs.slice();
                          updateOutputs[index].value = Number(e.target.value);
                          setInputs([...updateOutputs]);
                        }}
                      />
                    }
                  />
                  <List.Item.Meta
                    description={
                      <div>
                        <Button
                          type="dashed"
                          onClick={() =>
                            setInputs([
                              ...inputs,
                              {
                                ...inputs[inputs.length - 1],
                                txid: v4(),
                              },
                            ])
                          }
                          style={{
                            width: index === 0 ? 500 : '50%',
                            marginTop: '20px',
                          }}
                          icon={<PlusOutlined />}
                        >
                          添加一组 inputs
                        </Button>
                        {index > 0 && (
                          <Button
                            type="dashed"
                            onClick={() => {
                              setInputs(
                                inputs.filter((utxo) => utxo.txid !== out.txid),
                              );
                            }}
                            style={{ width: '50%', marginTop: '20px' }}
                            icon={<MinusCircleOutlined />}
                          >
                            删除
                          </Button>
                        )}
                      </div>
                    }
                  />
                </List>
              }
            />
          </List>
        );
      })}
    </div>
  );
};

export { InputForm };

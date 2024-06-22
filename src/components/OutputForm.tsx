/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, Input, List } from 'antd';
import { v4 } from 'uuid';

export type Output = { uuid: string; address: string; value: string };

const OutputForm = ({
  outputs,
  setOutputs,
}: {
  outputs: Output[];
  setOutputs: (outputs: Output[]) => void;
}) => {
  return (
    <div style={{ marginBottom: 20 }}>
      <h2>Output List</h2>
      {outputs.map((out, index) => {
        return (
          <List
            key={out.uuid}
            style={{ width: 500, margin: '0 auto', textAlign: 'left' }}
          >
            <List.Item.Meta
              style={{ marginBottom: 20 }}
              title={<h4>第{index + 1}组</h4>}
              description={
                <List>
                  <List.Item.Meta
                    style={{ marginBottom: 20, marginTop: 0 }}
                    title={<h4>address</h4>}
                    description={
                      <Input
                        value={out.address}
                        placeholder="address"
                        onChange={(e) => {
                          const updateOutputs = outputs.slice();
                          updateOutputs[index].address = e.target.value;
                          setOutputs([...updateOutputs]);
                        }}
                      />
                    }
                  />
                  <List.Item.Meta
                    title={<h4>value</h4>}
                    description={
                      <Input
                        value={out.value}
                        placeholder="amount"
                        onChange={(e) => {
                          const updateOutputs = outputs.slice();
                          updateOutputs[index].value = e.target.value;
                          setOutputs([...updateOutputs]);
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
                            setOutputs([
                              ...outputs,
                              {
                                ...outputs[outputs.length - 1],
                                uuid: v4(),
                              },
                            ])
                          }
                          style={{
                            width: index === 0 ? 500 : '50%',
                            marginTop: '20px',
                          }}
                          icon={<PlusOutlined />}
                        >
                          添加一组 output
                        </Button>
                        {index > 0 && (
                          <Button
                            type="dashed"
                            onClick={() => {
                              setOutputs(
                                outputs.filter(
                                  (utxo) => utxo.uuid !== out.uuid,
                                ),
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

export { OutputForm };

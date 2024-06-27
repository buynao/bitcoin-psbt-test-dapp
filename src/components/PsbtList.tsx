import React from 'react';
import { Select, Space } from 'antd';

export const list = [
  {
    value:
      '70736274ff0100db02000000012c0502945546bb9003837d1d2aef32073f0e026c92b27a222dda74bf874e3cea0200000000fdffffff0350c3000000000000225120326c983f992efe39a22b5568b7565ca953116470e6d88177aa41eddf2ee044200000000000000000496a476262743400aff94eb65a2fe773a57c5bd54e62d8436a5467573565214028422b41bd43e29bc333bf065809ed12b162dc3c849f8cf65219125fdfde98770c2b285f04ff9960fa0008aaba0000000000225120ea20ffb077323528b8345c7fa517a2ebee1b52649ee2559a6d5ea87160b50b2e080803000001012ba56ebb0000000000225120ea20ffb077323528b8345c7fa517a2ebee1b52649ee2559a6d5ea87160b50b2e011720aff94eb65a2fe773a57c5bd54e62d8436a5467573565214028422b41bd43e29b00000000',
    label: 'staking',
    json: {
      tx: {
        txid: '39f4bfa2edf1da52874f0acafc1b60d5f1f4af89aaa0a3205ae607ee729af62a',
        hash: '39f4bfa2edf1da52874f0acafc1b60d5f1f4af89aaa0a3205ae607ee729af62a',
        version: 2,
        size: 219,
        vsize: 219,
        weight: 876,
        locktime: 198664,
        vin: [
          {
            txid: 'ea3c4e87bf74da2d227ab2926c020e3f0732ef2a1d7d830390bb46559402052c',
            vout: 2,
            scriptSig: {
              asm: '',
              hex: '',
            },
            sequence: 4294967293,
          },
        ],
        vout: [
          {
            value: 0.0005,
            n: 0,
            scriptPubKey: {
              asm: '1 326c983f992efe39a22b5568b7565ca953116470e6d88177aa41eddf2ee04420',
              desc: 'rawtr(326c983f992efe39a22b5568b7565ca953116470e6d88177aa41eddf2ee04420)#9pdmdszl',
              hex: '5120326c983f992efe39a22b5568b7565ca953116470e6d88177aa41eddf2ee04420',
              address:
                'tb1pxfkfs0ue9mlrng3t245tw4ju49f3zersumvgzaa2g8ka7thqgssq4hqdcj',
              type: 'witness_v1_taproot',
            },
          },
          {
            value: 0,
            n: 1,
            scriptPubKey: {
              asm: 'OP_RETURN 6262743400aff94eb65a2fe773a57c5bd54e62d8436a5467573565214028422b41bd43e29bc333bf065809ed12b162dc3c849f8cf65219125fdfde98770c2b285f04ff9960fa00',
              desc: 'raw(6a476262743400aff94eb65a2fe773a57c5bd54e62d8436a5467573565214028422b41bd43e29bc333bf065809ed12b162dc3c849f8cf65219125fdfde98770c2b285f04ff9960fa00)#tpy6vc24',
              hex: '6a476262743400aff94eb65a2fe773a57c5bd54e62d8436a5467573565214028422b41bd43e29bc333bf065809ed12b162dc3c849f8cf65219125fdfde98770c2b285f04ff9960fa00',
              type: 'nulldata',
            },
          },
          {
            value: 0.12233224,
            n: 2,
            scriptPubKey: {
              asm: '1 ea20ffb077323528b8345c7fa517a2ebee1b52649ee2559a6d5ea87160b50b2e',
              desc: 'rawtr(ea20ffb077323528b8345c7fa517a2ebee1b52649ee2559a6d5ea87160b50b2e)#mug7795f',
              hex: '5120ea20ffb077323528b8345c7fa517a2ebee1b52649ee2559a6d5ea87160b50b2e',
              address:
                'tb1pags0lvrhxg6j3wp5t3l629aza0hpk5nynm39txndt658zc94pvhqlynv4e',
              type: 'witness_v1_taproot',
            },
          },
        ],
      },
      global_xpubs: [],
      psbt_version: 0,
      proprietary: [],
      unknown: {},
      inputs: [
        {
          witness_utxo: {
            amount: 0.12283557,
            scriptPubKey: {
              asm: '1 ea20ffb077323528b8345c7fa517a2ebee1b52649ee2559a6d5ea87160b50b2e',
              desc: 'rawtr(ea20ffb077323528b8345c7fa517a2ebee1b52649ee2559a6d5ea87160b50b2e)#mug7795f',
              hex: '5120ea20ffb077323528b8345c7fa517a2ebee1b52649ee2559a6d5ea87160b50b2e',
              address:
                'tb1pags0lvrhxg6j3wp5t3l629aza0hpk5nynm39txndt658zc94pvhqlynv4e',
              type: 'witness_v1_taproot',
            },
          },
          taproot_internal_key:
            'aff94eb65a2fe773a57c5bd54e62d8436a5467573565214028422b41bd43e29b',
        },
      ],
      outputs: [{}, {}, {}],
      fee: 0.00000333,
    },
  },
  {
    value:
      '70736274ff01005e0200000001fad46dd37761c9a74a5ba60ffe8a7e1e443fd731a3b9303959e48e6b4e3aa7f90000000000ffffffff01409c00000000000022512002634409d439a3169865539809875a94ade617d3fb04687f0d0822456588439c000000000001012b50c3000000000000225120b306b3589a4ec4cdae6aa8c2fe8f5a3fb0140db8ca78d5822bc0c7d2d6c5f5336215c150929b74c1a04954b78b4b6035e97a5e078a5a0f28ec96d547bfee9ace803ac0d2956573f010fa1a3c135279c5eb465ec2250205dcdfe2122637677f639b10219de7ec78da6a14f03fdd8cf5424e4cb7da0cbfc950eb0de835995f3f2d4d0392fd570120aff94eb65a2fe773a57c5bd54e62d8436a5467573565214028422b41bd43e29bad2009585ab55a971a231c945790a0a81df754e5a07263a5c20829931cc24683bbb7ac20113c3a32a9d320b72190a04a020a0db3976ef36972673258e9a38a364f3dc3b0ba2017921cf156ccb4e73d428f996ed11b245313e37e27c978ac4d2cc21eca4672e4ba203bb93dfc8b61887d771f3630e9a63e97cbafcfcc78556a474df83a31a0ef899cba2040afaf47c4ffa56de86410d8e47baa2bb6f04b604f4ea24323737ddc3fe092dfba2076d1ae01f8fb6bf30108731c884cddcf57ef6eef2d9d9559e130894e0e40c62cba2079a71ffd71c503ef2e2f91bccfc8fcda7946f4653cef0d9f3dde20795ef3b9f0ba20d21faf78c6751a0d38e6bd8028b907ff07e9a869a43fc837d6b3f8dff6119a36ba20f5199efae3f28bb82476163a7e458c7ad445d9bffb0682d10d3bdb2cb41f8e8eba569cc001172050929b74c1a04954b78b4b6035e97a5e078a5a0f28ec96d547bfee9ace803ac00000',
    label: 'unstake',
    json: {
      tx: {
        txid: '0a7e51f74006d3fecc49df3840c2426aeab8da9d3de7a8c3b240d58df97a0e93',
        hash: '0a7e51f74006d3fecc49df3840c2426aeab8da9d3de7a8c3b240d58df97a0e93',
        version: 2,
        size: 94,
        vsize: 94,
        weight: 376,
        locktime: 0,
        vin: [
          {
            txid: 'f9a73a4e6b8ee4593930b9a331d73f441e7e8afe0fa65b4aa7c96177d36dd4fa',
            vout: 0,
            scriptSig: {
              asm: '',
              hex: '',
            },
            sequence: 4294967295,
          },
        ],
        vout: [
          {
            value: 0.0004,
            n: 0,
            scriptPubKey: {
              asm: '1 02634409d439a3169865539809875a94ade617d3fb04687f0d0822456588439c',
              desc: 'rawtr(02634409d439a3169865539809875a94ade617d3fb04687f0d0822456588439c)#8q0f303j',
              hex: '512002634409d439a3169865539809875a94ade617d3fb04687f0d0822456588439c',
              address:
                'tb1pqf35gzw58x33dxr92wvqnp66jjk7v97nlvzxslcdpq3y2evggwwqh8pput',
              type: 'witness_v1_taproot',
            },
          },
        ],
      },
      global_xpubs: [],
      psbt_version: 0,
      proprietary: [],
      unknown: {},
      inputs: [
        {
          witness_utxo: {
            amount: 0.0005,
            scriptPubKey: {
              asm: '1 b306b3589a4ec4cdae6aa8c2fe8f5a3fb0140db8ca78d5822bc0c7d2d6c5f533',
              desc: 'rawtr(b306b3589a4ec4cdae6aa8c2fe8f5a3fb0140db8ca78d5822bc0c7d2d6c5f533)#9dq2a0g2',
              hex: '5120b306b3589a4ec4cdae6aa8c2fe8f5a3fb0140db8ca78d5822bc0c7d2d6c5f533',
              address:
                'tb1pkvrtxky6fmzvmtn24rp0ar6687cpgrdcefudtq3tcrra94k975estyexz8',
              type: 'witness_v1_taproot',
            },
          },
          taproot_scripts: [
            {
              script:
                '20aff94eb65a2fe773a57c5bd54e62d8436a5467573565214028422b41bd43e29bad2009585ab55a971a231c945790a0a81df754e5a07263a5c20829931cc24683bbb7ac20113c3a32a9d320b72190a04a020a0db3976ef36972673258e9a38a364f3dc3b0ba2017921cf156ccb4e73d428f996ed11b245313e37e27c978ac4d2cc21eca4672e4ba203bb93dfc8b61887d771f3630e9a63e97cbafcfcc78556a474df83a31a0ef899cba2040afaf47c4ffa56de86410d8e47baa2bb6f04b604f4ea24323737ddc3fe092dfba2076d1ae01f8fb6bf30108731c884cddcf57ef6eef2d9d9559e130894e0e40c62cba2079a71ffd71c503ef2e2f91bccfc8fcda7946f4653cef0d9f3dde20795ef3b9f0ba20d21faf78c6751a0d38e6bd8028b907ff07e9a869a43fc837d6b3f8dff6119a36ba20f5199efae3f28bb82476163a7e458c7ad445d9bffb0682d10d3bdb2cb41f8e8eba569c',
              leaf_ver: 192,
              control_blocks: [
                'c150929b74c1a04954b78b4b6035e97a5e078a5a0f28ec96d547bfee9ace803ac0d2956573f010fa1a3c135279c5eb465ec2250205dcdfe2122637677f639b10219de7ec78da6a14f03fdd8cf5424e4cb7da0cbfc950eb0de835995f3f2d4d0392',
              ],
            },
          ],
          taproot_internal_key:
            '50929b74c1a04954b78b4b6035e97a5e078a5a0f28ec96d547bfee9ace803ac0',
        },
      ],
      outputs: [{}],
      fee: 0.0001,
    },
  },
  {
    value:
      '70736274ff01005e02000000016b1c91c9f7306f15c25f16b4b2621100a99abf4e0bc605ce9942cc28dbb47d970000000000f003000001379b000000000000225120ea20ffb077323528b8345c7fa517a2ebee1b52649ee2559a6d5ea87160b50b2e000000000001012b409c000000000000225120084a5b1c1b173075b7f1c6096cceb10a094e892ee5e95a9ae3536531c866e1794215c050929b74c1a04954b78b4b6035e97a5e078a5a0f28ec96d547bfee9ace803ac001dfa563a9057026124c4371293f8c81363a219f329ebf7626592b37808e2a332720aff94eb65a2fe773a57c5bd54e62d8436a5467573565214028422b41bd43e29bad02f003b2c001172050929b74c1a04954b78b4b6035e97a5e078a5a0f28ec96d547bfee9ace803ac00000',
    label: 'withdraw',
    json: {
      tx: {
        txid: '8c00a88f508a7aa6ce5cee1c96cf1e8094bb04f486fbe0289bc7bdb5ca20a7f8',
        hash: '8c00a88f508a7aa6ce5cee1c96cf1e8094bb04f486fbe0289bc7bdb5ca20a7f8',
        version: 2,
        size: 94,
        vsize: 94,
        weight: 376,
        locktime: 0,
        vin: [
          {
            txid: '977db4db28cc4299ce05c60b4ebf9aa9001162b2b4165fc2156f30f7c9911c6b',
            vout: 0,
            scriptSig: {
              asm: '',
              hex: '',
            },
            sequence: 1008,
          },
        ],
        vout: [
          {
            value: 0.00039735,
            n: 0,
            scriptPubKey: {
              asm: '1 ea20ffb077323528b8345c7fa517a2ebee1b52649ee2559a6d5ea87160b50b2e',
              desc: 'rawtr(ea20ffb077323528b8345c7fa517a2ebee1b52649ee2559a6d5ea87160b50b2e)#mug7795f',
              hex: '5120ea20ffb077323528b8345c7fa517a2ebee1b52649ee2559a6d5ea87160b50b2e',
              address:
                'tb1pags0lvrhxg6j3wp5t3l629aza0hpk5nynm39txndt658zc94pvhqlynv4e',
              type: 'witness_v1_taproot',
            },
          },
        ],
      },
      global_xpubs: [],
      psbt_version: 0,
      proprietary: [],
      unknown: {},
      inputs: [
        {
          witness_utxo: {
            amount: 0.0004,
            scriptPubKey: {
              asm: '1 084a5b1c1b173075b7f1c6096cceb10a094e892ee5e95a9ae3536531c866e179',
              desc: 'rawtr(084a5b1c1b173075b7f1c6096cceb10a094e892ee5e95a9ae3536531c866e179)#l8cfx79k',
              hex: '5120084a5b1c1b173075b7f1c6096cceb10a094e892ee5e95a9ae3536531c866e179',
              address:
                'tb1ppp99k8qmzuc8tdl3ccyken43pgy5azfwuh544xhr2djnrjrxu9usd8l6k0',
              type: 'witness_v1_taproot',
            },
          },
          taproot_scripts: [
            {
              script:
                '20aff94eb65a2fe773a57c5bd54e62d8436a5467573565214028422b41bd43e29bad02f003b2',
              leaf_ver: 192,
              control_blocks: [
                'c050929b74c1a04954b78b4b6035e97a5e078a5a0f28ec96d547bfee9ace803ac001dfa563a9057026124c4371293f8c81363a219f329ebf7626592b37808e2a33',
              ],
            },
          ],
          taproot_internal_key:
            '50929b74c1a04954b78b4b6035e97a5e078a5a0f28ec96d547bfee9ace803ac0',
        },
      ],
      outputs: [{}],
      fee: 0.00000265,
    },
  },
  {
    value:
      '70736274ff01005e0200000001e4948cafb8e2a9c54b23003b1e062ef1b7f63550b0a3b4c73105612f81137c310200000000fdffffff013930000000000000225120fab8d322a7e34de19c805404a391c114db513991d8f38822b547bada4e109439000000000001012b03c2000000000000225120fab8d322a7e34de19c805404a391c114db513991d8f38822b547bada4e1094390000',
    label: '1vin to 1vout',
    json: {
      tx: {
        txid: '595b408ec156337476bc2da5f0e2d4db046a973967fe27a20fad1c56a0308e89',
        hash: '595b408ec156337476bc2da5f0e2d4db046a973967fe27a20fad1c56a0308e89',
        version: 2,
        size: 94,
        vsize: 94,
        weight: 376,
        locktime: 0,
        vin: [
          {
            txid: '317c13812f610531c7b4a3b05035f6b7f12e061e3b00234bc5a9e2b8af8c94e4',
            vout: 2,
            scriptSig: {
              asm: '',
              hex: '',
            },
            sequence: 4294967293,
          },
        ],
        vout: [
          {
            value: 0.00012345,
            n: 0,
            scriptPubKey: {
              asm: '1 fab8d322a7e34de19c805404a391c114db513991d8f38822b547bada4e109439',
              desc: 'rawtr(fab8d322a7e34de19c805404a391c114db513991d8f38822b547bada4e109439)#242tpem7',
              hex: '5120fab8d322a7e34de19c805404a391c114db513991d8f38822b547bada4e109439',
              address:
                'tb1pl2udxg48udx7r8yq2sz28ywpznd4zwv3mrecsg44g7ad5nssjsusnrvlwr',
              type: 'witness_v1_taproot',
            },
          },
        ],
      },
      global_xpubs: [],
      psbt_version: 0,
      proprietary: [],
      unknown: {},
      inputs: [
        {
          witness_utxo: {
            amount: 0.00049667,
            scriptPubKey: {
              asm: '1 fab8d322a7e34de19c805404a391c114db513991d8f38822b547bada4e109439',
              desc: 'rawtr(fab8d322a7e34de19c805404a391c114db513991d8f38822b547bada4e109439)#242tpem7',
              hex: '5120fab8d322a7e34de19c805404a391c114db513991d8f38822b547bada4e109439',
              address:
                'tb1pl2udxg48udx7r8yq2sz28ywpznd4zwv3mrecsg44g7ad5nssjsusnrvlwr',
              type: 'witness_v1_taproot',
            },
          },
        },
      ],
      outputs: [{}],
      fee: 0.00037322,
    },
  },
  {
    value:
      '70736274ff0100890200000001e4948cafb8e2a9c54b23003b1e062ef1b7f63550b0a3b4c73105612f81137c310200000000fdffffff023930000000000000225120fab8d322a7e34de19c805404a391c114db513991d8f38822b547bada4e1094390c30000000000000225120fab8d322a7e34de19c805404a391c114db513991d8f38822b547bada4e109439000000000001012b03c2000000000000225120fab8d322a7e34de19c805404a391c114db513991d8f38822b547bada4e109439000000',
    label: '1vin to 2vout',
    json: {
      tx: {
        txid: '351ecd2f44c99497e04d96ba528d73faaed0360db193fa7332863706b492b8ee',
        hash: '351ecd2f44c99497e04d96ba528d73faaed0360db193fa7332863706b492b8ee',
        version: 2,
        size: 137,
        vsize: 137,
        weight: 548,
        locktime: 0,
        vin: [
          {
            txid: '317c13812f610531c7b4a3b05035f6b7f12e061e3b00234bc5a9e2b8af8c94e4',
            vout: 2,
            scriptSig: {
              asm: '',
              hex: '',
            },
            sequence: 4294967293,
          },
        ],
        vout: [
          {
            value: 0.00012345,
            n: 0,
            scriptPubKey: {
              asm: '1 fab8d322a7e34de19c805404a391c114db513991d8f38822b547bada4e109439',
              desc: 'rawtr(fab8d322a7e34de19c805404a391c114db513991d8f38822b547bada4e109439)#242tpem7',
              hex: '5120fab8d322a7e34de19c805404a391c114db513991d8f38822b547bada4e109439',
              address:
                'tb1pl2udxg48udx7r8yq2sz28ywpznd4zwv3mrecsg44g7ad5nssjsusnrvlwr',
              type: 'witness_v1_taproot',
            },
          },
          {
            value: 0.000123,
            n: 1,
            scriptPubKey: {
              asm: '1 fab8d322a7e34de19c805404a391c114db513991d8f38822b547bada4e109439',
              desc: 'rawtr(fab8d322a7e34de19c805404a391c114db513991d8f38822b547bada4e109439)#242tpem7',
              hex: '5120fab8d322a7e34de19c805404a391c114db513991d8f38822b547bada4e109439',
              address:
                'tb1pl2udxg48udx7r8yq2sz28ywpznd4zwv3mrecsg44g7ad5nssjsusnrvlwr',
              type: 'witness_v1_taproot',
            },
          },
        ],
      },
      global_xpubs: [],
      psbt_version: 0,
      proprietary: [],
      unknown: {},
      inputs: [
        {
          witness_utxo: {
            amount: 0.00049667,
            scriptPubKey: {
              asm: '1 fab8d322a7e34de19c805404a391c114db513991d8f38822b547bada4e109439',
              desc: 'rawtr(fab8d322a7e34de19c805404a391c114db513991d8f38822b547bada4e109439)#242tpem7',
              hex: '5120fab8d322a7e34de19c805404a391c114db513991d8f38822b547bada4e109439',
              address:
                'tb1pl2udxg48udx7r8yq2sz28ywpznd4zwv3mrecsg44g7ad5nssjsusnrvlwr',
              type: 'witness_v1_taproot',
            },
          },
        },
      ],
      outputs: [{}, {}],
      fee: 0.00025022,
    },
  },
  {
    value:
      '70736274ff01009a020000000229c48c873d924f44e91c0c68350f56ac4a91f7d8e3ce53f611b7bbc6d74e94490000000000fdffffffd0baba4fd7980fe2c29b1efc4eb9eb2aa43aa1a4dbe2d9f8f38facef3446f5900100000000fdffffff0288130000000000001600143dcf0a89a523ff619a31af413954960414a7c21ea74f5700000000001600143dcf0a89a523ff619a31af413954960414a7c21e000000000001011f88130000000000001600143dcf0a89a523ff619a31af413954960414a7c21e01086c02483045022100aa1d2d11a259766c383a3c0d98031e4d22a941d221d7f08a4eef688717aa2fa90220550c1be8139bddb2ff359ad96fcccfd130bfcd300ac6eb8999c1771668671f0d0121026887958bcc4cb6f8c04ea49260f0d10e312c41baf485252953b14724db552aac0001011f79505700000000001600143dcf0a89a523ff619a31af413954960414a7c21e01086c02483045022100e8bd3cbd51dd33fc082dd40f43255860bd5c5af0f2b3e4078cfa34d45f137cfa022021bf8c56c0fc03e50e5ca85cfb38613febcc5f2aabe27c53e0c8846996a241a40121026887958bcc4cb6f8c04ea49260f0d10e312c41baf485252953b14724db552aac000000',
    label: '2vin to 2vout',
    json: {
      tx: {
        txid: '24d89e0cddf7f692bf4ed978159169a9e2625ceac2971913ca4015fdc7b0a3f7',
        hash: '24d89e0cddf7f692bf4ed978159169a9e2625ceac2971913ca4015fdc7b0a3f7',
        version: 2,
        size: 154,
        vsize: 154,
        weight: 616,
        locktime: 0,
        vin: [
          {
            txid: '49944ed7c6bbb711f653cee3d8f7914aac560f35680c1ce9444f923d878cc429',
            vout: 0,
            scriptSig: {
              asm: '',
              hex: '',
            },
            sequence: 4294967293,
          },
          {
            txid: '90f54634efac8ff3f8d9e2dba4a13aa42aebb94efc1e9bc2e20f98d74fbabad0',
            vout: 1,
            scriptSig: {
              asm: '',
              hex: '',
            },
            sequence: 4294967293,
          },
        ],
        vout: [
          {
            value: 0.00005,
            n: 0,
            scriptPubKey: {
              asm: '0 3dcf0a89a523ff619a31af413954960414a7c21e',
              desc: 'addr(tb1q8h8s4zd9y0lkrx334aqnj4ykqs220ss7mjxzny)#amn26vxq',
              hex: '00143dcf0a89a523ff619a31af413954960414a7c21e',
              address: 'tb1q8h8s4zd9y0lkrx334aqnj4ykqs220ss7mjxzny',
              type: 'witness_v0_keyhash',
            },
          },
          {
            value: 0.05722023,
            n: 1,
            scriptPubKey: {
              asm: '0 3dcf0a89a523ff619a31af413954960414a7c21e',
              desc: 'addr(tb1q8h8s4zd9y0lkrx334aqnj4ykqs220ss7mjxzny)#amn26vxq',
              hex: '00143dcf0a89a523ff619a31af413954960414a7c21e',
              address: 'tb1q8h8s4zd9y0lkrx334aqnj4ykqs220ss7mjxzny',
              type: 'witness_v0_keyhash',
            },
          },
        ],
      },
      global_xpubs: [],
      psbt_version: 0,
      proprietary: [],
      unknown: {},
      inputs: [
        {
          witness_utxo: {
            amount: 0.00005,
            scriptPubKey: {
              asm: '0 3dcf0a89a523ff619a31af413954960414a7c21e',
              desc: 'addr(tb1q8h8s4zd9y0lkrx334aqnj4ykqs220ss7mjxzny)#amn26vxq',
              hex: '00143dcf0a89a523ff619a31af413954960414a7c21e',
              address: 'tb1q8h8s4zd9y0lkrx334aqnj4ykqs220ss7mjxzny',
              type: 'witness_v0_keyhash',
            },
          },
          final_scriptwitness: [
            '3045022100aa1d2d11a259766c383a3c0d98031e4d22a941d221d7f08a4eef688717aa2fa90220550c1be8139bddb2ff359ad96fcccfd130bfcd300ac6eb8999c1771668671f0d01',
            '026887958bcc4cb6f8c04ea49260f0d10e312c41baf485252953b14724db552aac',
          ],
        },
        {
          witness_utxo: {
            amount: 0.05722233,
            scriptPubKey: {
              asm: '0 3dcf0a89a523ff619a31af413954960414a7c21e',
              desc: 'addr(tb1q8h8s4zd9y0lkrx334aqnj4ykqs220ss7mjxzny)#amn26vxq',
              hex: '00143dcf0a89a523ff619a31af413954960414a7c21e',
              address: 'tb1q8h8s4zd9y0lkrx334aqnj4ykqs220ss7mjxzny',
              type: 'witness_v0_keyhash',
            },
          },
          final_scriptwitness: [
            '3045022100e8bd3cbd51dd33fc082dd40f43255860bd5c5af0f2b3e4078cfa34d45f137cfa022021bf8c56c0fc03e50e5ca85cfb38613febcc5f2aabe27c53e0c8846996a241a401',
            '026887958bcc4cb6f8c04ea49260f0d10e312c41baf485252953b14724db552aac',
          ],
        },
      ],
      outputs: [{}, {}],
      fee: 0.0000021,
    },
  },
  {
    value:
      '70736274ff0100fd7201020000000529c48c873d924f44e91c0c68350f56ac4a91f7d8e3ce53f611b7bbc6d74e94490000000000fdffffff6b09c7db0780116771239461b966e15ff69a3b8bac75087844d70772051b92470000000000fdffffff1565d4732c8902fbcc9b893fb34f81f3d5cfb423738b1b7f0989f6e05118a6b50000000000fdffffff1107c932ca1796f9beec709d055ada9b43ff1defef9d02093b7bac292cbe893a0000000000fdffffffd0baba4fd7980fe2c29b1efc4eb9eb2aa43aa1a4dbe2d9f8f38facef3446f5900100000000fdffffff0588130000000000001600143dcf0a89a523ff619a31af413954960414a7c21e88130000000000001600143dcf0a89a523ff619a31af413954960414a7c21e88130000000000001600143dcf0a89a523ff619a31af413954960414a7c21e88130000000000001600143dcf0a89a523ff619a31af413954960414a7c21e7e4e5700000000001600143dcf0a89a523ff619a31af413954960414a7c21e000000000001011f88130000000000001600143dcf0a89a523ff619a31af413954960414a7c21e01086b024730440220617f506c0178a37246ab459c8fe020ee75c7ae7b384d13c27fe514a76befb0200220633001f7d6216de17a532696151913be16dea2884a3c1d5a5a6cc120013924440121026887958bcc4cb6f8c04ea49260f0d10e312c41baf485252953b14724db552aac0001011f88130000000000001600143dcf0a89a523ff619a31af413954960414a7c21e01086b0247304402204b836a559d34a9dc9541e93e2b14e5fdd37520141ff181cd5b65d8d0b0f8dda902206ed8b5db4f2e90f5690933691cd4849acd09b833e570686e930714d147984ff10121026887958bcc4cb6f8c04ea49260f0d10e312c41baf485252953b14724db552aac0001011f88130000000000001600143dcf0a89a523ff619a31af413954960414a7c21e01086c02483045022100c2210808b3a3012eb2e5acaff7614480b4ee544f971617b20191bd79fb82103e02201df853f23e97f8d64434f7fa0c91e4378464b775e8f50f16fb1db7da0932310e0121026887958bcc4cb6f8c04ea49260f0d10e312c41baf485252953b14724db552aac0001011f88130000000000001600143dcf0a89a523ff619a31af413954960414a7c21e01086c02483045022100854f27ed11762f0527ed8c8b9dfa40a11668d332f4f4f4c426209a8f99f0684002205a37810c7856f55fa0066b4311f43e2c0e0e5bd0898fe347195e04b8302bafa70121026887958bcc4cb6f8c04ea49260f0d10e312c41baf485252953b14724db552aac0001011f79505700000000001600143dcf0a89a523ff619a31af413954960414a7c21e01086c02483045022100ff500eb5249ae8bd06ad4667ae7ad8515f85a44cfffbec33ef7e2f4ad81c7454022019a3a68f17e2c31c76985e07e638717b4e1f61396ff2cf04610e334a92d779940121026887958bcc4cb6f8c04ea49260f0d10e312c41baf485252953b14724db552aac000000000000',
    label: '5vin to 5vout',
    json: {
      tx: {
        txid: '03e96f670c0dc0074aa4dad5fca2eb6e99b98daf79ea85f5cb9cb1d8e6ae6129',
        hash: '03e96f670c0dc0074aa4dad5fca2eb6e99b98daf79ea85f5cb9cb1d8e6ae6129',
        version: 2,
        size: 370,
        vsize: 370,
        weight: 1480,
        locktime: 0,
        vin: [
          {
            txid: '49944ed7c6bbb711f653cee3d8f7914aac560f35680c1ce9444f923d878cc429',
            vout: 0,
            scriptSig: {
              asm: '',
              hex: '',
            },
            sequence: 4294967293,
          },
          {
            txid: '47921b057207d744780875ac8b3b9af65fe166b96194237167118007dbc7096b',
            vout: 0,
            scriptSig: {
              asm: '',
              hex: '',
            },
            sequence: 4294967293,
          },
          {
            txid: 'b5a61851e0f689097f1b8b7323b4cfd5f3814fb33f899bccfb02892c73d46515',
            vout: 0,
            scriptSig: {
              asm: '',
              hex: '',
            },
            sequence: 4294967293,
          },
          {
            txid: '3a89be2c29ac7b3b09029defef1dff439bda5a059d70ecbef99617ca32c90711',
            vout: 0,
            scriptSig: {
              asm: '',
              hex: '',
            },
            sequence: 4294967293,
          },
          {
            txid: '90f54634efac8ff3f8d9e2dba4a13aa42aebb94efc1e9bc2e20f98d74fbabad0',
            vout: 1,
            scriptSig: {
              asm: '',
              hex: '',
            },
            sequence: 4294967293,
          },
        ],
        vout: [
          {
            value: 0.00005,
            n: 0,
            scriptPubKey: {
              asm: '0 3dcf0a89a523ff619a31af413954960414a7c21e',
              desc: 'addr(tb1q8h8s4zd9y0lkrx334aqnj4ykqs220ss7mjxzny)#amn26vxq',
              hex: '00143dcf0a89a523ff619a31af413954960414a7c21e',
              address: 'tb1q8h8s4zd9y0lkrx334aqnj4ykqs220ss7mjxzny',
              type: 'witness_v0_keyhash',
            },
          },
          {
            value: 0.00005,
            n: 1,
            scriptPubKey: {
              asm: '0 3dcf0a89a523ff619a31af413954960414a7c21e',
              desc: 'addr(tb1q8h8s4zd9y0lkrx334aqnj4ykqs220ss7mjxzny)#amn26vxq',
              hex: '00143dcf0a89a523ff619a31af413954960414a7c21e',
              address: 'tb1q8h8s4zd9y0lkrx334aqnj4ykqs220ss7mjxzny',
              type: 'witness_v0_keyhash',
            },
          },
          {
            value: 0.00005,
            n: 2,
            scriptPubKey: {
              asm: '0 3dcf0a89a523ff619a31af413954960414a7c21e',
              desc: 'addr(tb1q8h8s4zd9y0lkrx334aqnj4ykqs220ss7mjxzny)#amn26vxq',
              hex: '00143dcf0a89a523ff619a31af413954960414a7c21e',
              address: 'tb1q8h8s4zd9y0lkrx334aqnj4ykqs220ss7mjxzny',
              type: 'witness_v0_keyhash',
            },
          },
          {
            value: 0.00005,
            n: 3,
            scriptPubKey: {
              asm: '0 3dcf0a89a523ff619a31af413954960414a7c21e',
              desc: 'addr(tb1q8h8s4zd9y0lkrx334aqnj4ykqs220ss7mjxzny)#amn26vxq',
              hex: '00143dcf0a89a523ff619a31af413954960414a7c21e',
              address: 'tb1q8h8s4zd9y0lkrx334aqnj4ykqs220ss7mjxzny',
              type: 'witness_v0_keyhash',
            },
          },
          {
            value: 0.05721726,
            n: 4,
            scriptPubKey: {
              asm: '0 3dcf0a89a523ff619a31af413954960414a7c21e',
              desc: 'addr(tb1q8h8s4zd9y0lkrx334aqnj4ykqs220ss7mjxzny)#amn26vxq',
              hex: '00143dcf0a89a523ff619a31af413954960414a7c21e',
              address: 'tb1q8h8s4zd9y0lkrx334aqnj4ykqs220ss7mjxzny',
              type: 'witness_v0_keyhash',
            },
          },
        ],
      },
      global_xpubs: [],
      psbt_version: 0,
      proprietary: [],
      unknown: {},
      inputs: [
        {
          witness_utxo: {
            amount: 0.00005,
            scriptPubKey: {
              asm: '0 3dcf0a89a523ff619a31af413954960414a7c21e',
              desc: 'addr(tb1q8h8s4zd9y0lkrx334aqnj4ykqs220ss7mjxzny)#amn26vxq',
              hex: '00143dcf0a89a523ff619a31af413954960414a7c21e',
              address: 'tb1q8h8s4zd9y0lkrx334aqnj4ykqs220ss7mjxzny',
              type: 'witness_v0_keyhash',
            },
          },
          final_scriptwitness: [
            '30440220617f506c0178a37246ab459c8fe020ee75c7ae7b384d13c27fe514a76befb0200220633001f7d6216de17a532696151913be16dea2884a3c1d5a5a6cc1200139244401',
            '026887958bcc4cb6f8c04ea49260f0d10e312c41baf485252953b14724db552aac',
          ],
        },
        {
          witness_utxo: {
            amount: 0.00005,
            scriptPubKey: {
              asm: '0 3dcf0a89a523ff619a31af413954960414a7c21e',
              desc: 'addr(tb1q8h8s4zd9y0lkrx334aqnj4ykqs220ss7mjxzny)#amn26vxq',
              hex: '00143dcf0a89a523ff619a31af413954960414a7c21e',
              address: 'tb1q8h8s4zd9y0lkrx334aqnj4ykqs220ss7mjxzny',
              type: 'witness_v0_keyhash',
            },
          },
          final_scriptwitness: [
            '304402204b836a559d34a9dc9541e93e2b14e5fdd37520141ff181cd5b65d8d0b0f8dda902206ed8b5db4f2e90f5690933691cd4849acd09b833e570686e930714d147984ff101',
            '026887958bcc4cb6f8c04ea49260f0d10e312c41baf485252953b14724db552aac',
          ],
        },
        {
          witness_utxo: {
            amount: 0.00005,
            scriptPubKey: {
              asm: '0 3dcf0a89a523ff619a31af413954960414a7c21e',
              desc: 'addr(tb1q8h8s4zd9y0lkrx334aqnj4ykqs220ss7mjxzny)#amn26vxq',
              hex: '00143dcf0a89a523ff619a31af413954960414a7c21e',
              address: 'tb1q8h8s4zd9y0lkrx334aqnj4ykqs220ss7mjxzny',
              type: 'witness_v0_keyhash',
            },
          },
          final_scriptwitness: [
            '3045022100c2210808b3a3012eb2e5acaff7614480b4ee544f971617b20191bd79fb82103e02201df853f23e97f8d64434f7fa0c91e4378464b775e8f50f16fb1db7da0932310e01',
            '026887958bcc4cb6f8c04ea49260f0d10e312c41baf485252953b14724db552aac',
          ],
        },
        {
          witness_utxo: {
            amount: 0.00005,
            scriptPubKey: {
              asm: '0 3dcf0a89a523ff619a31af413954960414a7c21e',
              desc: 'addr(tb1q8h8s4zd9y0lkrx334aqnj4ykqs220ss7mjxzny)#amn26vxq',
              hex: '00143dcf0a89a523ff619a31af413954960414a7c21e',
              address: 'tb1q8h8s4zd9y0lkrx334aqnj4ykqs220ss7mjxzny',
              type: 'witness_v0_keyhash',
            },
          },
          final_scriptwitness: [
            '3045022100854f27ed11762f0527ed8c8b9dfa40a11668d332f4f4f4c426209a8f99f0684002205a37810c7856f55fa0066b4311f43e2c0e0e5bd0898fe347195e04b8302bafa701',
            '026887958bcc4cb6f8c04ea49260f0d10e312c41baf485252953b14724db552aac',
          ],
        },
        {
          witness_utxo: {
            amount: 0.05722233,
            scriptPubKey: {
              asm: '0 3dcf0a89a523ff619a31af413954960414a7c21e',
              desc: 'addr(tb1q8h8s4zd9y0lkrx334aqnj4ykqs220ss7mjxzny)#amn26vxq',
              hex: '00143dcf0a89a523ff619a31af413954960414a7c21e',
              address: 'tb1q8h8s4zd9y0lkrx334aqnj4ykqs220ss7mjxzny',
              type: 'witness_v0_keyhash',
            },
          },
          final_scriptwitness: [
            '3045022100ff500eb5249ae8bd06ad4667ae7ad8515f85a44cfffbec33ef7e2f4ad81c7454022019a3a68f17e2c31c76985e07e638717b4e1f61396ff2cf04610e334a92d7799401',
            '026887958bcc4cb6f8c04ea49260f0d10e312c41baf485252953b14724db552aac',
          ],
        },
      ],
      outputs: [{}, {}, {}, {}, {}],
      fee: 0.00000507,
    },
  },
];

const PsbtList = ({ handleChange }) => (
  <Space wrap>
    <Select
      defaultValue="staking"
      style={{ width: 300 }}
      onChange={(v, i) => {
        handleChange(i);
      }}
      options={list}
    />
  </Space>
);

export default PsbtList;

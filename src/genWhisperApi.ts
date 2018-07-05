import * as fs from 'fs';

interface Method {
  name: string,
  args: string,
  return: string,
}

const WHISPER_METHODS: Method[] = [
  // General
  { name: 'shh_info', args: '', return: 'Info' },
  { name: 'shh_version', args: '', return: 'string' },

  // KeyPair
  { name: 'shh_newKeyPair', args: '', return: 'KeyId' },
  { name: 'shh_getPrivateKey', args: 'keyId: KeyId', return: 'PrivKey' },
  { name: 'shh_addPrivateKey', args: 'privateKey: PrivKey', return: 'KeyId' },
  { name: 'shh_deleteKeyPair', args: 'keyId: KeyId', return: 'boolean' },
  { name: 'shh_hasKeyPair', args: 'keyId: KeyId', return: 'boolean' },
  { name: 'shh_getPublicKey', args: 'keyId: KeyId', return: 'PubKey' },

  // SymKey
  { name: 'shh_newSymKey', args: '', return: 'SymKeyId' },
  { name: 'shh_addSymKey', args: 'symKey: SymKey', return: 'SymKeyId' },
  { name: 'shh_hasSymKey', args: 'keyId: SymKeyId', return: 'boolean' },
  { name: 'shh_getSymKey', args: 'keyId: SymKeyId', return: 'SymKey' },
  { name: 'shh_generateSymKeyFromPassword', args: 'password: string', return: 'SymKeyId' },
  { name: 'shh_deleteSymKey', args: 'keyId: SymKeyId', return: 'boolean' },

  // Post
  { name: 'shh_post', args: 'message: WhisperPost', return: 'string' },
  
  // Filter
  { name: 'shh_newMessageFilter', args:'filter: Filter', return: 'Bytes32' },
  { name: 'shh_deleteMessageFilter', args:'filterId: Bytes32', return: 'any' },
  { name: 'shh_getFilterMessages', args:'filterId: Bytes32', return: 'FilterMsg[]' },

  // Admin
  { name: 'shh_setMaxMessageSize', args: 'maxSize: number', return: 'boolean' },
  { name: 'shh_setMinPoW', args: 'minPoW: number', return :'boolean' },

  // { name: 'shh_subscribe', args: '', return: '' },
  // { name: 'shh_unsubscribe', args: '', return: '' },
];

const heading = `import axios from 'axios';

import {
  Bytes32,
  Info,
  Filter,
  FilterMsg,
  KeyId,
  PrivKey,
  PubKey,
  SymKey,
  SymKeyId,
  WhisperPost
} from './Types';

export default class WhisperApi {
  public provider: string;
  
  constructor(provider: string) {
    this.provider = provider;
  }\n`;

const methods = [];

WHISPER_METHODS.forEach((method: Method) => {
  methods.push(`
  async ${method.name.slice(4)}(${method.args ? method.args : '' }): Promise<${method.return}> {
    const rpcRequest = {
      jsonrpc: '2.0',
      method: '${method.name}',
      params: [${method.args ? method.args.split(':')[0] : '' }],
      id: Date.now(),
    };
    
    const { data } = await axios.post(this.provider, rpcRequest);
    if (data.error) {
      throw data.error.message;
    }

    return data.result;
  }`);
})

const close = '\n}';

fs.writeFileSync('src/WhisperApi.ts', heading + methods.join('\n') + close);

import axios from 'axios';

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
  }

  async info(): Promise<Info> {
    const rpcRequest = {
      jsonrpc: '2.0',
      method: 'shh_info',
      params: [],
      id: Date.now(),
    };
    
    const { data } = await axios.post(this.provider, rpcRequest);
    if (data.error) {
      throw data.error.message;
    }

    return data.result;
  }

  async version(): Promise<string> {
    const rpcRequest = {
      jsonrpc: '2.0',
      method: 'shh_version',
      params: [],
      id: Date.now(),
    };
    
    const { data } = await axios.post(this.provider, rpcRequest);
    if (data.error) {
      throw data.error.message;
    }

    return data.result;
  }

  async newKeyPair(): Promise<KeyId> {
    const rpcRequest = {
      jsonrpc: '2.0',
      method: 'shh_newKeyPair',
      params: [],
      id: Date.now(),
    };
    
    const { data } = await axios.post(this.provider, rpcRequest);
    if (data.error) {
      throw data.error.message;
    }

    return data.result;
  }

  async getPrivateKey(keyId: KeyId): Promise<PrivKey> {
    const rpcRequest = {
      jsonrpc: '2.0',
      method: 'shh_getPrivateKey',
      params: [keyId],
      id: Date.now(),
    };
    
    const { data } = await axios.post(this.provider, rpcRequest);
    if (data.error) {
      throw data.error.message;
    }

    return data.result;
  }

  async addPrivateKey(privateKey: PrivKey): Promise<KeyId> {
    const rpcRequest = {
      jsonrpc: '2.0',
      method: 'shh_addPrivateKey',
      params: [privateKey],
      id: Date.now(),
    };
    
    const { data } = await axios.post(this.provider, rpcRequest);
    if (data.error) {
      throw data.error.message;
    }

    return data.result;
  }

  async deleteKeyPair(keyId: KeyId): Promise<boolean> {
    const rpcRequest = {
      jsonrpc: '2.0',
      method: 'shh_deleteKeyPair',
      params: [keyId],
      id: Date.now(),
    };
    
    const { data } = await axios.post(this.provider, rpcRequest);
    if (data.error) {
      throw data.error.message;
    }

    return data.result;
  }

  async hasKeyPair(keyId: KeyId): Promise<boolean> {
    const rpcRequest = {
      jsonrpc: '2.0',
      method: 'shh_hasKeyPair',
      params: [keyId],
      id: Date.now(),
    };
    
    const { data } = await axios.post(this.provider, rpcRequest);
    if (data.error) {
      throw data.error.message;
    }

    return data.result;
  }

  async getPublicKey(keyId: KeyId): Promise<PubKey> {
    const rpcRequest = {
      jsonrpc: '2.0',
      method: 'shh_getPublicKey',
      params: [keyId],
      id: Date.now(),
    };
    
    const { data } = await axios.post(this.provider, rpcRequest);
    if (data.error) {
      throw data.error.message;
    }

    return data.result;
  }

  async newSymKey(): Promise<SymKeyId> {
    const rpcRequest = {
      jsonrpc: '2.0',
      method: 'shh_newSymKey',
      params: [],
      id: Date.now(),
    };
    
    const { data } = await axios.post(this.provider, rpcRequest);
    if (data.error) {
      throw data.error.message;
    }

    return data.result;
  }

  async addSymKey(symKey: SymKey): Promise<SymKeyId> {
    const rpcRequest = {
      jsonrpc: '2.0',
      method: 'shh_addSymKey',
      params: [symKey],
      id: Date.now(),
    };
    
    const { data } = await axios.post(this.provider, rpcRequest);
    if (data.error) {
      throw data.error.message;
    }

    return data.result;
  }

  async hasSymKey(keyId: SymKeyId): Promise<boolean> {
    const rpcRequest = {
      jsonrpc: '2.0',
      method: 'shh_hasSymKey',
      params: [keyId],
      id: Date.now(),
    };
    
    const { data } = await axios.post(this.provider, rpcRequest);
    if (data.error) {
      throw data.error.message;
    }

    return data.result;
  }

  async getSymKey(keyId: SymKeyId): Promise<SymKey> {
    const rpcRequest = {
      jsonrpc: '2.0',
      method: 'shh_getSymKey',
      params: [keyId],
      id: Date.now(),
    };
    
    const { data } = await axios.post(this.provider, rpcRequest);
    if (data.error) {
      throw data.error.message;
    }

    return data.result;
  }

  async generateSymKeyFromPassword(password: string): Promise<SymKeyId> {
    const rpcRequest = {
      jsonrpc: '2.0',
      method: 'shh_generateSymKeyFromPassword',
      params: [password],
      id: Date.now(),
    };
    
    const { data } = await axios.post(this.provider, rpcRequest);
    if (data.error) {
      throw data.error.message;
    }

    return data.result;
  }

  async deleteSymKey(keyId: SymKeyId): Promise<boolean> {
    const rpcRequest = {
      jsonrpc: '2.0',
      method: 'shh_deleteSymKey',
      params: [keyId],
      id: Date.now(),
    };
    
    const { data } = await axios.post(this.provider, rpcRequest);
    if (data.error) {
      throw data.error.message;
    }

    return data.result;
  }

  async post(message: WhisperPost): Promise<string> {
    const rpcRequest = {
      jsonrpc: '2.0',
      method: 'shh_post',
      params: [message],
      id: Date.now(),
    };
    
    const { data } = await axios.post(this.provider, rpcRequest);
    if (data.error) {
      throw data.error.message;
    }

    return data.result;
  }

  async newMessageFilter(filter: Filter): Promise<Bytes32> {
    const rpcRequest = {
      jsonrpc: '2.0',
      method: 'shh_newMessageFilter',
      params: [filter],
      id: Date.now(),
    };
    
    const { data } = await axios.post(this.provider, rpcRequest);
    if (data.error) {
      throw data.error.message;
    }

    return data.result;
  }

  async deleteMessageFilter(filterId: Bytes32): Promise<any> {
    const rpcRequest = {
      jsonrpc: '2.0',
      method: 'shh_deleteMessageFilter',
      params: [filterId],
      id: Date.now(),
    };
    
    const { data } = await axios.post(this.provider, rpcRequest);
    if (data.error) {
      throw data.error.message;
    }

    return data.result;
  }

  async getFilterMessages(filterId: Bytes32): Promise<FilterMsg[]> {
    const rpcRequest = {
      jsonrpc: '2.0',
      method: 'shh_getFilterMessages',
      params: [filterId],
      id: Date.now(),
    };
    
    const { data } = await axios.post(this.provider, rpcRequest);
    if (data.error) {
      throw data.error.message;
    }

    return data.result;
  }

  async setMaxMessageSize(maxSize: number): Promise<boolean> {
    const rpcRequest = {
      jsonrpc: '2.0',
      method: 'shh_setMaxMessageSize',
      params: [maxSize],
      id: Date.now(),
    };
    
    const { data } = await axios.post(this.provider, rpcRequest);
    if (data.error) {
      throw data.error.message;
    }

    return data.result;
  }

  async setMinPoW(minPoW: number): Promise<boolean> {
    const rpcRequest = {
      jsonrpc: '2.0',
      method: 'shh_setMinPoW',
      params: [minPoW],
      id: Date.now(),
    };
    
    const { data } = await axios.post(this.provider, rpcRequest);
    if (data.error) {
      throw data.error.message;
    }

    return data.result;
  }
}
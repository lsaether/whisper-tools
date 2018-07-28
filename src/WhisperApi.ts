import axios from "axios";

import {
  Bytes32,
  IFilter,
  IFilterMsg,
  IInfo,
  IWhisperPost,
  KeyId,
  PrivKey,
  PubKey,
  SymKey,
  SymKeyId,
} from "./Types";

export default class WhisperApi {
  public provider: string;

  constructor(provider: string) {
    this.provider = provider;
  }

  public async info(): Promise<IInfo> {
    const rpcRequest = {
      id: Date.now(),
      jsonrpc: "2.0",
      method: "shh_info",
      params: [],
    };

    const { data } = await axios.post(this.provider, rpcRequest, {
      headers: {
        "Content-Type": "application/json",
      },
      timeout: 20000,
    });
    if (data.error) {
      throw data.error.message;
    }

    return data.result;
  }

  public async version(): Promise<string> {
    const rpcRequest = {
      id: Date.now(),
      jsonrpc: "2.0",
      method: "shh_version",
      params: [],
    };

    const { data } = await axios.post(this.provider, rpcRequest, {
      headers: {
        "Content-Type": "application/json",
      },
      timeout: 20000,
    });
    if (data.error) {
      throw data.error.message;
    }

    return data.result;
  }

  public async newKeyPair(): Promise<KeyId> {
    const rpcRequest = {
      id: Date.now(),
      jsonrpc: "2.0",
      method: "shh_newKeyPair",
      params: [],
    };

    const { data } = await axios.post(this.provider, rpcRequest, {
      headers: {
        "Content-Type": "application/json",
      },
      timeout: 20000,
    });
    if (data.error) {
      throw data.error.message;
    }

    return data.result;
  }

  public async getPrivateKey(keyId: KeyId): Promise<PrivKey> {
    const rpcRequest = {
      id: Date.now(),
      jsonrpc: "2.0",
      method: "shh_getPrivateKey",
      params: [keyId],
    };

    const { data } = await axios.post(this.provider, rpcRequest, {
      headers: {
        "Content-Type": "application/json",
      },
      timeout: 20000,
    });
    if (data.error) {
      throw data.error.message;
    }

    return data.result;
  }

  public async addPrivateKey(privateKey: PrivKey): Promise<KeyId> {
    const rpcRequest = {
      id: Date.now(),
      jsonrpc: "2.0",
      method: "shh_addPrivateKey",
      params: [privateKey],
    };

    const { data } = await axios.post(this.provider, rpcRequest, {
      headers: {
        "Content-Type": "application/json",
      },
      timeout: 20000,
    });
    if (data.error) {
      throw data.error.message;
    }

    return data.result;
  }

  public async deleteKeyPair(keyId: KeyId): Promise<boolean> {
    const rpcRequest = {
      id: Date.now(),
      jsonrpc: "2.0",
      method: "shh_deleteKeyPair",
      params: [keyId],
    };

    const { data } = await axios.post(this.provider, rpcRequest, {
      headers: {
        "Content-Type": "application/json",
      },
      timeout: 20000,
    });
    if (data.error) {
      throw data.error.message;
    }

    return data.result;
  }

  public async hasKeyPair(keyId: KeyId): Promise<boolean> {
    const rpcRequest = {
      id: Date.now(),
      jsonrpc: "2.0",
      method: "shh_hasKeyPair",
      params: [keyId],
    };

    const { data } = await axios.post(this.provider, rpcRequest, {
      headers: {
        "Content-Type": "application/json",
      },
      timeout: 20000,
    });
    if (data.error) {
      throw data.error.message;
    }

    return data.result;
  }

  public async getPublicKey(keyId: KeyId): Promise<PubKey> {
    const rpcRequest = {
      id: Date.now(),
      jsonrpc: "2.0",
      method: "shh_getPublicKey",
      params: [keyId],
    };

    const { data } = await axios.post(this.provider, rpcRequest, {
      headers: {
        "Content-Type": "application/json",
      },
      timeout: 20000,
    });
    if (data.error) {
      throw data.error.message;
    }

    return data.result;
  }

  public async newSymKey(): Promise<SymKeyId> {
    const rpcRequest = {
      id: Date.now(),
      jsonrpc: "2.0",
      method: "shh_newSymKey",
      params: [],
    };

    const { data } = await axios.post(this.provider, rpcRequest, {
      headers: {
        "Content-Type": "application/json",
      },
      timeout: 20000,
    });
    if (data.error) {
      throw data.error.message;
    }

    return data.result;
  }

  public async addSymKey(symKey: SymKey): Promise<SymKeyId> {
    const rpcRequest = {
      id: Date.now(),
      jsonrpc: "2.0",
      method: "shh_addSymKey",
      params: [symKey],
    };

    const { data } = await axios.post(this.provider, rpcRequest, {
      headers: {
        "Content-Type": "application/json",
      },
      timeout: 20000,
    });
    if (data.error) {
      throw data.error.message;
    }

    return data.result;
  }

  public async hasSymKey(keyId: SymKeyId): Promise<boolean> {
    const rpcRequest = {
      id: Date.now(),
      jsonrpc: "2.0",
      method: "shh_hasSymKey",
      params: [keyId],
    };

    const { data } = await axios.post(this.provider, rpcRequest, {
      headers: {
        "Content-Type": "application/json",
      },
      timeout: 20000,
    });
    if (data.error) {
      throw data.error.message;
    }

    return data.result;
  }

  public async getSymKey(keyId: SymKeyId): Promise<SymKey> {
    const rpcRequest = {
      id: Date.now(),
      jsonrpc: "2.0",
      method: "shh_getSymKey",
      params: [keyId],
    };

    const { data } = await axios.post(this.provider, rpcRequest, {
      headers: {
        "Content-Type": "application/json",
      },
      timeout: 20000,
    });
    if (data.error) {
      throw data.error.message;
    }

    return data.result;
  }

  public async generateSymKeyFromPassword(password: string): Promise<SymKeyId> {
    const rpcRequest = {
      id: Date.now(),
      jsonrpc: "2.0",
      method: "shh_generateSymKeyFromPassword",
      params: [password],
    };

    const { data } = await axios.post(this.provider, rpcRequest, {
      headers: {
        "Content-Type": "application/json",
      },
      timeout: 20000,
    });
    if (data.error) {
      throw data.error.message;
    }

    return data.result;
  }

  public async deleteSymKey(keyId: SymKeyId): Promise<boolean> {
    const rpcRequest = {
      id: Date.now(),
      jsonrpc: "2.0",
      method: "shh_deleteSymKey",
      params: [keyId],
    };

    const { data } = await axios.post(this.provider, rpcRequest, {
      headers: {
        "Content-Type": "application/json",
      },
      timeout: 20000,
    });
    if (data.error) {
      throw data.error.message;
    }

    return data.result;
  }

  public async post(message: IWhisperPost): Promise<string> {
    const rpcRequest = {
      id: Date.now(),
      jsonrpc: "2.0",
      method: "shh_post",
      params: [message],
    };

    const { data } = await axios.post(this.provider, rpcRequest, {
      headers: {
        "Content-Type": "application/json",
      },
      timeout: 20000,
    });
    if (data.error) {
      throw data.error.message;
    }

    return data.result;
  }

  public async newMessageFilter(filter: IFilter): Promise<Bytes32> {
    const rpcRequest = {
      id: Date.now(),
      jsonrpc: "2.0",
      method: "shh_newMessageFilter",
      params: [filter],
    };

    const { data } = await axios.post(this.provider, rpcRequest, {
      headers: {
        "Content-Type": "application/json",
      },
      timeout: 20000,
    });
    if (data.error) {
      throw data.error.message;
    }

    return data.result;
  }

  public async deleteMessageFilter(filterId: Bytes32): Promise<any> {
    const rpcRequest = {
      id: Date.now(),
      jsonrpc: "2.0",
      method: "shh_deleteMessageFilter",
      params: [filterId],
    };

    const { data } = await axios.post(this.provider, rpcRequest, {
      headers: {
        "Content-Type": "application/json",
      },
      timeout: 20000,
    });
    if (data.error) {
      throw data.error.message;
    }

    return data.result;
  }

  public async getFilterMessages(filterId: Bytes32): Promise<IFilterMsg[]> {
    const rpcRequest = {
      id: Date.now(),
      jsonrpc: "2.0",
      method: "shh_getFilterMessages",
      params: [filterId],
    };

    const { data } = await axios.post(this.provider, rpcRequest, {
      headers: {
        "Content-Type": "application/json",
      },
      timeout: 20000,
    });
    if (data.error) {
      throw data.error.message;
    }

    return data.result;
  }

  public async setMaxMessageSize(maxSize: number): Promise<boolean> {
    const rpcRequest = {
      id: Date.now(),
      jsonrpc: "2.0",
      method: "shh_setMaxMessageSize",
      params: [maxSize],
    };

    const { data } = await axios.post(this.provider, rpcRequest, {
      headers: {
        "Content-Type": "application/json",
      },
      timeout: 20000,
    });
    if (data.error) {
      throw data.error.message;
    }

    return data.result;
  }

  public async setMinPoW(minPoW: number): Promise<boolean> {
    const rpcRequest = {
      id: Date.now(),
      jsonrpc: "2.0",
      method: "shh_setMinPoW",
      params: [minPoW],
    };

    const { data } = await axios.post(this.provider, rpcRequest, {
      headers: {
        "Content-Type": "application/json",
      },
      timeout: 20000,
    });
    if (data.error) {
      throw data.error.message;
    }

    return data.result;
  }
}

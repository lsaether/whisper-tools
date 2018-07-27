export type Bytes32 = string;

// Pubkey is 64 bytes
export type PubKey = string;
export type PrivKey = Bytes32;

export type KeyId = Bytes32;

export type SymKeyId = Bytes32;
export type SymKey = Bytes32;

export interface IInfo {
  memory: number;
  messages: number;
  minPow?: number;
  maxMessageSize: number;
}

export interface IFilter {
  symKeyId?: SymKeyId;
  privateKeyId?: KeyId;
  sig?: string;
  topics?: string[];
  minPow?: number;
  allowP2P?: boolean;
}

export interface IFilterMsg {
  hash: string;
  sig: string;
  recipientPublicKey: string;
  timestamp: string;
  ttl: number;
  topic: string;
  payload: string;
  padding: number;
  pow: number;
}

export interface IWhisperPost {
  symKeyId?: SymKeyId;
  pubKey?: PubKey;
  sig?: string;
  ttl: number;
  topic: string;
  payload: string;
  padding?: number;
  powTime?: number;
  powTarget?: number;
  targetPeer?: number;
}

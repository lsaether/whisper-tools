export declare type Bytes32 = string;
export declare type PubKey = string;
export declare type PrivKey = Bytes32;
export declare type KeyId = Bytes32;
export declare type SymKeyId = Bytes32;
export declare type SymKey = Bytes32;
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

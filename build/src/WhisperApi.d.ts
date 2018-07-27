import { Bytes32, IFilter, IFilterMsg, IInfo, IWhisperPost, KeyId, PrivKey, PubKey, SymKey, SymKeyId } from './Types';
export default class WhisperApi {
    provider: string;
    constructor(provider: string);
    info(): Promise<IInfo>;
    version(): Promise<string>;
    newKeyPair(): Promise<KeyId>;
    getPrivateKey(keyId: KeyId): Promise<PrivKey>;
    addPrivateKey(privateKey: PrivKey): Promise<KeyId>;
    deleteKeyPair(keyId: KeyId): Promise<boolean>;
    hasKeyPair(keyId: KeyId): Promise<boolean>;
    getPublicKey(keyId: KeyId): Promise<PubKey>;
    newSymKey(): Promise<SymKeyId>;
    addSymKey(symKey: SymKey): Promise<SymKeyId>;
    hasSymKey(keyId: SymKeyId): Promise<boolean>;
    getSymKey(keyId: SymKeyId): Promise<SymKey>;
    generateSymKeyFromPassword(password: string): Promise<SymKeyId>;
    deleteSymKey(keyId: SymKeyId): Promise<boolean>;
    post(message: IWhisperPost): Promise<string>;
    newMessageFilter(filter: IFilter): Promise<Bytes32>;
    deleteMessageFilter(filterId: Bytes32): Promise<any>;
    getFilterMessages(filterId: Bytes32): Promise<IFilterMsg[]>;
    setMaxMessageSize(maxSize: number): Promise<boolean>;
    setMinPoW(minPoW: number): Promise<boolean>;
}

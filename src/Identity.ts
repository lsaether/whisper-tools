import WhisperApi from "./WhisperApi";

import { KeyId, SymKeyId } from "./Types";

class Identity {

  public static async create(shh: WhisperApi): Promise<Identity> {
    const keyId: KeyId = await shh.newKeyPair();
    return new Identity(keyId, shh);
  }
  public keyId: KeyId;
  public shh: WhisperApi;

  public joined: any;

  constructor(keyId: KeyId, shh: WhisperApi) {
    this.keyId = keyId;
    this.shh = shh;
  }

  public async join(channel: SymKeyId, rooms: string[]) {
    const filterId = await this.shh.newMessageFilter({
      symKeyId: channel,
      topics: rooms,
    });

    this.joined.push(filterId);
  }

  public async getMessages() {
    const msgs = this.joined.map(async (filterId) => {
      return await this.shh.getFilterMessages(filterId);
    });
    return msgs;
  }
}

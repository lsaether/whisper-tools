import WhisperApi from './WhisperApi';

import { KeyId } from './Types';

class Identity {
  public keyId: KeyId;
  public shh: WhisperApi;
  
  constructor(keyId: KeyId, shh: WhisperApi) {
    this.keyId = keyId;
    this.shh = shh;
  }

  
}
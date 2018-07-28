# whisper-tools

[Whisper](https://github.com/ethereum/wiki/wiki/Whisper) is a dark communications protocol that is parallel to the decentralized web3 vision of Ethereum. The `whisper-tools` library is a stand-alone API wrapper over the `shh` RPC calls.

## Overview

Bring `whisper-tools` into your project by installing it from npm.

```
npm i whisper-tools
```

You then import the `WhisperApi` class and instantiate into a new `shh` object.

```ts
import { WhisperApi } from "whisper-tools";

const shh = new WhisperApi("http://localhost:8545");

const main = async () => {
    const info = await shh.info();
    const keypairId = await shh.newKeyPair();
}

main();
```

or if you are using plain old JS...

```js
const { WhisperApi } = require("whisper-tools");
```

Notice! You must be running geth with the following flags enabled to use this library.

```bash
geth --shh --rpc --nodiscover
```

You can remove `--nodiscover` if you would like to try to connect to other nodes. But be wary, it will also start syncing the Ethereum mainnet. 

If you are using this library from a development server (such as create-react-app), you will need to enable cors on geth with the flag `--rpccorsdomain "*"`.

## FAQs

**Doesn't the web3.js library have whisper?**

Yes. This is an alternative that *may* be better for your use case, if you intend to only use Whisper and not the other functionality that web3 brings in. At the time of writing, this package also makes use of the latest **v.6.0** Whisper API while web3.js still uses the older **v.5.0**.
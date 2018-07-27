"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs = __importStar(require("fs"));
var WHISPER_METHODS = [
    // General
    { name: "shh_info", args: "", return: "IInfo" },
    { name: "shh_version", args: "", return: "string" },
    // KeyPair
    { name: "shh_newKeyPair", args: "", return: "KeyId" },
    { name: "shh_getPrivateKey", args: "keyId: KeyId", return: "PrivKey" },
    { name: "shh_addPrivateKey", args: "privateKey: PrivKey", return: "KeyId" },
    { name: "shh_deleteKeyPair", args: "keyId: KeyId", return: "boolean" },
    { name: "shh_hasKeyPair", args: "keyId: KeyId", return: "boolean" },
    { name: "shh_getPublicKey", args: "keyId: KeyId", return: "PubKey" },
    // SymKey
    { name: "shh_newSymKey", args: "", return: "SymKeyId" },
    { name: "shh_addSymKey", args: "symKey: SymKey", return: "SymKeyId" },
    { name: "shh_hasSymKey", args: "keyId: SymKeyId", return: "boolean" },
    { name: "shh_getSymKey", args: "keyId: SymKeyId", return: "SymKey" },
    { name: "shh_generateSymKeyFromPassword", args: "password: string", return: "SymKeyId" },
    { name: "shh_deleteSymKey", args: "keyId: SymKeyId", return: "boolean" },
    // Post
    { name: "shh_post", args: "message: IWhisperPost", return: "string" },
    // Filter
    { name: "shh_newMessageFilter", args: "filter: IFilter", return: "Bytes32" },
    { name: "shh_deleteMessageFilter", args: "filterId: Bytes32", return: "any" },
    { name: "shh_getFilterMessages", args: "filterId: Bytes32", return: "IFilterMsg[]" },
    // Admin
    { name: "shh_setMaxMessageSize", args: "maxSize: number", return: "boolean" },
    { name: "shh_setMinPoW", args: "minPoW: number", return: "boolean" },
];
var heading = "import axios from 'axios';\n\nimport {\n  Bytes32,\n  IFilter,\n  IFilterMsg,\n  IInfo,\n  IWhisperPost,\n  KeyId,\n  PrivKey,\n  PubKey,\n  SymKey,\n  SymKeyId,\n} from './Types';\n\nexport default class WhisperApi {\n  public provider: string;\n\n  constructor(provider: string) {\n    this.provider = provider;\n  }\n";
var methods = [];
WHISPER_METHODS.forEach(function (method) {
    methods.push("\n  public async " + method.name.slice(4) + "(" + (method.args ? method.args : "") + "): Promise<" + method.return + "> {\n    const rpcRequest = {\n      id: Date.now(),\n      jsonrpc: '2.0',\n      method: '" + method.name + "',\n      params: [" + (method.args ? method.args.split(":")[0] : "") + "],\n    };\n\n    const { data } = await axios.post(this.provider, rpcRequest);\n    if (data.error) {\n      throw data.error.message;\n    }\n\n    return data.result;\n  }");
});
var close = "\n}";
fs.writeFileSync("src/WhisperApi.ts", heading + methods.join("\n") + close);

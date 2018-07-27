"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = __importDefault(require("axios"));
var WhisperApi = /** @class */ (function () {
    function WhisperApi(provider) {
        this.provider = provider;
    }
    WhisperApi.prototype.info = function () {
        return __awaiter(this, void 0, void 0, function () {
            var rpcRequest, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        rpcRequest = {
                            id: Date.now(),
                            jsonrpc: '2.0',
                            method: 'shh_info',
                            params: [],
                        };
                        return [4 /*yield*/, axios_1.default.post(this.provider, rpcRequest)];
                    case 1:
                        data = (_a.sent()).data;
                        if (data.error) {
                            throw data.error.message;
                        }
                        return [2 /*return*/, data.result];
                }
            });
        });
    };
    WhisperApi.prototype.version = function () {
        return __awaiter(this, void 0, void 0, function () {
            var rpcRequest, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        rpcRequest = {
                            id: Date.now(),
                            jsonrpc: '2.0',
                            method: 'shh_version',
                            params: [],
                        };
                        return [4 /*yield*/, axios_1.default.post(this.provider, rpcRequest)];
                    case 1:
                        data = (_a.sent()).data;
                        if (data.error) {
                            throw data.error.message;
                        }
                        return [2 /*return*/, data.result];
                }
            });
        });
    };
    WhisperApi.prototype.newKeyPair = function () {
        return __awaiter(this, void 0, void 0, function () {
            var rpcRequest, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        rpcRequest = {
                            id: Date.now(),
                            jsonrpc: '2.0',
                            method: 'shh_newKeyPair',
                            params: [],
                        };
                        return [4 /*yield*/, axios_1.default.post(this.provider, rpcRequest)];
                    case 1:
                        data = (_a.sent()).data;
                        if (data.error) {
                            throw data.error.message;
                        }
                        return [2 /*return*/, data.result];
                }
            });
        });
    };
    WhisperApi.prototype.getPrivateKey = function (keyId) {
        return __awaiter(this, void 0, void 0, function () {
            var rpcRequest, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        rpcRequest = {
                            id: Date.now(),
                            jsonrpc: '2.0',
                            method: 'shh_getPrivateKey',
                            params: [keyId],
                        };
                        return [4 /*yield*/, axios_1.default.post(this.provider, rpcRequest)];
                    case 1:
                        data = (_a.sent()).data;
                        if (data.error) {
                            throw data.error.message;
                        }
                        return [2 /*return*/, data.result];
                }
            });
        });
    };
    WhisperApi.prototype.addPrivateKey = function (privateKey) {
        return __awaiter(this, void 0, void 0, function () {
            var rpcRequest, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        rpcRequest = {
                            id: Date.now(),
                            jsonrpc: '2.0',
                            method: 'shh_addPrivateKey',
                            params: [privateKey],
                        };
                        return [4 /*yield*/, axios_1.default.post(this.provider, rpcRequest)];
                    case 1:
                        data = (_a.sent()).data;
                        if (data.error) {
                            throw data.error.message;
                        }
                        return [2 /*return*/, data.result];
                }
            });
        });
    };
    WhisperApi.prototype.deleteKeyPair = function (keyId) {
        return __awaiter(this, void 0, void 0, function () {
            var rpcRequest, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        rpcRequest = {
                            id: Date.now(),
                            jsonrpc: '2.0',
                            method: 'shh_deleteKeyPair',
                            params: [keyId],
                        };
                        return [4 /*yield*/, axios_1.default.post(this.provider, rpcRequest)];
                    case 1:
                        data = (_a.sent()).data;
                        if (data.error) {
                            throw data.error.message;
                        }
                        return [2 /*return*/, data.result];
                }
            });
        });
    };
    WhisperApi.prototype.hasKeyPair = function (keyId) {
        return __awaiter(this, void 0, void 0, function () {
            var rpcRequest, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        rpcRequest = {
                            id: Date.now(),
                            jsonrpc: '2.0',
                            method: 'shh_hasKeyPair',
                            params: [keyId],
                        };
                        return [4 /*yield*/, axios_1.default.post(this.provider, rpcRequest)];
                    case 1:
                        data = (_a.sent()).data;
                        if (data.error) {
                            throw data.error.message;
                        }
                        return [2 /*return*/, data.result];
                }
            });
        });
    };
    WhisperApi.prototype.getPublicKey = function (keyId) {
        return __awaiter(this, void 0, void 0, function () {
            var rpcRequest, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        rpcRequest = {
                            id: Date.now(),
                            jsonrpc: '2.0',
                            method: 'shh_getPublicKey',
                            params: [keyId],
                        };
                        return [4 /*yield*/, axios_1.default.post(this.provider, rpcRequest)];
                    case 1:
                        data = (_a.sent()).data;
                        if (data.error) {
                            throw data.error.message;
                        }
                        return [2 /*return*/, data.result];
                }
            });
        });
    };
    WhisperApi.prototype.newSymKey = function () {
        return __awaiter(this, void 0, void 0, function () {
            var rpcRequest, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        rpcRequest = {
                            id: Date.now(),
                            jsonrpc: '2.0',
                            method: 'shh_newSymKey',
                            params: [],
                        };
                        return [4 /*yield*/, axios_1.default.post(this.provider, rpcRequest)];
                    case 1:
                        data = (_a.sent()).data;
                        if (data.error) {
                            throw data.error.message;
                        }
                        return [2 /*return*/, data.result];
                }
            });
        });
    };
    WhisperApi.prototype.addSymKey = function (symKey) {
        return __awaiter(this, void 0, void 0, function () {
            var rpcRequest, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        rpcRequest = {
                            id: Date.now(),
                            jsonrpc: '2.0',
                            method: 'shh_addSymKey',
                            params: [symKey],
                        };
                        return [4 /*yield*/, axios_1.default.post(this.provider, rpcRequest)];
                    case 1:
                        data = (_a.sent()).data;
                        if (data.error) {
                            throw data.error.message;
                        }
                        return [2 /*return*/, data.result];
                }
            });
        });
    };
    WhisperApi.prototype.hasSymKey = function (keyId) {
        return __awaiter(this, void 0, void 0, function () {
            var rpcRequest, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        rpcRequest = {
                            id: Date.now(),
                            jsonrpc: '2.0',
                            method: 'shh_hasSymKey',
                            params: [keyId],
                        };
                        return [4 /*yield*/, axios_1.default.post(this.provider, rpcRequest)];
                    case 1:
                        data = (_a.sent()).data;
                        if (data.error) {
                            throw data.error.message;
                        }
                        return [2 /*return*/, data.result];
                }
            });
        });
    };
    WhisperApi.prototype.getSymKey = function (keyId) {
        return __awaiter(this, void 0, void 0, function () {
            var rpcRequest, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        rpcRequest = {
                            id: Date.now(),
                            jsonrpc: '2.0',
                            method: 'shh_getSymKey',
                            params: [keyId],
                        };
                        return [4 /*yield*/, axios_1.default.post(this.provider, rpcRequest)];
                    case 1:
                        data = (_a.sent()).data;
                        if (data.error) {
                            throw data.error.message;
                        }
                        return [2 /*return*/, data.result];
                }
            });
        });
    };
    WhisperApi.prototype.generateSymKeyFromPassword = function (password) {
        return __awaiter(this, void 0, void 0, function () {
            var rpcRequest, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        rpcRequest = {
                            id: Date.now(),
                            jsonrpc: '2.0',
                            method: 'shh_generateSymKeyFromPassword',
                            params: [password],
                        };
                        return [4 /*yield*/, axios_1.default.post(this.provider, rpcRequest)];
                    case 1:
                        data = (_a.sent()).data;
                        if (data.error) {
                            throw data.error.message;
                        }
                        return [2 /*return*/, data.result];
                }
            });
        });
    };
    WhisperApi.prototype.deleteSymKey = function (keyId) {
        return __awaiter(this, void 0, void 0, function () {
            var rpcRequest, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        rpcRequest = {
                            id: Date.now(),
                            jsonrpc: '2.0',
                            method: 'shh_deleteSymKey',
                            params: [keyId],
                        };
                        return [4 /*yield*/, axios_1.default.post(this.provider, rpcRequest)];
                    case 1:
                        data = (_a.sent()).data;
                        if (data.error) {
                            throw data.error.message;
                        }
                        return [2 /*return*/, data.result];
                }
            });
        });
    };
    WhisperApi.prototype.post = function (message) {
        return __awaiter(this, void 0, void 0, function () {
            var rpcRequest, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        rpcRequest = {
                            id: Date.now(),
                            jsonrpc: '2.0',
                            method: 'shh_post',
                            params: [message],
                        };
                        return [4 /*yield*/, axios_1.default.post(this.provider, rpcRequest)];
                    case 1:
                        data = (_a.sent()).data;
                        if (data.error) {
                            throw data.error.message;
                        }
                        return [2 /*return*/, data.result];
                }
            });
        });
    };
    WhisperApi.prototype.newMessageFilter = function (filter) {
        return __awaiter(this, void 0, void 0, function () {
            var rpcRequest, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        rpcRequest = {
                            id: Date.now(),
                            jsonrpc: '2.0',
                            method: 'shh_newMessageFilter',
                            params: [filter],
                        };
                        return [4 /*yield*/, axios_1.default.post(this.provider, rpcRequest)];
                    case 1:
                        data = (_a.sent()).data;
                        if (data.error) {
                            throw data.error.message;
                        }
                        return [2 /*return*/, data.result];
                }
            });
        });
    };
    WhisperApi.prototype.deleteMessageFilter = function (filterId) {
        return __awaiter(this, void 0, void 0, function () {
            var rpcRequest, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        rpcRequest = {
                            id: Date.now(),
                            jsonrpc: '2.0',
                            method: 'shh_deleteMessageFilter',
                            params: [filterId],
                        };
                        return [4 /*yield*/, axios_1.default.post(this.provider, rpcRequest)];
                    case 1:
                        data = (_a.sent()).data;
                        if (data.error) {
                            throw data.error.message;
                        }
                        return [2 /*return*/, data.result];
                }
            });
        });
    };
    WhisperApi.prototype.getFilterMessages = function (filterId) {
        return __awaiter(this, void 0, void 0, function () {
            var rpcRequest, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        rpcRequest = {
                            id: Date.now(),
                            jsonrpc: '2.0',
                            method: 'shh_getFilterMessages',
                            params: [filterId],
                        };
                        return [4 /*yield*/, axios_1.default.post(this.provider, rpcRequest)];
                    case 1:
                        data = (_a.sent()).data;
                        if (data.error) {
                            throw data.error.message;
                        }
                        return [2 /*return*/, data.result];
                }
            });
        });
    };
    WhisperApi.prototype.setMaxMessageSize = function (maxSize) {
        return __awaiter(this, void 0, void 0, function () {
            var rpcRequest, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        rpcRequest = {
                            id: Date.now(),
                            jsonrpc: '2.0',
                            method: 'shh_setMaxMessageSize',
                            params: [maxSize],
                        };
                        return [4 /*yield*/, axios_1.default.post(this.provider, rpcRequest)];
                    case 1:
                        data = (_a.sent()).data;
                        if (data.error) {
                            throw data.error.message;
                        }
                        return [2 /*return*/, data.result];
                }
            });
        });
    };
    WhisperApi.prototype.setMinPoW = function (minPoW) {
        return __awaiter(this, void 0, void 0, function () {
            var rpcRequest, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        rpcRequest = {
                            id: Date.now(),
                            jsonrpc: '2.0',
                            method: 'shh_setMinPoW',
                            params: [minPoW],
                        };
                        return [4 /*yield*/, axios_1.default.post(this.provider, rpcRequest)];
                    case 1:
                        data = (_a.sent()).data;
                        if (data.error) {
                            throw data.error.message;
                        }
                        return [2 /*return*/, data.result];
                }
            });
        });
    };
    return WhisperApi;
}());
exports.default = WhisperApi;

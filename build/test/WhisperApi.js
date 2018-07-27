"use strict";
/**
 * These tests require a geth instance to be running with --shh and --rpc
 * flags. `geth --shh --rpc --nodiscover console`
 */
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
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var chai_1 = require("chai");
var WhisperApi_1 = __importDefault(require("../src/WhisperApi"));
var LOCAL_PROVIDER = "http://localhost:8545";
describe("WhisperApi", function () {
    var shh;
    before(function () {
        shh = new WhisperApi_1.default(LOCAL_PROVIDER);
    });
    it("gets the info and checks fields exist", function () { return __awaiter(_this, void 0, void 0, function () {
        var info;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, shh.info()];
                case 1:
                    info = _a.sent();
                    /* tslint:disable:no-unused-expression */
                    chai_1.expect(info.memory).to.exist;
                    chai_1.expect(info.messages).to.exist;
                    chai_1.expect(info.minPow).to.exist;
                    chai_1.expect(info.maxMessageSize).to.exist;
                    return [2 /*return*/];
            }
        });
    }); });
    it("gets the version", function () { return __awaiter(_this, void 0, void 0, function () {
        var version;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, shh.version()];
                case 1:
                    version = _a.sent();
                    chai_1.expect(version).to.equal("6.0");
                    return [2 /*return*/];
            }
        });
    }); });
    it("generates a new keypair", function () { return __awaiter(_this, void 0, void 0, function () {
        var keypairId;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, shh.newKeyPair()];
                case 1:
                    keypairId = _a.sent();
                    chai_1.expect(keypairId.length).to.equal(64);
                    return [2 /*return*/];
            }
        });
    }); });
    it("gets a privatekey from keypair", function () { return __awaiter(_this, void 0, void 0, function () {
        var keypairId, privkey;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, shh.newKeyPair()];
                case 1:
                    keypairId = _a.sent();
                    return [4 /*yield*/, shh.getPrivateKey(keypairId)];
                case 2:
                    privkey = _a.sent();
                    chai_1.expect(privkey.slice(0, 2)).to.equal("0x");
                    chai_1.expect(privkey.length).to.equal(66);
                    return [2 /*return*/];
            }
        });
    }); });
    it("gets a keypair from privkey", function () { return __awaiter(_this, void 0, void 0, function () {
        var keypairId, privkey, keypairIdMatch, privkeyMatch;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, shh.newKeyPair()];
                case 1:
                    keypairId = _a.sent();
                    return [4 /*yield*/, shh.getPrivateKey(keypairId)];
                case 2:
                    privkey = _a.sent();
                    return [4 /*yield*/, shh.addPrivateKey(privkey)];
                case 3:
                    keypairIdMatch = _a.sent();
                    return [4 /*yield*/, shh.getPrivateKey(keypairIdMatch)];
                case 4:
                    privkeyMatch = _a.sent();
                    chai_1.expect(privkey).to.equal(privkeyMatch);
                    return [2 /*return*/];
            }
        });
    }); });
    it("");
});

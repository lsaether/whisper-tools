/**
 * These tests require a geth instance to be running with --shh and --rpc
 * flags. `geth --shh --rpc --nodiscover console`
 */

import { expect } from "chai";

import WhisperApi from "../src/WhisperApi";

const LOCAL_PROVIDER = "http://localhost:8545";

describe("WhisperApi", () => {

  let shh;

  before(() => {
    shh = new WhisperApi(LOCAL_PROVIDER);
  });

  it("gets the info and checks fields exist", async () => {
    const info = await shh.info();
    /* tslint:disable:no-unused-expression */
    expect(info.memory).to.exist;
    expect(info.messages).to.exist;
    expect(info.minPow).to.exist;
    expect(info.maxMessageSize).to.exist;
    /* tslint:enable */
  });

  it("gets the version", async () => {
    const version = await shh.version();
    expect(version).to.equal("6.0");
  });

  it("generates a new keypair", async () => {
    const keypairId = await shh.newKeyPair();
    expect(keypairId.length).to.equal(64);
  });

  it("gets a privatekey from keypair", async () => {
    const keypairId = await shh.newKeyPair();
    const privkey = await shh.getPrivateKey(keypairId);
    expect(privkey.slice(0, 2)).to.equal("0x");
    expect(privkey.length).to.equal(66);
  });

  it("gets a keypair from privkey", async () => {
    const keypairId = await shh.newKeyPair();
    const privkey = await shh.getPrivateKey(keypairId);
    const keypairIdMatch = await shh.addPrivateKey(privkey);
    // The Ids are different and do not match.
    // console.log(keypairId, keypairIdMatch);
    const privkeyMatch = await shh.getPrivateKey(keypairIdMatch);
    expect(privkey).to.equal(privkeyMatch);
  });

  it("");

});

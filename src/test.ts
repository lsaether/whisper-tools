// import WhisperApi from "./WhisperApi";

// declare const console: any;

// const shh = new WhisperApi("http://localhost:8545");

// (async () => {
//   const info = await shh.info();
//   console.log(info);
//   const v = await shh.version();
//   console.log(v);
//   const keyId = await shh.newKeyPair();
//   console.log(keyId);
//   const privkey = await shh.getPrivateKey(keyId);
//   console.log(privkey);
//   const keyId2 = await shh.addPrivateKey(privkey);
//   console.log(keyId2);
//   const deleted = await shh.deleteKeyPair(keyId2);
//   console.log(deleted);
//   const has = await shh.hasKeyPair(keyId);
//   console.log(has);
//   const pubkey = await shh.getPublicKey(keyId);
//   console.log(pubkey);

//   const symKeyId = await shh.newSymKey();
//   console.log("Sym Key ID: " + symKeyId);
//   const symKey = await shh.getSymKey(symKeyId);
//   console.log("Sym Key: " + symKey);

//   const filterId = await shh.newMessageFilter({
//     symKeyId,
//     topics: [
//       "0xAABBFFCC",
//     ],
//   });

//   console.log("Filter Id: " + filterId);

//   const post = await shh.post({
//     // pubKey: pubkey,
//     sig: keyId,
//     symKeyId,
//     ttl: 5000,
//     topic: "0xAABBFFCC",
//     payload: "0x1337",
//     powTarget: 0.5,
//     powTime: 3,
//   });

//   console.log("Posted: " + post);

//   const res = await shh.getFilterMessages(filterId);
//   console.log(res);
  // const newSymKey = await shh.newSymKey();
  // console.log(newSymKey);
  // const addPrivKey = await shh.addPrivateKey(newKeyPair);
  // console.log(addPrivKey);
  // const getPubKey = await shh.getPublicKey(newKeyPair);
  // console.log(getPubKey);
  // const getSymKey = await shh.getSymKey(newSymKey);
  // console.log(getSymKey);
  // const post = await shh.post({
  //   // from: newKeyPair,
  //   topics: [
  //     '0x0001',
  //   ],
  //   payload: '0x0001',
  //   priority: 0,
  //   ttl: 400,
  // });
  // console.log(post);
  // const newMessageFilter = await shh.newMessageFilter({
  //   // from: getSymKey,
  //   topics: [
  //     '0x0001'
  //   ]
  // });
  // console.log(newMessageFilter);
  // const getFilterMessages = await shh.getFilterMessages(newMessageFilter);
  // console.log(getFilterMessages);
// })();

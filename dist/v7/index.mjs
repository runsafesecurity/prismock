import { createRequire } from "node:module";
var __defProp = Object.defineProperty;
var __commonJS = (cb, mod) => () => (mod || cb((mod = { exports: {} }).exports, mod), mod.exports);
var __returnValue = (v) => v;
function __exportSetter(name, newValue) {
  this[name] = __returnValue.bind(null, newValue);
}
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, {
      get: all[name],
      enumerable: true,
      configurable: true,
      set: __exportSetter.bind(all, name)
    });
};
var __esm = (fn, res) => () => (fn && (res = fn(fn = 0)), res);
var __require = /* @__PURE__ */ createRequire(import.meta.url);

// node_modules/@noble/hashes/_u64.js
var require__u64 = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.toBig = exports.shrSL = exports.shrSH = exports.rotrSL = exports.rotrSH = exports.rotrBL = exports.rotrBH = exports.rotr32L = exports.rotr32H = exports.rotlSL = exports.rotlSH = exports.rotlBL = exports.rotlBH = exports.add5L = exports.add5H = exports.add4L = exports.add4H = exports.add3L = exports.add3H = undefined;
  exports.add = add;
  exports.fromBig = fromBig;
  exports.split = split;
  var U32_MASK64 = /* @__PURE__ */ BigInt(2 ** 32 - 1);
  var _32n = /* @__PURE__ */ BigInt(32);
  function fromBig(n, le = false) {
    if (le)
      return { h: Number(n & U32_MASK64), l: Number(n >> _32n & U32_MASK64) };
    return { h: Number(n >> _32n & U32_MASK64) | 0, l: Number(n & U32_MASK64) | 0 };
  }
  function split(lst, le = false) {
    const len = lst.length;
    let Ah = new Uint32Array(len);
    let Al = new Uint32Array(len);
    for (let i = 0;i < len; i++) {
      const { h, l } = fromBig(lst[i], le);
      [Ah[i], Al[i]] = [h, l];
    }
    return [Ah, Al];
  }
  var toBig = (h, l) => BigInt(h >>> 0) << _32n | BigInt(l >>> 0);
  exports.toBig = toBig;
  var shrSH = (h, _l, s) => h >>> s;
  exports.shrSH = shrSH;
  var shrSL = (h, l, s) => h << 32 - s | l >>> s;
  exports.shrSL = shrSL;
  var rotrSH = (h, l, s) => h >>> s | l << 32 - s;
  exports.rotrSH = rotrSH;
  var rotrSL = (h, l, s) => h << 32 - s | l >>> s;
  exports.rotrSL = rotrSL;
  var rotrBH = (h, l, s) => h << 64 - s | l >>> s - 32;
  exports.rotrBH = rotrBH;
  var rotrBL = (h, l, s) => h >>> s - 32 | l << 64 - s;
  exports.rotrBL = rotrBL;
  var rotr32H = (_h, l) => l;
  exports.rotr32H = rotr32H;
  var rotr32L = (h, _l) => h;
  exports.rotr32L = rotr32L;
  var rotlSH = (h, l, s) => h << s | l >>> 32 - s;
  exports.rotlSH = rotlSH;
  var rotlSL = (h, l, s) => l << s | h >>> 32 - s;
  exports.rotlSL = rotlSL;
  var rotlBH = (h, l, s) => l << s - 32 | h >>> 64 - s;
  exports.rotlBH = rotlBH;
  var rotlBL = (h, l, s) => h << s - 32 | l >>> 64 - s;
  exports.rotlBL = rotlBL;
  function add(Ah, Al, Bh, Bl) {
    const l = (Al >>> 0) + (Bl >>> 0);
    return { h: Ah + Bh + (l / 2 ** 32 | 0) | 0, l: l | 0 };
  }
  var add3L = (Al, Bl, Cl) => (Al >>> 0) + (Bl >>> 0) + (Cl >>> 0);
  exports.add3L = add3L;
  var add3H = (low, Ah, Bh, Ch) => Ah + Bh + Ch + (low / 2 ** 32 | 0) | 0;
  exports.add3H = add3H;
  var add4L = (Al, Bl, Cl, Dl) => (Al >>> 0) + (Bl >>> 0) + (Cl >>> 0) + (Dl >>> 0);
  exports.add4L = add4L;
  var add4H = (low, Ah, Bh, Ch, Dh) => Ah + Bh + Ch + Dh + (low / 2 ** 32 | 0) | 0;
  exports.add4H = add4H;
  var add5L = (Al, Bl, Cl, Dl, El) => (Al >>> 0) + (Bl >>> 0) + (Cl >>> 0) + (Dl >>> 0) + (El >>> 0);
  exports.add5L = add5L;
  var add5H = (low, Ah, Bh, Ch, Dh, Eh) => Ah + Bh + Ch + Dh + Eh + (low / 2 ** 32 | 0) | 0;
  exports.add5H = add5H;
  var u64 = {
    fromBig,
    split,
    toBig,
    shrSH,
    shrSL,
    rotrSH,
    rotrSL,
    rotrBH,
    rotrBL,
    rotr32H,
    rotr32L,
    rotlSH,
    rotlSL,
    rotlBH,
    rotlBL,
    add,
    add3L,
    add3H,
    add4L,
    add4H,
    add5H,
    add5L
  };
  exports.default = u64;
});

// node_modules/@noble/hashes/cryptoNode.js
var require_cryptoNode = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.crypto = undefined;
  var nc = __require("node:crypto");
  exports.crypto = nc && typeof nc === "object" && "webcrypto" in nc ? nc.webcrypto : nc && typeof nc === "object" && ("randomBytes" in nc) ? nc : undefined;
});

// node_modules/@noble/hashes/utils.js
var require_utils = __commonJS((exports) => {
  /*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.wrapXOFConstructorWithOpts = exports.wrapConstructorWithOpts = exports.wrapConstructor = exports.Hash = exports.nextTick = exports.swap32IfBE = exports.byteSwapIfBE = exports.swap8IfBE = exports.isLE = undefined;
  exports.isBytes = isBytes;
  exports.anumber = anumber;
  exports.abytes = abytes;
  exports.ahash = ahash;
  exports.aexists = aexists;
  exports.aoutput = aoutput;
  exports.u8 = u8;
  exports.u32 = u32;
  exports.clean = clean;
  exports.createView = createView;
  exports.rotr = rotr;
  exports.rotl = rotl;
  exports.byteSwap = byteSwap;
  exports.byteSwap32 = byteSwap32;
  exports.bytesToHex = bytesToHex;
  exports.hexToBytes = hexToBytes;
  exports.asyncLoop = asyncLoop;
  exports.utf8ToBytes = utf8ToBytes;
  exports.bytesToUtf8 = bytesToUtf8;
  exports.toBytes = toBytes;
  exports.kdfInputToBytes = kdfInputToBytes;
  exports.concatBytes = concatBytes;
  exports.checkOpts = checkOpts;
  exports.createHasher = createHasher;
  exports.createOptHasher = createOptHasher;
  exports.createXOFer = createXOFer;
  exports.randomBytes = randomBytes2;
  var crypto_1 = require_cryptoNode();
  function isBytes(a) {
    return a instanceof Uint8Array || ArrayBuffer.isView(a) && a.constructor.name === "Uint8Array";
  }
  function anumber(n) {
    if (!Number.isSafeInteger(n) || n < 0)
      throw new Error("positive integer expected, got " + n);
  }
  function abytes(b, ...lengths) {
    if (!isBytes(b))
      throw new Error("Uint8Array expected");
    if (lengths.length > 0 && !lengths.includes(b.length))
      throw new Error("Uint8Array expected of length " + lengths + ", got length=" + b.length);
  }
  function ahash(h) {
    if (typeof h !== "function" || typeof h.create !== "function")
      throw new Error("Hash should be wrapped by utils.createHasher");
    anumber(h.outputLen);
    anumber(h.blockLen);
  }
  function aexists(instance, checkFinished = true) {
    if (instance.destroyed)
      throw new Error("Hash instance has been destroyed");
    if (checkFinished && instance.finished)
      throw new Error("Hash#digest() has already been called");
  }
  function aoutput(out, instance) {
    abytes(out);
    const min = instance.outputLen;
    if (out.length < min) {
      throw new Error("digestInto() expects output buffer of length at least " + min);
    }
  }
  function u8(arr) {
    return new Uint8Array(arr.buffer, arr.byteOffset, arr.byteLength);
  }
  function u32(arr) {
    return new Uint32Array(arr.buffer, arr.byteOffset, Math.floor(arr.byteLength / 4));
  }
  function clean(...arrays) {
    for (let i = 0;i < arrays.length; i++) {
      arrays[i].fill(0);
    }
  }
  function createView(arr) {
    return new DataView(arr.buffer, arr.byteOffset, arr.byteLength);
  }
  function rotr(word, shift) {
    return word << 32 - shift | word >>> shift;
  }
  function rotl(word, shift) {
    return word << shift | word >>> 32 - shift >>> 0;
  }
  exports.isLE = (() => new Uint8Array(new Uint32Array([287454020]).buffer)[0] === 68)();
  function byteSwap(word) {
    return word << 24 & 4278190080 | word << 8 & 16711680 | word >>> 8 & 65280 | word >>> 24 & 255;
  }
  exports.swap8IfBE = exports.isLE ? (n) => n : (n) => byteSwap(n);
  exports.byteSwapIfBE = exports.swap8IfBE;
  function byteSwap32(arr) {
    for (let i = 0;i < arr.length; i++) {
      arr[i] = byteSwap(arr[i]);
    }
    return arr;
  }
  exports.swap32IfBE = exports.isLE ? (u) => u : byteSwap32;
  var hasHexBuiltin = /* @__PURE__ */ (() => typeof Uint8Array.from([]).toHex === "function" && typeof Uint8Array.fromHex === "function")();
  var hexes = /* @__PURE__ */ Array.from({ length: 256 }, (_, i) => i.toString(16).padStart(2, "0"));
  function bytesToHex(bytes) {
    abytes(bytes);
    if (hasHexBuiltin)
      return bytes.toHex();
    let hex = "";
    for (let i = 0;i < bytes.length; i++) {
      hex += hexes[bytes[i]];
    }
    return hex;
  }
  var asciis = { _0: 48, _9: 57, A: 65, F: 70, a: 97, f: 102 };
  function asciiToBase16(ch) {
    if (ch >= asciis._0 && ch <= asciis._9)
      return ch - asciis._0;
    if (ch >= asciis.A && ch <= asciis.F)
      return ch - (asciis.A - 10);
    if (ch >= asciis.a && ch <= asciis.f)
      return ch - (asciis.a - 10);
    return;
  }
  function hexToBytes(hex) {
    if (typeof hex !== "string")
      throw new Error("hex string expected, got " + typeof hex);
    if (hasHexBuiltin)
      return Uint8Array.fromHex(hex);
    const hl = hex.length;
    const al = hl / 2;
    if (hl % 2)
      throw new Error("hex string expected, got unpadded hex of length " + hl);
    const array = new Uint8Array(al);
    for (let ai = 0, hi = 0;ai < al; ai++, hi += 2) {
      const n1 = asciiToBase16(hex.charCodeAt(hi));
      const n2 = asciiToBase16(hex.charCodeAt(hi + 1));
      if (n1 === undefined || n2 === undefined) {
        const char = hex[hi] + hex[hi + 1];
        throw new Error('hex string expected, got non-hex character "' + char + '" at index ' + hi);
      }
      array[ai] = n1 * 16 + n2;
    }
    return array;
  }
  var nextTick = async () => {};
  exports.nextTick = nextTick;
  async function asyncLoop(iters, tick, cb) {
    let ts = Date.now();
    for (let i = 0;i < iters; i++) {
      cb(i);
      const diff = Date.now() - ts;
      if (diff >= 0 && diff < tick)
        continue;
      await (0, exports.nextTick)();
      ts += diff;
    }
  }
  function utf8ToBytes(str) {
    if (typeof str !== "string")
      throw new Error("string expected");
    return new Uint8Array(new TextEncoder().encode(str));
  }
  function bytesToUtf8(bytes) {
    return new TextDecoder().decode(bytes);
  }
  function toBytes(data) {
    if (typeof data === "string")
      data = utf8ToBytes(data);
    abytes(data);
    return data;
  }
  function kdfInputToBytes(data) {
    if (typeof data === "string")
      data = utf8ToBytes(data);
    abytes(data);
    return data;
  }
  function concatBytes(...arrays) {
    let sum = 0;
    for (let i = 0;i < arrays.length; i++) {
      const a = arrays[i];
      abytes(a);
      sum += a.length;
    }
    const res = new Uint8Array(sum);
    for (let i = 0, pad = 0;i < arrays.length; i++) {
      const a = arrays[i];
      res.set(a, pad);
      pad += a.length;
    }
    return res;
  }
  function checkOpts(defaults, opts) {
    if (opts !== undefined && {}.toString.call(opts) !== "[object Object]")
      throw new Error("options should be object or undefined");
    const merged = Object.assign(defaults, opts);
    return merged;
  }

  class Hash {
  }
  exports.Hash = Hash;
  function createHasher(hashCons) {
    const hashC = (msg) => hashCons().update(toBytes(msg)).digest();
    const tmp = hashCons();
    hashC.outputLen = tmp.outputLen;
    hashC.blockLen = tmp.blockLen;
    hashC.create = () => hashCons();
    return hashC;
  }
  function createOptHasher(hashCons) {
    const hashC = (msg, opts) => hashCons(opts).update(toBytes(msg)).digest();
    const tmp = hashCons({});
    hashC.outputLen = tmp.outputLen;
    hashC.blockLen = tmp.blockLen;
    hashC.create = (opts) => hashCons(opts);
    return hashC;
  }
  function createXOFer(hashCons) {
    const hashC = (msg, opts) => hashCons(opts).update(toBytes(msg)).digest();
    const tmp = hashCons({});
    hashC.outputLen = tmp.outputLen;
    hashC.blockLen = tmp.blockLen;
    hashC.create = (opts) => hashCons(opts);
    return hashC;
  }
  exports.wrapConstructor = createHasher;
  exports.wrapConstructorWithOpts = createOptHasher;
  exports.wrapXOFConstructorWithOpts = createXOFer;
  function randomBytes2(bytesLength = 32) {
    if (crypto_1.crypto && typeof crypto_1.crypto.getRandomValues === "function") {
      return crypto_1.crypto.getRandomValues(new Uint8Array(bytesLength));
    }
    if (crypto_1.crypto && typeof crypto_1.crypto.randomBytes === "function") {
      return Uint8Array.from(crypto_1.crypto.randomBytes(bytesLength));
    }
    throw new Error("crypto.getRandomValues must be defined");
  }
});

// node_modules/@noble/hashes/sha3.js
var require_sha3 = __commonJS((exports) => {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.shake256 = exports.shake128 = exports.keccak_512 = exports.keccak_384 = exports.keccak_256 = exports.keccak_224 = exports.sha3_512 = exports.sha3_384 = exports.sha3_256 = exports.sha3_224 = exports.Keccak = undefined;
  exports.keccakP = keccakP;
  var _u64_ts_1 = require__u64();
  var utils_ts_1 = require_utils();
  var _0n = BigInt(0);
  var _1n = BigInt(1);
  var _2n = BigInt(2);
  var _7n = BigInt(7);
  var _256n = BigInt(256);
  var _0x71n = BigInt(113);
  var SHA3_PI = [];
  var SHA3_ROTL = [];
  var _SHA3_IOTA = [];
  for (let round = 0, R = _1n, x = 1, y = 0;round < 24; round++) {
    [x, y] = [y, (2 * x + 3 * y) % 5];
    SHA3_PI.push(2 * (5 * y + x));
    SHA3_ROTL.push((round + 1) * (round + 2) / 2 % 64);
    let t = _0n;
    for (let j = 0;j < 7; j++) {
      R = (R << _1n ^ (R >> _7n) * _0x71n) % _256n;
      if (R & _2n)
        t ^= _1n << (_1n << /* @__PURE__ */ BigInt(j)) - _1n;
    }
    _SHA3_IOTA.push(t);
  }
  var IOTAS = (0, _u64_ts_1.split)(_SHA3_IOTA, true);
  var SHA3_IOTA_H = IOTAS[0];
  var SHA3_IOTA_L = IOTAS[1];
  var rotlH = (h, l, s) => s > 32 ? (0, _u64_ts_1.rotlBH)(h, l, s) : (0, _u64_ts_1.rotlSH)(h, l, s);
  var rotlL = (h, l, s) => s > 32 ? (0, _u64_ts_1.rotlBL)(h, l, s) : (0, _u64_ts_1.rotlSL)(h, l, s);
  function keccakP(s, rounds = 24) {
    const B = new Uint32Array(5 * 2);
    for (let round = 24 - rounds;round < 24; round++) {
      for (let x = 0;x < 10; x++)
        B[x] = s[x] ^ s[x + 10] ^ s[x + 20] ^ s[x + 30] ^ s[x + 40];
      for (let x = 0;x < 10; x += 2) {
        const idx1 = (x + 8) % 10;
        const idx0 = (x + 2) % 10;
        const B0 = B[idx0];
        const B1 = B[idx0 + 1];
        const Th = rotlH(B0, B1, 1) ^ B[idx1];
        const Tl = rotlL(B0, B1, 1) ^ B[idx1 + 1];
        for (let y = 0;y < 50; y += 10) {
          s[x + y] ^= Th;
          s[x + y + 1] ^= Tl;
        }
      }
      let curH = s[2];
      let curL = s[3];
      for (let t = 0;t < 24; t++) {
        const shift = SHA3_ROTL[t];
        const Th = rotlH(curH, curL, shift);
        const Tl = rotlL(curH, curL, shift);
        const PI = SHA3_PI[t];
        curH = s[PI];
        curL = s[PI + 1];
        s[PI] = Th;
        s[PI + 1] = Tl;
      }
      for (let y = 0;y < 50; y += 10) {
        for (let x = 0;x < 10; x++)
          B[x] = s[y + x];
        for (let x = 0;x < 10; x++)
          s[y + x] ^= ~B[(x + 2) % 10] & B[(x + 4) % 10];
      }
      s[0] ^= SHA3_IOTA_H[round];
      s[1] ^= SHA3_IOTA_L[round];
    }
    (0, utils_ts_1.clean)(B);
  }

  class Keccak extends utils_ts_1.Hash {
    constructor(blockLen, suffix, outputLen, enableXOF = false, rounds = 24) {
      super();
      this.pos = 0;
      this.posOut = 0;
      this.finished = false;
      this.destroyed = false;
      this.enableXOF = false;
      this.blockLen = blockLen;
      this.suffix = suffix;
      this.outputLen = outputLen;
      this.enableXOF = enableXOF;
      this.rounds = rounds;
      (0, utils_ts_1.anumber)(outputLen);
      if (!(0 < blockLen && blockLen < 200))
        throw new Error("only keccak-f1600 function is supported");
      this.state = new Uint8Array(200);
      this.state32 = (0, utils_ts_1.u32)(this.state);
    }
    clone() {
      return this._cloneInto();
    }
    keccak() {
      (0, utils_ts_1.swap32IfBE)(this.state32);
      keccakP(this.state32, this.rounds);
      (0, utils_ts_1.swap32IfBE)(this.state32);
      this.posOut = 0;
      this.pos = 0;
    }
    update(data) {
      (0, utils_ts_1.aexists)(this);
      data = (0, utils_ts_1.toBytes)(data);
      (0, utils_ts_1.abytes)(data);
      const { blockLen, state } = this;
      const len = data.length;
      for (let pos = 0;pos < len; ) {
        const take = Math.min(blockLen - this.pos, len - pos);
        for (let i = 0;i < take; i++)
          state[this.pos++] ^= data[pos++];
        if (this.pos === blockLen)
          this.keccak();
      }
      return this;
    }
    finish() {
      if (this.finished)
        return;
      this.finished = true;
      const { state, suffix, pos, blockLen } = this;
      state[pos] ^= suffix;
      if ((suffix & 128) !== 0 && pos === blockLen - 1)
        this.keccak();
      state[blockLen - 1] ^= 128;
      this.keccak();
    }
    writeInto(out) {
      (0, utils_ts_1.aexists)(this, false);
      (0, utils_ts_1.abytes)(out);
      this.finish();
      const bufferOut = this.state;
      const { blockLen } = this;
      for (let pos = 0, len = out.length;pos < len; ) {
        if (this.posOut >= blockLen)
          this.keccak();
        const take = Math.min(blockLen - this.posOut, len - pos);
        out.set(bufferOut.subarray(this.posOut, this.posOut + take), pos);
        this.posOut += take;
        pos += take;
      }
      return out;
    }
    xofInto(out) {
      if (!this.enableXOF)
        throw new Error("XOF is not possible for this instance");
      return this.writeInto(out);
    }
    xof(bytes) {
      (0, utils_ts_1.anumber)(bytes);
      return this.xofInto(new Uint8Array(bytes));
    }
    digestInto(out) {
      (0, utils_ts_1.aoutput)(out, this);
      if (this.finished)
        throw new Error("digest() was already called");
      this.writeInto(out);
      this.destroy();
      return out;
    }
    digest() {
      return this.digestInto(new Uint8Array(this.outputLen));
    }
    destroy() {
      this.destroyed = true;
      (0, utils_ts_1.clean)(this.state);
    }
    _cloneInto(to) {
      const { blockLen, suffix, outputLen, rounds, enableXOF } = this;
      to || (to = new Keccak(blockLen, suffix, outputLen, enableXOF, rounds));
      to.state32.set(this.state32);
      to.pos = this.pos;
      to.posOut = this.posOut;
      to.finished = this.finished;
      to.rounds = rounds;
      to.suffix = suffix;
      to.outputLen = outputLen;
      to.enableXOF = enableXOF;
      to.destroyed = this.destroyed;
      return to;
    }
  }
  exports.Keccak = Keccak;
  var gen = (suffix, blockLen, outputLen) => (0, utils_ts_1.createHasher)(() => new Keccak(blockLen, suffix, outputLen));
  exports.sha3_224 = (() => gen(6, 144, 224 / 8))();
  exports.sha3_256 = (() => gen(6, 136, 256 / 8))();
  exports.sha3_384 = (() => gen(6, 104, 384 / 8))();
  exports.sha3_512 = (() => gen(6, 72, 512 / 8))();
  exports.keccak_224 = (() => gen(1, 144, 224 / 8))();
  exports.keccak_256 = (() => gen(1, 136, 256 / 8))();
  exports.keccak_384 = (() => gen(1, 104, 384 / 8))();
  exports.keccak_512 = (() => gen(1, 72, 512 / 8))();
  var genShake = (suffix, blockLen, outputLen) => (0, utils_ts_1.createXOFer)((opts = {}) => new Keccak(blockLen, suffix, opts.dkLen === undefined ? outputLen : opts.dkLen, true));
  exports.shake128 = (() => genShake(31, 168, 128 / 8))();
  exports.shake256 = (() => genShake(31, 136, 256 / 8))();
});

// node_modules/@paralleldrive/cuid2/src/index.js
var require_src = __commonJS((exports, module) => {
  var { sha3_512: sha3 } = require_sha3();
  var defaultLength = 24;
  var bigLength = 32;
  var createEntropy = (length = 4, random = Math.random) => {
    let entropy = "";
    while (entropy.length < length) {
      entropy = entropy + Math.floor(random() * 36).toString(36);
    }
    return entropy;
  };
  function bufToBigInt(buf) {
    let bits = 8n;
    let value = 0n;
    for (const i of buf.values()) {
      const bi = BigInt(i);
      value = (value << bits) + bi;
    }
    return value;
  }
  var hash = (input = "") => {
    return bufToBigInt(sha3(input)).toString(36).slice(1);
  };
  var alphabet = Array.from({ length: 26 }, (x, i) => String.fromCharCode(i + 97));
  var randomLetter = (random) => alphabet[Math.floor(random() * alphabet.length)];
  var createFingerprint = ({
    globalObj = typeof global !== "undefined" ? global : typeof window !== "undefined" ? window : {},
    random = Math.random
  } = {}) => {
    const globals = Object.keys(globalObj).toString();
    const sourceString = globals.length ? globals + createEntropy(bigLength, random) : createEntropy(bigLength, random);
    return hash(sourceString).substring(0, bigLength);
  };
  var createCounter = (count) => () => {
    return count++;
  };
  var initialCountMax = 476782367;
  var init = ({
    random = Math.random,
    counter = createCounter(Math.floor(random() * initialCountMax)),
    length = defaultLength,
    fingerprint = createFingerprint({ random })
  } = {}) => {
    return function cuid2() {
      const firstLetter = randomLetter(random);
      const time = Date.now().toString(36);
      const count = counter().toString(36);
      const salt = createEntropy(length, random);
      const hashInput = `${time + salt + count + fingerprint}`;
      return `${firstLetter + hash(hashInput).substring(1, length)}`;
    };
  };
  var createId = init();
  var isCuid = (id, { minLength = 2, maxLength = bigLength } = {}) => {
    const length = id.length;
    const regex = /^[0-9a-z]+$/;
    try {
      if (typeof id === "string" && length >= minLength && length <= maxLength && regex.test(id))
        return true;
    } finally {}
    return false;
  };
  exports.getConstants = () => ({ defaultLength, bigLength });
  exports.init = init;
  exports.createId = createId;
  exports.bufToBigInt = bufToBigInt;
  exports.createCounter = createCounter;
  exports.createFingerprint = createFingerprint;
  exports.isCuid = isCuid;
});

// node_modules/@prisma/client-runtime-utils/dist/index.mjs
var exports_dist = {};
__export(exports_dist, {
  sql: () => sql,
  raw: () => raw,
  join: () => join,
  isObjectEnumValue: () => isObjectEnumValue,
  isJsonNull: () => isJsonNull,
  isDbNull: () => isDbNull,
  isAnyNull: () => isAnyNull,
  hasBatchIndex: () => hasBatchIndex,
  empty: () => empty,
  Sql: () => Sql,
  PrismaClientValidationError: () => PrismaClientValidationError,
  PrismaClientUnknownRequestError: () => PrismaClientUnknownRequestError,
  PrismaClientRustPanicError: () => PrismaClientRustPanicError,
  PrismaClientRustError: () => PrismaClientRustError,
  PrismaClientKnownRequestError: () => PrismaClientKnownRequestError,
  PrismaClientInitializationError: () => PrismaClientInitializationError,
  ObjectEnumValue: () => ObjectEnumValue,
  NullTypes: () => NullTypes,
  JsonNullClass: () => JsonNullClass,
  JsonNull: () => JsonNull,
  Decimal: () => Decimal,
  DbNullClass: () => DbNullClass,
  DbNull: () => DbNull,
  AnyNullClass: () => AnyNullClass,
  AnyNull: () => AnyNull
});
function hasBatchIndex(value) {
  return typeof value["batchRequestIdx"] === "number";
}
function setClassName(classObject, name) {
  Object.defineProperty(classObject, "name", {
    value: name,
    configurable: true
  });
}
function getBacktrace(log3) {
  if (log3.fields?.message) {
    let str = log3.fields?.message;
    if (log3.fields?.file) {
      str += ` in ${log3.fields.file}`;
      if (log3.fields?.line) {
        str += `:${log3.fields.line}`;
      }
      if (log3.fields?.column) {
        str += `:${log3.fields.column}`;
      }
    }
    if (log3.fields?.reason) {
      str += `
${log3.fields?.reason}`;
    }
    return str;
  }
  return "Unknown error";
}
function isPanic(err) {
  return err.fields?.message === "PANIC";
}
function setClassName2(classObject, name) {
  Object.defineProperty(classObject, "name", {
    value: name,
    configurable: true
  });
}
function isObjectEnumValue(value) {
  return typeof value === "object" && value !== null && value[PRISMA_OBJECT_ENUM_VALUE] === true;
}
function isDbNull(value) {
  return value === DbNull;
}
function isJsonNull(value) {
  return value === JsonNull;
}
function isAnyNull(value) {
  return value === AnyNull;
}
function digitsToString(d) {
  var i, k, ws, indexOfLastWord = d.length - 1, str = "", w = d[0];
  if (indexOfLastWord > 0) {
    str += w;
    for (i = 1;i < indexOfLastWord; i++) {
      ws = d[i] + "";
      k = LOG_BASE - ws.length;
      if (k)
        str += getZeroString(k);
      str += ws;
    }
    w = d[i];
    ws = w + "";
    k = LOG_BASE - ws.length;
    if (k)
      str += getZeroString(k);
  } else if (w === 0) {
    return "0";
  }
  for (;w % 10 === 0; )
    w /= 10;
  return str + w;
}
function checkInt32(i, min2, max2) {
  if (i !== ~~i || i < min2 || i > max2) {
    throw Error(invalidArgument + i);
  }
}
function checkRoundingDigits(d, i, rm, repeating) {
  var di, k, r, rd;
  for (k = d[0];k >= 10; k /= 10)
    --i;
  if (--i < 0) {
    i += LOG_BASE;
    di = 0;
  } else {
    di = Math.ceil((i + 1) / LOG_BASE);
    i %= LOG_BASE;
  }
  k = mathpow(10, LOG_BASE - i);
  rd = d[di] % k | 0;
  if (repeating == null) {
    if (i < 3) {
      if (i == 0)
        rd = rd / 100 | 0;
      else if (i == 1)
        rd = rd / 10 | 0;
      r = rm < 4 && rd == 99999 || rm > 3 && rd == 49999 || rd == 50000 || rd == 0;
    } else {
      r = (rm < 4 && rd + 1 == k || rm > 3 && rd + 1 == k / 2) && (d[di + 1] / k / 100 | 0) == mathpow(10, i - 2) - 1 || (rd == k / 2 || rd == 0) && (d[di + 1] / k / 100 | 0) == 0;
    }
  } else {
    if (i < 4) {
      if (i == 0)
        rd = rd / 1000 | 0;
      else if (i == 1)
        rd = rd / 100 | 0;
      else if (i == 2)
        rd = rd / 10 | 0;
      r = (repeating || rm < 4) && rd == 9999 || !repeating && rm > 3 && rd == 4999;
    } else {
      r = ((repeating || rm < 4) && rd + 1 == k || !repeating && rm > 3 && rd + 1 == k / 2) && (d[di + 1] / k / 1000 | 0) == mathpow(10, i - 3) - 1;
    }
  }
  return r;
}
function convertBase(str, baseIn, baseOut) {
  var j, arr = [0], arrL, i = 0, strL = str.length;
  for (;i < strL; ) {
    for (arrL = arr.length;arrL--; )
      arr[arrL] *= baseIn;
    arr[0] += NUMERALS.indexOf(str.charAt(i++));
    for (j = 0;j < arr.length; j++) {
      if (arr[j] > baseOut - 1) {
        if (arr[j + 1] === undefined)
          arr[j + 1] = 0;
        arr[j + 1] += arr[j] / baseOut | 0;
        arr[j] %= baseOut;
      }
    }
  }
  return arr.reverse();
}
function cosine(Ctor, x) {
  var k, len, y;
  if (x.isZero())
    return x;
  len = x.d.length;
  if (len < 32) {
    k = Math.ceil(len / 3);
    y = (1 / tinyPow(4, k)).toString();
  } else {
    k = 16;
    y = "2.3283064365386962890625e-10";
  }
  Ctor.precision += k;
  x = taylorSeries(Ctor, 1, x.times(y), new Ctor(1));
  for (var i = k;i--; ) {
    var cos2x = x.times(x);
    x = cos2x.times(cos2x).minus(cos2x).times(8).plus(1);
  }
  Ctor.precision -= k;
  return x;
}
function finalise(x, sd, rm, isTruncated) {
  var digits, i, j, k, rd, roundUp, w, xd, xdi, Ctor = x.constructor;
  out:
    if (sd != null) {
      xd = x.d;
      if (!xd)
        return x;
      for (digits = 1, k = xd[0];k >= 10; k /= 10)
        digits++;
      i = sd - digits;
      if (i < 0) {
        i += LOG_BASE;
        j = sd;
        w = xd[xdi = 0];
        rd = w / mathpow(10, digits - j - 1) % 10 | 0;
      } else {
        xdi = Math.ceil((i + 1) / LOG_BASE);
        k = xd.length;
        if (xdi >= k) {
          if (isTruncated) {
            for (;k++ <= xdi; )
              xd.push(0);
            w = rd = 0;
            digits = 1;
            i %= LOG_BASE;
            j = i - LOG_BASE + 1;
          } else {
            break out;
          }
        } else {
          w = k = xd[xdi];
          for (digits = 1;k >= 10; k /= 10)
            digits++;
          i %= LOG_BASE;
          j = i - LOG_BASE + digits;
          rd = j < 0 ? 0 : w / mathpow(10, digits - j - 1) % 10 | 0;
        }
      }
      isTruncated = isTruncated || sd < 0 || xd[xdi + 1] !== undefined || (j < 0 ? w : w % mathpow(10, digits - j - 1));
      roundUp = rm < 4 ? (rd || isTruncated) && (rm == 0 || rm == (x.s < 0 ? 3 : 2)) : rd > 5 || rd == 5 && (rm == 4 || isTruncated || rm == 6 && (i > 0 ? j > 0 ? w / mathpow(10, digits - j) : 0 : xd[xdi - 1]) % 10 & 1 || rm == (x.s < 0 ? 8 : 7));
      if (sd < 1 || !xd[0]) {
        xd.length = 0;
        if (roundUp) {
          sd -= x.e + 1;
          xd[0] = mathpow(10, (LOG_BASE - sd % LOG_BASE) % LOG_BASE);
          x.e = -sd || 0;
        } else {
          xd[0] = x.e = 0;
        }
        return x;
      }
      if (i == 0) {
        xd.length = xdi;
        k = 1;
        xdi--;
      } else {
        xd.length = xdi + 1;
        k = mathpow(10, LOG_BASE - i);
        xd[xdi] = j > 0 ? (w / mathpow(10, digits - j) % mathpow(10, j) | 0) * k : 0;
      }
      if (roundUp) {
        for (;; ) {
          if (xdi == 0) {
            for (i = 1, j = xd[0];j >= 10; j /= 10)
              i++;
            j = xd[0] += k;
            for (k = 1;j >= 10; j /= 10)
              k++;
            if (i != k) {
              x.e++;
              if (xd[0] == BASE)
                xd[0] = 1;
            }
            break;
          } else {
            xd[xdi] += k;
            if (xd[xdi] != BASE)
              break;
            xd[xdi--] = 0;
            k = 1;
          }
        }
      }
      for (i = xd.length;xd[--i] === 0; )
        xd.pop();
    }
  if (external) {
    if (x.e > Ctor.maxE) {
      x.d = null;
      x.e = NaN;
    } else if (x.e < Ctor.minE) {
      x.e = 0;
      x.d = [0];
    }
  }
  return x;
}
function finiteToString(x, isExp, sd) {
  if (!x.isFinite())
    return nonFiniteToString(x);
  var k, e = x.e, str = digitsToString(x.d), len = str.length;
  if (isExp) {
    if (sd && (k = sd - len) > 0) {
      str = str.charAt(0) + "." + str.slice(1) + getZeroString(k);
    } else if (len > 1) {
      str = str.charAt(0) + "." + str.slice(1);
    }
    str = str + (x.e < 0 ? "e" : "e+") + x.e;
  } else if (e < 0) {
    str = "0." + getZeroString(-e - 1) + str;
    if (sd && (k = sd - len) > 0)
      str += getZeroString(k);
  } else if (e >= len) {
    str += getZeroString(e + 1 - len);
    if (sd && (k = sd - e - 1) > 0)
      str = str + "." + getZeroString(k);
  } else {
    if ((k = e + 1) < len)
      str = str.slice(0, k) + "." + str.slice(k);
    if (sd && (k = sd - len) > 0) {
      if (e + 1 === len)
        str += ".";
      str += getZeroString(k);
    }
  }
  return str;
}
function getBase10Exponent(digits, e) {
  var w = digits[0];
  for (e *= LOG_BASE;w >= 10; w /= 10)
    e++;
  return e;
}
function getLn10(Ctor, sd, pr) {
  if (sd > LN10_PRECISION) {
    external = true;
    if (pr)
      Ctor.precision = pr;
    throw Error(precisionLimitExceeded);
  }
  return finalise(new Ctor(LN10), sd, 1, true);
}
function getPi(Ctor, sd, rm) {
  if (sd > PI_PRECISION)
    throw Error(precisionLimitExceeded);
  return finalise(new Ctor(PI), sd, rm, true);
}
function getPrecision(digits) {
  var w = digits.length - 1, len = w * LOG_BASE + 1;
  w = digits[w];
  if (w) {
    for (;w % 10 == 0; w /= 10)
      len--;
    for (w = digits[0];w >= 10; w /= 10)
      len++;
  }
  return len;
}
function getZeroString(k) {
  var zs = "";
  for (;k--; )
    zs += "0";
  return zs;
}
function intPow(Ctor, x, n, pr) {
  var isTruncated, r = new Ctor(1), k = Math.ceil(pr / LOG_BASE + 4);
  external = false;
  for (;; ) {
    if (n % 2) {
      r = r.times(x);
      if (truncate(r.d, k))
        isTruncated = true;
    }
    n = mathfloor(n / 2);
    if (n === 0) {
      n = r.d.length - 1;
      if (isTruncated && r.d[n] === 0)
        ++r.d[n];
      break;
    }
    x = x.times(x);
    truncate(x.d, k);
  }
  external = true;
  return r;
}
function isOdd(n) {
  return n.d[n.d.length - 1] & 1;
}
function maxOrMin(Ctor, args, n) {
  var k, y, x = new Ctor(args[0]), i = 0;
  for (;++i < args.length; ) {
    y = new Ctor(args[i]);
    if (!y.s) {
      x = y;
      break;
    }
    k = x.cmp(y);
    if (k === n || k === 0 && x.s === n) {
      x = y;
    }
  }
  return x;
}
function naturalExponential(x, sd) {
  var denominator, guard, j, pow2, sum2, t, wpr, rep = 0, i = 0, k = 0, Ctor = x.constructor, rm = Ctor.rounding, pr = Ctor.precision;
  if (!x.d || !x.d[0] || x.e > 17) {
    return new Ctor(x.d ? !x.d[0] ? 1 : x.s < 0 ? 0 : 1 / 0 : x.s ? x.s < 0 ? 0 : x : 0 / 0);
  }
  if (sd == null) {
    external = false;
    wpr = pr;
  } else {
    wpr = sd;
  }
  t = new Ctor(0.03125);
  while (x.e > -2) {
    x = x.times(t);
    k += 5;
  }
  guard = Math.log(mathpow(2, k)) / Math.LN10 * 2 + 5 | 0;
  wpr += guard;
  denominator = pow2 = sum2 = new Ctor(1);
  Ctor.precision = wpr;
  for (;; ) {
    pow2 = finalise(pow2.times(x), wpr, 1);
    denominator = denominator.times(++i);
    t = sum2.plus(divide(pow2, denominator, wpr, 1));
    if (digitsToString(t.d).slice(0, wpr) === digitsToString(sum2.d).slice(0, wpr)) {
      j = k;
      while (j--)
        sum2 = finalise(sum2.times(sum2), wpr, 1);
      if (sd == null) {
        if (rep < 3 && checkRoundingDigits(sum2.d, wpr - guard, rm, rep)) {
          Ctor.precision = wpr += 10;
          denominator = pow2 = t = new Ctor(1);
          i = 0;
          rep++;
        } else {
          return finalise(sum2, Ctor.precision = pr, rm, external = true);
        }
      } else {
        Ctor.precision = pr;
        return sum2;
      }
    }
    sum2 = t;
  }
}
function naturalLogarithm(y, sd) {
  var c, c0, denominator, e, numerator, rep, sum2, t, wpr, x1, x2, n = 1, guard = 10, x = y, xd = x.d, Ctor = x.constructor, rm = Ctor.rounding, pr = Ctor.precision;
  if (x.s < 0 || !xd || !xd[0] || !x.e && xd[0] == 1 && xd.length == 1) {
    return new Ctor(xd && !xd[0] ? -1 / 0 : x.s != 1 ? NaN : xd ? 0 : x);
  }
  if (sd == null) {
    external = false;
    wpr = pr;
  } else {
    wpr = sd;
  }
  Ctor.precision = wpr += guard;
  c = digitsToString(xd);
  c0 = c.charAt(0);
  if (Math.abs(e = x.e) < 1500000000000000) {
    while (c0 < 7 && c0 != 1 || c0 == 1 && c.charAt(1) > 3) {
      x = x.times(y);
      c = digitsToString(x.d);
      c0 = c.charAt(0);
      n++;
    }
    e = x.e;
    if (c0 > 1) {
      x = new Ctor("0." + c);
      e++;
    } else {
      x = new Ctor(c0 + "." + c.slice(1));
    }
  } else {
    t = getLn10(Ctor, wpr + 2, pr).times(e + "");
    x = naturalLogarithm(new Ctor(c0 + "." + c.slice(1)), wpr - guard).plus(t);
    Ctor.precision = pr;
    return sd == null ? finalise(x, pr, rm, external = true) : x;
  }
  x1 = x;
  sum2 = numerator = x = divide(x.minus(1), x.plus(1), wpr, 1);
  x2 = finalise(x.times(x), wpr, 1);
  denominator = 3;
  for (;; ) {
    numerator = finalise(numerator.times(x2), wpr, 1);
    t = sum2.plus(divide(numerator, new Ctor(denominator), wpr, 1));
    if (digitsToString(t.d).slice(0, wpr) === digitsToString(sum2.d).slice(0, wpr)) {
      sum2 = sum2.times(2);
      if (e !== 0)
        sum2 = sum2.plus(getLn10(Ctor, wpr + 2, pr).times(e + ""));
      sum2 = divide(sum2, new Ctor(n), wpr, 1);
      if (sd == null) {
        if (checkRoundingDigits(sum2.d, wpr - guard, rm, rep)) {
          Ctor.precision = wpr += guard;
          t = numerator = x = divide(x1.minus(1), x1.plus(1), wpr, 1);
          x2 = finalise(x.times(x), wpr, 1);
          denominator = rep = 1;
        } else {
          return finalise(sum2, Ctor.precision = pr, rm, external = true);
        }
      } else {
        Ctor.precision = pr;
        return sum2;
      }
    }
    sum2 = t;
    denominator += 2;
  }
}
function nonFiniteToString(x) {
  return String(x.s * x.s / 0);
}
function parseDecimal(x, str) {
  var e, i, len;
  if ((e = str.indexOf(".")) > -1)
    str = str.replace(".", "");
  if ((i = str.search(/e/i)) > 0) {
    if (e < 0)
      e = i;
    e += +str.slice(i + 1);
    str = str.substring(0, i);
  } else if (e < 0) {
    e = str.length;
  }
  for (i = 0;str.charCodeAt(i) === 48; i++)
    ;
  for (len = str.length;str.charCodeAt(len - 1) === 48; --len)
    ;
  str = str.slice(i, len);
  if (str) {
    len -= i;
    x.e = e = e - i - 1;
    x.d = [];
    i = (e + 1) % LOG_BASE;
    if (e < 0)
      i += LOG_BASE;
    if (i < len) {
      if (i)
        x.d.push(+str.slice(0, i));
      for (len -= LOG_BASE;i < len; )
        x.d.push(+str.slice(i, i += LOG_BASE));
      str = str.slice(i);
      i = LOG_BASE - str.length;
    } else {
      i -= len;
    }
    for (;i--; )
      str += "0";
    x.d.push(+str);
    if (external) {
      if (x.e > x.constructor.maxE) {
        x.d = null;
        x.e = NaN;
      } else if (x.e < x.constructor.minE) {
        x.e = 0;
        x.d = [0];
      }
    }
  } else {
    x.e = 0;
    x.d = [0];
  }
  return x;
}
function parseOther(x, str) {
  var base, Ctor, divisor, i, isFloat, len, p, xd, xe;
  if (str.indexOf("_") > -1) {
    str = str.replace(/(\d)_(?=\d)/g, "$1");
    if (isDecimal.test(str))
      return parseDecimal(x, str);
  } else if (str === "Infinity" || str === "NaN") {
    if (!+str)
      x.s = NaN;
    x.e = NaN;
    x.d = null;
    return x;
  }
  if (isHex.test(str)) {
    base = 16;
    str = str.toLowerCase();
  } else if (isBinary.test(str)) {
    base = 2;
  } else if (isOctal.test(str)) {
    base = 8;
  } else {
    throw Error(invalidArgument + str);
  }
  i = str.search(/p/i);
  if (i > 0) {
    p = +str.slice(i + 1);
    str = str.substring(2, i);
  } else {
    str = str.slice(2);
  }
  i = str.indexOf(".");
  isFloat = i >= 0;
  Ctor = x.constructor;
  if (isFloat) {
    str = str.replace(".", "");
    len = str.length;
    i = len - i;
    divisor = intPow(Ctor, new Ctor(base), i, i * 2);
  }
  xd = convertBase(str, base, BASE);
  xe = xd.length - 1;
  for (i = xe;xd[i] === 0; --i)
    xd.pop();
  if (i < 0)
    return new Ctor(x.s * 0);
  x.e = getBase10Exponent(xd, xe);
  x.d = xd;
  external = false;
  if (isFloat)
    x = divide(x, divisor, len * 4);
  if (p)
    x = x.times(Math.abs(p) < 54 ? mathpow(2, p) : Decimal.pow(2, p));
  external = true;
  return x;
}
function sine(Ctor, x) {
  var k, len = x.d.length;
  if (len < 3) {
    return x.isZero() ? x : taylorSeries(Ctor, 2, x, x);
  }
  k = 1.4 * Math.sqrt(len);
  k = k > 16 ? 16 : k | 0;
  x = x.times(1 / tinyPow(5, k));
  x = taylorSeries(Ctor, 2, x, x);
  var sin2_x, d5 = new Ctor(5), d16 = new Ctor(16), d20 = new Ctor(20);
  for (;k--; ) {
    sin2_x = x.times(x);
    x = x.times(d5.plus(sin2_x.times(d16.times(sin2_x).minus(d20))));
  }
  return x;
}
function taylorSeries(Ctor, n, x, y, isHyperbolic) {
  var j, t, u, x2, i = 1, pr = Ctor.precision, k = Math.ceil(pr / LOG_BASE);
  external = false;
  x2 = x.times(x);
  u = new Ctor(y);
  for (;; ) {
    t = divide(u.times(x2), new Ctor(n++ * n++), pr, 1);
    u = isHyperbolic ? y.plus(t) : y.minus(t);
    y = divide(t.times(x2), new Ctor(n++ * n++), pr, 1);
    t = u.plus(y);
    if (t.d[k] !== undefined) {
      for (j = k;t.d[j] === u.d[j] && j--; )
        ;
      if (j == -1)
        break;
    }
    j = u;
    u = y;
    y = t;
    t = j;
    i++;
  }
  external = true;
  t.d.length = k + 1;
  return t;
}
function tinyPow(b, e) {
  var n = b;
  while (--e)
    n *= b;
  return n;
}
function toLessThanHalfPi(Ctor, x) {
  var t, isNeg = x.s < 0, pi = getPi(Ctor, Ctor.precision, 1), halfPi = pi.times(0.5);
  x = x.abs();
  if (x.lte(halfPi)) {
    quadrant = isNeg ? 4 : 1;
    return x;
  }
  t = x.divToInt(pi);
  if (t.isZero()) {
    quadrant = isNeg ? 3 : 2;
  } else {
    x = x.minus(t.times(pi));
    if (x.lte(halfPi)) {
      quadrant = isOdd(t) ? isNeg ? 2 : 3 : isNeg ? 4 : 1;
      return x;
    }
    quadrant = isOdd(t) ? isNeg ? 1 : 4 : isNeg ? 3 : 2;
  }
  return x.minus(pi).abs();
}
function toStringBinary(x, baseOut, sd, rm) {
  var base, e, i, k, len, roundUp, str, xd, y, Ctor = x.constructor, isExp = sd !== undefined;
  if (isExp) {
    checkInt32(sd, 1, MAX_DIGITS2);
    if (rm === undefined)
      rm = Ctor.rounding;
    else
      checkInt32(rm, 0, 8);
  } else {
    sd = Ctor.precision;
    rm = Ctor.rounding;
  }
  if (!x.isFinite()) {
    str = nonFiniteToString(x);
  } else {
    str = finiteToString(x);
    i = str.indexOf(".");
    if (isExp) {
      base = 2;
      if (baseOut == 16) {
        sd = sd * 4 - 3;
      } else if (baseOut == 8) {
        sd = sd * 3 - 2;
      }
    } else {
      base = baseOut;
    }
    if (i >= 0) {
      str = str.replace(".", "");
      y = new Ctor(1);
      y.e = str.length - i;
      y.d = convertBase(finiteToString(y), 10, base);
      y.e = y.d.length;
    }
    xd = convertBase(str, 10, base);
    e = len = xd.length;
    for (;xd[--len] == 0; )
      xd.pop();
    if (!xd[0]) {
      str = isExp ? "0p+0" : "0";
    } else {
      if (i < 0) {
        e--;
      } else {
        x = new Ctor(x);
        x.d = xd;
        x.e = e;
        x = divide(x, y, sd, rm, 0, base);
        xd = x.d;
        e = x.e;
        roundUp = inexact;
      }
      i = xd[sd];
      k = base / 2;
      roundUp = roundUp || xd[sd + 1] !== undefined;
      roundUp = rm < 4 ? (i !== undefined || roundUp) && (rm === 0 || rm === (x.s < 0 ? 3 : 2)) : i > k || i === k && (rm === 4 || roundUp || rm === 6 && xd[sd - 1] & 1 || rm === (x.s < 0 ? 8 : 7));
      xd.length = sd;
      if (roundUp) {
        for (;++xd[--sd] > base - 1; ) {
          xd[sd] = 0;
          if (!sd) {
            ++e;
            xd.unshift(1);
          }
        }
      }
      for (len = xd.length;!xd[len - 1]; --len)
        ;
      for (i = 0, str = "";i < len; i++)
        str += NUMERALS.charAt(xd[i]);
      if (isExp) {
        if (len > 1) {
          if (baseOut == 16 || baseOut == 8) {
            i = baseOut == 16 ? 4 : 3;
            for (--len;len % i; len++)
              str += "0";
            xd = convertBase(str, base, baseOut);
            for (len = xd.length;!xd[len - 1]; --len)
              ;
            for (i = 1, str = "1.";i < len; i++)
              str += NUMERALS.charAt(xd[i]);
          } else {
            str = str.charAt(0) + "." + str.slice(1);
          }
        }
        str = str + (e < 0 ? "p" : "p+") + e;
      } else if (e < 0) {
        for (;++e; )
          str = "0" + str;
        str = "0." + str;
      } else {
        if (++e > len)
          for (e -= len;e--; )
            str += "0";
        else if (e < len)
          str = str.slice(0, e) + "." + str.slice(e);
      }
    }
    str = (baseOut == 16 ? "0x" : baseOut == 2 ? "0b" : baseOut == 8 ? "0o" : "") + str;
  }
  return x.s < 0 ? "-" + str : str;
}
function truncate(arr, len) {
  if (arr.length > len) {
    arr.length = len;
    return true;
  }
}
function abs(x) {
  return new this(x).abs();
}
function acos(x) {
  return new this(x).acos();
}
function acosh(x) {
  return new this(x).acosh();
}
function add(x, y) {
  return new this(x).plus(y);
}
function asin(x) {
  return new this(x).asin();
}
function asinh(x) {
  return new this(x).asinh();
}
function atan(x) {
  return new this(x).atan();
}
function atanh(x) {
  return new this(x).atanh();
}
function atan2(y, x) {
  y = new this(y);
  x = new this(x);
  var r, pr = this.precision, rm = this.rounding, wpr = pr + 4;
  if (!y.s || !x.s) {
    r = new this(NaN);
  } else if (!y.d && !x.d) {
    r = getPi(this, wpr, 1).times(x.s > 0 ? 0.25 : 0.75);
    r.s = y.s;
  } else if (!x.d || y.isZero()) {
    r = x.s < 0 ? getPi(this, pr, rm) : new this(0);
    r.s = y.s;
  } else if (!y.d || x.isZero()) {
    r = getPi(this, wpr, 1).times(0.5);
    r.s = y.s;
  } else if (x.s < 0) {
    this.precision = wpr;
    this.rounding = 1;
    r = this.atan(divide(y, x, wpr, 1));
    x = getPi(this, wpr, 1);
    this.precision = pr;
    this.rounding = rm;
    r = y.s < 0 ? r.minus(x) : r.plus(x);
  } else {
    r = this.atan(divide(y, x, wpr, 1));
  }
  return r;
}
function cbrt(x) {
  return new this(x).cbrt();
}
function ceil(x) {
  return finalise(x = new this(x), x.e + 1, 2);
}
function clamp(x, min2, max2) {
  return new this(x).clamp(min2, max2);
}
function config(obj) {
  if (!obj || typeof obj !== "object")
    throw Error(decimalError + "Object expected");
  var i, p, v, useDefaults = obj.defaults === true, ps = [
    "precision",
    1,
    MAX_DIGITS2,
    "rounding",
    0,
    8,
    "toExpNeg",
    -EXP_LIMIT,
    0,
    "toExpPos",
    0,
    EXP_LIMIT,
    "maxE",
    0,
    EXP_LIMIT,
    "minE",
    -EXP_LIMIT,
    0,
    "modulo",
    0,
    9
  ];
  for (i = 0;i < ps.length; i += 3) {
    if (p = ps[i], useDefaults)
      this[p] = DEFAULTS[p];
    if ((v = obj[p]) !== undefined) {
      if (mathfloor(v) === v && v >= ps[i + 1] && v <= ps[i + 2])
        this[p] = v;
      else
        throw Error(invalidArgument + p + ": " + v);
    }
  }
  if (p = "crypto", useDefaults)
    this[p] = DEFAULTS[p];
  if ((v = obj[p]) !== undefined) {
    if (v === true || v === false || v === 0 || v === 1) {
      if (v) {
        if (typeof crypto != "undefined" && crypto && (crypto.getRandomValues || crypto.randomBytes)) {
          this[p] = true;
        } else {
          throw Error(cryptoUnavailable);
        }
      } else {
        this[p] = false;
      }
    } else {
      throw Error(invalidArgument + p + ": " + v);
    }
  }
  return this;
}
function cos(x) {
  return new this(x).cos();
}
function cosh(x) {
  return new this(x).cosh();
}
function clone(obj) {
  var i, p, ps;
  function Decimal2(v) {
    var e, i2, t, x = this;
    if (!(x instanceof Decimal2))
      return new Decimal2(v);
    x.constructor = Decimal2;
    if (isDecimalInstance(v)) {
      x.s = v.s;
      if (external) {
        if (!v.d || v.e > Decimal2.maxE) {
          x.e = NaN;
          x.d = null;
        } else if (v.e < Decimal2.minE) {
          x.e = 0;
          x.d = [0];
        } else {
          x.e = v.e;
          x.d = v.d.slice();
        }
      } else {
        x.e = v.e;
        x.d = v.d ? v.d.slice() : v.d;
      }
      return;
    }
    t = typeof v;
    if (t === "number") {
      if (v === 0) {
        x.s = 1 / v < 0 ? -1 : 1;
        x.e = 0;
        x.d = [0];
        return;
      }
      if (v < 0) {
        v = -v;
        x.s = -1;
      } else {
        x.s = 1;
      }
      if (v === ~~v && v < 1e7) {
        for (e = 0, i2 = v;i2 >= 10; i2 /= 10)
          e++;
        if (external) {
          if (e > Decimal2.maxE) {
            x.e = NaN;
            x.d = null;
          } else if (e < Decimal2.minE) {
            x.e = 0;
            x.d = [0];
          } else {
            x.e = e;
            x.d = [v];
          }
        } else {
          x.e = e;
          x.d = [v];
        }
        return;
      }
      if (v * 0 !== 0) {
        if (!v)
          x.s = NaN;
        x.e = NaN;
        x.d = null;
        return;
      }
      return parseDecimal(x, v.toString());
    }
    if (t === "string") {
      if ((i2 = v.charCodeAt(0)) === 45) {
        v = v.slice(1);
        x.s = -1;
      } else {
        if (i2 === 43)
          v = v.slice(1);
        x.s = 1;
      }
      return isDecimal.test(v) ? parseDecimal(x, v) : parseOther(x, v);
    }
    if (t === "bigint") {
      if (v < 0) {
        v = -v;
        x.s = -1;
      } else {
        x.s = 1;
      }
      return parseDecimal(x, v.toString());
    }
    throw Error(invalidArgument + v);
  }
  Decimal2.prototype = P;
  Decimal2.ROUND_UP = 0;
  Decimal2.ROUND_DOWN = 1;
  Decimal2.ROUND_CEIL = 2;
  Decimal2.ROUND_FLOOR = 3;
  Decimal2.ROUND_HALF_UP = 4;
  Decimal2.ROUND_HALF_DOWN = 5;
  Decimal2.ROUND_HALF_EVEN = 6;
  Decimal2.ROUND_HALF_CEIL = 7;
  Decimal2.ROUND_HALF_FLOOR = 8;
  Decimal2.EUCLID = 9;
  Decimal2.config = Decimal2.set = config;
  Decimal2.clone = clone;
  Decimal2.isDecimal = isDecimalInstance;
  Decimal2.abs = abs;
  Decimal2.acos = acos;
  Decimal2.acosh = acosh;
  Decimal2.add = add;
  Decimal2.asin = asin;
  Decimal2.asinh = asinh;
  Decimal2.atan = atan;
  Decimal2.atanh = atanh;
  Decimal2.atan2 = atan2;
  Decimal2.cbrt = cbrt;
  Decimal2.ceil = ceil;
  Decimal2.clamp = clamp;
  Decimal2.cos = cos;
  Decimal2.cosh = cosh;
  Decimal2.div = div;
  Decimal2.exp = exp;
  Decimal2.floor = floor;
  Decimal2.hypot = hypot;
  Decimal2.ln = ln;
  Decimal2.log = log;
  Decimal2.log10 = log10;
  Decimal2.log2 = log2;
  Decimal2.max = max;
  Decimal2.min = min;
  Decimal2.mod = mod;
  Decimal2.mul = mul;
  Decimal2.pow = pow;
  Decimal2.random = random;
  Decimal2.round = round;
  Decimal2.sign = sign;
  Decimal2.sin = sin;
  Decimal2.sinh = sinh;
  Decimal2.sqrt = sqrt;
  Decimal2.sub = sub;
  Decimal2.sum = sum;
  Decimal2.tan = tan;
  Decimal2.tanh = tanh;
  Decimal2.trunc = trunc;
  if (obj === undefined)
    obj = {};
  if (obj) {
    if (obj.defaults !== true) {
      ps = ["precision", "rounding", "toExpNeg", "toExpPos", "maxE", "minE", "modulo", "crypto"];
      for (i = 0;i < ps.length; )
        if (!obj.hasOwnProperty(p = ps[i++]))
          obj[p] = this[p];
    }
  }
  Decimal2.config(obj);
  return Decimal2;
}
function div(x, y) {
  return new this(x).div(y);
}
function exp(x) {
  return new this(x).exp();
}
function floor(x) {
  return finalise(x = new this(x), x.e + 1, 3);
}
function hypot() {
  var i, n, t = new this(0);
  external = false;
  for (i = 0;i < arguments.length; ) {
    n = new this(arguments[i++]);
    if (!n.d) {
      if (n.s) {
        external = true;
        return new this(1 / 0);
      }
      t = n;
    } else if (t.d) {
      t = t.plus(n.times(n));
    }
  }
  external = true;
  return t.sqrt();
}
function isDecimalInstance(obj) {
  return obj instanceof Decimal || obj && obj.toStringTag === tag || false;
}
function ln(x) {
  return new this(x).ln();
}
function log(x, y) {
  return new this(x).log(y);
}
function log2(x) {
  return new this(x).log(2);
}
function log10(x) {
  return new this(x).log(10);
}
function max() {
  return maxOrMin(this, arguments, -1);
}
function min() {
  return maxOrMin(this, arguments, 1);
}
function mod(x, y) {
  return new this(x).mod(y);
}
function mul(x, y) {
  return new this(x).mul(y);
}
function pow(x, y) {
  return new this(x).pow(y);
}
function random(sd) {
  var d, e, k, n, i = 0, r = new this(1), rd = [];
  if (sd === undefined)
    sd = this.precision;
  else
    checkInt32(sd, 1, MAX_DIGITS2);
  k = Math.ceil(sd / LOG_BASE);
  if (!this.crypto) {
    for (;i < k; )
      rd[i++] = Math.random() * 1e7 | 0;
  } else if (crypto.getRandomValues) {
    d = crypto.getRandomValues(new Uint32Array(k));
    for (;i < k; ) {
      n = d[i];
      if (n >= 4290000000) {
        d[i] = crypto.getRandomValues(new Uint32Array(1))[0];
      } else {
        rd[i++] = n % 1e7;
      }
    }
  } else if (crypto.randomBytes) {
    d = crypto.randomBytes(k *= 4);
    for (;i < k; ) {
      n = d[i] + (d[i + 1] << 8) + (d[i + 2] << 16) + ((d[i + 3] & 127) << 24);
      if (n >= 2140000000) {
        crypto.randomBytes(4).copy(d, i);
      } else {
        rd.push(n % 1e7);
        i += 4;
      }
    }
    i = k / 4;
  } else {
    throw Error(cryptoUnavailable);
  }
  k = rd[--i];
  sd %= LOG_BASE;
  if (k && sd) {
    n = mathpow(10, LOG_BASE - sd);
    rd[i] = (k / n | 0) * n;
  }
  for (;rd[i] === 0; i--)
    rd.pop();
  if (i < 0) {
    e = 0;
    rd = [0];
  } else {
    e = -1;
    for (;rd[0] === 0; e -= LOG_BASE)
      rd.shift();
    for (k = 1, n = rd[0];n >= 10; n /= 10)
      k++;
    if (k < LOG_BASE)
      e -= LOG_BASE - k;
  }
  r.e = e;
  r.d = rd;
  return r;
}
function round(x) {
  return finalise(x = new this(x), x.e + 1, this.rounding);
}
function sign(x) {
  x = new this(x);
  return x.d ? x.d[0] ? x.s : 0 * x.s : x.s || NaN;
}
function sin(x) {
  return new this(x).sin();
}
function sinh(x) {
  return new this(x).sinh();
}
function sqrt(x) {
  return new this(x).sqrt();
}
function sub(x, y) {
  return new this(x).sub(y);
}
function sum() {
  var i = 0, args = arguments, x = new this(args[i]);
  external = false;
  for (;x.s && ++i < args.length; )
    x = x.plus(args[i]);
  external = true;
  return finalise(x, this.precision, this.rounding);
}
function tan(x) {
  return new this(x).tan();
}
function tanh(x) {
  return new this(x).tanh();
}
function trunc(x) {
  return finalise(x = new this(x), x.e + 1, 1);
}
function join(values, separator = ",", prefix = "", suffix = "") {
  if (values.length === 0) {
    throw new TypeError("Expected `join([])` to be called with an array of multiple elements, but got an empty array");
  }
  return new Sql([prefix, ...Array(values.length - 1).fill(separator), suffix], values);
}
function raw(value) {
  return new Sql([value], []);
}
function sql(strings, ...values) {
  return new Sql(strings, values);
}
var PrismaClientInitializationError, PrismaClientKnownRequestError, PrismaClientRustError, PrismaClientRustPanicError, PrismaClientUnknownRequestError, PrismaClientValidationError, secret, PRISMA_OBJECT_ENUM_VALUE, ObjectEnumValue, NullTypesEnumValue, DbNullClass, JsonNullClass, AnyNullClass, NullTypes, DbNull, JsonNull, AnyNull, EXP_LIMIT = 9000000000000000, MAX_DIGITS2 = 1e9, NUMERALS = "0123456789abcdef", LN10 = "2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058", PI = "3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789", DEFAULTS, inexact, quadrant, external = true, decimalError = "[DecimalError] ", invalidArgument, precisionLimitExceeded, cryptoUnavailable, tag = "[object Decimal]", mathfloor, mathpow, isBinary, isHex, isOctal, isDecimal, BASE = 1e7, LOG_BASE = 7, MAX_SAFE_INTEGER = 9007199254740991, LN10_PRECISION, PI_PRECISION, P, divide, Decimal, Sql = class _Sql {
  constructor(rawStrings, rawValues) {
    if (rawStrings.length - 1 !== rawValues.length) {
      if (rawStrings.length === 0) {
        throw new TypeError("Expected at least 1 string");
      }
      throw new TypeError(`Expected ${rawStrings.length} strings to have ${rawStrings.length - 1} values`);
    }
    const valuesLength = rawValues.reduce((len, value) => len + (value instanceof _Sql ? value.values.length : 1), 0);
    this.values = new Array(valuesLength);
    this.strings = new Array(valuesLength + 1);
    this.strings[0] = rawStrings[0];
    let i = 0, pos = 0;
    while (i < rawValues.length) {
      const child = rawValues[i++];
      const rawString = rawStrings[i];
      if (child instanceof _Sql) {
        this.strings[pos] += child.strings[0];
        let childIndex = 0;
        while (childIndex < child.values.length) {
          this.values[pos++] = child.values[childIndex++];
          this.strings[pos] = child.strings[childIndex];
        }
        this.strings[pos] += rawString;
      } else {
        this.values[pos++] = child;
        this.strings[pos] = rawString;
      }
    }
  }
  get sql() {
    const len = this.strings.length;
    let i = 1;
    let value = this.strings[0];
    while (i < len)
      value += `?${this.strings[i++]}`;
    return value;
  }
  get statement() {
    const len = this.strings.length;
    let i = 1;
    let value = this.strings[0];
    while (i < len)
      value += `:${i}${this.strings[i++]}`;
    return value;
  }
  get text() {
    const len = this.strings.length;
    let i = 1;
    let value = this.strings[0];
    while (i < len)
      value += `$${i}${this.strings[i++]}`;
    return value;
  }
  inspect() {
    return {
      sql: this.sql,
      statement: this.statement,
      text: this.text,
      values: this.values
    };
  }
}, empty;
var init_dist = __esm(() => {
  PrismaClientInitializationError = class _PrismaClientInitializationError extends Error {
    clientVersion;
    errorCode;
    retryable;
    constructor(message, clientVersion, errorCode) {
      super(message);
      this.name = "PrismaClientInitializationError";
      this.clientVersion = clientVersion;
      this.errorCode = errorCode;
      Error.captureStackTrace(_PrismaClientInitializationError);
    }
    get [Symbol.toStringTag]() {
      return "PrismaClientInitializationError";
    }
  };
  setClassName(PrismaClientInitializationError, "PrismaClientInitializationError");
  PrismaClientKnownRequestError = class extends Error {
    code;
    meta;
    clientVersion;
    batchRequestIdx;
    constructor(message, { code, clientVersion, meta, batchRequestIdx }) {
      super(message);
      this.name = "PrismaClientKnownRequestError";
      this.code = code;
      this.clientVersion = clientVersion;
      this.meta = meta;
      Object.defineProperty(this, "batchRequestIdx", {
        value: batchRequestIdx,
        enumerable: false,
        writable: true
      });
    }
    get [Symbol.toStringTag]() {
      return "PrismaClientKnownRequestError";
    }
  };
  setClassName(PrismaClientKnownRequestError, "PrismaClientKnownRequestError");
  PrismaClientRustError = class extends Error {
    clientVersion;
    _isPanic;
    constructor({ clientVersion, error }) {
      const backtrace = getBacktrace(error);
      super(backtrace ?? "Unknown error");
      this._isPanic = isPanic(error);
      this.clientVersion = clientVersion;
    }
    get [Symbol.toStringTag]() {
      return "PrismaClientRustError";
    }
    isPanic() {
      return this._isPanic;
    }
  };
  setClassName(PrismaClientRustError, "PrismaClientRustError");
  PrismaClientRustPanicError = class extends Error {
    clientVersion;
    constructor(message, clientVersion) {
      super(message);
      this.name = "PrismaClientRustPanicError";
      this.clientVersion = clientVersion;
    }
    get [Symbol.toStringTag]() {
      return "PrismaClientRustPanicError";
    }
  };
  setClassName(PrismaClientRustPanicError, "PrismaClientRustPanicError");
  PrismaClientUnknownRequestError = class extends Error {
    clientVersion;
    batchRequestIdx;
    constructor(message, { clientVersion, batchRequestIdx }) {
      super(message);
      this.name = "PrismaClientUnknownRequestError";
      this.clientVersion = clientVersion;
      Object.defineProperty(this, "batchRequestIdx", {
        value: batchRequestIdx,
        writable: true,
        enumerable: false
      });
    }
    get [Symbol.toStringTag]() {
      return "PrismaClientUnknownRequestError";
    }
  };
  setClassName(PrismaClientUnknownRequestError, "PrismaClientUnknownRequestError");
  PrismaClientValidationError = class extends Error {
    name = "PrismaClientValidationError";
    clientVersion;
    constructor(message, { clientVersion }) {
      super(message);
      this.clientVersion = clientVersion;
    }
    get [Symbol.toStringTag]() {
      return "PrismaClientValidationError";
    }
  };
  setClassName(PrismaClientValidationError, "PrismaClientValidationError");
  secret = Symbol();
  PRISMA_OBJECT_ENUM_VALUE = Symbol.for("prisma.objectEnumValue");
  ObjectEnumValue = class {
    [PRISMA_OBJECT_ENUM_VALUE] = true;
    #representation;
    constructor(arg) {
      if (arg === secret) {
        this.#representation = `Prisma.${this._getName()}`;
      } else {
        this.#representation = `new Prisma.${this._getNamespace()}.${this._getName()}()`;
      }
    }
    _getName() {
      return this.constructor.name;
    }
    toString() {
      return this.#representation;
    }
  };
  NullTypesEnumValue = class extends ObjectEnumValue {
    _getNamespace() {
      return "NullTypes";
    }
  };
  DbNullClass = class extends NullTypesEnumValue {
    #_brand_DbNull;
  };
  setClassName2(DbNullClass, "DbNull");
  JsonNullClass = class extends NullTypesEnumValue {
    #_brand_JsonNull;
  };
  setClassName2(JsonNullClass, "JsonNull");
  AnyNullClass = class extends NullTypesEnumValue {
    #_brand_AnyNull;
  };
  setClassName2(AnyNullClass, "AnyNull");
  NullTypes = {
    DbNull: DbNullClass,
    JsonNull: JsonNullClass,
    AnyNull: AnyNullClass
  };
  DbNull = new DbNullClass(secret);
  JsonNull = new JsonNullClass(secret);
  AnyNull = new AnyNullClass(secret);
  DEFAULTS = {
    precision: 20,
    rounding: 4,
    modulo: 1,
    toExpNeg: -7,
    toExpPos: 21,
    minE: -EXP_LIMIT,
    maxE: EXP_LIMIT,
    crypto: false
  };
  invalidArgument = decimalError + "Invalid argument: ";
  precisionLimitExceeded = decimalError + "Precision limit exceeded";
  cryptoUnavailable = decimalError + "crypto unavailable";
  mathfloor = Math.floor;
  mathpow = Math.pow;
  isBinary = /^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i;
  isHex = /^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i;
  isOctal = /^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i;
  isDecimal = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i;
  LN10_PRECISION = LN10.length - 1;
  PI_PRECISION = PI.length - 1;
  P = { toStringTag: tag };
  P.absoluteValue = P.abs = function() {
    var x = new this.constructor(this);
    if (x.s < 0)
      x.s = 1;
    return finalise(x);
  };
  P.ceil = function() {
    return finalise(new this.constructor(this), this.e + 1, 2);
  };
  P.clampedTo = P.clamp = function(min2, max2) {
    var k, x = this, Ctor = x.constructor;
    min2 = new Ctor(min2);
    max2 = new Ctor(max2);
    if (!min2.s || !max2.s)
      return new Ctor(NaN);
    if (min2.gt(max2))
      throw Error(invalidArgument + max2);
    k = x.cmp(min2);
    return k < 0 ? min2 : x.cmp(max2) > 0 ? max2 : new Ctor(x);
  };
  P.comparedTo = P.cmp = function(y) {
    var i, j, xdL, ydL, x = this, xd = x.d, yd = (y = new x.constructor(y)).d, xs = x.s, ys = y.s;
    if (!xd || !yd) {
      return !xs || !ys ? NaN : xs !== ys ? xs : xd === yd ? 0 : !xd ^ xs < 0 ? 1 : -1;
    }
    if (!xd[0] || !yd[0])
      return xd[0] ? xs : yd[0] ? -ys : 0;
    if (xs !== ys)
      return xs;
    if (x.e !== y.e)
      return x.e > y.e ^ xs < 0 ? 1 : -1;
    xdL = xd.length;
    ydL = yd.length;
    for (i = 0, j = xdL < ydL ? xdL : ydL;i < j; ++i) {
      if (xd[i] !== yd[i])
        return xd[i] > yd[i] ^ xs < 0 ? 1 : -1;
    }
    return xdL === ydL ? 0 : xdL > ydL ^ xs < 0 ? 1 : -1;
  };
  P.cosine = P.cos = function() {
    var pr, rm, x = this, Ctor = x.constructor;
    if (!x.d)
      return new Ctor(NaN);
    if (!x.d[0])
      return new Ctor(1);
    pr = Ctor.precision;
    rm = Ctor.rounding;
    Ctor.precision = pr + Math.max(x.e, x.sd()) + LOG_BASE;
    Ctor.rounding = 1;
    x = cosine(Ctor, toLessThanHalfPi(Ctor, x));
    Ctor.precision = pr;
    Ctor.rounding = rm;
    return finalise(quadrant == 2 || quadrant == 3 ? x.neg() : x, pr, rm, true);
  };
  P.cubeRoot = P.cbrt = function() {
    var e, m, n, r, rep, s, sd, t, t3, t3plusx, x = this, Ctor = x.constructor;
    if (!x.isFinite() || x.isZero())
      return new Ctor(x);
    external = false;
    s = x.s * mathpow(x.s * x, 1 / 3);
    if (!s || Math.abs(s) == 1 / 0) {
      n = digitsToString(x.d);
      e = x.e;
      if (s = (e - n.length + 1) % 3)
        n += s == 1 || s == -2 ? "0" : "00";
      s = mathpow(n, 1 / 3);
      e = mathfloor((e + 1) / 3) - (e % 3 == (e < 0 ? -1 : 2));
      if (s == 1 / 0) {
        n = "5e" + e;
      } else {
        n = s.toExponential();
        n = n.slice(0, n.indexOf("e") + 1) + e;
      }
      r = new Ctor(n);
      r.s = x.s;
    } else {
      r = new Ctor(s.toString());
    }
    sd = (e = Ctor.precision) + 3;
    for (;; ) {
      t = r;
      t3 = t.times(t).times(t);
      t3plusx = t3.plus(x);
      r = divide(t3plusx.plus(x).times(t), t3plusx.plus(t3), sd + 2, 1);
      if (digitsToString(t.d).slice(0, sd) === (n = digitsToString(r.d)).slice(0, sd)) {
        n = n.slice(sd - 3, sd + 1);
        if (n == "9999" || !rep && n == "4999") {
          if (!rep) {
            finalise(t, e + 1, 0);
            if (t.times(t).times(t).eq(x)) {
              r = t;
              break;
            }
          }
          sd += 4;
          rep = 1;
        } else {
          if (!+n || !+n.slice(1) && n.charAt(0) == "5") {
            finalise(r, e + 1, 1);
            m = !r.times(r).times(r).eq(x);
          }
          break;
        }
      }
    }
    external = true;
    return finalise(r, e, Ctor.rounding, m);
  };
  P.decimalPlaces = P.dp = function() {
    var w, d = this.d, n = NaN;
    if (d) {
      w = d.length - 1;
      n = (w - mathfloor(this.e / LOG_BASE)) * LOG_BASE;
      w = d[w];
      if (w)
        for (;w % 10 == 0; w /= 10)
          n--;
      if (n < 0)
        n = 0;
    }
    return n;
  };
  P.dividedBy = P.div = function(y) {
    return divide(this, new this.constructor(y));
  };
  P.dividedToIntegerBy = P.divToInt = function(y) {
    var x = this, Ctor = x.constructor;
    return finalise(divide(x, new Ctor(y), 0, 1, 1), Ctor.precision, Ctor.rounding);
  };
  P.equals = P.eq = function(y) {
    return this.cmp(y) === 0;
  };
  P.floor = function() {
    return finalise(new this.constructor(this), this.e + 1, 3);
  };
  P.greaterThan = P.gt = function(y) {
    return this.cmp(y) > 0;
  };
  P.greaterThanOrEqualTo = P.gte = function(y) {
    var k = this.cmp(y);
    return k == 1 || k === 0;
  };
  P.hyperbolicCosine = P.cosh = function() {
    var k, n, pr, rm, len, x = this, Ctor = x.constructor, one = new Ctor(1);
    if (!x.isFinite())
      return new Ctor(x.s ? 1 / 0 : NaN);
    if (x.isZero())
      return one;
    pr = Ctor.precision;
    rm = Ctor.rounding;
    Ctor.precision = pr + Math.max(x.e, x.sd()) + 4;
    Ctor.rounding = 1;
    len = x.d.length;
    if (len < 32) {
      k = Math.ceil(len / 3);
      n = (1 / tinyPow(4, k)).toString();
    } else {
      k = 16;
      n = "2.3283064365386962890625e-10";
    }
    x = taylorSeries(Ctor, 1, x.times(n), new Ctor(1), true);
    var cosh2_x, i = k, d8 = new Ctor(8);
    for (;i--; ) {
      cosh2_x = x.times(x);
      x = one.minus(cosh2_x.times(d8.minus(cosh2_x.times(d8))));
    }
    return finalise(x, Ctor.precision = pr, Ctor.rounding = rm, true);
  };
  P.hyperbolicSine = P.sinh = function() {
    var k, pr, rm, len, x = this, Ctor = x.constructor;
    if (!x.isFinite() || x.isZero())
      return new Ctor(x);
    pr = Ctor.precision;
    rm = Ctor.rounding;
    Ctor.precision = pr + Math.max(x.e, x.sd()) + 4;
    Ctor.rounding = 1;
    len = x.d.length;
    if (len < 3) {
      x = taylorSeries(Ctor, 2, x, x, true);
    } else {
      k = 1.4 * Math.sqrt(len);
      k = k > 16 ? 16 : k | 0;
      x = x.times(1 / tinyPow(5, k));
      x = taylorSeries(Ctor, 2, x, x, true);
      var sinh2_x, d5 = new Ctor(5), d16 = new Ctor(16), d20 = new Ctor(20);
      for (;k--; ) {
        sinh2_x = x.times(x);
        x = x.times(d5.plus(sinh2_x.times(d16.times(sinh2_x).plus(d20))));
      }
    }
    Ctor.precision = pr;
    Ctor.rounding = rm;
    return finalise(x, pr, rm, true);
  };
  P.hyperbolicTangent = P.tanh = function() {
    var pr, rm, x = this, Ctor = x.constructor;
    if (!x.isFinite())
      return new Ctor(x.s);
    if (x.isZero())
      return new Ctor(x);
    pr = Ctor.precision;
    rm = Ctor.rounding;
    Ctor.precision = pr + 7;
    Ctor.rounding = 1;
    return divide(x.sinh(), x.cosh(), Ctor.precision = pr, Ctor.rounding = rm);
  };
  P.inverseCosine = P.acos = function() {
    var x = this, Ctor = x.constructor, k = x.abs().cmp(1), pr = Ctor.precision, rm = Ctor.rounding;
    if (k !== -1) {
      return k === 0 ? x.isNeg() ? getPi(Ctor, pr, rm) : new Ctor(0) : new Ctor(NaN);
    }
    if (x.isZero())
      return getPi(Ctor, pr + 4, rm).times(0.5);
    Ctor.precision = pr + 6;
    Ctor.rounding = 1;
    x = new Ctor(1).minus(x).div(x.plus(1)).sqrt().atan();
    Ctor.precision = pr;
    Ctor.rounding = rm;
    return x.times(2);
  };
  P.inverseHyperbolicCosine = P.acosh = function() {
    var pr, rm, x = this, Ctor = x.constructor;
    if (x.lte(1))
      return new Ctor(x.eq(1) ? 0 : NaN);
    if (!x.isFinite())
      return new Ctor(x);
    pr = Ctor.precision;
    rm = Ctor.rounding;
    Ctor.precision = pr + Math.max(Math.abs(x.e), x.sd()) + 4;
    Ctor.rounding = 1;
    external = false;
    x = x.times(x).minus(1).sqrt().plus(x);
    external = true;
    Ctor.precision = pr;
    Ctor.rounding = rm;
    return x.ln();
  };
  P.inverseHyperbolicSine = P.asinh = function() {
    var pr, rm, x = this, Ctor = x.constructor;
    if (!x.isFinite() || x.isZero())
      return new Ctor(x);
    pr = Ctor.precision;
    rm = Ctor.rounding;
    Ctor.precision = pr + 2 * Math.max(Math.abs(x.e), x.sd()) + 6;
    Ctor.rounding = 1;
    external = false;
    x = x.times(x).plus(1).sqrt().plus(x);
    external = true;
    Ctor.precision = pr;
    Ctor.rounding = rm;
    return x.ln();
  };
  P.inverseHyperbolicTangent = P.atanh = function() {
    var pr, rm, wpr, xsd, x = this, Ctor = x.constructor;
    if (!x.isFinite())
      return new Ctor(NaN);
    if (x.e >= 0)
      return new Ctor(x.abs().eq(1) ? x.s / 0 : x.isZero() ? x : NaN);
    pr = Ctor.precision;
    rm = Ctor.rounding;
    xsd = x.sd();
    if (Math.max(xsd, pr) < 2 * -x.e - 1)
      return finalise(new Ctor(x), pr, rm, true);
    Ctor.precision = wpr = xsd - x.e;
    x = divide(x.plus(1), new Ctor(1).minus(x), wpr + pr, 1);
    Ctor.precision = pr + 4;
    Ctor.rounding = 1;
    x = x.ln();
    Ctor.precision = pr;
    Ctor.rounding = rm;
    return x.times(0.5);
  };
  P.inverseSine = P.asin = function() {
    var halfPi, k, pr, rm, x = this, Ctor = x.constructor;
    if (x.isZero())
      return new Ctor(x);
    k = x.abs().cmp(1);
    pr = Ctor.precision;
    rm = Ctor.rounding;
    if (k !== -1) {
      if (k === 0) {
        halfPi = getPi(Ctor, pr + 4, rm).times(0.5);
        halfPi.s = x.s;
        return halfPi;
      }
      return new Ctor(NaN);
    }
    Ctor.precision = pr + 6;
    Ctor.rounding = 1;
    x = x.div(new Ctor(1).minus(x.times(x)).sqrt().plus(1)).atan();
    Ctor.precision = pr;
    Ctor.rounding = rm;
    return x.times(2);
  };
  P.inverseTangent = P.atan = function() {
    var i, j, k, n, px, t, r, wpr, x2, x = this, Ctor = x.constructor, pr = Ctor.precision, rm = Ctor.rounding;
    if (!x.isFinite()) {
      if (!x.s)
        return new Ctor(NaN);
      if (pr + 4 <= PI_PRECISION) {
        r = getPi(Ctor, pr + 4, rm).times(0.5);
        r.s = x.s;
        return r;
      }
    } else if (x.isZero()) {
      return new Ctor(x);
    } else if (x.abs().eq(1) && pr + 4 <= PI_PRECISION) {
      r = getPi(Ctor, pr + 4, rm).times(0.25);
      r.s = x.s;
      return r;
    }
    Ctor.precision = wpr = pr + 10;
    Ctor.rounding = 1;
    k = Math.min(28, wpr / LOG_BASE + 2 | 0);
    for (i = k;i; --i)
      x = x.div(x.times(x).plus(1).sqrt().plus(1));
    external = false;
    j = Math.ceil(wpr / LOG_BASE);
    n = 1;
    x2 = x.times(x);
    r = new Ctor(x);
    px = x;
    for (;i !== -1; ) {
      px = px.times(x2);
      t = r.minus(px.div(n += 2));
      px = px.times(x2);
      r = t.plus(px.div(n += 2));
      if (r.d[j] !== undefined)
        for (i = j;r.d[i] === t.d[i] && i--; )
          ;
    }
    if (k)
      r = r.times(2 << k - 1);
    external = true;
    return finalise(r, Ctor.precision = pr, Ctor.rounding = rm, true);
  };
  P.isFinite = function() {
    return !!this.d;
  };
  P.isInteger = P.isInt = function() {
    return !!this.d && mathfloor(this.e / LOG_BASE) > this.d.length - 2;
  };
  P.isNaN = function() {
    return !this.s;
  };
  P.isNegative = P.isNeg = function() {
    return this.s < 0;
  };
  P.isPositive = P.isPos = function() {
    return this.s > 0;
  };
  P.isZero = function() {
    return !!this.d && this.d[0] === 0;
  };
  P.lessThan = P.lt = function(y) {
    return this.cmp(y) < 0;
  };
  P.lessThanOrEqualTo = P.lte = function(y) {
    return this.cmp(y) < 1;
  };
  P.logarithm = P.log = function(base) {
    var isBase10, d, denominator, k, inf, num, sd, r, arg = this, Ctor = arg.constructor, pr = Ctor.precision, rm = Ctor.rounding, guard = 5;
    if (base == null) {
      base = new Ctor(10);
      isBase10 = true;
    } else {
      base = new Ctor(base);
      d = base.d;
      if (base.s < 0 || !d || !d[0] || base.eq(1))
        return new Ctor(NaN);
      isBase10 = base.eq(10);
    }
    d = arg.d;
    if (arg.s < 0 || !d || !d[0] || arg.eq(1)) {
      return new Ctor(d && !d[0] ? -1 / 0 : arg.s != 1 ? NaN : d ? 0 : 1 / 0);
    }
    if (isBase10) {
      if (d.length > 1) {
        inf = true;
      } else {
        for (k = d[0];k % 10 === 0; )
          k /= 10;
        inf = k !== 1;
      }
    }
    external = false;
    sd = pr + guard;
    num = naturalLogarithm(arg, sd);
    denominator = isBase10 ? getLn10(Ctor, sd + 10) : naturalLogarithm(base, sd);
    r = divide(num, denominator, sd, 1);
    if (checkRoundingDigits(r.d, k = pr, rm)) {
      do {
        sd += 10;
        num = naturalLogarithm(arg, sd);
        denominator = isBase10 ? getLn10(Ctor, sd + 10) : naturalLogarithm(base, sd);
        r = divide(num, denominator, sd, 1);
        if (!inf) {
          if (+digitsToString(r.d).slice(k + 1, k + 15) + 1 == 100000000000000) {
            r = finalise(r, pr + 1, 0);
          }
          break;
        }
      } while (checkRoundingDigits(r.d, k += 10, rm));
    }
    external = true;
    return finalise(r, pr, rm);
  };
  P.minus = P.sub = function(y) {
    var d, e, i, j, k, len, pr, rm, xd, xe, xLTy, yd, x = this, Ctor = x.constructor;
    y = new Ctor(y);
    if (!x.d || !y.d) {
      if (!x.s || !y.s)
        y = new Ctor(NaN);
      else if (x.d)
        y.s = -y.s;
      else
        y = new Ctor(y.d || x.s !== y.s ? x : NaN);
      return y;
    }
    if (x.s != y.s) {
      y.s = -y.s;
      return x.plus(y);
    }
    xd = x.d;
    yd = y.d;
    pr = Ctor.precision;
    rm = Ctor.rounding;
    if (!xd[0] || !yd[0]) {
      if (yd[0])
        y.s = -y.s;
      else if (xd[0])
        y = new Ctor(x);
      else
        return new Ctor(rm === 3 ? -0 : 0);
      return external ? finalise(y, pr, rm) : y;
    }
    e = mathfloor(y.e / LOG_BASE);
    xe = mathfloor(x.e / LOG_BASE);
    xd = xd.slice();
    k = xe - e;
    if (k) {
      xLTy = k < 0;
      if (xLTy) {
        d = xd;
        k = -k;
        len = yd.length;
      } else {
        d = yd;
        e = xe;
        len = xd.length;
      }
      i = Math.max(Math.ceil(pr / LOG_BASE), len) + 2;
      if (k > i) {
        k = i;
        d.length = 1;
      }
      d.reverse();
      for (i = k;i--; )
        d.push(0);
      d.reverse();
    } else {
      i = xd.length;
      len = yd.length;
      xLTy = i < len;
      if (xLTy)
        len = i;
      for (i = 0;i < len; i++) {
        if (xd[i] != yd[i]) {
          xLTy = xd[i] < yd[i];
          break;
        }
      }
      k = 0;
    }
    if (xLTy) {
      d = xd;
      xd = yd;
      yd = d;
      y.s = -y.s;
    }
    len = xd.length;
    for (i = yd.length - len;i > 0; --i)
      xd[len++] = 0;
    for (i = yd.length;i > k; ) {
      if (xd[--i] < yd[i]) {
        for (j = i;j && xd[--j] === 0; )
          xd[j] = BASE - 1;
        --xd[j];
        xd[i] += BASE;
      }
      xd[i] -= yd[i];
    }
    for (;xd[--len] === 0; )
      xd.pop();
    for (;xd[0] === 0; xd.shift())
      --e;
    if (!xd[0])
      return new Ctor(rm === 3 ? -0 : 0);
    y.d = xd;
    y.e = getBase10Exponent(xd, e);
    return external ? finalise(y, pr, rm) : y;
  };
  P.modulo = P.mod = function(y) {
    var q, x = this, Ctor = x.constructor;
    y = new Ctor(y);
    if (!x.d || !y.s || y.d && !y.d[0])
      return new Ctor(NaN);
    if (!y.d || x.d && !x.d[0]) {
      return finalise(new Ctor(x), Ctor.precision, Ctor.rounding);
    }
    external = false;
    if (Ctor.modulo == 9) {
      q = divide(x, y.abs(), 0, 3, 1);
      q.s *= y.s;
    } else {
      q = divide(x, y, 0, Ctor.modulo, 1);
    }
    q = q.times(y);
    external = true;
    return x.minus(q);
  };
  P.naturalExponential = P.exp = function() {
    return naturalExponential(this);
  };
  P.naturalLogarithm = P.ln = function() {
    return naturalLogarithm(this);
  };
  P.negated = P.neg = function() {
    var x = new this.constructor(this);
    x.s = -x.s;
    return finalise(x);
  };
  P.plus = P.add = function(y) {
    var carry, d, e, i, k, len, pr, rm, xd, yd, x = this, Ctor = x.constructor;
    y = new Ctor(y);
    if (!x.d || !y.d) {
      if (!x.s || !y.s)
        y = new Ctor(NaN);
      else if (!x.d)
        y = new Ctor(y.d || x.s === y.s ? x : NaN);
      return y;
    }
    if (x.s != y.s) {
      y.s = -y.s;
      return x.minus(y);
    }
    xd = x.d;
    yd = y.d;
    pr = Ctor.precision;
    rm = Ctor.rounding;
    if (!xd[0] || !yd[0]) {
      if (!yd[0])
        y = new Ctor(x);
      return external ? finalise(y, pr, rm) : y;
    }
    k = mathfloor(x.e / LOG_BASE);
    e = mathfloor(y.e / LOG_BASE);
    xd = xd.slice();
    i = k - e;
    if (i) {
      if (i < 0) {
        d = xd;
        i = -i;
        len = yd.length;
      } else {
        d = yd;
        e = k;
        len = xd.length;
      }
      k = Math.ceil(pr / LOG_BASE);
      len = k > len ? k + 1 : len + 1;
      if (i > len) {
        i = len;
        d.length = 1;
      }
      d.reverse();
      for (;i--; )
        d.push(0);
      d.reverse();
    }
    len = xd.length;
    i = yd.length;
    if (len - i < 0) {
      i = len;
      d = yd;
      yd = xd;
      xd = d;
    }
    for (carry = 0;i; ) {
      carry = (xd[--i] = xd[i] + yd[i] + carry) / BASE | 0;
      xd[i] %= BASE;
    }
    if (carry) {
      xd.unshift(carry);
      ++e;
    }
    for (len = xd.length;xd[--len] == 0; )
      xd.pop();
    y.d = xd;
    y.e = getBase10Exponent(xd, e);
    return external ? finalise(y, pr, rm) : y;
  };
  P.precision = P.sd = function(z) {
    var k, x = this;
    if (z !== undefined && z !== !!z && z !== 1 && z !== 0)
      throw Error(invalidArgument + z);
    if (x.d) {
      k = getPrecision(x.d);
      if (z && x.e + 1 > k)
        k = x.e + 1;
    } else {
      k = NaN;
    }
    return k;
  };
  P.round = function() {
    var x = this, Ctor = x.constructor;
    return finalise(new Ctor(x), x.e + 1, Ctor.rounding);
  };
  P.sine = P.sin = function() {
    var pr, rm, x = this, Ctor = x.constructor;
    if (!x.isFinite())
      return new Ctor(NaN);
    if (x.isZero())
      return new Ctor(x);
    pr = Ctor.precision;
    rm = Ctor.rounding;
    Ctor.precision = pr + Math.max(x.e, x.sd()) + LOG_BASE;
    Ctor.rounding = 1;
    x = sine(Ctor, toLessThanHalfPi(Ctor, x));
    Ctor.precision = pr;
    Ctor.rounding = rm;
    return finalise(quadrant > 2 ? x.neg() : x, pr, rm, true);
  };
  P.squareRoot = P.sqrt = function() {
    var m, n, sd, r, rep, t, x = this, d = x.d, e = x.e, s = x.s, Ctor = x.constructor;
    if (s !== 1 || !d || !d[0]) {
      return new Ctor(!s || s < 0 && (!d || d[0]) ? NaN : d ? x : 1 / 0);
    }
    external = false;
    s = Math.sqrt(+x);
    if (s == 0 || s == 1 / 0) {
      n = digitsToString(d);
      if ((n.length + e) % 2 == 0)
        n += "0";
      s = Math.sqrt(n);
      e = mathfloor((e + 1) / 2) - (e < 0 || e % 2);
      if (s == 1 / 0) {
        n = "5e" + e;
      } else {
        n = s.toExponential();
        n = n.slice(0, n.indexOf("e") + 1) + e;
      }
      r = new Ctor(n);
    } else {
      r = new Ctor(s.toString());
    }
    sd = (e = Ctor.precision) + 3;
    for (;; ) {
      t = r;
      r = t.plus(divide(x, t, sd + 2, 1)).times(0.5);
      if (digitsToString(t.d).slice(0, sd) === (n = digitsToString(r.d)).slice(0, sd)) {
        n = n.slice(sd - 3, sd + 1);
        if (n == "9999" || !rep && n == "4999") {
          if (!rep) {
            finalise(t, e + 1, 0);
            if (t.times(t).eq(x)) {
              r = t;
              break;
            }
          }
          sd += 4;
          rep = 1;
        } else {
          if (!+n || !+n.slice(1) && n.charAt(0) == "5") {
            finalise(r, e + 1, 1);
            m = !r.times(r).eq(x);
          }
          break;
        }
      }
    }
    external = true;
    return finalise(r, e, Ctor.rounding, m);
  };
  P.tangent = P.tan = function() {
    var pr, rm, x = this, Ctor = x.constructor;
    if (!x.isFinite())
      return new Ctor(NaN);
    if (x.isZero())
      return new Ctor(x);
    pr = Ctor.precision;
    rm = Ctor.rounding;
    Ctor.precision = pr + 10;
    Ctor.rounding = 1;
    x = x.sin();
    x.s = 1;
    x = divide(x, new Ctor(1).minus(x.times(x)).sqrt(), pr + 10, 0);
    Ctor.precision = pr;
    Ctor.rounding = rm;
    return finalise(quadrant == 2 || quadrant == 4 ? x.neg() : x, pr, rm, true);
  };
  P.times = P.mul = function(y) {
    var carry, e, i, k, r, rL, t, xdL, ydL, x = this, Ctor = x.constructor, xd = x.d, yd = (y = new Ctor(y)).d;
    y.s *= x.s;
    if (!xd || !xd[0] || !yd || !yd[0]) {
      return new Ctor(!y.s || xd && !xd[0] && !yd || yd && !yd[0] && !xd ? NaN : !xd || !yd ? y.s / 0 : y.s * 0);
    }
    e = mathfloor(x.e / LOG_BASE) + mathfloor(y.e / LOG_BASE);
    xdL = xd.length;
    ydL = yd.length;
    if (xdL < ydL) {
      r = xd;
      xd = yd;
      yd = r;
      rL = xdL;
      xdL = ydL;
      ydL = rL;
    }
    r = [];
    rL = xdL + ydL;
    for (i = rL;i--; )
      r.push(0);
    for (i = ydL;--i >= 0; ) {
      carry = 0;
      for (k = xdL + i;k > i; ) {
        t = r[k] + yd[i] * xd[k - i - 1] + carry;
        r[k--] = t % BASE | 0;
        carry = t / BASE | 0;
      }
      r[k] = (r[k] + carry) % BASE | 0;
    }
    for (;!r[--rL]; )
      r.pop();
    if (carry)
      ++e;
    else
      r.shift();
    y.d = r;
    y.e = getBase10Exponent(r, e);
    return external ? finalise(y, Ctor.precision, Ctor.rounding) : y;
  };
  P.toBinary = function(sd, rm) {
    return toStringBinary(this, 2, sd, rm);
  };
  P.toDecimalPlaces = P.toDP = function(dp, rm) {
    var x = this, Ctor = x.constructor;
    x = new Ctor(x);
    if (dp === undefined)
      return x;
    checkInt32(dp, 0, MAX_DIGITS2);
    if (rm === undefined)
      rm = Ctor.rounding;
    else
      checkInt32(rm, 0, 8);
    return finalise(x, dp + x.e + 1, rm);
  };
  P.toExponential = function(dp, rm) {
    var str, x = this, Ctor = x.constructor;
    if (dp === undefined) {
      str = finiteToString(x, true);
    } else {
      checkInt32(dp, 0, MAX_DIGITS2);
      if (rm === undefined)
        rm = Ctor.rounding;
      else
        checkInt32(rm, 0, 8);
      x = finalise(new Ctor(x), dp + 1, rm);
      str = finiteToString(x, true, dp + 1);
    }
    return x.isNeg() && !x.isZero() ? "-" + str : str;
  };
  P.toFixed = function(dp, rm) {
    var str, y, x = this, Ctor = x.constructor;
    if (dp === undefined) {
      str = finiteToString(x);
    } else {
      checkInt32(dp, 0, MAX_DIGITS2);
      if (rm === undefined)
        rm = Ctor.rounding;
      else
        checkInt32(rm, 0, 8);
      y = finalise(new Ctor(x), dp + x.e + 1, rm);
      str = finiteToString(y, false, dp + y.e + 1);
    }
    return x.isNeg() && !x.isZero() ? "-" + str : str;
  };
  P.toFraction = function(maxD) {
    var d, d0, d1, d2, e, k, n, n0, n1, pr, q, r, x = this, xd = x.d, Ctor = x.constructor;
    if (!xd)
      return new Ctor(x);
    n1 = d0 = new Ctor(1);
    d1 = n0 = new Ctor(0);
    d = new Ctor(d1);
    e = d.e = getPrecision(xd) - x.e - 1;
    k = e % LOG_BASE;
    d.d[0] = mathpow(10, k < 0 ? LOG_BASE + k : k);
    if (maxD == null) {
      maxD = e > 0 ? d : n1;
    } else {
      n = new Ctor(maxD);
      if (!n.isInt() || n.lt(n1))
        throw Error(invalidArgument + n);
      maxD = n.gt(d) ? e > 0 ? d : n1 : n;
    }
    external = false;
    n = new Ctor(digitsToString(xd));
    pr = Ctor.precision;
    Ctor.precision = e = xd.length * LOG_BASE * 2;
    for (;; ) {
      q = divide(n, d, 0, 1, 1);
      d2 = d0.plus(q.times(d1));
      if (d2.cmp(maxD) == 1)
        break;
      d0 = d1;
      d1 = d2;
      d2 = n1;
      n1 = n0.plus(q.times(d2));
      n0 = d2;
      d2 = d;
      d = n.minus(q.times(d2));
      n = d2;
    }
    d2 = divide(maxD.minus(d0), d1, 0, 1, 1);
    n0 = n0.plus(d2.times(n1));
    d0 = d0.plus(d2.times(d1));
    n0.s = n1.s = x.s;
    r = divide(n1, d1, e, 1).minus(x).abs().cmp(divide(n0, d0, e, 1).minus(x).abs()) < 1 ? [n1, d1] : [n0, d0];
    Ctor.precision = pr;
    external = true;
    return r;
  };
  P.toHexadecimal = P.toHex = function(sd, rm) {
    return toStringBinary(this, 16, sd, rm);
  };
  P.toNearest = function(y, rm) {
    var x = this, Ctor = x.constructor;
    x = new Ctor(x);
    if (y == null) {
      if (!x.d)
        return x;
      y = new Ctor(1);
      rm = Ctor.rounding;
    } else {
      y = new Ctor(y);
      if (rm === undefined) {
        rm = Ctor.rounding;
      } else {
        checkInt32(rm, 0, 8);
      }
      if (!x.d)
        return y.s ? x : y;
      if (!y.d) {
        if (y.s)
          y.s = x.s;
        return y;
      }
    }
    if (y.d[0]) {
      external = false;
      x = divide(x, y, 0, rm, 1).times(y);
      external = true;
      finalise(x);
    } else {
      y.s = x.s;
      x = y;
    }
    return x;
  };
  P.toNumber = function() {
    return +this;
  };
  P.toOctal = function(sd, rm) {
    return toStringBinary(this, 8, sd, rm);
  };
  P.toPower = P.pow = function(y) {
    var e, k, pr, r, rm, s, x = this, Ctor = x.constructor, yn = +(y = new Ctor(y));
    if (!x.d || !y.d || !x.d[0] || !y.d[0])
      return new Ctor(mathpow(+x, yn));
    x = new Ctor(x);
    if (x.eq(1))
      return x;
    pr = Ctor.precision;
    rm = Ctor.rounding;
    if (y.eq(1))
      return finalise(x, pr, rm);
    e = mathfloor(y.e / LOG_BASE);
    if (e >= y.d.length - 1 && (k = yn < 0 ? -yn : yn) <= MAX_SAFE_INTEGER) {
      r = intPow(Ctor, x, k, pr);
      return y.s < 0 ? new Ctor(1).div(r) : finalise(r, pr, rm);
    }
    s = x.s;
    if (s < 0) {
      if (e < y.d.length - 1)
        return new Ctor(NaN);
      if ((y.d[e] & 1) == 0)
        s = 1;
      if (x.e == 0 && x.d[0] == 1 && x.d.length == 1) {
        x.s = s;
        return x;
      }
    }
    k = mathpow(+x, yn);
    e = k == 0 || !isFinite(k) ? mathfloor(yn * (Math.log("0." + digitsToString(x.d)) / Math.LN10 + x.e + 1)) : new Ctor(k + "").e;
    if (e > Ctor.maxE + 1 || e < Ctor.minE - 1)
      return new Ctor(e > 0 ? s / 0 : 0);
    external = false;
    Ctor.rounding = x.s = 1;
    k = Math.min(12, (e + "").length);
    r = naturalExponential(y.times(naturalLogarithm(x, pr + k)), pr);
    if (r.d) {
      r = finalise(r, pr + 5, 1);
      if (checkRoundingDigits(r.d, pr, rm)) {
        e = pr + 10;
        r = finalise(naturalExponential(y.times(naturalLogarithm(x, e + k)), e), e + 5, 1);
        if (+digitsToString(r.d).slice(pr + 1, pr + 15) + 1 == 100000000000000) {
          r = finalise(r, pr + 1, 0);
        }
      }
    }
    r.s = s;
    external = true;
    Ctor.rounding = rm;
    return finalise(r, pr, rm);
  };
  P.toPrecision = function(sd, rm) {
    var str, x = this, Ctor = x.constructor;
    if (sd === undefined) {
      str = finiteToString(x, x.e <= Ctor.toExpNeg || x.e >= Ctor.toExpPos);
    } else {
      checkInt32(sd, 1, MAX_DIGITS2);
      if (rm === undefined)
        rm = Ctor.rounding;
      else
        checkInt32(rm, 0, 8);
      x = finalise(new Ctor(x), sd, rm);
      str = finiteToString(x, sd <= x.e || x.e <= Ctor.toExpNeg, sd);
    }
    return x.isNeg() && !x.isZero() ? "-" + str : str;
  };
  P.toSignificantDigits = P.toSD = function(sd, rm) {
    var x = this, Ctor = x.constructor;
    if (sd === undefined) {
      sd = Ctor.precision;
      rm = Ctor.rounding;
    } else {
      checkInt32(sd, 1, MAX_DIGITS2);
      if (rm === undefined)
        rm = Ctor.rounding;
      else
        checkInt32(rm, 0, 8);
    }
    return finalise(new Ctor(x), sd, rm);
  };
  P.toString = function() {
    var x = this, Ctor = x.constructor, str = finiteToString(x, x.e <= Ctor.toExpNeg || x.e >= Ctor.toExpPos);
    return x.isNeg() && !x.isZero() ? "-" + str : str;
  };
  P.truncated = P.trunc = function() {
    return finalise(new this.constructor(this), this.e + 1, 1);
  };
  P.valueOf = P.toJSON = function() {
    var x = this, Ctor = x.constructor, str = finiteToString(x, x.e <= Ctor.toExpNeg || x.e >= Ctor.toExpPos);
    return x.isNeg() ? "-" + str : str;
  };
  divide = /* @__PURE__ */ function() {
    function multiplyInteger(x, k, base) {
      var temp, carry = 0, i = x.length;
      for (x = x.slice();i--; ) {
        temp = x[i] * k + carry;
        x[i] = temp % base | 0;
        carry = temp / base | 0;
      }
      if (carry)
        x.unshift(carry);
      return x;
    }
    function compare(a, b, aL, bL) {
      var i, r;
      if (aL != bL) {
        r = aL > bL ? 1 : -1;
      } else {
        for (i = r = 0;i < aL; i++) {
          if (a[i] != b[i]) {
            r = a[i] > b[i] ? 1 : -1;
            break;
          }
        }
      }
      return r;
    }
    function subtract(a, b, aL, base) {
      var i = 0;
      for (;aL--; ) {
        a[aL] -= i;
        i = a[aL] < b[aL] ? 1 : 0;
        a[aL] = i * base + a[aL] - b[aL];
      }
      for (;!a[0] && a.length > 1; )
        a.shift();
    }
    return function(x, y, pr, rm, dp, base) {
      var cmp, e, i, k, logBase, more, prod, prodL, q, qd, rem, remL, rem0, sd, t, xi, xL, yd0, yL, yz, Ctor = x.constructor, sign2 = x.s == y.s ? 1 : -1, xd = x.d, yd = y.d;
      if (!xd || !xd[0] || !yd || !yd[0]) {
        return new Ctor(!x.s || !y.s || (xd ? yd && xd[0] == yd[0] : !yd) ? NaN : xd && xd[0] == 0 || !yd ? sign2 * 0 : sign2 / 0);
      }
      if (base) {
        logBase = 1;
        e = x.e - y.e;
      } else {
        base = BASE;
        logBase = LOG_BASE;
        e = mathfloor(x.e / logBase) - mathfloor(y.e / logBase);
      }
      yL = yd.length;
      xL = xd.length;
      q = new Ctor(sign2);
      qd = q.d = [];
      for (i = 0;yd[i] == (xd[i] || 0); i++)
        ;
      if (yd[i] > (xd[i] || 0))
        e--;
      if (pr == null) {
        sd = pr = Ctor.precision;
        rm = Ctor.rounding;
      } else if (dp) {
        sd = pr + (x.e - y.e) + 1;
      } else {
        sd = pr;
      }
      if (sd < 0) {
        qd.push(1);
        more = true;
      } else {
        sd = sd / logBase + 2 | 0;
        i = 0;
        if (yL == 1) {
          k = 0;
          yd = yd[0];
          sd++;
          for (;(i < xL || k) && sd--; i++) {
            t = k * base + (xd[i] || 0);
            qd[i] = t / yd | 0;
            k = t % yd | 0;
          }
          more = k || i < xL;
        } else {
          k = base / (yd[0] + 1) | 0;
          if (k > 1) {
            yd = multiplyInteger(yd, k, base);
            xd = multiplyInteger(xd, k, base);
            yL = yd.length;
            xL = xd.length;
          }
          xi = yL;
          rem = xd.slice(0, yL);
          remL = rem.length;
          for (;remL < yL; )
            rem[remL++] = 0;
          yz = yd.slice();
          yz.unshift(0);
          yd0 = yd[0];
          if (yd[1] >= base / 2)
            ++yd0;
          do {
            k = 0;
            cmp = compare(yd, rem, yL, remL);
            if (cmp < 0) {
              rem0 = rem[0];
              if (yL != remL)
                rem0 = rem0 * base + (rem[1] || 0);
              k = rem0 / yd0 | 0;
              if (k > 1) {
                if (k >= base)
                  k = base - 1;
                prod = multiplyInteger(yd, k, base);
                prodL = prod.length;
                remL = rem.length;
                cmp = compare(prod, rem, prodL, remL);
                if (cmp == 1) {
                  k--;
                  subtract(prod, yL < prodL ? yz : yd, prodL, base);
                }
              } else {
                if (k == 0)
                  cmp = k = 1;
                prod = yd.slice();
              }
              prodL = prod.length;
              if (prodL < remL)
                prod.unshift(0);
              subtract(rem, prod, remL, base);
              if (cmp == -1) {
                remL = rem.length;
                cmp = compare(yd, rem, yL, remL);
                if (cmp < 1) {
                  k++;
                  subtract(rem, yL < remL ? yz : yd, remL, base);
                }
              }
              remL = rem.length;
            } else if (cmp === 0) {
              k++;
              rem = [0];
            }
            qd[i++] = k;
            if (cmp && rem[0]) {
              rem[remL++] = xd[xi] || 0;
            } else {
              rem = [xd[xi]];
              remL = 1;
            }
          } while ((xi++ < xL || rem[0] !== undefined) && sd--);
          more = rem[0] !== undefined;
        }
        if (!qd[0])
          qd.shift();
      }
      if (logBase == 1) {
        q.e = e;
        inexact = more;
      } else {
        for (i = 1, k = qd[0];k >= 10; k /= 10)
          i++;
        q.e = i + e * logBase - 1;
        finalise(q, dp ? pr + q.e + 1 : pr, rm, more);
      }
      return q;
    };
  }();
  P[Symbol.for("nodejs.util.inspect.custom")] = P.toString;
  P[Symbol.toStringTag] = "Decimal";
  Decimal = P.constructor = clone(DEFAULTS);
  LN10 = new Decimal(LN10);
  PI = new Decimal(PI);
  empty = raw("");
  /*! Bundled license information:
  
  decimal.js/decimal.mjs:
    (*!
     *  decimal.js v10.5.0
     *  An arbitrary-precision Decimal type for JavaScript.
     *  https://github.com/MikeMcl/decimal.js
     *  Copyright (c) 2025 Michael Mclaughlin <M8ch88l@gmail.com>
     *  MIT Licence
     *)
  */
});

// node_modules/@prisma/dmmf-v7/dist/convert.mjs
function datamodelEnumToSchemaEnum(datamodelEnum) {
  return {
    name: datamodelEnum.name,
    values: datamodelEnum.values.map((v) => v.name)
  };
}
var init_convert = () => {};

// node_modules/@prisma/dmmf-v7/dist/dmmf.mjs
var ModelAction;
var init_dmmf = __esm(() => {
  ModelAction = /* @__PURE__ */ ((ModelAction2) => {
    ModelAction2["findUnique"] = "findUnique";
    ModelAction2["findUniqueOrThrow"] = "findUniqueOrThrow";
    ModelAction2["findFirst"] = "findFirst";
    ModelAction2["findFirstOrThrow"] = "findFirstOrThrow";
    ModelAction2["findMany"] = "findMany";
    ModelAction2["create"] = "create";
    ModelAction2["createMany"] = "createMany";
    ModelAction2["createManyAndReturn"] = "createManyAndReturn";
    ModelAction2["update"] = "update";
    ModelAction2["updateMany"] = "updateMany";
    ModelAction2["updateManyAndReturn"] = "updateManyAndReturn";
    ModelAction2["upsert"] = "upsert";
    ModelAction2["delete"] = "delete";
    ModelAction2["deleteMany"] = "deleteMany";
    ModelAction2["groupBy"] = "groupBy";
    ModelAction2["count"] = "count";
    ModelAction2["aggregate"] = "aggregate";
    ModelAction2["findRaw"] = "findRaw";
    ModelAction2["aggregateRaw"] = "aggregateRaw";
    return ModelAction2;
  })(ModelAction || {});
});

// node_modules/@prisma/dmmf-v7/dist/util.mjs
var init_util = () => {};

// node_modules/@prisma/dmmf-v7/dist/index.mjs
var exports_dist2 = {};
__export(exports_dist2, {
  datamodelEnumToSchemaEnum: () => datamodelEnumToSchemaEnum,
  ModelAction: () => ModelAction
});
var init_dist2 = __esm(() => {
  init_convert();
  init_dmmf();
  init_util();
});

// node_modules/@prisma/dmmf-v6/dist/convert.mjs
function datamodelEnumToSchemaEnum2(datamodelEnum) {
  return {
    name: datamodelEnum.name,
    values: datamodelEnum.values.map((v) => v.name)
  };
}
var init_convert2 = () => {};

// node_modules/@prisma/dmmf-v6/dist/dmmf.mjs
var ModelAction2;
var init_dmmf2 = __esm(() => {
  ModelAction2 = /* @__PURE__ */ ((ModelAction22) => {
    ModelAction22["findUnique"] = "findUnique";
    ModelAction22["findUniqueOrThrow"] = "findUniqueOrThrow";
    ModelAction22["findFirst"] = "findFirst";
    ModelAction22["findFirstOrThrow"] = "findFirstOrThrow";
    ModelAction22["findMany"] = "findMany";
    ModelAction22["create"] = "create";
    ModelAction22["createMany"] = "createMany";
    ModelAction22["createManyAndReturn"] = "createManyAndReturn";
    ModelAction22["update"] = "update";
    ModelAction22["updateMany"] = "updateMany";
    ModelAction22["updateManyAndReturn"] = "updateManyAndReturn";
    ModelAction22["upsert"] = "upsert";
    ModelAction22["delete"] = "delete";
    ModelAction22["deleteMany"] = "deleteMany";
    ModelAction22["groupBy"] = "groupBy";
    ModelAction22["count"] = "count";
    ModelAction22["aggregate"] = "aggregate";
    ModelAction22["findRaw"] = "findRaw";
    ModelAction22["aggregateRaw"] = "aggregateRaw";
    return ModelAction22;
  })(ModelAction2 || {});
});

// node_modules/@prisma/dmmf-v6/dist/index.mjs
var exports_dist3 = {};
__export(exports_dist3, {
  datamodelEnumToSchemaEnum: () => datamodelEnumToSchemaEnum2,
  ModelAction: () => ModelAction2
});
var init_dist3 = __esm(() => {
  init_convert2();
  init_dmmf2();
});

// src/lib/client.ts
import * as path2 from "path";
import * as fs from "fs";

// src/lib/operations/aggregate.ts
function aggregate(args, items) {
  const aggregated = {};
  if (args._max)
    aggregated._max = aggregateMax(args._max, items);
  if (args._avg)
    aggregated._avg = aggregateAvg(args._avg, items);
  if (args._min)
    aggregated._min = aggregateMin(args._min, items);
  if (args._sum)
    aggregated._sum = aggregateSum(args._sum, items);
  if (args._count)
    aggregated._count = aggregateCount(args._count, items);
  return aggregated;
}
function aggregateMax(arg, items) {
  const _max = {};
  Object.keys(arg).forEach((property) => {
    _max[property] = Math.max(...items.map((item) => item[property]));
  });
  return _max;
}
function aggregateAvg(arg, items) {
  const _avg = {};
  Object.keys(arg).forEach((property) => {
    const values = items.filter((item) => item[property] !== undefined && item[property] !== null).map((item) => item[property]);
    const total = values.reduce((accumulator, currentValue) => {
      return accumulator + currentValue;
    }, 0);
    _avg[property] = total / values.length;
  });
  return _avg;
}
function aggregateMin(arg, items) {
  const _min = {};
  Object.keys(arg).forEach((property) => {
    _min[property] = Math.min(...items.map((item) => item[property]));
  });
  return _min;
}
function aggregateSum(arg, items) {
  const _sum = {};
  Object.keys(arg).forEach((property) => {
    const values = items.map((item) => item[property]);
    const total = values.reduce((accumulator, currentValue) => {
      return accumulator + currentValue;
    }, 0);
    _sum[property] = total;
  });
  return _sum;
}
function aggregateCount(arg, items) {
  const _count = {};
  if (arg === true) {
    return items.length;
  }
  Object.keys(arg).forEach((property) => {
    _count[property] = items.filter((item) => item[property] !== undefined && item[property] !== null).length;
  });
  if (arg._all === true) {
    _count._all = items.length;
  }
  return _count;
}
// src/lib/helpers.ts
function camelize(str) {
  return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function(word, index) {
    return index === 0 ? word.toLowerCase() : word.toUpperCase();
  }).replace(/\s+/g, "");
}
function shallowCompare(a, b) {
  for (const key in b) {
    if (a[key] !== b[key])
      return false;
  }
  return true;
}
function pick(obj, keys) {
  return Object.entries(obj).reduce((accumulator, [currentKey, currentValue]) => {
    if (keys.includes(currentKey)) {
      accumulator = { ...accumulator, [currentKey]: currentValue };
    }
    return accumulator;
  }, {});
}
function omit(obj, keys) {
  return Object.entries(obj).reduce((accumulator, [currentKey, currentValue]) => {
    if (!keys.includes(currentKey)) {
      accumulator = { ...accumulator, [currentKey]: currentValue };
    }
    return accumulator;
  }, {});
}
function uuid() {
  let dt = new Date().getTime();
  const uuid2 = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(c) {
    const r = (dt + Math.random() * 16) % 16 | 0;
    dt = Math.floor(dt / 16);
    return (c === "x" ? r : r & 3 | 8).toString(16);
  });
  return uuid2;
}
function removeUndefined(o) {
  if (!o)
    return o;
  return Object.keys(o).reduce((accumulator, currentValue) => {
    if (typeof o[currentValue] !== "undefined") {
      return {
        ...accumulator,
        [currentValue]: o[currentValue]
      };
    }
    return accumulator;
  }, {});
}
function pipe(...functions) {
  return (value) => {
    return functions.reduce((currentValue, currentFunction) => {
      return currentFunction(currentValue);
    }, value);
  };
}
function unique(value) {
  return Array.from(new Set(value));
}
function ensureArray(value) {
  return Array.isArray(value) ? value : [value];
}

// src/lib/operations/find/match.ts
function formatValueWithMode(baseValue, filter, info) {
  const format = "mode" in filter ? (baseValue2) => typeof baseValue2 === "string" ? baseValue2.toLocaleLowerCase() : baseValue2 : (v) => v;
  if (info?.type === "DateTime" && typeof baseValue === "string") {
    return new Date(baseValue);
  }
  if (info?.type === "BigInt" && typeof baseValue === "number") {
    return BigInt(baseValue);
  }
  return format(baseValue);
}
var matchMultiple = (item, where, current, delegates) => {
  const matchAnd = (item2, where2) => {
    return where2.filter((child) => matchMultiple(item2, child, current, delegates)).length === where2.length;
  };
  const matchOr = (item2, where2) => {
    return where2.some((child) => matchMultiple(item2, child, current, delegates));
  };
  const matchFnc = (where2, delegate = current) => (item2) => {
    if (where2) {
      return matchMultiple(item2, where2, delegate, delegates);
    }
    return true;
  };
  function match(child, item2, where2) {
    let val = item2[child];
    const filter = where2[child];
    if (child === "OR")
      return matchOr(item2, filter);
    if (child === "AND")
      return matchAnd(item2, filter);
    if (child === "NOT")
      return !matchOr(item2, filter instanceof Array ? filter : [filter]);
    if (child === "is") {
      if (typeof filter === "object") {
        return matchFnc(filter)(item2);
      }
      return false;
    }
    if (filter === undefined) {
      return true;
    }
    if (filter === null) {
      const field = current.model.fields.find((field2) => field2.name === child);
      if (field?.relationFromFields && field.relationFromFields.length > 0) {
        return item2[field.relationFromFields[0]] === null || item2[field.relationFromFields[0]] === undefined;
      }
      return val === null || val === undefined;
    }
    if (typeof filter === "bigint") {
      if (filter === BigInt(val)) {
        return true;
      }
    }
    if (filter instanceof Date) {
      if (val === undefined) {
        return false;
      }
      if (!(val instanceof Date) || val.getTime() !== filter.getTime()) {
        return false;
      }
    } else {
      if (typeof filter === "object") {
        const info = current.model.fields.find((field) => field.name === child);
        val = formatValueWithMode(val, filter, info);
        if (info?.relationName) {
          const childName = camelize(info.type);
          let childWhere = {};
          if (filter.every) {
            childWhere = filter.every;
          } else if (filter.some) {
            childWhere = filter.some;
          } else if (filter.none) {
            childWhere = filter.none;
          } else {
            childWhere = filter;
          }
          const res = delegates[childName].getItems().filter(matchFnc(Object.assign(Object.assign({}, childWhere), getFieldRelationshipWhere(item2, info, delegates)), delegates[childName]));
          if (filter.every) {
            if (res.length === 0)
              return false;
            const all = delegates[childName].getItems().filter(matchFnc(getFieldRelationshipWhere(item2, info, delegates)));
            return res.length === all.length;
          } else if (filter.some) {
            return res.length > 0;
          } else if (filter.is === null) {
            return res.length === 0;
          } else if (filter.none) {
            return res.length === 0;
          }
          return res.length > 0;
        }
        const compositeIndex = current.model.uniqueIndexes.map((index) => index.name).includes(child) || current.model.primaryKey?.name === child || current.model.primaryKey?.fields.join("_");
        if (compositeIndex) {
          return matchMultiple(item2, where2[child], current, delegates);
        }
        const idFields = current.model.fields.map((field) => field.isId);
        if (idFields?.length > 1) {
          if (child === idFields.join("_")) {
            return shallowCompare(item2, filter);
          }
        }
        if (current.model.uniqueFields.length > 0) {
          for (const uniqueField of current.model.uniqueFields) {
            if (child === uniqueField.join("_")) {
              return shallowCompare(item2, filter);
            }
          }
        }
        if (val === undefined)
          return false;
        let match2 = true;
        if ("equals" in filter && match2) {
          match2 = formatValueWithMode(filter.equals, filter, info) === val;
        }
        if ("startsWith" in filter && match2) {
          match2 = val.indexOf(formatValueWithMode(filter.startsWith, filter, info)) === 0;
        }
        if ("endsWith" in filter && match2) {
          match2 = val.indexOf(formatValueWithMode(filter.endsWith, filter, info)) === val.length - filter.endsWith.length;
        }
        if ("contains" in filter && match2) {
          match2 = val.indexOf(formatValueWithMode(filter.contains, filter, info)) > -1;
        }
        if ("gt" in filter && match2) {
          match2 = val > formatValueWithMode(filter.gt, filter, info);
        }
        if ("gte" in filter && match2) {
          match2 = val >= formatValueWithMode(filter.gte, filter, info);
        }
        if ("lt" in filter && match2) {
          match2 = val !== null && val < formatValueWithMode(filter.lt, filter, info);
        }
        if ("lte" in filter && match2) {
          match2 = val !== null && val <= formatValueWithMode(filter.lte, filter, info);
        }
        if ("in" in filter && match2) {
          match2 = filter.in.map((inEntry) => formatValueWithMode(inEntry, filter, info)).includes(val);
        }
        if ("not" in filter && match2) {
          match2 = val !== formatValueWithMode(filter.not, filter);
        }
        if ("notIn" in filter && match2) {
          match2 = !filter.notIn.map((notInEntry) => formatValueWithMode(notInEntry, filter, info)).includes(val);
        }
        if (!match2)
          return false;
      } else if (val !== filter) {
        return false;
      }
    }
    return true;
  }
  for (const child in where) {
    if (!match(child, item, where)) {
      return false;
    }
  }
  return true;
};

// src/lib/operations/find/find.ts
function findNextIncrement(properties, fieldName) {
  const current = properties.increment[fieldName];
  const increment = (current ?? 0) + 1;
  Object.assign(properties.increment, { [fieldName]: increment });
  return increment;
}
function findOne(args, current, delegates) {
  const found = pipe((items) => items.filter((item) => where(args.where, current, delegates)(item)), order(args, current, delegates), connect(args, current, delegates), paginate(args.skip, args.take))(current.getItems()).at(0);
  if (!found)
    return null;
  return structuredClone(select(args.select)(found));
}
function where(whereArgs = {}, current, delegates) {
  return (item) => matchMultiple(item, whereArgs, current, delegates);
}
function getOrderedValue(orderedValue) {
  if (typeof orderedValue === "object") {
    return {
      sortOrder: orderedValue.sort,
      nullOrder: orderedValue.nulls ?? "last"
    };
  }
  return {
    sortOrder: orderedValue,
    nullOrder: "last"
  };
}
function isOrderByRelation(orderedProperties) {
  const orderedProperty = Object.keys(orderedProperties)[0];
  return Object.keys(orderedProperties[orderedProperty]).includes("_count");
}
function calculateOrder(a, b, orderedProperties, current, delegates) {
  for (const orderedProperty in orderedProperties) {
    if (isOrderByRelation(orderedProperties)) {
      const sortOrder2 = Object.values(orderedProperties[orderedProperty])[0];
      return calculateRelationOrder(a, b, orderedProperty, sortOrder2, current, delegates);
    }
    const { nullOrder, sortOrder } = getOrderedValue(orderedProperties[orderedProperty]);
    let weight = 0;
    const weightMultiplier = sortOrder === "desc" ? -1 : 1;
    const values = [a[orderedProperty], b[orderedProperty]];
    if (values.every((value) => value === null)) {
      return 0;
    } else if (values.some((value) => value === null)) {
      if (values[0] === null)
        weight = -1;
      if (values[1] === null)
        weight = 1;
      if (nullOrder === "last")
        return weight * -1;
      else
        return weight;
    }
    if (typeof values[0] === "number" && typeof values[1] === "number") {
      weight = values[0] - values[1];
    }
    if (typeof values[0] === "string" && typeof values[1] === "string") {
      weight = values[0].localeCompare(values[1]);
    }
    if (values[0] instanceof Date && values[1] instanceof Date) {
      weight = values[0].getTime() - values[1].getTime();
    }
    if (weight !== 0)
      return weight * weightMultiplier;
  }
  return 0;
}
function calculateRelationOrder(a, b, orderedProperty, sortOrder, current, delegates) {
  const schema = current.model.fields.find((field2) => field2.name === orderedProperty);
  if (!schema?.relationName)
    return 0;
  const delegate = getDelegateFromField(schema, delegates);
  const field = getJoinField(schema, delegates);
  const counts = {
    a: findMany({
      where: getFieldFromRelationshipWhere(a, field)
    }, delegate, delegates).length,
    b: findMany({
      where: getFieldFromRelationshipWhere(b, field)
    }, delegate, delegates).length
  };
  const weightMultiplier = sortOrder === "desc" ? -1 : 1;
  const weight = counts.a - counts.b;
  if (weight !== 0)
    return weight * weightMultiplier;
  return 0;
}
function order(args, delegate, delegates) {
  return (items) => {
    if (!args.orderBy)
      return items;
    const propertiesToOrderBy = Array.isArray(args.orderBy) ? args.orderBy : [args.orderBy];
    const o = propertiesToOrderBy.reduceRight((accumulator, currentValue) => {
      const acc = accumulator.sort((a, b) => calculateOrder(a, b, currentValue, delegate, delegates));
      return acc;
    }, items);
    return o;
  };
}
function paginate(skip, take) {
  return (items) => {
    if (!skip && !take)
      return items;
    return items.slice(skip ?? 0, take === undefined ? undefined : take + (skip ?? 0));
  };
}
function includes(args, current, delegates) {
  return (item) => {
    if (!args?.include && !args?.select || !item)
      return item;
    const newItem = { ...item };
    const obj = args?.select ?? args.include;
    Object.keys(obj).filter((key) => !!obj[key]).forEach((key) => {
      const schema = current.model.fields.find((field) => field.name === key);
      if (!schema?.relationName)
        return;
      const delegate = getDelegateFromField(schema, delegates);
      let subArgs = obj[key] === true ? {} : obj[key];
      subArgs = Object.assign(Object.assign({}, subArgs), {
        where: Object.assign(Object.assign({}, subArgs.where), getFieldRelationshipWhere(item, schema, delegates))
      });
      if (schema.isList) {
        Object.assign(newItem, { [key]: findMany(subArgs, delegate, delegates) });
      } else {
        Object.assign(newItem, { [key]: findOne(subArgs, delegate, delegates) });
      }
    });
    return newItem;
  };
}
function select(selectArgs) {
  return (item) => {
    if (!selectArgs)
      return item;
    return Object.entries(item).reduce((accumulator, [key, value]) => {
      if (selectArgs[key]) {
        accumulator[key] = value;
      }
      return accumulator;
    }, {});
  };
}
var getJoinField = (field, delegates) => {
  const joinDelegate = Object.values(delegates).find((delegate) => {
    return delegate.model.name === field.type;
  });
  const joinfield = joinDelegate?.model.fields.find((f) => {
    return f.relationName === field.relationName;
  });
  return joinfield;
};
var getDelegateFromField = (field, delegates) => {
  const delegateName = camelize(field.type);
  return delegates[delegateName];
};
var getFieldRelationshipWhere = (item, field, delegates) => {
  if (field.relationToFields?.length === 0) {
    field = getJoinField(field, delegates);
    return {
      [field.relationFromFields[0]]: item[field.relationToFields[0]]
    };
  }
  return {
    [field.relationToFields[0]]: item[field.relationFromFields[0]]
  };
};
var getFieldFromRelationshipWhere = (item, field) => {
  return {
    [field.relationFromFields[0]]: item[field.relationToFields[0]]
  };
};
function connect(args, current, delegates) {
  return (items) => {
    return items.reduce((accumulator, currentValue) => {
      const item = pipe(includes(args, current, delegates), select(args.select))(currentValue);
      return [...accumulator, item];
    }, []);
  };
}
function findMany(args, current, delegates) {
  const found = pipe((items) => items.filter((item) => where(args.where, current, delegates)(item)), order(args, current, delegates), connect(args, current, delegates), paginate(args.skip, args.take))(current.getItems());
  if (args?.distinct) {
    const values = {};
    return found.filter((item) => {
      let shouldInclude = true;
      args.distinct.forEach((key) => {
        const vals = values[key] || [];
        if (vals.includes(item[key])) {
          shouldInclude = false;
        } else {
          vals.push(item[key]);
          values[key] = vals;
        }
      });
      return shouldInclude;
    });
  }
  return structuredClone(found);
}
// src/lib/operations/groupBy/groupBy.ts
function groupBy(args, current, delegates) {
  const by = Array.isArray(args.by) ? args.by : [args.by];
  const items = findMany({ where: args.where }, current, delegates);
  const grouped = divideIntoGroups(args, by, items);
  const filtered = having(grouped, args.having, current, delegates);
  const ordered = orderWithAggregates(filtered, args, current, delegates);
  return ordered.map((group) => extractDesiredFields(args, group));
}
function having(items, arg, current, delegates) {
  if (arg === undefined) {
    return items;
  }
  const flattenedArg = flattenHaving(arg);
  return items.filter(({ havingValue }) => {
    const result = matchMultiple(havingValue, flattenedArg, current, delegates);
    return result;
  });
}
function flattenHaving(having2) {
  return Object.fromEntries(Object.entries(having2).flatMap(([key, value]) => {
    if (["AND", "OR", "NOT"].includes(key)) {
      return [[key, ensureArray(value).map((v) => flattenHaving(v))]];
    }
    if (typeof value === "object") {
      const hasAgg = Object.keys(value).some((k) => k.startsWith("_"));
      if (!hasAgg) {
        return [[key, value]];
      }
      return Object.entries(value).map(([nestedKey, nestedValue]) => {
        return [key + nestedKey, nestedValue];
      });
    }
    return [[key, value]];
  }));
}
function orderWithAggregates(groups, args, delegate, delegates) {
  if (!args.orderBy)
    return groups;
  const propertiesToOrderBy = Array.isArray(args.orderBy) ? args.orderBy : [args.orderBy];
  const o = propertiesToOrderBy.reduceRight((accumulator, currentValue) => {
    const acc = accumulator.sort((a, b) => calculateOrder(a.orderByValue, b.orderByValue, currentValue, delegate, delegates));
    return acc;
  }, groups);
  return o;
}
function extractDesiredFields(args, { groupKey, items }) {
  return {
    ...groupKey,
    ...aggregate({ ...args, cursor: undefined }, items)
  };
}
function divideIntoGroups(args, by, items) {
  return items.reduce((groups, item) => {
    const itemKey = pick(item, by);
    let group = groups.find(([groupKey]) => shallowCompare(groupKey, itemKey));
    if (!group) {
      group = [itemKey, [item]];
      groups.push(group);
    } else {
      group[1].push(item);
    }
    return groups;
  }, []).map(([groupKey, items2]) => {
    return {
      groupKey,
      items: items2,
      orderByValue: buildOrderByValue(args, groupKey, items2),
      havingValue: buildHavingValue(args, groupKey, items2)
    };
  });
}
function buildOrderByValue(args, groupKey, items) {
  if (args.orderBy === undefined) {
    return {};
  }
  const aggregateArgs = ensureArray(args.orderBy).reduce((agg, each) => Object.entries(each).filter(([key]) => key.startsWith("_")).reduce((agg2, [aggregation, fields]) => {
    return Object.assign(agg2, mergeAggregateArg(aggregation, agg2[aggregation], fields));
  }, agg), {});
  return {
    ...groupKey,
    ...aggregate(aggregateArgs, items)
  };
}
function extractDesiredHavingAggregates(having2, result = {}) {
  return Object.entries(having2).reduce((agg, [field, value]) => {
    if (["AND", "OR", "NOT"].includes(field)) {
      return ensureArray(value).reduce((a, each) => extractDesiredHavingAggregates(each, a), agg);
    } else {
      Object.keys(value).filter((k) => k.startsWith("_")).forEach((aggregation) => {
        const aggKey = aggregation;
        agg[aggKey] = (agg[aggKey] ?? []).concat([field]);
      });
      return agg;
    }
  }, result);
}
function buildHavingValue(args, groupKey, items) {
  if (args.having === undefined) {
    return {};
  }
  const desiredAggregates = extractDesiredHavingAggregates(args.having);
  const aggregateArgs = Object.fromEntries(Object.entries(desiredAggregates).map(([field, aggregates]) => [
    field,
    Object.fromEntries(unique(aggregates).map((agg) => [agg, true]))
  ]));
  return {
    ...groupKey,
    ...flattenAggregate(aggregate(aggregateArgs, items))
  };
}
function flattenAggregate(aggregate2) {
  const result = {};
  Object.entries(aggregate2).forEach(([aggregate3, fields]) => {
    Object.entries(fields).forEach(([field, value]) => {
      result[field + aggregate3] = value;
    });
  });
  return result;
}
function mergeAggregateArg(aggregation, aggregate2, value) {
  const valueToProcess = aggregate2 ? Object.keys(value).reduce((agg, key) => Object.assign(agg, { [key]: true }), aggregate2) : value;
  return {
    [aggregation]: Object.fromEntries(Object.keys(valueToProcess).map((k) => [k, true]))
  };
}
// node_modules/bson/lib/bson.node.mjs
import { randomBytes } from "crypto";
var TypedArrayPrototypeGetSymbolToStringTag = (() => {
  const g = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(Uint8Array.prototype), Symbol.toStringTag).get;
  return (value) => g.call(value);
})();
function isUint8Array(value) {
  return TypedArrayPrototypeGetSymbolToStringTag(value) === "Uint8Array";
}
function isAnyArrayBuffer(value) {
  return typeof value === "object" && value != null && Symbol.toStringTag in value && (value[Symbol.toStringTag] === "ArrayBuffer" || value[Symbol.toStringTag] === "SharedArrayBuffer");
}
function isRegExp(regexp) {
  return regexp instanceof RegExp || Object.prototype.toString.call(regexp) === "[object RegExp]";
}
function isMap(value) {
  return typeof value === "object" && value != null && Symbol.toStringTag in value && value[Symbol.toStringTag] === "Map";
}
function isDate(date) {
  return date instanceof Date || Object.prototype.toString.call(date) === "[object Date]";
}
function defaultInspect(x, _options) {
  return JSON.stringify(x, (k, v) => {
    if (typeof v === "bigint") {
      return { $numberLong: `${v}` };
    } else if (isMap(v)) {
      return Object.fromEntries(v);
    }
    return v;
  });
}
function getStylizeFunction(options) {
  const stylizeExists = options != null && typeof options === "object" && "stylize" in options && typeof options.stylize === "function";
  if (stylizeExists) {
    return options.stylize;
  }
}
var BSON_MAJOR_VERSION = 6;
var BSON_VERSION_SYMBOL = Symbol.for("@@mdb.bson.version");
var BSON_INT32_MAX = 2147483647;
var BSON_INT32_MIN = -2147483648;
var BSON_INT64_MAX = Math.pow(2, 63) - 1;
var BSON_INT64_MIN = -Math.pow(2, 63);
var JS_INT_MAX = Math.pow(2, 53);
var JS_INT_MIN = -Math.pow(2, 53);
var BSON_BINARY_SUBTYPE_UUID_NEW = 4;
var BSONType = Object.freeze({
  double: 1,
  string: 2,
  object: 3,
  array: 4,
  binData: 5,
  undefined: 6,
  objectId: 7,
  bool: 8,
  date: 9,
  null: 10,
  regex: 11,
  dbPointer: 12,
  javascript: 13,
  symbol: 14,
  javascriptWithScope: 15,
  int: 16,
  timestamp: 17,
  long: 18,
  decimal: 19,
  minKey: -1,
  maxKey: 127
});

class BSONError extends Error {
  get bsonError() {
    return true;
  }
  get name() {
    return "BSONError";
  }
  constructor(message, options) {
    super(message, options);
  }
  static isBSONError(value) {
    return value != null && typeof value === "object" && "bsonError" in value && value.bsonError === true && "name" in value && "message" in value && "stack" in value;
  }
}

class BSONVersionError extends BSONError {
  get name() {
    return "BSONVersionError";
  }
  constructor() {
    super(`Unsupported BSON version, bson types must be from bson ${BSON_MAJOR_VERSION}.x.x`);
  }
}

class BSONRuntimeError extends BSONError {
  get name() {
    return "BSONRuntimeError";
  }
  constructor(message) {
    super(message);
  }
}

class BSONOffsetError extends BSONError {
  get name() {
    return "BSONOffsetError";
  }
  constructor(message, offset, options) {
    super(`${message}. offset: ${offset}`, options);
    this.offset = offset;
  }
}
var TextDecoderFatal;
var TextDecoderNonFatal;
function parseUtf8(buffer, start, end, fatal) {
  if (fatal) {
    TextDecoderFatal ??= new TextDecoder("utf8", { fatal: true });
    try {
      return TextDecoderFatal.decode(buffer.subarray(start, end));
    } catch (cause) {
      throw new BSONError("Invalid UTF-8 string in BSON document", { cause });
    }
  }
  TextDecoderNonFatal ??= new TextDecoder("utf8", { fatal: false });
  return TextDecoderNonFatal.decode(buffer.subarray(start, end));
}
function tryReadBasicLatin(uint8array, start, end) {
  if (uint8array.length === 0) {
    return "";
  }
  const stringByteLength = end - start;
  if (stringByteLength === 0) {
    return "";
  }
  if (stringByteLength > 20) {
    return null;
  }
  if (stringByteLength === 1 && uint8array[start] < 128) {
    return String.fromCharCode(uint8array[start]);
  }
  if (stringByteLength === 2 && uint8array[start] < 128 && uint8array[start + 1] < 128) {
    return String.fromCharCode(uint8array[start]) + String.fromCharCode(uint8array[start + 1]);
  }
  if (stringByteLength === 3 && uint8array[start] < 128 && uint8array[start + 1] < 128 && uint8array[start + 2] < 128) {
    return String.fromCharCode(uint8array[start]) + String.fromCharCode(uint8array[start + 1]) + String.fromCharCode(uint8array[start + 2]);
  }
  const latinBytes = [];
  for (let i = start;i < end; i++) {
    const byte = uint8array[i];
    if (byte > 127) {
      return null;
    }
    latinBytes.push(byte);
  }
  return String.fromCharCode(...latinBytes);
}
function tryWriteBasicLatin(destination, source, offset) {
  if (source.length === 0)
    return 0;
  if (source.length > 25)
    return null;
  if (destination.length - offset < source.length)
    return null;
  for (let charOffset = 0, destinationOffset = offset;charOffset < source.length; charOffset++, destinationOffset++) {
    const char = source.charCodeAt(charOffset);
    if (char > 127)
      return null;
    destination[destinationOffset] = char;
  }
  return source.length;
}
var nodeJsByteUtils = {
  toLocalBufferType(potentialBuffer) {
    if (Buffer.isBuffer(potentialBuffer)) {
      return potentialBuffer;
    }
    if (ArrayBuffer.isView(potentialBuffer)) {
      return Buffer.from(potentialBuffer.buffer, potentialBuffer.byteOffset, potentialBuffer.byteLength);
    }
    const stringTag = potentialBuffer?.[Symbol.toStringTag] ?? Object.prototype.toString.call(potentialBuffer);
    if (stringTag === "ArrayBuffer" || stringTag === "SharedArrayBuffer" || stringTag === "[object ArrayBuffer]" || stringTag === "[object SharedArrayBuffer]") {
      return Buffer.from(potentialBuffer);
    }
    throw new BSONError(`Cannot create Buffer from the passed potentialBuffer.`);
  },
  allocate(size) {
    return Buffer.alloc(size);
  },
  allocateUnsafe(size) {
    return Buffer.allocUnsafe(size);
  },
  equals(a, b) {
    return nodeJsByteUtils.toLocalBufferType(a).equals(b);
  },
  fromNumberArray(array) {
    return Buffer.from(array);
  },
  fromBase64(base64) {
    return Buffer.from(base64, "base64");
  },
  toBase64(buffer) {
    return nodeJsByteUtils.toLocalBufferType(buffer).toString("base64");
  },
  fromISO88591(codePoints) {
    return Buffer.from(codePoints, "binary");
  },
  toISO88591(buffer) {
    return nodeJsByteUtils.toLocalBufferType(buffer).toString("binary");
  },
  fromHex(hex) {
    return Buffer.from(hex, "hex");
  },
  toHex(buffer) {
    return nodeJsByteUtils.toLocalBufferType(buffer).toString("hex");
  },
  toUTF8(buffer, start, end, fatal) {
    const basicLatin = end - start <= 20 ? tryReadBasicLatin(buffer, start, end) : null;
    if (basicLatin != null) {
      return basicLatin;
    }
    const string = nodeJsByteUtils.toLocalBufferType(buffer).toString("utf8", start, end);
    if (fatal) {
      for (let i = 0;i < string.length; i++) {
        if (string.charCodeAt(i) === 65533) {
          parseUtf8(buffer, start, end, true);
          break;
        }
      }
    }
    return string;
  },
  utf8ByteLength(input) {
    return Buffer.byteLength(input, "utf8");
  },
  encodeUTF8Into(buffer, source, byteOffset) {
    const latinBytesWritten = tryWriteBasicLatin(buffer, source, byteOffset);
    if (latinBytesWritten != null) {
      return latinBytesWritten;
    }
    return nodeJsByteUtils.toLocalBufferType(buffer).write(source, byteOffset, undefined, "utf8");
  },
  randomBytes,
  swap32(buffer) {
    return nodeJsByteUtils.toLocalBufferType(buffer).swap32();
  }
};
function isReactNative() {
  const { navigator } = globalThis;
  return typeof navigator === "object" && navigator.product === "ReactNative";
}
function webMathRandomBytes(byteLength) {
  if (byteLength < 0) {
    throw new RangeError(`The argument 'byteLength' is invalid. Received ${byteLength}`);
  }
  return webByteUtils.fromNumberArray(Array.from({ length: byteLength }, () => Math.floor(Math.random() * 256)));
}
var webRandomBytes = (() => {
  const { crypto: crypto2 } = globalThis;
  if (crypto2 != null && typeof crypto2.getRandomValues === "function") {
    return (byteLength) => {
      return crypto2.getRandomValues(webByteUtils.allocate(byteLength));
    };
  } else {
    if (isReactNative()) {
      const { console: console2 } = globalThis;
      console2?.warn?.("BSON: For React Native please polyfill crypto.getRandomValues, e.g. using: https://www.npmjs.com/package/react-native-get-random-values.");
    }
    return webMathRandomBytes;
  }
})();
var HEX_DIGIT = /(\d|[a-f])/i;
var webByteUtils = {
  toLocalBufferType(potentialUint8array) {
    const stringTag = potentialUint8array?.[Symbol.toStringTag] ?? Object.prototype.toString.call(potentialUint8array);
    if (stringTag === "Uint8Array") {
      return potentialUint8array;
    }
    if (ArrayBuffer.isView(potentialUint8array)) {
      return new Uint8Array(potentialUint8array.buffer.slice(potentialUint8array.byteOffset, potentialUint8array.byteOffset + potentialUint8array.byteLength));
    }
    if (stringTag === "ArrayBuffer" || stringTag === "SharedArrayBuffer" || stringTag === "[object ArrayBuffer]" || stringTag === "[object SharedArrayBuffer]") {
      return new Uint8Array(potentialUint8array);
    }
    throw new BSONError(`Cannot make a Uint8Array from passed potentialBuffer.`);
  },
  allocate(size) {
    if (typeof size !== "number") {
      throw new TypeError(`The "size" argument must be of type number. Received ${String(size)}`);
    }
    return new Uint8Array(size);
  },
  allocateUnsafe(size) {
    return webByteUtils.allocate(size);
  },
  equals(a, b) {
    if (a.byteLength !== b.byteLength) {
      return false;
    }
    for (let i = 0;i < a.byteLength; i++) {
      if (a[i] !== b[i]) {
        return false;
      }
    }
    return true;
  },
  fromNumberArray(array) {
    return Uint8Array.from(array);
  },
  fromBase64(base64) {
    return Uint8Array.from(atob(base64), (c) => c.charCodeAt(0));
  },
  toBase64(uint8array) {
    return btoa(webByteUtils.toISO88591(uint8array));
  },
  fromISO88591(codePoints) {
    return Uint8Array.from(codePoints, (c) => c.charCodeAt(0) & 255);
  },
  toISO88591(uint8array) {
    return Array.from(Uint16Array.from(uint8array), (b) => String.fromCharCode(b)).join("");
  },
  fromHex(hex) {
    const evenLengthHex = hex.length % 2 === 0 ? hex : hex.slice(0, hex.length - 1);
    const buffer = [];
    for (let i = 0;i < evenLengthHex.length; i += 2) {
      const firstDigit = evenLengthHex[i];
      const secondDigit = evenLengthHex[i + 1];
      if (!HEX_DIGIT.test(firstDigit)) {
        break;
      }
      if (!HEX_DIGIT.test(secondDigit)) {
        break;
      }
      const hexDigit = Number.parseInt(`${firstDigit}${secondDigit}`, 16);
      buffer.push(hexDigit);
    }
    return Uint8Array.from(buffer);
  },
  toHex(uint8array) {
    return Array.from(uint8array, (byte) => byte.toString(16).padStart(2, "0")).join("");
  },
  toUTF8(uint8array, start, end, fatal) {
    const basicLatin = end - start <= 20 ? tryReadBasicLatin(uint8array, start, end) : null;
    if (basicLatin != null) {
      return basicLatin;
    }
    return parseUtf8(uint8array, start, end, fatal);
  },
  utf8ByteLength(input) {
    return new TextEncoder().encode(input).byteLength;
  },
  encodeUTF8Into(uint8array, source, byteOffset) {
    const bytes = new TextEncoder().encode(source);
    uint8array.set(bytes, byteOffset);
    return bytes.byteLength;
  },
  randomBytes: webRandomBytes,
  swap32(buffer) {
    if (buffer.length % 4 !== 0) {
      throw new RangeError("Buffer size must be a multiple of 32-bits");
    }
    for (let i = 0;i < buffer.length; i += 4) {
      const byte0 = buffer[i];
      const byte1 = buffer[i + 1];
      const byte2 = buffer[i + 2];
      const byte3 = buffer[i + 3];
      buffer[i] = byte3;
      buffer[i + 1] = byte2;
      buffer[i + 2] = byte1;
      buffer[i + 3] = byte0;
    }
    return buffer;
  }
};
var hasGlobalBuffer = typeof Buffer === "function" && Buffer.prototype?._isBuffer !== true;
var ByteUtils = hasGlobalBuffer ? nodeJsByteUtils : webByteUtils;

class BSONValue {
  get [BSON_VERSION_SYMBOL]() {
    return BSON_MAJOR_VERSION;
  }
  [Symbol.for("nodejs.util.inspect.custom")](depth, options, inspect) {
    return this.inspect(depth, options, inspect);
  }
}
var FLOAT = new Float64Array(1);
var FLOAT_BYTES = new Uint8Array(FLOAT.buffer, 0, 8);
FLOAT[0] = -1;
var isBigEndian = FLOAT_BYTES[7] === 0;
var NumberUtils = {
  isBigEndian,
  getNonnegativeInt32LE(source, offset) {
    if (source[offset + 3] > 127) {
      throw new RangeError(`Size cannot be negative at offset: ${offset}`);
    }
    return source[offset] | source[offset + 1] << 8 | source[offset + 2] << 16 | source[offset + 3] << 24;
  },
  getInt32LE(source, offset) {
    return source[offset] | source[offset + 1] << 8 | source[offset + 2] << 16 | source[offset + 3] << 24;
  },
  getUint32LE(source, offset) {
    return source[offset] + source[offset + 1] * 256 + source[offset + 2] * 65536 + source[offset + 3] * 16777216;
  },
  getUint32BE(source, offset) {
    return source[offset + 3] + source[offset + 2] * 256 + source[offset + 1] * 65536 + source[offset] * 16777216;
  },
  getBigInt64LE(source, offset) {
    const hi = BigInt(source[offset + 4] + source[offset + 5] * 256 + source[offset + 6] * 65536 + (source[offset + 7] << 24));
    const lo = BigInt(source[offset] + source[offset + 1] * 256 + source[offset + 2] * 65536 + source[offset + 3] * 16777216);
    return (hi << BigInt(32)) + lo;
  },
  getFloat64LE: isBigEndian ? (source, offset) => {
    FLOAT_BYTES[7] = source[offset];
    FLOAT_BYTES[6] = source[offset + 1];
    FLOAT_BYTES[5] = source[offset + 2];
    FLOAT_BYTES[4] = source[offset + 3];
    FLOAT_BYTES[3] = source[offset + 4];
    FLOAT_BYTES[2] = source[offset + 5];
    FLOAT_BYTES[1] = source[offset + 6];
    FLOAT_BYTES[0] = source[offset + 7];
    return FLOAT[0];
  } : (source, offset) => {
    FLOAT_BYTES[0] = source[offset];
    FLOAT_BYTES[1] = source[offset + 1];
    FLOAT_BYTES[2] = source[offset + 2];
    FLOAT_BYTES[3] = source[offset + 3];
    FLOAT_BYTES[4] = source[offset + 4];
    FLOAT_BYTES[5] = source[offset + 5];
    FLOAT_BYTES[6] = source[offset + 6];
    FLOAT_BYTES[7] = source[offset + 7];
    return FLOAT[0];
  },
  setInt32BE(destination, offset, value) {
    destination[offset + 3] = value;
    value >>>= 8;
    destination[offset + 2] = value;
    value >>>= 8;
    destination[offset + 1] = value;
    value >>>= 8;
    destination[offset] = value;
    return 4;
  },
  setInt32LE(destination, offset, value) {
    destination[offset] = value;
    value >>>= 8;
    destination[offset + 1] = value;
    value >>>= 8;
    destination[offset + 2] = value;
    value >>>= 8;
    destination[offset + 3] = value;
    return 4;
  },
  setBigInt64LE(destination, offset, value) {
    const mask32bits = BigInt(4294967295);
    let lo = Number(value & mask32bits);
    destination[offset] = lo;
    lo >>= 8;
    destination[offset + 1] = lo;
    lo >>= 8;
    destination[offset + 2] = lo;
    lo >>= 8;
    destination[offset + 3] = lo;
    let hi = Number(value >> BigInt(32) & mask32bits);
    destination[offset + 4] = hi;
    hi >>= 8;
    destination[offset + 5] = hi;
    hi >>= 8;
    destination[offset + 6] = hi;
    hi >>= 8;
    destination[offset + 7] = hi;
    return 8;
  },
  setFloat64LE: isBigEndian ? (destination, offset, value) => {
    FLOAT[0] = value;
    destination[offset] = FLOAT_BYTES[7];
    destination[offset + 1] = FLOAT_BYTES[6];
    destination[offset + 2] = FLOAT_BYTES[5];
    destination[offset + 3] = FLOAT_BYTES[4];
    destination[offset + 4] = FLOAT_BYTES[3];
    destination[offset + 5] = FLOAT_BYTES[2];
    destination[offset + 6] = FLOAT_BYTES[1];
    destination[offset + 7] = FLOAT_BYTES[0];
    return 8;
  } : (destination, offset, value) => {
    FLOAT[0] = value;
    destination[offset] = FLOAT_BYTES[0];
    destination[offset + 1] = FLOAT_BYTES[1];
    destination[offset + 2] = FLOAT_BYTES[2];
    destination[offset + 3] = FLOAT_BYTES[3];
    destination[offset + 4] = FLOAT_BYTES[4];
    destination[offset + 5] = FLOAT_BYTES[5];
    destination[offset + 6] = FLOAT_BYTES[6];
    destination[offset + 7] = FLOAT_BYTES[7];
    return 8;
  }
};

class Binary extends BSONValue {
  get _bsontype() {
    return "Binary";
  }
  constructor(buffer, subType) {
    super();
    if (!(buffer == null) && typeof buffer === "string" && !ArrayBuffer.isView(buffer) && !isAnyArrayBuffer(buffer) && !Array.isArray(buffer)) {
      throw new BSONError("Binary can only be constructed from Uint8Array or number[]");
    }
    this.sub_type = subType ?? Binary.BSON_BINARY_SUBTYPE_DEFAULT;
    if (buffer == null) {
      this.buffer = ByteUtils.allocate(Binary.BUFFER_SIZE);
      this.position = 0;
    } else {
      this.buffer = Array.isArray(buffer) ? ByteUtils.fromNumberArray(buffer) : ByteUtils.toLocalBufferType(buffer);
      this.position = this.buffer.byteLength;
    }
  }
  put(byteValue) {
    if (typeof byteValue === "string" && byteValue.length !== 1) {
      throw new BSONError("only accepts single character String");
    } else if (typeof byteValue !== "number" && byteValue.length !== 1)
      throw new BSONError("only accepts single character Uint8Array or Array");
    let decodedByte;
    if (typeof byteValue === "string") {
      decodedByte = byteValue.charCodeAt(0);
    } else if (typeof byteValue === "number") {
      decodedByte = byteValue;
    } else {
      decodedByte = byteValue[0];
    }
    if (decodedByte < 0 || decodedByte > 255) {
      throw new BSONError("only accepts number in a valid unsigned byte range 0-255");
    }
    if (this.buffer.byteLength > this.position) {
      this.buffer[this.position++] = decodedByte;
    } else {
      const newSpace = ByteUtils.allocate(Binary.BUFFER_SIZE + this.buffer.length);
      newSpace.set(this.buffer, 0);
      this.buffer = newSpace;
      this.buffer[this.position++] = decodedByte;
    }
  }
  write(sequence, offset) {
    offset = typeof offset === "number" ? offset : this.position;
    if (this.buffer.byteLength < offset + sequence.length) {
      const newSpace = ByteUtils.allocate(this.buffer.byteLength + sequence.length);
      newSpace.set(this.buffer, 0);
      this.buffer = newSpace;
    }
    if (ArrayBuffer.isView(sequence)) {
      this.buffer.set(ByteUtils.toLocalBufferType(sequence), offset);
      this.position = offset + sequence.byteLength > this.position ? offset + sequence.length : this.position;
    } else if (typeof sequence === "string") {
      throw new BSONError("input cannot be string");
    }
  }
  read(position, length) {
    length = length && length > 0 ? length : this.position;
    const end = position + length;
    return this.buffer.subarray(position, end > this.position ? this.position : end);
  }
  value() {
    return this.buffer.length === this.position ? this.buffer : this.buffer.subarray(0, this.position);
  }
  length() {
    return this.position;
  }
  toJSON() {
    return ByteUtils.toBase64(this.buffer.subarray(0, this.position));
  }
  toString(encoding) {
    if (encoding === "hex")
      return ByteUtils.toHex(this.buffer.subarray(0, this.position));
    if (encoding === "base64")
      return ByteUtils.toBase64(this.buffer.subarray(0, this.position));
    if (encoding === "utf8" || encoding === "utf-8")
      return ByteUtils.toUTF8(this.buffer, 0, this.position, false);
    return ByteUtils.toUTF8(this.buffer, 0, this.position, false);
  }
  toExtendedJSON(options) {
    options = options || {};
    if (this.sub_type === Binary.SUBTYPE_VECTOR) {
      validateBinaryVector(this);
    }
    const base64String = ByteUtils.toBase64(this.buffer);
    const subType = Number(this.sub_type).toString(16);
    if (options.legacy) {
      return {
        $binary: base64String,
        $type: subType.length === 1 ? "0" + subType : subType
      };
    }
    return {
      $binary: {
        base64: base64String,
        subType: subType.length === 1 ? "0" + subType : subType
      }
    };
  }
  toUUID() {
    if (this.sub_type === Binary.SUBTYPE_UUID) {
      return new UUID(this.buffer.subarray(0, this.position));
    }
    throw new BSONError(`Binary sub_type "${this.sub_type}" is not supported for converting to UUID. Only "${Binary.SUBTYPE_UUID}" is currently supported.`);
  }
  static createFromHexString(hex, subType) {
    return new Binary(ByteUtils.fromHex(hex), subType);
  }
  static createFromBase64(base64, subType) {
    return new Binary(ByteUtils.fromBase64(base64), subType);
  }
  static fromExtendedJSON(doc, options) {
    options = options || {};
    let data;
    let type;
    if ("$binary" in doc) {
      if (options.legacy && typeof doc.$binary === "string" && "$type" in doc) {
        type = doc.$type ? parseInt(doc.$type, 16) : 0;
        data = ByteUtils.fromBase64(doc.$binary);
      } else {
        if (typeof doc.$binary !== "string") {
          type = doc.$binary.subType ? parseInt(doc.$binary.subType, 16) : 0;
          data = ByteUtils.fromBase64(doc.$binary.base64);
        }
      }
    } else if ("$uuid" in doc) {
      type = 4;
      data = UUID.bytesFromString(doc.$uuid);
    }
    if (!data) {
      throw new BSONError(`Unexpected Binary Extended JSON format ${JSON.stringify(doc)}`);
    }
    return type === BSON_BINARY_SUBTYPE_UUID_NEW ? new UUID(data) : new Binary(data, type);
  }
  inspect(depth, options, inspect) {
    inspect ??= defaultInspect;
    const base64 = ByteUtils.toBase64(this.buffer.subarray(0, this.position));
    const base64Arg = inspect(base64, options);
    const subTypeArg = inspect(this.sub_type, options);
    return `Binary.createFromBase64(${base64Arg}, ${subTypeArg})`;
  }
  toInt8Array() {
    if (this.sub_type !== Binary.SUBTYPE_VECTOR) {
      throw new BSONError("Binary sub_type is not Vector");
    }
    if (this.buffer[0] !== Binary.VECTOR_TYPE.Int8) {
      throw new BSONError("Binary datatype field is not Int8");
    }
    validateBinaryVector(this);
    return new Int8Array(this.buffer.buffer.slice(this.buffer.byteOffset + 2, this.buffer.byteOffset + this.position));
  }
  toFloat32Array() {
    if (this.sub_type !== Binary.SUBTYPE_VECTOR) {
      throw new BSONError("Binary sub_type is not Vector");
    }
    if (this.buffer[0] !== Binary.VECTOR_TYPE.Float32) {
      throw new BSONError("Binary datatype field is not Float32");
    }
    validateBinaryVector(this);
    const floatBytes = new Uint8Array(this.buffer.buffer.slice(this.buffer.byteOffset + 2, this.buffer.byteOffset + this.position));
    if (NumberUtils.isBigEndian)
      ByteUtils.swap32(floatBytes);
    return new Float32Array(floatBytes.buffer);
  }
  toPackedBits() {
    if (this.sub_type !== Binary.SUBTYPE_VECTOR) {
      throw new BSONError("Binary sub_type is not Vector");
    }
    if (this.buffer[0] !== Binary.VECTOR_TYPE.PackedBit) {
      throw new BSONError("Binary datatype field is not packed bit");
    }
    validateBinaryVector(this);
    return new Uint8Array(this.buffer.buffer.slice(this.buffer.byteOffset + 2, this.buffer.byteOffset + this.position));
  }
  toBits() {
    if (this.sub_type !== Binary.SUBTYPE_VECTOR) {
      throw new BSONError("Binary sub_type is not Vector");
    }
    if (this.buffer[0] !== Binary.VECTOR_TYPE.PackedBit) {
      throw new BSONError("Binary datatype field is not packed bit");
    }
    validateBinaryVector(this);
    const byteCount = this.length() - 2;
    const bitCount = byteCount * 8 - this.buffer[1];
    const bits = new Int8Array(bitCount);
    for (let bitOffset = 0;bitOffset < bits.length; bitOffset++) {
      const byteOffset = bitOffset / 8 | 0;
      const byte = this.buffer[byteOffset + 2];
      const shift = 7 - bitOffset % 8;
      const bit = byte >> shift & 1;
      bits[bitOffset] = bit;
    }
    return bits;
  }
  static fromInt8Array(array) {
    const buffer = ByteUtils.allocate(array.byteLength + 2);
    buffer[0] = Binary.VECTOR_TYPE.Int8;
    buffer[1] = 0;
    const intBytes = new Uint8Array(array.buffer, array.byteOffset, array.byteLength);
    buffer.set(intBytes, 2);
    const bin = new this(buffer, this.SUBTYPE_VECTOR);
    validateBinaryVector(bin);
    return bin;
  }
  static fromFloat32Array(array) {
    const binaryBytes = ByteUtils.allocate(array.byteLength + 2);
    binaryBytes[0] = Binary.VECTOR_TYPE.Float32;
    binaryBytes[1] = 0;
    const floatBytes = new Uint8Array(array.buffer, array.byteOffset, array.byteLength);
    binaryBytes.set(floatBytes, 2);
    if (NumberUtils.isBigEndian)
      ByteUtils.swap32(new Uint8Array(binaryBytes.buffer, 2));
    const bin = new this(binaryBytes, this.SUBTYPE_VECTOR);
    validateBinaryVector(bin);
    return bin;
  }
  static fromPackedBits(array, padding = 0) {
    const buffer = ByteUtils.allocate(array.byteLength + 2);
    buffer[0] = Binary.VECTOR_TYPE.PackedBit;
    buffer[1] = padding;
    buffer.set(array, 2);
    const bin = new this(buffer, this.SUBTYPE_VECTOR);
    validateBinaryVector(bin);
    return bin;
  }
  static fromBits(bits) {
    const byteLength = bits.length + 7 >>> 3;
    const bytes = new Uint8Array(byteLength + 2);
    bytes[0] = Binary.VECTOR_TYPE.PackedBit;
    const remainder = bits.length % 8;
    bytes[1] = remainder === 0 ? 0 : 8 - remainder;
    for (let bitOffset = 0;bitOffset < bits.length; bitOffset++) {
      const byteOffset = bitOffset >>> 3;
      const bit = bits[bitOffset];
      if (bit !== 0 && bit !== 1) {
        throw new BSONError(`Invalid bit value at ${bitOffset}: must be 0 or 1, found ${bits[bitOffset]}`);
      }
      if (bit === 0)
        continue;
      const shift = 7 - bitOffset % 8;
      bytes[byteOffset + 2] |= bit << shift;
    }
    return new this(bytes, Binary.SUBTYPE_VECTOR);
  }
}
Binary.BSON_BINARY_SUBTYPE_DEFAULT = 0;
Binary.BUFFER_SIZE = 256;
Binary.SUBTYPE_DEFAULT = 0;
Binary.SUBTYPE_FUNCTION = 1;
Binary.SUBTYPE_BYTE_ARRAY = 2;
Binary.SUBTYPE_UUID_OLD = 3;
Binary.SUBTYPE_UUID = 4;
Binary.SUBTYPE_MD5 = 5;
Binary.SUBTYPE_ENCRYPTED = 6;
Binary.SUBTYPE_COLUMN = 7;
Binary.SUBTYPE_SENSITIVE = 8;
Binary.SUBTYPE_VECTOR = 9;
Binary.SUBTYPE_USER_DEFINED = 128;
Binary.VECTOR_TYPE = Object.freeze({
  Int8: 3,
  Float32: 39,
  PackedBit: 16
});
function validateBinaryVector(vector) {
  if (vector.sub_type !== Binary.SUBTYPE_VECTOR)
    return;
  const size = vector.position;
  const datatype = vector.buffer[0];
  const padding = vector.buffer[1];
  if ((datatype === Binary.VECTOR_TYPE.Float32 || datatype === Binary.VECTOR_TYPE.Int8) && padding !== 0) {
    throw new BSONError("Invalid Vector: padding must be zero for int8 and float32 vectors");
  }
  if (datatype === Binary.VECTOR_TYPE.Float32) {
    if (size !== 0 && size - 2 !== 0 && (size - 2) % 4 !== 0) {
      throw new BSONError("Invalid Vector: Float32 vector must contain a multiple of 4 bytes");
    }
  }
  if (datatype === Binary.VECTOR_TYPE.PackedBit && padding !== 0 && size === 2) {
    throw new BSONError("Invalid Vector: padding must be zero for packed bit vectors that are empty");
  }
  if (datatype === Binary.VECTOR_TYPE.PackedBit && padding > 7) {
    throw new BSONError(`Invalid Vector: padding must be a value between 0 and 7. found: ${padding}`);
  }
}
var UUID_BYTE_LENGTH = 16;
var UUID_WITHOUT_DASHES = /^[0-9A-F]{32}$/i;
var UUID_WITH_DASHES = /^[0-9A-F]{8}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{12}$/i;

class UUID extends Binary {
  constructor(input) {
    let bytes;
    if (input == null) {
      bytes = UUID.generate();
    } else if (input instanceof UUID) {
      bytes = ByteUtils.toLocalBufferType(new Uint8Array(input.buffer));
    } else if (ArrayBuffer.isView(input) && input.byteLength === UUID_BYTE_LENGTH) {
      bytes = ByteUtils.toLocalBufferType(input);
    } else if (typeof input === "string") {
      bytes = UUID.bytesFromString(input);
    } else {
      throw new BSONError("Argument passed in UUID constructor must be a UUID, a 16 byte Buffer or a 32/36 character hex string (dashes excluded/included, format: xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx).");
    }
    super(bytes, BSON_BINARY_SUBTYPE_UUID_NEW);
  }
  get id() {
    return this.buffer;
  }
  set id(value) {
    this.buffer = value;
  }
  toHexString(includeDashes = true) {
    if (includeDashes) {
      return [
        ByteUtils.toHex(this.buffer.subarray(0, 4)),
        ByteUtils.toHex(this.buffer.subarray(4, 6)),
        ByteUtils.toHex(this.buffer.subarray(6, 8)),
        ByteUtils.toHex(this.buffer.subarray(8, 10)),
        ByteUtils.toHex(this.buffer.subarray(10, 16))
      ].join("-");
    }
    return ByteUtils.toHex(this.buffer);
  }
  toString(encoding) {
    if (encoding === "hex")
      return ByteUtils.toHex(this.id);
    if (encoding === "base64")
      return ByteUtils.toBase64(this.id);
    return this.toHexString();
  }
  toJSON() {
    return this.toHexString();
  }
  equals(otherId) {
    if (!otherId) {
      return false;
    }
    if (otherId instanceof UUID) {
      return ByteUtils.equals(otherId.id, this.id);
    }
    try {
      return ByteUtils.equals(new UUID(otherId).id, this.id);
    } catch {
      return false;
    }
  }
  toBinary() {
    return new Binary(this.id, Binary.SUBTYPE_UUID);
  }
  static generate() {
    const bytes = ByteUtils.randomBytes(UUID_BYTE_LENGTH);
    bytes[6] = bytes[6] & 15 | 64;
    bytes[8] = bytes[8] & 63 | 128;
    return bytes;
  }
  static isValid(input) {
    if (!input) {
      return false;
    }
    if (typeof input === "string") {
      return UUID.isValidUUIDString(input);
    }
    if (isUint8Array(input)) {
      return input.byteLength === UUID_BYTE_LENGTH;
    }
    return input._bsontype === "Binary" && input.sub_type === this.SUBTYPE_UUID && input.buffer.byteLength === 16;
  }
  static createFromHexString(hexString) {
    const buffer = UUID.bytesFromString(hexString);
    return new UUID(buffer);
  }
  static createFromBase64(base64) {
    return new UUID(ByteUtils.fromBase64(base64));
  }
  static bytesFromString(representation) {
    if (!UUID.isValidUUIDString(representation)) {
      throw new BSONError("UUID string representation must be 32 hex digits or canonical hyphenated representation");
    }
    return ByteUtils.fromHex(representation.replace(/-/g, ""));
  }
  static isValidUUIDString(representation) {
    return UUID_WITHOUT_DASHES.test(representation) || UUID_WITH_DASHES.test(representation);
  }
  inspect(depth, options, inspect) {
    inspect ??= defaultInspect;
    return `new UUID(${inspect(this.toHexString(), options)})`;
  }
}

class Code extends BSONValue {
  get _bsontype() {
    return "Code";
  }
  constructor(code, scope) {
    super();
    this.code = code.toString();
    this.scope = scope ?? null;
  }
  toJSON() {
    if (this.scope != null) {
      return { code: this.code, scope: this.scope };
    }
    return { code: this.code };
  }
  toExtendedJSON() {
    if (this.scope) {
      return { $code: this.code, $scope: this.scope };
    }
    return { $code: this.code };
  }
  static fromExtendedJSON(doc) {
    return new Code(doc.$code, doc.$scope);
  }
  inspect(depth, options, inspect) {
    inspect ??= defaultInspect;
    let parametersString = inspect(this.code, options);
    const multiLineFn = parametersString.includes(`
`);
    if (this.scope != null) {
      parametersString += `,${multiLineFn ? `
` : " "}${inspect(this.scope, options)}`;
    }
    const endingNewline = multiLineFn && this.scope === null;
    return `new Code(${multiLineFn ? `
` : ""}${parametersString}${endingNewline ? `
` : ""})`;
  }
}
function isDBRefLike(value) {
  return value != null && typeof value === "object" && "$id" in value && value.$id != null && "$ref" in value && typeof value.$ref === "string" && (!("$db" in value) || ("$db" in value) && typeof value.$db === "string");
}

class DBRef extends BSONValue {
  get _bsontype() {
    return "DBRef";
  }
  constructor(collection, oid, db, fields) {
    super();
    const parts = collection.split(".");
    if (parts.length === 2) {
      db = parts.shift();
      collection = parts.shift();
    }
    this.collection = collection;
    this.oid = oid;
    this.db = db;
    this.fields = fields || {};
  }
  get namespace() {
    return this.collection;
  }
  set namespace(value) {
    this.collection = value;
  }
  toJSON() {
    const o = Object.assign({
      $ref: this.collection,
      $id: this.oid
    }, this.fields);
    if (this.db != null)
      o.$db = this.db;
    return o;
  }
  toExtendedJSON(options) {
    options = options || {};
    let o = {
      $ref: this.collection,
      $id: this.oid
    };
    if (options.legacy) {
      return o;
    }
    if (this.db)
      o.$db = this.db;
    o = Object.assign(o, this.fields);
    return o;
  }
  static fromExtendedJSON(doc) {
    const copy = Object.assign({}, doc);
    delete copy.$ref;
    delete copy.$id;
    delete copy.$db;
    return new DBRef(doc.$ref, doc.$id, doc.$db, copy);
  }
  inspect(depth, options, inspect) {
    inspect ??= defaultInspect;
    const args = [
      inspect(this.namespace, options),
      inspect(this.oid, options),
      ...this.db ? [inspect(this.db, options)] : [],
      ...Object.keys(this.fields).length > 0 ? [inspect(this.fields, options)] : []
    ];
    args[1] = inspect === defaultInspect ? `new ObjectId(${args[1]})` : args[1];
    return `new DBRef(${args.join(", ")})`;
  }
}
function removeLeadingZerosAndExplicitPlus(str) {
  if (str === "") {
    return str;
  }
  let startIndex = 0;
  const isNegative = str[startIndex] === "-";
  const isExplicitlyPositive = str[startIndex] === "+";
  if (isExplicitlyPositive || isNegative) {
    startIndex += 1;
  }
  let foundInsignificantZero = false;
  for (;startIndex < str.length && str[startIndex] === "0"; ++startIndex) {
    foundInsignificantZero = true;
  }
  if (!foundInsignificantZero) {
    return isExplicitlyPositive ? str.slice(1) : str;
  }
  return `${isNegative ? "-" : ""}${str.length === startIndex ? "0" : str.slice(startIndex)}`;
}
function validateStringCharacters(str, radix) {
  radix = radix ?? 10;
  const validCharacters = "0123456789abcdefghijklmnopqrstuvwxyz".slice(0, radix);
  const regex = new RegExp(`[^-+${validCharacters}]`, "i");
  return regex.test(str) ? false : str;
}
var wasm = undefined;
try {
  wasm = new WebAssembly.Instance(new WebAssembly.Module(new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0, 1, 13, 2, 96, 0, 1, 127, 96, 4, 127, 127, 127, 127, 1, 127, 3, 7, 6, 0, 1, 1, 1, 1, 1, 6, 6, 1, 127, 1, 65, 0, 11, 7, 50, 6, 3, 109, 117, 108, 0, 1, 5, 100, 105, 118, 95, 115, 0, 2, 5, 100, 105, 118, 95, 117, 0, 3, 5, 114, 101, 109, 95, 115, 0, 4, 5, 114, 101, 109, 95, 117, 0, 5, 8, 103, 101, 116, 95, 104, 105, 103, 104, 0, 0, 10, 191, 1, 6, 4, 0, 35, 0, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 126, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 127, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 128, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 129, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 130, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11])), {}).exports;
} catch {}
var TWO_PWR_16_DBL = 1 << 16;
var TWO_PWR_24_DBL = 1 << 24;
var TWO_PWR_32_DBL = TWO_PWR_16_DBL * TWO_PWR_16_DBL;
var TWO_PWR_64_DBL = TWO_PWR_32_DBL * TWO_PWR_32_DBL;
var TWO_PWR_63_DBL = TWO_PWR_64_DBL / 2;
var INT_CACHE = {};
var UINT_CACHE = {};
var MAX_INT64_STRING_LENGTH = 20;
var DECIMAL_REG_EX = /^(\+?0|(\+|-)?[1-9][0-9]*)$/;

class Long extends BSONValue {
  get _bsontype() {
    return "Long";
  }
  get __isLong__() {
    return true;
  }
  constructor(lowOrValue = 0, highOrUnsigned, unsigned) {
    super();
    const unsignedBool = typeof highOrUnsigned === "boolean" ? highOrUnsigned : Boolean(unsigned);
    const high = typeof highOrUnsigned === "number" ? highOrUnsigned : 0;
    const res = typeof lowOrValue === "string" ? Long.fromString(lowOrValue, unsignedBool) : typeof lowOrValue === "bigint" ? Long.fromBigInt(lowOrValue, unsignedBool) : { low: lowOrValue | 0, high: high | 0, unsigned: unsignedBool };
    this.low = res.low;
    this.high = res.high;
    this.unsigned = res.unsigned;
  }
  static fromBits(lowBits, highBits, unsigned) {
    return new Long(lowBits, highBits, unsigned);
  }
  static fromInt(value, unsigned) {
    let obj, cachedObj, cache;
    if (unsigned) {
      value >>>= 0;
      if (cache = 0 <= value && value < 256) {
        cachedObj = UINT_CACHE[value];
        if (cachedObj)
          return cachedObj;
      }
      obj = Long.fromBits(value, (value | 0) < 0 ? -1 : 0, true);
      if (cache)
        UINT_CACHE[value] = obj;
      return obj;
    } else {
      value |= 0;
      if (cache = -128 <= value && value < 128) {
        cachedObj = INT_CACHE[value];
        if (cachedObj)
          return cachedObj;
      }
      obj = Long.fromBits(value, value < 0 ? -1 : 0, false);
      if (cache)
        INT_CACHE[value] = obj;
      return obj;
    }
  }
  static fromNumber(value, unsigned) {
    if (isNaN(value))
      return unsigned ? Long.UZERO : Long.ZERO;
    if (unsigned) {
      if (value < 0)
        return Long.UZERO;
      if (value >= TWO_PWR_64_DBL)
        return Long.MAX_UNSIGNED_VALUE;
    } else {
      if (value <= -9223372036854776000)
        return Long.MIN_VALUE;
      if (value + 1 >= TWO_PWR_63_DBL)
        return Long.MAX_VALUE;
    }
    if (value < 0)
      return Long.fromNumber(-value, unsigned).neg();
    return Long.fromBits(value % TWO_PWR_32_DBL | 0, value / TWO_PWR_32_DBL | 0, unsigned);
  }
  static fromBigInt(value, unsigned) {
    const FROM_BIGINT_BIT_MASK = BigInt(4294967295);
    const FROM_BIGINT_BIT_SHIFT = BigInt(32);
    return new Long(Number(value & FROM_BIGINT_BIT_MASK), Number(value >> FROM_BIGINT_BIT_SHIFT & FROM_BIGINT_BIT_MASK), unsigned);
  }
  static _fromString(str, unsigned, radix) {
    if (str.length === 0)
      throw new BSONError("empty string");
    if (radix < 2 || 36 < radix)
      throw new BSONError("radix");
    let p;
    if ((p = str.indexOf("-")) > 0)
      throw new BSONError("interior hyphen");
    else if (p === 0) {
      return Long._fromString(str.substring(1), unsigned, radix).neg();
    }
    const radixToPower = Long.fromNumber(Math.pow(radix, 8));
    let result = Long.ZERO;
    for (let i = 0;i < str.length; i += 8) {
      const size = Math.min(8, str.length - i), value = parseInt(str.substring(i, i + size), radix);
      if (size < 8) {
        const power = Long.fromNumber(Math.pow(radix, size));
        result = result.mul(power).add(Long.fromNumber(value));
      } else {
        result = result.mul(radixToPower);
        result = result.add(Long.fromNumber(value));
      }
    }
    result.unsigned = unsigned;
    return result;
  }
  static fromStringStrict(str, unsignedOrRadix, radix) {
    let unsigned = false;
    if (typeof unsignedOrRadix === "number") {
      radix = unsignedOrRadix, unsignedOrRadix = false;
    } else {
      unsigned = !!unsignedOrRadix;
    }
    radix ??= 10;
    if (str.trim() !== str) {
      throw new BSONError(`Input: '${str}' contains leading and/or trailing whitespace`);
    }
    if (!validateStringCharacters(str, radix)) {
      throw new BSONError(`Input: '${str}' contains invalid characters for radix: ${radix}`);
    }
    const cleanedStr = removeLeadingZerosAndExplicitPlus(str);
    const result = Long._fromString(cleanedStr, unsigned, radix);
    if (result.toString(radix).toLowerCase() !== cleanedStr.toLowerCase()) {
      throw new BSONError(`Input: ${str} is not representable as ${result.unsigned ? "an unsigned" : "a signed"} 64-bit Long ${radix != null ? `with radix: ${radix}` : ""}`);
    }
    return result;
  }
  static fromString(str, unsignedOrRadix, radix) {
    let unsigned = false;
    if (typeof unsignedOrRadix === "number") {
      radix = unsignedOrRadix, unsignedOrRadix = false;
    } else {
      unsigned = !!unsignedOrRadix;
    }
    radix ??= 10;
    if (str === "NaN" && radix < 24) {
      return Long.ZERO;
    } else if ((str === "Infinity" || str === "+Infinity" || str === "-Infinity") && radix < 35) {
      return Long.ZERO;
    }
    return Long._fromString(str, unsigned, radix);
  }
  static fromBytes(bytes, unsigned, le) {
    return le ? Long.fromBytesLE(bytes, unsigned) : Long.fromBytesBE(bytes, unsigned);
  }
  static fromBytesLE(bytes, unsigned) {
    return new Long(bytes[0] | bytes[1] << 8 | bytes[2] << 16 | bytes[3] << 24, bytes[4] | bytes[5] << 8 | bytes[6] << 16 | bytes[7] << 24, unsigned);
  }
  static fromBytesBE(bytes, unsigned) {
    return new Long(bytes[4] << 24 | bytes[5] << 16 | bytes[6] << 8 | bytes[7], bytes[0] << 24 | bytes[1] << 16 | bytes[2] << 8 | bytes[3], unsigned);
  }
  static isLong(value) {
    return value != null && typeof value === "object" && "__isLong__" in value && value.__isLong__ === true;
  }
  static fromValue(val, unsigned) {
    if (typeof val === "number")
      return Long.fromNumber(val, unsigned);
    if (typeof val === "string")
      return Long.fromString(val, unsigned);
    return Long.fromBits(val.low, val.high, typeof unsigned === "boolean" ? unsigned : val.unsigned);
  }
  add(addend) {
    if (!Long.isLong(addend))
      addend = Long.fromValue(addend);
    const a48 = this.high >>> 16;
    const a32 = this.high & 65535;
    const a16 = this.low >>> 16;
    const a00 = this.low & 65535;
    const b48 = addend.high >>> 16;
    const b32 = addend.high & 65535;
    const b16 = addend.low >>> 16;
    const b00 = addend.low & 65535;
    let c48 = 0, c32 = 0, c16 = 0, c00 = 0;
    c00 += a00 + b00;
    c16 += c00 >>> 16;
    c00 &= 65535;
    c16 += a16 + b16;
    c32 += c16 >>> 16;
    c16 &= 65535;
    c32 += a32 + b32;
    c48 += c32 >>> 16;
    c32 &= 65535;
    c48 += a48 + b48;
    c48 &= 65535;
    return Long.fromBits(c16 << 16 | c00, c48 << 16 | c32, this.unsigned);
  }
  and(other) {
    if (!Long.isLong(other))
      other = Long.fromValue(other);
    return Long.fromBits(this.low & other.low, this.high & other.high, this.unsigned);
  }
  compare(other) {
    if (!Long.isLong(other))
      other = Long.fromValue(other);
    if (this.eq(other))
      return 0;
    const thisNeg = this.isNegative(), otherNeg = other.isNegative();
    if (thisNeg && !otherNeg)
      return -1;
    if (!thisNeg && otherNeg)
      return 1;
    if (!this.unsigned)
      return this.sub(other).isNegative() ? -1 : 1;
    return other.high >>> 0 > this.high >>> 0 || other.high === this.high && other.low >>> 0 > this.low >>> 0 ? -1 : 1;
  }
  comp(other) {
    return this.compare(other);
  }
  divide(divisor) {
    if (!Long.isLong(divisor))
      divisor = Long.fromValue(divisor);
    if (divisor.isZero())
      throw new BSONError("division by zero");
    if (wasm) {
      if (!this.unsigned && this.high === -2147483648 && divisor.low === -1 && divisor.high === -1) {
        return this;
      }
      const low = (this.unsigned ? wasm.div_u : wasm.div_s)(this.low, this.high, divisor.low, divisor.high);
      return Long.fromBits(low, wasm.get_high(), this.unsigned);
    }
    if (this.isZero())
      return this.unsigned ? Long.UZERO : Long.ZERO;
    let approx, rem, res;
    if (!this.unsigned) {
      if (this.eq(Long.MIN_VALUE)) {
        if (divisor.eq(Long.ONE) || divisor.eq(Long.NEG_ONE))
          return Long.MIN_VALUE;
        else if (divisor.eq(Long.MIN_VALUE))
          return Long.ONE;
        else {
          const halfThis = this.shr(1);
          approx = halfThis.div(divisor).shl(1);
          if (approx.eq(Long.ZERO)) {
            return divisor.isNegative() ? Long.ONE : Long.NEG_ONE;
          } else {
            rem = this.sub(divisor.mul(approx));
            res = approx.add(rem.div(divisor));
            return res;
          }
        }
      } else if (divisor.eq(Long.MIN_VALUE))
        return this.unsigned ? Long.UZERO : Long.ZERO;
      if (this.isNegative()) {
        if (divisor.isNegative())
          return this.neg().div(divisor.neg());
        return this.neg().div(divisor).neg();
      } else if (divisor.isNegative())
        return this.div(divisor.neg()).neg();
      res = Long.ZERO;
    } else {
      if (!divisor.unsigned)
        divisor = divisor.toUnsigned();
      if (divisor.gt(this))
        return Long.UZERO;
      if (divisor.gt(this.shru(1)))
        return Long.UONE;
      res = Long.UZERO;
    }
    rem = this;
    while (rem.gte(divisor)) {
      approx = Math.max(1, Math.floor(rem.toNumber() / divisor.toNumber()));
      const log2 = Math.ceil(Math.log(approx) / Math.LN2);
      const delta = log2 <= 48 ? 1 : Math.pow(2, log2 - 48);
      let approxRes = Long.fromNumber(approx);
      let approxRem = approxRes.mul(divisor);
      while (approxRem.isNegative() || approxRem.gt(rem)) {
        approx -= delta;
        approxRes = Long.fromNumber(approx, this.unsigned);
        approxRem = approxRes.mul(divisor);
      }
      if (approxRes.isZero())
        approxRes = Long.ONE;
      res = res.add(approxRes);
      rem = rem.sub(approxRem);
    }
    return res;
  }
  div(divisor) {
    return this.divide(divisor);
  }
  equals(other) {
    if (!Long.isLong(other))
      other = Long.fromValue(other);
    if (this.unsigned !== other.unsigned && this.high >>> 31 === 1 && other.high >>> 31 === 1)
      return false;
    return this.high === other.high && this.low === other.low;
  }
  eq(other) {
    return this.equals(other);
  }
  getHighBits() {
    return this.high;
  }
  getHighBitsUnsigned() {
    return this.high >>> 0;
  }
  getLowBits() {
    return this.low;
  }
  getLowBitsUnsigned() {
    return this.low >>> 0;
  }
  getNumBitsAbs() {
    if (this.isNegative()) {
      return this.eq(Long.MIN_VALUE) ? 64 : this.neg().getNumBitsAbs();
    }
    const val = this.high !== 0 ? this.high : this.low;
    let bit;
    for (bit = 31;bit > 0; bit--)
      if ((val & 1 << bit) !== 0)
        break;
    return this.high !== 0 ? bit + 33 : bit + 1;
  }
  greaterThan(other) {
    return this.comp(other) > 0;
  }
  gt(other) {
    return this.greaterThan(other);
  }
  greaterThanOrEqual(other) {
    return this.comp(other) >= 0;
  }
  gte(other) {
    return this.greaterThanOrEqual(other);
  }
  ge(other) {
    return this.greaterThanOrEqual(other);
  }
  isEven() {
    return (this.low & 1) === 0;
  }
  isNegative() {
    return !this.unsigned && this.high < 0;
  }
  isOdd() {
    return (this.low & 1) === 1;
  }
  isPositive() {
    return this.unsigned || this.high >= 0;
  }
  isZero() {
    return this.high === 0 && this.low === 0;
  }
  lessThan(other) {
    return this.comp(other) < 0;
  }
  lt(other) {
    return this.lessThan(other);
  }
  lessThanOrEqual(other) {
    return this.comp(other) <= 0;
  }
  lte(other) {
    return this.lessThanOrEqual(other);
  }
  modulo(divisor) {
    if (!Long.isLong(divisor))
      divisor = Long.fromValue(divisor);
    if (wasm) {
      const low = (this.unsigned ? wasm.rem_u : wasm.rem_s)(this.low, this.high, divisor.low, divisor.high);
      return Long.fromBits(low, wasm.get_high(), this.unsigned);
    }
    return this.sub(this.div(divisor).mul(divisor));
  }
  mod(divisor) {
    return this.modulo(divisor);
  }
  rem(divisor) {
    return this.modulo(divisor);
  }
  multiply(multiplier) {
    if (this.isZero())
      return Long.ZERO;
    if (!Long.isLong(multiplier))
      multiplier = Long.fromValue(multiplier);
    if (wasm) {
      const low = wasm.mul(this.low, this.high, multiplier.low, multiplier.high);
      return Long.fromBits(low, wasm.get_high(), this.unsigned);
    }
    if (multiplier.isZero())
      return Long.ZERO;
    if (this.eq(Long.MIN_VALUE))
      return multiplier.isOdd() ? Long.MIN_VALUE : Long.ZERO;
    if (multiplier.eq(Long.MIN_VALUE))
      return this.isOdd() ? Long.MIN_VALUE : Long.ZERO;
    if (this.isNegative()) {
      if (multiplier.isNegative())
        return this.neg().mul(multiplier.neg());
      else
        return this.neg().mul(multiplier).neg();
    } else if (multiplier.isNegative())
      return this.mul(multiplier.neg()).neg();
    if (this.lt(Long.TWO_PWR_24) && multiplier.lt(Long.TWO_PWR_24))
      return Long.fromNumber(this.toNumber() * multiplier.toNumber(), this.unsigned);
    const a48 = this.high >>> 16;
    const a32 = this.high & 65535;
    const a16 = this.low >>> 16;
    const a00 = this.low & 65535;
    const b48 = multiplier.high >>> 16;
    const b32 = multiplier.high & 65535;
    const b16 = multiplier.low >>> 16;
    const b00 = multiplier.low & 65535;
    let c48 = 0, c32 = 0, c16 = 0, c00 = 0;
    c00 += a00 * b00;
    c16 += c00 >>> 16;
    c00 &= 65535;
    c16 += a16 * b00;
    c32 += c16 >>> 16;
    c16 &= 65535;
    c16 += a00 * b16;
    c32 += c16 >>> 16;
    c16 &= 65535;
    c32 += a32 * b00;
    c48 += c32 >>> 16;
    c32 &= 65535;
    c32 += a16 * b16;
    c48 += c32 >>> 16;
    c32 &= 65535;
    c32 += a00 * b32;
    c48 += c32 >>> 16;
    c32 &= 65535;
    c48 += a48 * b00 + a32 * b16 + a16 * b32 + a00 * b48;
    c48 &= 65535;
    return Long.fromBits(c16 << 16 | c00, c48 << 16 | c32, this.unsigned);
  }
  mul(multiplier) {
    return this.multiply(multiplier);
  }
  negate() {
    if (!this.unsigned && this.eq(Long.MIN_VALUE))
      return Long.MIN_VALUE;
    return this.not().add(Long.ONE);
  }
  neg() {
    return this.negate();
  }
  not() {
    return Long.fromBits(~this.low, ~this.high, this.unsigned);
  }
  notEquals(other) {
    return !this.equals(other);
  }
  neq(other) {
    return this.notEquals(other);
  }
  ne(other) {
    return this.notEquals(other);
  }
  or(other) {
    if (!Long.isLong(other))
      other = Long.fromValue(other);
    return Long.fromBits(this.low | other.low, this.high | other.high, this.unsigned);
  }
  shiftLeft(numBits) {
    if (Long.isLong(numBits))
      numBits = numBits.toInt();
    if ((numBits &= 63) === 0)
      return this;
    else if (numBits < 32)
      return Long.fromBits(this.low << numBits, this.high << numBits | this.low >>> 32 - numBits, this.unsigned);
    else
      return Long.fromBits(0, this.low << numBits - 32, this.unsigned);
  }
  shl(numBits) {
    return this.shiftLeft(numBits);
  }
  shiftRight(numBits) {
    if (Long.isLong(numBits))
      numBits = numBits.toInt();
    if ((numBits &= 63) === 0)
      return this;
    else if (numBits < 32)
      return Long.fromBits(this.low >>> numBits | this.high << 32 - numBits, this.high >> numBits, this.unsigned);
    else
      return Long.fromBits(this.high >> numBits - 32, this.high >= 0 ? 0 : -1, this.unsigned);
  }
  shr(numBits) {
    return this.shiftRight(numBits);
  }
  shiftRightUnsigned(numBits) {
    if (Long.isLong(numBits))
      numBits = numBits.toInt();
    numBits &= 63;
    if (numBits === 0)
      return this;
    else {
      const high = this.high;
      if (numBits < 32) {
        const low = this.low;
        return Long.fromBits(low >>> numBits | high << 32 - numBits, high >>> numBits, this.unsigned);
      } else if (numBits === 32)
        return Long.fromBits(high, 0, this.unsigned);
      else
        return Long.fromBits(high >>> numBits - 32, 0, this.unsigned);
    }
  }
  shr_u(numBits) {
    return this.shiftRightUnsigned(numBits);
  }
  shru(numBits) {
    return this.shiftRightUnsigned(numBits);
  }
  subtract(subtrahend) {
    if (!Long.isLong(subtrahend))
      subtrahend = Long.fromValue(subtrahend);
    return this.add(subtrahend.neg());
  }
  sub(subtrahend) {
    return this.subtract(subtrahend);
  }
  toInt() {
    return this.unsigned ? this.low >>> 0 : this.low;
  }
  toNumber() {
    if (this.unsigned)
      return (this.high >>> 0) * TWO_PWR_32_DBL + (this.low >>> 0);
    return this.high * TWO_PWR_32_DBL + (this.low >>> 0);
  }
  toBigInt() {
    return BigInt(this.toString());
  }
  toBytes(le) {
    return le ? this.toBytesLE() : this.toBytesBE();
  }
  toBytesLE() {
    const hi = this.high, lo = this.low;
    return [
      lo & 255,
      lo >>> 8 & 255,
      lo >>> 16 & 255,
      lo >>> 24,
      hi & 255,
      hi >>> 8 & 255,
      hi >>> 16 & 255,
      hi >>> 24
    ];
  }
  toBytesBE() {
    const hi = this.high, lo = this.low;
    return [
      hi >>> 24,
      hi >>> 16 & 255,
      hi >>> 8 & 255,
      hi & 255,
      lo >>> 24,
      lo >>> 16 & 255,
      lo >>> 8 & 255,
      lo & 255
    ];
  }
  toSigned() {
    if (!this.unsigned)
      return this;
    return Long.fromBits(this.low, this.high, false);
  }
  toString(radix) {
    radix = radix || 10;
    if (radix < 2 || 36 < radix)
      throw new BSONError("radix");
    if (this.isZero())
      return "0";
    if (this.isNegative()) {
      if (this.eq(Long.MIN_VALUE)) {
        const radixLong = Long.fromNumber(radix), div = this.div(radixLong), rem1 = div.mul(radixLong).sub(this);
        return div.toString(radix) + rem1.toInt().toString(radix);
      } else
        return "-" + this.neg().toString(radix);
    }
    const radixToPower = Long.fromNumber(Math.pow(radix, 6), this.unsigned);
    let rem = this;
    let result = "";
    while (true) {
      const remDiv = rem.div(radixToPower);
      const intval = rem.sub(remDiv.mul(radixToPower)).toInt() >>> 0;
      let digits = intval.toString(radix);
      rem = remDiv;
      if (rem.isZero()) {
        return digits + result;
      } else {
        while (digits.length < 6)
          digits = "0" + digits;
        result = "" + digits + result;
      }
    }
  }
  toUnsigned() {
    if (this.unsigned)
      return this;
    return Long.fromBits(this.low, this.high, true);
  }
  xor(other) {
    if (!Long.isLong(other))
      other = Long.fromValue(other);
    return Long.fromBits(this.low ^ other.low, this.high ^ other.high, this.unsigned);
  }
  eqz() {
    return this.isZero();
  }
  le(other) {
    return this.lessThanOrEqual(other);
  }
  toExtendedJSON(options) {
    if (options && options.relaxed)
      return this.toNumber();
    return { $numberLong: this.toString() };
  }
  static fromExtendedJSON(doc, options) {
    const { useBigInt64 = false, relaxed = true } = { ...options };
    if (doc.$numberLong.length > MAX_INT64_STRING_LENGTH) {
      throw new BSONError("$numberLong string is too long");
    }
    if (!DECIMAL_REG_EX.test(doc.$numberLong)) {
      throw new BSONError(`$numberLong string "${doc.$numberLong}" is in an invalid format`);
    }
    if (useBigInt64) {
      const bigIntResult = BigInt(doc.$numberLong);
      return BigInt.asIntN(64, bigIntResult);
    }
    const longResult = Long.fromString(doc.$numberLong);
    if (relaxed) {
      return longResult.toNumber();
    }
    return longResult;
  }
  inspect(depth, options, inspect) {
    inspect ??= defaultInspect;
    const longVal = inspect(this.toString(), options);
    const unsignedVal = this.unsigned ? `, ${inspect(this.unsigned, options)}` : "";
    return `new Long(${longVal}${unsignedVal})`;
  }
}
Long.TWO_PWR_24 = Long.fromInt(TWO_PWR_24_DBL);
Long.MAX_UNSIGNED_VALUE = Long.fromBits(4294967295 | 0, 4294967295 | 0, true);
Long.ZERO = Long.fromInt(0);
Long.UZERO = Long.fromInt(0, true);
Long.ONE = Long.fromInt(1);
Long.UONE = Long.fromInt(1, true);
Long.NEG_ONE = Long.fromInt(-1);
Long.MAX_VALUE = Long.fromBits(4294967295 | 0, 2147483647 | 0, false);
Long.MIN_VALUE = Long.fromBits(0, 2147483648 | 0, false);
var PARSE_STRING_REGEXP = /^(\+|-)?(\d+|(\d*\.\d*))?(E|e)?([-+])?(\d+)?$/;
var PARSE_INF_REGEXP = /^(\+|-)?(Infinity|inf)$/i;
var PARSE_NAN_REGEXP = /^(\+|-)?NaN$/i;
var EXPONENT_MAX = 6111;
var EXPONENT_MIN = -6176;
var EXPONENT_BIAS = 6176;
var MAX_DIGITS = 34;
var NAN_BUFFER = ByteUtils.fromNumberArray([
  124,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0
].reverse());
var INF_NEGATIVE_BUFFER = ByteUtils.fromNumberArray([
  248,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0
].reverse());
var INF_POSITIVE_BUFFER = ByteUtils.fromNumberArray([
  120,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0
].reverse());
var EXPONENT_REGEX = /^([-+])?(\d+)?$/;
var COMBINATION_MASK = 31;
var EXPONENT_MASK = 16383;
var COMBINATION_INFINITY = 30;
var COMBINATION_NAN = 31;
function isDigit(value) {
  return !isNaN(parseInt(value, 10));
}
function divideu128(value) {
  const DIVISOR = Long.fromNumber(1000 * 1000 * 1000);
  let _rem = Long.fromNumber(0);
  if (!value.parts[0] && !value.parts[1] && !value.parts[2] && !value.parts[3]) {
    return { quotient: value, rem: _rem };
  }
  for (let i = 0;i <= 3; i++) {
    _rem = _rem.shiftLeft(32);
    _rem = _rem.add(new Long(value.parts[i], 0));
    value.parts[i] = _rem.div(DIVISOR).low;
    _rem = _rem.modulo(DIVISOR);
  }
  return { quotient: value, rem: _rem };
}
function multiply64x2(left, right) {
  if (!left && !right) {
    return { high: Long.fromNumber(0), low: Long.fromNumber(0) };
  }
  const leftHigh = left.shiftRightUnsigned(32);
  const leftLow = new Long(left.getLowBits(), 0);
  const rightHigh = right.shiftRightUnsigned(32);
  const rightLow = new Long(right.getLowBits(), 0);
  let productHigh = leftHigh.multiply(rightHigh);
  let productMid = leftHigh.multiply(rightLow);
  const productMid2 = leftLow.multiply(rightHigh);
  let productLow = leftLow.multiply(rightLow);
  productHigh = productHigh.add(productMid.shiftRightUnsigned(32));
  productMid = new Long(productMid.getLowBits(), 0).add(productMid2).add(productLow.shiftRightUnsigned(32));
  productHigh = productHigh.add(productMid.shiftRightUnsigned(32));
  productLow = productMid.shiftLeft(32).add(new Long(productLow.getLowBits(), 0));
  return { high: productHigh, low: productLow };
}
function lessThan(left, right) {
  const uhleft = left.high >>> 0;
  const uhright = right.high >>> 0;
  if (uhleft < uhright) {
    return true;
  } else if (uhleft === uhright) {
    const ulleft = left.low >>> 0;
    const ulright = right.low >>> 0;
    if (ulleft < ulright)
      return true;
  }
  return false;
}
function invalidErr(string, message) {
  throw new BSONError(`"${string}" is not a valid Decimal128 string - ${message}`);
}

class Decimal128 extends BSONValue {
  get _bsontype() {
    return "Decimal128";
  }
  constructor(bytes) {
    super();
    if (typeof bytes === "string") {
      this.bytes = Decimal128.fromString(bytes).bytes;
    } else if (bytes instanceof Uint8Array || isUint8Array(bytes)) {
      if (bytes.byteLength !== 16) {
        throw new BSONError("Decimal128 must take a Buffer of 16 bytes");
      }
      this.bytes = bytes;
    } else {
      throw new BSONError("Decimal128 must take a Buffer or string");
    }
  }
  static fromString(representation) {
    return Decimal128._fromString(representation, { allowRounding: false });
  }
  static fromStringWithRounding(representation) {
    return Decimal128._fromString(representation, { allowRounding: true });
  }
  static _fromString(representation, options) {
    let isNegative = false;
    let sawSign = false;
    let sawRadix = false;
    let foundNonZero = false;
    let significantDigits = 0;
    let nDigitsRead = 0;
    let nDigits = 0;
    let radixPosition = 0;
    let firstNonZero = 0;
    const digits = [0];
    let nDigitsStored = 0;
    let digitsInsert = 0;
    let lastDigit = 0;
    let exponent = 0;
    let significandHigh = new Long(0, 0);
    let significandLow = new Long(0, 0);
    let biasedExponent = 0;
    let index = 0;
    if (representation.length >= 7000) {
      throw new BSONError("" + representation + " not a valid Decimal128 string");
    }
    const stringMatch = representation.match(PARSE_STRING_REGEXP);
    const infMatch = representation.match(PARSE_INF_REGEXP);
    const nanMatch = representation.match(PARSE_NAN_REGEXP);
    if (!stringMatch && !infMatch && !nanMatch || representation.length === 0) {
      throw new BSONError("" + representation + " not a valid Decimal128 string");
    }
    if (stringMatch) {
      const unsignedNumber = stringMatch[2];
      const e = stringMatch[4];
      const expSign = stringMatch[5];
      const expNumber = stringMatch[6];
      if (e && expNumber === undefined)
        invalidErr(representation, "missing exponent power");
      if (e && unsignedNumber === undefined)
        invalidErr(representation, "missing exponent base");
      if (e === undefined && (expSign || expNumber)) {
        invalidErr(representation, "missing e before exponent");
      }
    }
    if (representation[index] === "+" || representation[index] === "-") {
      sawSign = true;
      isNegative = representation[index++] === "-";
    }
    if (!isDigit(representation[index]) && representation[index] !== ".") {
      if (representation[index] === "i" || representation[index] === "I") {
        return new Decimal128(isNegative ? INF_NEGATIVE_BUFFER : INF_POSITIVE_BUFFER);
      } else if (representation[index] === "N") {
        return new Decimal128(NAN_BUFFER);
      }
    }
    while (isDigit(representation[index]) || representation[index] === ".") {
      if (representation[index] === ".") {
        if (sawRadix)
          invalidErr(representation, "contains multiple periods");
        sawRadix = true;
        index = index + 1;
        continue;
      }
      if (nDigitsStored < MAX_DIGITS) {
        if (representation[index] !== "0" || foundNonZero) {
          if (!foundNonZero) {
            firstNonZero = nDigitsRead;
          }
          foundNonZero = true;
          digits[digitsInsert++] = parseInt(representation[index], 10);
          nDigitsStored = nDigitsStored + 1;
        }
      }
      if (foundNonZero)
        nDigits = nDigits + 1;
      if (sawRadix)
        radixPosition = radixPosition + 1;
      nDigitsRead = nDigitsRead + 1;
      index = index + 1;
    }
    if (sawRadix && !nDigitsRead)
      throw new BSONError("" + representation + " not a valid Decimal128 string");
    if (representation[index] === "e" || representation[index] === "E") {
      const match = representation.substr(++index).match(EXPONENT_REGEX);
      if (!match || !match[2])
        return new Decimal128(NAN_BUFFER);
      exponent = parseInt(match[0], 10);
      index = index + match[0].length;
    }
    if (representation[index])
      return new Decimal128(NAN_BUFFER);
    if (!nDigitsStored) {
      digits[0] = 0;
      nDigits = 1;
      nDigitsStored = 1;
      significantDigits = 0;
    } else {
      lastDigit = nDigitsStored - 1;
      significantDigits = nDigits;
      if (significantDigits !== 1) {
        while (representation[firstNonZero + significantDigits - 1 + Number(sawSign) + Number(sawRadix)] === "0") {
          significantDigits = significantDigits - 1;
        }
      }
    }
    if (exponent <= radixPosition && radixPosition > exponent + (1 << 14)) {
      exponent = EXPONENT_MIN;
    } else {
      exponent = exponent - radixPosition;
    }
    while (exponent > EXPONENT_MAX) {
      lastDigit = lastDigit + 1;
      if (lastDigit >= MAX_DIGITS) {
        if (significantDigits === 0) {
          exponent = EXPONENT_MAX;
          break;
        }
        invalidErr(representation, "overflow");
      }
      exponent = exponent - 1;
    }
    if (options.allowRounding) {
      while (exponent < EXPONENT_MIN || nDigitsStored < nDigits) {
        if (lastDigit === 0 && significantDigits < nDigitsStored) {
          exponent = EXPONENT_MIN;
          significantDigits = 0;
          break;
        }
        if (nDigitsStored < nDigits) {
          nDigits = nDigits - 1;
        } else {
          lastDigit = lastDigit - 1;
        }
        if (exponent < EXPONENT_MAX) {
          exponent = exponent + 1;
        } else {
          const digitsString = digits.join("");
          if (digitsString.match(/^0+$/)) {
            exponent = EXPONENT_MAX;
            break;
          }
          invalidErr(representation, "overflow");
        }
      }
      if (lastDigit + 1 < significantDigits) {
        let endOfString = nDigitsRead;
        if (sawRadix) {
          firstNonZero = firstNonZero + 1;
          endOfString = endOfString + 1;
        }
        if (sawSign) {
          firstNonZero = firstNonZero + 1;
          endOfString = endOfString + 1;
        }
        const roundDigit = parseInt(representation[firstNonZero + lastDigit + 1], 10);
        let roundBit = 0;
        if (roundDigit >= 5) {
          roundBit = 1;
          if (roundDigit === 5) {
            roundBit = digits[lastDigit] % 2 === 1 ? 1 : 0;
            for (let i = firstNonZero + lastDigit + 2;i < endOfString; i++) {
              if (parseInt(representation[i], 10)) {
                roundBit = 1;
                break;
              }
            }
          }
        }
        if (roundBit) {
          let dIdx = lastDigit;
          for (;dIdx >= 0; dIdx--) {
            if (++digits[dIdx] > 9) {
              digits[dIdx] = 0;
              if (dIdx === 0) {
                if (exponent < EXPONENT_MAX) {
                  exponent = exponent + 1;
                  digits[dIdx] = 1;
                } else {
                  return new Decimal128(isNegative ? INF_NEGATIVE_BUFFER : INF_POSITIVE_BUFFER);
                }
              }
            } else {
              break;
            }
          }
        }
      }
    } else {
      while (exponent < EXPONENT_MIN || nDigitsStored < nDigits) {
        if (lastDigit === 0) {
          if (significantDigits === 0) {
            exponent = EXPONENT_MIN;
            break;
          }
          invalidErr(representation, "exponent underflow");
        }
        if (nDigitsStored < nDigits) {
          if (representation[nDigits - 1 + Number(sawSign) + Number(sawRadix)] !== "0" && significantDigits !== 0) {
            invalidErr(representation, "inexact rounding");
          }
          nDigits = nDigits - 1;
        } else {
          if (digits[lastDigit] !== 0) {
            invalidErr(representation, "inexact rounding");
          }
          lastDigit = lastDigit - 1;
        }
        if (exponent < EXPONENT_MAX) {
          exponent = exponent + 1;
        } else {
          invalidErr(representation, "overflow");
        }
      }
      if (lastDigit + 1 < significantDigits) {
        if (sawRadix) {
          firstNonZero = firstNonZero + 1;
        }
        if (sawSign) {
          firstNonZero = firstNonZero + 1;
        }
        const roundDigit = parseInt(representation[firstNonZero + lastDigit + 1], 10);
        if (roundDigit !== 0) {
          invalidErr(representation, "inexact rounding");
        }
      }
    }
    significandHigh = Long.fromNumber(0);
    significandLow = Long.fromNumber(0);
    if (significantDigits === 0) {
      significandHigh = Long.fromNumber(0);
      significandLow = Long.fromNumber(0);
    } else if (lastDigit < 17) {
      let dIdx = 0;
      significandLow = Long.fromNumber(digits[dIdx++]);
      significandHigh = new Long(0, 0);
      for (;dIdx <= lastDigit; dIdx++) {
        significandLow = significandLow.multiply(Long.fromNumber(10));
        significandLow = significandLow.add(Long.fromNumber(digits[dIdx]));
      }
    } else {
      let dIdx = 0;
      significandHigh = Long.fromNumber(digits[dIdx++]);
      for (;dIdx <= lastDigit - 17; dIdx++) {
        significandHigh = significandHigh.multiply(Long.fromNumber(10));
        significandHigh = significandHigh.add(Long.fromNumber(digits[dIdx]));
      }
      significandLow = Long.fromNumber(digits[dIdx++]);
      for (;dIdx <= lastDigit; dIdx++) {
        significandLow = significandLow.multiply(Long.fromNumber(10));
        significandLow = significandLow.add(Long.fromNumber(digits[dIdx]));
      }
    }
    const significand = multiply64x2(significandHigh, Long.fromString("100000000000000000"));
    significand.low = significand.low.add(significandLow);
    if (lessThan(significand.low, significandLow)) {
      significand.high = significand.high.add(Long.fromNumber(1));
    }
    biasedExponent = exponent + EXPONENT_BIAS;
    const dec = { low: Long.fromNumber(0), high: Long.fromNumber(0) };
    if (significand.high.shiftRightUnsigned(49).and(Long.fromNumber(1)).equals(Long.fromNumber(1))) {
      dec.high = dec.high.or(Long.fromNumber(3).shiftLeft(61));
      dec.high = dec.high.or(Long.fromNumber(biasedExponent).and(Long.fromNumber(16383).shiftLeft(47)));
      dec.high = dec.high.or(significand.high.and(Long.fromNumber(140737488355327)));
    } else {
      dec.high = dec.high.or(Long.fromNumber(biasedExponent & 16383).shiftLeft(49));
      dec.high = dec.high.or(significand.high.and(Long.fromNumber(562949953421311)));
    }
    dec.low = significand.low;
    if (isNegative) {
      dec.high = dec.high.or(Long.fromString("9223372036854775808"));
    }
    const buffer = ByteUtils.allocateUnsafe(16);
    index = 0;
    buffer[index++] = dec.low.low & 255;
    buffer[index++] = dec.low.low >> 8 & 255;
    buffer[index++] = dec.low.low >> 16 & 255;
    buffer[index++] = dec.low.low >> 24 & 255;
    buffer[index++] = dec.low.high & 255;
    buffer[index++] = dec.low.high >> 8 & 255;
    buffer[index++] = dec.low.high >> 16 & 255;
    buffer[index++] = dec.low.high >> 24 & 255;
    buffer[index++] = dec.high.low & 255;
    buffer[index++] = dec.high.low >> 8 & 255;
    buffer[index++] = dec.high.low >> 16 & 255;
    buffer[index++] = dec.high.low >> 24 & 255;
    buffer[index++] = dec.high.high & 255;
    buffer[index++] = dec.high.high >> 8 & 255;
    buffer[index++] = dec.high.high >> 16 & 255;
    buffer[index++] = dec.high.high >> 24 & 255;
    return new Decimal128(buffer);
  }
  toString() {
    let biased_exponent;
    let significand_digits = 0;
    const significand = new Array(36);
    for (let i = 0;i < significand.length; i++)
      significand[i] = 0;
    let index = 0;
    let is_zero = false;
    let significand_msb;
    let significand128 = { parts: [0, 0, 0, 0] };
    let j, k;
    const string = [];
    index = 0;
    const buffer = this.bytes;
    const low = buffer[index++] | buffer[index++] << 8 | buffer[index++] << 16 | buffer[index++] << 24;
    const midl = buffer[index++] | buffer[index++] << 8 | buffer[index++] << 16 | buffer[index++] << 24;
    const midh = buffer[index++] | buffer[index++] << 8 | buffer[index++] << 16 | buffer[index++] << 24;
    const high = buffer[index++] | buffer[index++] << 8 | buffer[index++] << 16 | buffer[index++] << 24;
    index = 0;
    const dec = {
      low: new Long(low, midl),
      high: new Long(midh, high)
    };
    if (dec.high.lessThan(Long.ZERO)) {
      string.push("-");
    }
    const combination = high >> 26 & COMBINATION_MASK;
    if (combination >> 3 === 3) {
      if (combination === COMBINATION_INFINITY) {
        return string.join("") + "Infinity";
      } else if (combination === COMBINATION_NAN) {
        return "NaN";
      } else {
        biased_exponent = high >> 15 & EXPONENT_MASK;
        significand_msb = 8 + (high >> 14 & 1);
      }
    } else {
      significand_msb = high >> 14 & 7;
      biased_exponent = high >> 17 & EXPONENT_MASK;
    }
    const exponent = biased_exponent - EXPONENT_BIAS;
    significand128.parts[0] = (high & 16383) + ((significand_msb & 15) << 14);
    significand128.parts[1] = midh;
    significand128.parts[2] = midl;
    significand128.parts[3] = low;
    if (significand128.parts[0] === 0 && significand128.parts[1] === 0 && significand128.parts[2] === 0 && significand128.parts[3] === 0) {
      is_zero = true;
    } else {
      for (k = 3;k >= 0; k--) {
        let least_digits = 0;
        const result = divideu128(significand128);
        significand128 = result.quotient;
        least_digits = result.rem.low;
        if (!least_digits)
          continue;
        for (j = 8;j >= 0; j--) {
          significand[k * 9 + j] = least_digits % 10;
          least_digits = Math.floor(least_digits / 10);
        }
      }
    }
    if (is_zero) {
      significand_digits = 1;
      significand[index] = 0;
    } else {
      significand_digits = 36;
      while (!significand[index]) {
        significand_digits = significand_digits - 1;
        index = index + 1;
      }
    }
    const scientific_exponent = significand_digits - 1 + exponent;
    if (scientific_exponent >= 34 || scientific_exponent <= -7 || exponent > 0) {
      if (significand_digits > 34) {
        string.push(`${0}`);
        if (exponent > 0)
          string.push(`E+${exponent}`);
        else if (exponent < 0)
          string.push(`E${exponent}`);
        return string.join("");
      }
      string.push(`${significand[index++]}`);
      significand_digits = significand_digits - 1;
      if (significand_digits) {
        string.push(".");
      }
      for (let i = 0;i < significand_digits; i++) {
        string.push(`${significand[index++]}`);
      }
      string.push("E");
      if (scientific_exponent > 0) {
        string.push(`+${scientific_exponent}`);
      } else {
        string.push(`${scientific_exponent}`);
      }
    } else {
      if (exponent >= 0) {
        for (let i = 0;i < significand_digits; i++) {
          string.push(`${significand[index++]}`);
        }
      } else {
        let radix_position = significand_digits + exponent;
        if (radix_position > 0) {
          for (let i = 0;i < radix_position; i++) {
            string.push(`${significand[index++]}`);
          }
        } else {
          string.push("0");
        }
        string.push(".");
        while (radix_position++ < 0) {
          string.push("0");
        }
        for (let i = 0;i < significand_digits - Math.max(radix_position - 1, 0); i++) {
          string.push(`${significand[index++]}`);
        }
      }
    }
    return string.join("");
  }
  toJSON() {
    return { $numberDecimal: this.toString() };
  }
  toExtendedJSON() {
    return { $numberDecimal: this.toString() };
  }
  static fromExtendedJSON(doc) {
    return Decimal128.fromString(doc.$numberDecimal);
  }
  inspect(depth, options, inspect) {
    inspect ??= defaultInspect;
    const d128string = inspect(this.toString(), options);
    return `new Decimal128(${d128string})`;
  }
}

class Double extends BSONValue {
  get _bsontype() {
    return "Double";
  }
  constructor(value) {
    super();
    if (value instanceof Number) {
      value = value.valueOf();
    }
    this.value = +value;
  }
  static fromString(value) {
    const coercedValue = Number(value);
    if (value === "NaN")
      return new Double(NaN);
    if (value === "Infinity")
      return new Double(Infinity);
    if (value === "-Infinity")
      return new Double(-Infinity);
    if (!Number.isFinite(coercedValue)) {
      throw new BSONError(`Input: ${value} is not representable as a Double`);
    }
    if (value.trim() !== value) {
      throw new BSONError(`Input: '${value}' contains whitespace`);
    }
    if (value === "") {
      throw new BSONError(`Input is an empty string`);
    }
    if (/[^-0-9.+eE]/.test(value)) {
      throw new BSONError(`Input: '${value}' is not in decimal or exponential notation`);
    }
    return new Double(coercedValue);
  }
  valueOf() {
    return this.value;
  }
  toJSON() {
    return this.value;
  }
  toString(radix) {
    return this.value.toString(radix);
  }
  toExtendedJSON(options) {
    if (options && (options.legacy || options.relaxed && isFinite(this.value))) {
      return this.value;
    }
    if (Object.is(Math.sign(this.value), -0)) {
      return { $numberDouble: "-0.0" };
    }
    return {
      $numberDouble: Number.isInteger(this.value) ? this.value.toFixed(1) : this.value.toString()
    };
  }
  static fromExtendedJSON(doc, options) {
    const doubleValue = parseFloat(doc.$numberDouble);
    return options && options.relaxed ? doubleValue : new Double(doubleValue);
  }
  inspect(depth, options, inspect) {
    inspect ??= defaultInspect;
    return `new Double(${inspect(this.value, options)})`;
  }
}

class Int32 extends BSONValue {
  get _bsontype() {
    return "Int32";
  }
  constructor(value) {
    super();
    if (value instanceof Number) {
      value = value.valueOf();
    }
    this.value = +value | 0;
  }
  static fromString(value) {
    const cleanedValue = removeLeadingZerosAndExplicitPlus(value);
    const coercedValue = Number(value);
    if (BSON_INT32_MAX < coercedValue) {
      throw new BSONError(`Input: '${value}' is larger than the maximum value for Int32`);
    } else if (BSON_INT32_MIN > coercedValue) {
      throw new BSONError(`Input: '${value}' is smaller than the minimum value for Int32`);
    } else if (!Number.isSafeInteger(coercedValue)) {
      throw new BSONError(`Input: '${value}' is not a safe integer`);
    } else if (coercedValue.toString() !== cleanedValue) {
      throw new BSONError(`Input: '${value}' is not a valid Int32 string`);
    }
    return new Int32(coercedValue);
  }
  valueOf() {
    return this.value;
  }
  toString(radix) {
    return this.value.toString(radix);
  }
  toJSON() {
    return this.value;
  }
  toExtendedJSON(options) {
    if (options && (options.relaxed || options.legacy))
      return this.value;
    return { $numberInt: this.value.toString() };
  }
  static fromExtendedJSON(doc, options) {
    return options && options.relaxed ? parseInt(doc.$numberInt, 10) : new Int32(doc.$numberInt);
  }
  inspect(depth, options, inspect) {
    inspect ??= defaultInspect;
    return `new Int32(${inspect(this.value, options)})`;
  }
}

class MaxKey extends BSONValue {
  get _bsontype() {
    return "MaxKey";
  }
  toExtendedJSON() {
    return { $maxKey: 1 };
  }
  static fromExtendedJSON() {
    return new MaxKey;
  }
  inspect() {
    return "new MaxKey()";
  }
}

class MinKey extends BSONValue {
  get _bsontype() {
    return "MinKey";
  }
  toExtendedJSON() {
    return { $minKey: 1 };
  }
  static fromExtendedJSON() {
    return new MinKey;
  }
  inspect() {
    return "new MinKey()";
  }
}
var PROCESS_UNIQUE = null;
var __idCache = new WeakMap;

class ObjectId extends BSONValue {
  get _bsontype() {
    return "ObjectId";
  }
  constructor(inputId) {
    super();
    let workingId;
    if (typeof inputId === "object" && inputId && "id" in inputId) {
      if (typeof inputId.id !== "string" && !ArrayBuffer.isView(inputId.id)) {
        throw new BSONError("Argument passed in must have an id that is of type string or Buffer");
      }
      if ("toHexString" in inputId && typeof inputId.toHexString === "function") {
        workingId = ByteUtils.fromHex(inputId.toHexString());
      } else {
        workingId = inputId.id;
      }
    } else {
      workingId = inputId;
    }
    if (workingId == null || typeof workingId === "number") {
      this.buffer = ObjectId.generate(typeof workingId === "number" ? workingId : undefined);
    } else if (ArrayBuffer.isView(workingId) && workingId.byteLength === 12) {
      this.buffer = ByteUtils.toLocalBufferType(workingId);
    } else if (typeof workingId === "string") {
      if (ObjectId.validateHexString(workingId)) {
        this.buffer = ByteUtils.fromHex(workingId);
        if (ObjectId.cacheHexString) {
          __idCache.set(this, workingId);
        }
      } else {
        throw new BSONError("input must be a 24 character hex string, 12 byte Uint8Array, or an integer");
      }
    } else {
      throw new BSONError("Argument passed in does not match the accepted types");
    }
  }
  get id() {
    return this.buffer;
  }
  set id(value) {
    this.buffer = value;
    if (ObjectId.cacheHexString) {
      __idCache.set(this, ByteUtils.toHex(value));
    }
  }
  static validateHexString(string) {
    if (string?.length !== 24)
      return false;
    for (let i = 0;i < 24; i++) {
      const char = string.charCodeAt(i);
      if (char >= 48 && char <= 57 || char >= 97 && char <= 102 || char >= 65 && char <= 70) {
        continue;
      }
      return false;
    }
    return true;
  }
  toHexString() {
    if (ObjectId.cacheHexString) {
      const __id = __idCache.get(this);
      if (__id)
        return __id;
    }
    const hexString = ByteUtils.toHex(this.id);
    if (ObjectId.cacheHexString) {
      __idCache.set(this, hexString);
    }
    return hexString;
  }
  static getInc() {
    return ObjectId.index = (ObjectId.index + 1) % 16777215;
  }
  static generate(time) {
    if (typeof time !== "number") {
      time = Math.floor(Date.now() / 1000);
    }
    const inc = ObjectId.getInc();
    const buffer = ByteUtils.allocateUnsafe(12);
    NumberUtils.setInt32BE(buffer, 0, time);
    if (PROCESS_UNIQUE === null) {
      PROCESS_UNIQUE = ByteUtils.randomBytes(5);
    }
    buffer[4] = PROCESS_UNIQUE[0];
    buffer[5] = PROCESS_UNIQUE[1];
    buffer[6] = PROCESS_UNIQUE[2];
    buffer[7] = PROCESS_UNIQUE[3];
    buffer[8] = PROCESS_UNIQUE[4];
    buffer[11] = inc & 255;
    buffer[10] = inc >> 8 & 255;
    buffer[9] = inc >> 16 & 255;
    return buffer;
  }
  toString(encoding) {
    if (encoding === "base64")
      return ByteUtils.toBase64(this.id);
    if (encoding === "hex")
      return this.toHexString();
    return this.toHexString();
  }
  toJSON() {
    return this.toHexString();
  }
  static is(variable) {
    return variable != null && typeof variable === "object" && "_bsontype" in variable && variable._bsontype === "ObjectId";
  }
  equals(otherId) {
    if (otherId === undefined || otherId === null) {
      return false;
    }
    if (ObjectId.is(otherId)) {
      return this.buffer[11] === otherId.buffer[11] && ByteUtils.equals(this.buffer, otherId.buffer);
    }
    if (typeof otherId === "string") {
      return otherId.toLowerCase() === this.toHexString();
    }
    if (typeof otherId === "object" && typeof otherId.toHexString === "function") {
      const otherIdString = otherId.toHexString();
      const thisIdString = this.toHexString();
      return typeof otherIdString === "string" && otherIdString.toLowerCase() === thisIdString;
    }
    return false;
  }
  getTimestamp() {
    const timestamp = new Date;
    const time = NumberUtils.getUint32BE(this.buffer, 0);
    timestamp.setTime(Math.floor(time) * 1000);
    return timestamp;
  }
  static createPk() {
    return new ObjectId;
  }
  serializeInto(uint8array, index) {
    uint8array[index] = this.buffer[0];
    uint8array[index + 1] = this.buffer[1];
    uint8array[index + 2] = this.buffer[2];
    uint8array[index + 3] = this.buffer[3];
    uint8array[index + 4] = this.buffer[4];
    uint8array[index + 5] = this.buffer[5];
    uint8array[index + 6] = this.buffer[6];
    uint8array[index + 7] = this.buffer[7];
    uint8array[index + 8] = this.buffer[8];
    uint8array[index + 9] = this.buffer[9];
    uint8array[index + 10] = this.buffer[10];
    uint8array[index + 11] = this.buffer[11];
    return 12;
  }
  static createFromTime(time) {
    const buffer = ByteUtils.allocate(12);
    for (let i = 11;i >= 4; i--)
      buffer[i] = 0;
    NumberUtils.setInt32BE(buffer, 0, time);
    return new ObjectId(buffer);
  }
  static createFromHexString(hexString) {
    if (hexString?.length !== 24) {
      throw new BSONError("hex string must be 24 characters");
    }
    return new ObjectId(ByteUtils.fromHex(hexString));
  }
  static createFromBase64(base64) {
    if (base64?.length !== 16) {
      throw new BSONError("base64 string must be 16 characters");
    }
    return new ObjectId(ByteUtils.fromBase64(base64));
  }
  static isValid(id) {
    if (id == null)
      return false;
    if (typeof id === "string")
      return ObjectId.validateHexString(id);
    try {
      new ObjectId(id);
      return true;
    } catch {
      return false;
    }
  }
  toExtendedJSON() {
    if (this.toHexString)
      return { $oid: this.toHexString() };
    return { $oid: this.toString("hex") };
  }
  static fromExtendedJSON(doc) {
    return new ObjectId(doc.$oid);
  }
  isCached() {
    return ObjectId.cacheHexString && __idCache.has(this);
  }
  inspect(depth, options, inspect) {
    inspect ??= defaultInspect;
    return `new ObjectId(${inspect(this.toHexString(), options)})`;
  }
}
ObjectId.index = Math.floor(Math.random() * 16777215);
function alphabetize(str) {
  return str.split("").sort().join("");
}

class BSONRegExp extends BSONValue {
  get _bsontype() {
    return "BSONRegExp";
  }
  constructor(pattern, options) {
    super();
    this.pattern = pattern;
    this.options = alphabetize(options ?? "");
    if (this.pattern.indexOf("\x00") !== -1) {
      throw new BSONError(`BSON Regex patterns cannot contain null bytes, found: ${JSON.stringify(this.pattern)}`);
    }
    if (this.options.indexOf("\x00") !== -1) {
      throw new BSONError(`BSON Regex options cannot contain null bytes, found: ${JSON.stringify(this.options)}`);
    }
    for (let i = 0;i < this.options.length; i++) {
      if (!(this.options[i] === "i" || this.options[i] === "m" || this.options[i] === "x" || this.options[i] === "l" || this.options[i] === "s" || this.options[i] === "u")) {
        throw new BSONError(`The regular expression option [${this.options[i]}] is not supported`);
      }
    }
  }
  static parseOptions(options) {
    return options ? options.split("").sort().join("") : "";
  }
  toExtendedJSON(options) {
    options = options || {};
    if (options.legacy) {
      return { $regex: this.pattern, $options: this.options };
    }
    return { $regularExpression: { pattern: this.pattern, options: this.options } };
  }
  static fromExtendedJSON(doc) {
    if ("$regex" in doc) {
      if (typeof doc.$regex !== "string") {
        if (doc.$regex._bsontype === "BSONRegExp") {
          return doc;
        }
      } else {
        return new BSONRegExp(doc.$regex, BSONRegExp.parseOptions(doc.$options));
      }
    }
    if ("$regularExpression" in doc) {
      return new BSONRegExp(doc.$regularExpression.pattern, BSONRegExp.parseOptions(doc.$regularExpression.options));
    }
    throw new BSONError(`Unexpected BSONRegExp EJSON object form: ${JSON.stringify(doc)}`);
  }
  inspect(depth, options, inspect) {
    const stylize = getStylizeFunction(options) ?? ((v) => v);
    inspect ??= defaultInspect;
    const pattern = stylize(inspect(this.pattern), "regexp");
    const flags = stylize(inspect(this.options), "regexp");
    return `new BSONRegExp(${pattern}, ${flags})`;
  }
}

class BSONSymbol extends BSONValue {
  get _bsontype() {
    return "BSONSymbol";
  }
  constructor(value) {
    super();
    this.value = value;
  }
  valueOf() {
    return this.value;
  }
  toString() {
    return this.value;
  }
  toJSON() {
    return this.value;
  }
  toExtendedJSON() {
    return { $symbol: this.value };
  }
  static fromExtendedJSON(doc) {
    return new BSONSymbol(doc.$symbol);
  }
  inspect(depth, options, inspect) {
    inspect ??= defaultInspect;
    return `new BSONSymbol(${inspect(this.value, options)})`;
  }
}
var LongWithoutOverridesClass = Long;

class Timestamp extends LongWithoutOverridesClass {
  get _bsontype() {
    return "Timestamp";
  }
  get i() {
    return this.low >>> 0;
  }
  get t() {
    return this.high >>> 0;
  }
  constructor(low) {
    if (low == null) {
      super(0, 0, true);
    } else if (typeof low === "bigint") {
      super(low, true);
    } else if (Long.isLong(low)) {
      super(low.low, low.high, true);
    } else if (typeof low === "object" && "t" in low && "i" in low) {
      if (typeof low.t !== "number" && (typeof low.t !== "object" || low.t._bsontype !== "Int32")) {
        throw new BSONError("Timestamp constructed from { t, i } must provide t as a number");
      }
      if (typeof low.i !== "number" && (typeof low.i !== "object" || low.i._bsontype !== "Int32")) {
        throw new BSONError("Timestamp constructed from { t, i } must provide i as a number");
      }
      const t = Number(low.t);
      const i = Number(low.i);
      if (t < 0 || Number.isNaN(t)) {
        throw new BSONError("Timestamp constructed from { t, i } must provide a positive t");
      }
      if (i < 0 || Number.isNaN(i)) {
        throw new BSONError("Timestamp constructed from { t, i } must provide a positive i");
      }
      if (t > 4294967295) {
        throw new BSONError("Timestamp constructed from { t, i } must provide t equal or less than uint32 max");
      }
      if (i > 4294967295) {
        throw new BSONError("Timestamp constructed from { t, i } must provide i equal or less than uint32 max");
      }
      super(i, t, true);
    } else {
      throw new BSONError("A Timestamp can only be constructed with: bigint, Long, or { t: number; i: number }");
    }
  }
  toJSON() {
    return {
      $timestamp: this.toString()
    };
  }
  static fromInt(value) {
    return new Timestamp(Long.fromInt(value, true));
  }
  static fromNumber(value) {
    return new Timestamp(Long.fromNumber(value, true));
  }
  static fromBits(lowBits, highBits) {
    return new Timestamp({ i: lowBits, t: highBits });
  }
  static fromString(str, optRadix) {
    return new Timestamp(Long.fromString(str, true, optRadix));
  }
  toExtendedJSON() {
    return { $timestamp: { t: this.t, i: this.i } };
  }
  static fromExtendedJSON(doc) {
    const i = Long.isLong(doc.$timestamp.i) ? doc.$timestamp.i.getLowBitsUnsigned() : doc.$timestamp.i;
    const t = Long.isLong(doc.$timestamp.t) ? doc.$timestamp.t.getLowBitsUnsigned() : doc.$timestamp.t;
    return new Timestamp({ t, i });
  }
  inspect(depth, options, inspect) {
    inspect ??= defaultInspect;
    const t = inspect(this.t, options);
    const i = inspect(this.i, options);
    return `new Timestamp({ t: ${t}, i: ${i} })`;
  }
}
Timestamp.MAX_VALUE = Long.MAX_UNSIGNED_VALUE;
var JS_INT_MAX_LONG = Long.fromNumber(JS_INT_MAX);
var JS_INT_MIN_LONG = Long.fromNumber(JS_INT_MIN);
var ignoreKeys = new Set(["$db", "$ref", "$id", "$clusterTime"]);
function isBSONType(value) {
  return value != null && typeof value === "object" && "_bsontype" in value && typeof value._bsontype === "string";
}
var keysToCodecs = {
  $oid: ObjectId,
  $binary: Binary,
  $uuid: Binary,
  $symbol: BSONSymbol,
  $numberInt: Int32,
  $numberDecimal: Decimal128,
  $numberDouble: Double,
  $numberLong: Long,
  $minKey: MinKey,
  $maxKey: MaxKey,
  $regex: BSONRegExp,
  $regularExpression: BSONRegExp,
  $timestamp: Timestamp
};
function deserializeValue(value, options = {}) {
  if (typeof value === "number") {
    const in32BitRange = value <= BSON_INT32_MAX && value >= BSON_INT32_MIN;
    const in64BitRange = value <= BSON_INT64_MAX && value >= BSON_INT64_MIN;
    if (options.relaxed || options.legacy) {
      return value;
    }
    if (Number.isInteger(value) && !Object.is(value, -0)) {
      if (in32BitRange) {
        return new Int32(value);
      }
      if (in64BitRange) {
        if (options.useBigInt64) {
          return BigInt(value);
        }
        return Long.fromNumber(value);
      }
    }
    return new Double(value);
  }
  if (value == null || typeof value !== "object")
    return value;
  if (value.$undefined)
    return null;
  const keys = Object.keys(value).filter((k) => k.startsWith("$") && value[k] != null);
  for (let i = 0;i < keys.length; i++) {
    const c = keysToCodecs[keys[i]];
    if (c)
      return c.fromExtendedJSON(value, options);
  }
  if (value.$date != null) {
    const d = value.$date;
    const date = new Date;
    if (options.legacy) {
      if (typeof d === "number")
        date.setTime(d);
      else if (typeof d === "string")
        date.setTime(Date.parse(d));
      else if (typeof d === "bigint")
        date.setTime(Number(d));
      else
        throw new BSONRuntimeError(`Unrecognized type for EJSON date: ${typeof d}`);
    } else {
      if (typeof d === "string")
        date.setTime(Date.parse(d));
      else if (Long.isLong(d))
        date.setTime(d.toNumber());
      else if (typeof d === "number" && options.relaxed)
        date.setTime(d);
      else if (typeof d === "bigint")
        date.setTime(Number(d));
      else
        throw new BSONRuntimeError(`Unrecognized type for EJSON date: ${typeof d}`);
    }
    return date;
  }
  if (value.$code != null) {
    const copy = Object.assign({}, value);
    if (value.$scope) {
      copy.$scope = deserializeValue(value.$scope);
    }
    return Code.fromExtendedJSON(value);
  }
  if (isDBRefLike(value) || value.$dbPointer) {
    const v = value.$ref ? value : value.$dbPointer;
    if (v instanceof DBRef)
      return v;
    const dollarKeys = Object.keys(v).filter((k) => k.startsWith("$"));
    let valid = true;
    dollarKeys.forEach((k) => {
      if (["$ref", "$id", "$db"].indexOf(k) === -1)
        valid = false;
    });
    if (valid)
      return DBRef.fromExtendedJSON(v);
  }
  return value;
}
function serializeArray(array, options) {
  return array.map((v, index) => {
    options.seenObjects.push({ propertyName: `index ${index}`, obj: null });
    try {
      return serializeValue(v, options);
    } finally {
      options.seenObjects.pop();
    }
  });
}
function getISOString(date) {
  const isoStr = date.toISOString();
  return date.getUTCMilliseconds() !== 0 ? isoStr : isoStr.slice(0, -5) + "Z";
}
function serializeValue(value, options) {
  if (value instanceof Map || isMap(value)) {
    const obj = Object.create(null);
    for (const [k, v] of value) {
      if (typeof k !== "string") {
        throw new BSONError("Can only serialize maps with string keys");
      }
      obj[k] = v;
    }
    return serializeValue(obj, options);
  }
  if ((typeof value === "object" || typeof value === "function") && value !== null) {
    const index = options.seenObjects.findIndex((entry) => entry.obj === value);
    if (index !== -1) {
      const props = options.seenObjects.map((entry) => entry.propertyName);
      const leadingPart = props.slice(0, index).map((prop) => `${prop} -> `).join("");
      const alreadySeen = props[index];
      const circularPart = " -> " + props.slice(index + 1, props.length - 1).map((prop) => `${prop} -> `).join("");
      const current = props[props.length - 1];
      const leadingSpace = " ".repeat(leadingPart.length + alreadySeen.length / 2);
      const dashes = "-".repeat(circularPart.length + (alreadySeen.length + current.length) / 2 - 1);
      throw new BSONError(`Converting circular structure to EJSON:
` + `    ${leadingPart}${alreadySeen}${circularPart}${current}
` + `    ${leadingSpace}\\${dashes}/`);
    }
    options.seenObjects[options.seenObjects.length - 1].obj = value;
  }
  if (Array.isArray(value))
    return serializeArray(value, options);
  if (value === undefined)
    return null;
  if (value instanceof Date || isDate(value)) {
    const dateNum = value.getTime(), inRange = dateNum > -1 && dateNum < 253402318800000;
    if (options.legacy) {
      return options.relaxed && inRange ? { $date: value.getTime() } : { $date: getISOString(value) };
    }
    return options.relaxed && inRange ? { $date: getISOString(value) } : { $date: { $numberLong: value.getTime().toString() } };
  }
  if (typeof value === "number" && (!options.relaxed || !isFinite(value))) {
    if (Number.isInteger(value) && !Object.is(value, -0)) {
      if (value >= BSON_INT32_MIN && value <= BSON_INT32_MAX) {
        return { $numberInt: value.toString() };
      }
      if (value >= BSON_INT64_MIN && value <= BSON_INT64_MAX) {
        return { $numberLong: value.toString() };
      }
    }
    return { $numberDouble: Object.is(value, -0) ? "-0.0" : value.toString() };
  }
  if (typeof value === "bigint") {
    if (!options.relaxed) {
      return { $numberLong: BigInt.asIntN(64, value).toString() };
    }
    return Number(BigInt.asIntN(64, value));
  }
  if (value instanceof RegExp || isRegExp(value)) {
    let flags = value.flags;
    if (flags === undefined) {
      const match = value.toString().match(/[gimuy]*$/);
      if (match) {
        flags = match[0];
      }
    }
    const rx = new BSONRegExp(value.source, flags);
    return rx.toExtendedJSON(options);
  }
  if (value != null && typeof value === "object")
    return serializeDocument(value, options);
  return value;
}
var BSON_TYPE_MAPPINGS = {
  Binary: (o) => new Binary(o.value(), o.sub_type),
  Code: (o) => new Code(o.code, o.scope),
  DBRef: (o) => new DBRef(o.collection || o.namespace, o.oid, o.db, o.fields),
  Decimal128: (o) => new Decimal128(o.bytes),
  Double: (o) => new Double(o.value),
  Int32: (o) => new Int32(o.value),
  Long: (o) => Long.fromBits(o.low != null ? o.low : o.low_, o.low != null ? o.high : o.high_, o.low != null ? o.unsigned : o.unsigned_),
  MaxKey: () => new MaxKey,
  MinKey: () => new MinKey,
  ObjectId: (o) => new ObjectId(o),
  BSONRegExp: (o) => new BSONRegExp(o.pattern, o.options),
  BSONSymbol: (o) => new BSONSymbol(o.value),
  Timestamp: (o) => Timestamp.fromBits(o.low, o.high)
};
function serializeDocument(doc, options) {
  if (doc == null || typeof doc !== "object")
    throw new BSONError("not an object instance");
  const bsontype = doc._bsontype;
  if (typeof bsontype === "undefined") {
    const _doc = {};
    for (const name of Object.keys(doc)) {
      options.seenObjects.push({ propertyName: name, obj: null });
      try {
        const value = serializeValue(doc[name], options);
        if (name === "__proto__") {
          Object.defineProperty(_doc, name, {
            value,
            writable: true,
            enumerable: true,
            configurable: true
          });
        } else {
          _doc[name] = value;
        }
      } finally {
        options.seenObjects.pop();
      }
    }
    return _doc;
  } else if (doc != null && typeof doc === "object" && typeof doc._bsontype === "string" && doc[BSON_VERSION_SYMBOL] !== BSON_MAJOR_VERSION) {
    throw new BSONVersionError;
  } else if (isBSONType(doc)) {
    let outDoc = doc;
    if (typeof outDoc.toExtendedJSON !== "function") {
      const mapper = BSON_TYPE_MAPPINGS[doc._bsontype];
      if (!mapper) {
        throw new BSONError("Unrecognized or invalid _bsontype: " + doc._bsontype);
      }
      outDoc = mapper(outDoc);
    }
    if (bsontype === "Code" && outDoc.scope) {
      outDoc = new Code(outDoc.code, serializeValue(outDoc.scope, options));
    } else if (bsontype === "DBRef" && outDoc.oid) {
      outDoc = new DBRef(serializeValue(outDoc.collection, options), serializeValue(outDoc.oid, options), serializeValue(outDoc.db, options), serializeValue(outDoc.fields, options));
    }
    return outDoc.toExtendedJSON(options);
  } else {
    throw new BSONError("_bsontype must be a string, but was: " + typeof bsontype);
  }
}
function parse(text, options) {
  const ejsonOptions = {
    useBigInt64: options?.useBigInt64 ?? false,
    relaxed: options?.relaxed ?? true,
    legacy: options?.legacy ?? false
  };
  return JSON.parse(text, (key, value) => {
    if (key.indexOf("\x00") !== -1) {
      throw new BSONError(`BSON Document field names cannot contain null bytes, found: ${JSON.stringify(key)}`);
    }
    return deserializeValue(value, ejsonOptions);
  });
}
function stringify(value, replacer, space, options) {
  if (space != null && typeof space === "object") {
    options = space;
    space = 0;
  }
  if (replacer != null && typeof replacer === "object" && !Array.isArray(replacer)) {
    options = replacer;
    replacer = undefined;
    space = 0;
  }
  const serializeOptions = Object.assign({ relaxed: true, legacy: false }, options, {
    seenObjects: [{ propertyName: "(root)", obj: null }]
  });
  const doc = serializeValue(value, serializeOptions);
  return JSON.stringify(doc, replacer, space);
}
function EJSONserialize(value, options) {
  options = options || {};
  return JSON.parse(stringify(value, options));
}
function EJSONdeserialize(ejson, options) {
  options = options || {};
  return parse(JSON.stringify(ejson), options);
}
var EJSON = Object.create(null);
EJSON.parse = parse;
EJSON.stringify = stringify;
EJSON.serialize = EJSONserialize;
EJSON.deserialize = EJSONdeserialize;
Object.freeze(EJSON);
var BSONElementType = {
  double: 1,
  string: 2,
  object: 3,
  array: 4,
  binData: 5,
  undefined: 6,
  objectId: 7,
  bool: 8,
  date: 9,
  null: 10,
  regex: 11,
  dbPointer: 12,
  javascript: 13,
  symbol: 14,
  javascriptWithScope: 15,
  int: 16,
  timestamp: 17,
  long: 18,
  decimal: 19,
  minKey: 255,
  maxKey: 127
};
function getSize(source, offset) {
  try {
    return NumberUtils.getNonnegativeInt32LE(source, offset);
  } catch (cause) {
    throw new BSONOffsetError("BSON size cannot be negative", offset, { cause });
  }
}
function findNull(bytes, offset) {
  let nullTerminatorOffset = offset;
  for (;bytes[nullTerminatorOffset] !== 0; nullTerminatorOffset++)
    ;
  if (nullTerminatorOffset === bytes.length - 1) {
    throw new BSONOffsetError("Null terminator not found", offset);
  }
  return nullTerminatorOffset;
}
function parseToElements(bytes, startOffset = 0) {
  startOffset ??= 0;
  if (bytes.length < 5) {
    throw new BSONOffsetError(`Input must be at least 5 bytes, got ${bytes.length} bytes`, startOffset);
  }
  const documentSize = getSize(bytes, startOffset);
  if (documentSize > bytes.length - startOffset) {
    throw new BSONOffsetError(`Parsed documentSize (${documentSize} bytes) does not match input length (${bytes.length} bytes)`, startOffset);
  }
  if (bytes[startOffset + documentSize - 1] !== 0) {
    throw new BSONOffsetError("BSON documents must end in 0x00", startOffset + documentSize);
  }
  const elements = [];
  let offset = startOffset + 4;
  while (offset <= documentSize + startOffset) {
    const type = bytes[offset];
    offset += 1;
    if (type === 0) {
      if (offset - startOffset !== documentSize) {
        throw new BSONOffsetError(`Invalid 0x00 type byte`, offset);
      }
      break;
    }
    const nameOffset = offset;
    const nameLength = findNull(bytes, offset) - nameOffset;
    offset += nameLength + 1;
    let length;
    if (type === BSONElementType.double || type === BSONElementType.long || type === BSONElementType.date || type === BSONElementType.timestamp) {
      length = 8;
    } else if (type === BSONElementType.int) {
      length = 4;
    } else if (type === BSONElementType.objectId) {
      length = 12;
    } else if (type === BSONElementType.decimal) {
      length = 16;
    } else if (type === BSONElementType.bool) {
      length = 1;
    } else if (type === BSONElementType.null || type === BSONElementType.undefined || type === BSONElementType.maxKey || type === BSONElementType.minKey) {
      length = 0;
    } else if (type === BSONElementType.regex) {
      length = findNull(bytes, findNull(bytes, offset) + 1) + 1 - offset;
    } else if (type === BSONElementType.object || type === BSONElementType.array || type === BSONElementType.javascriptWithScope) {
      length = getSize(bytes, offset);
    } else if (type === BSONElementType.string || type === BSONElementType.binData || type === BSONElementType.dbPointer || type === BSONElementType.javascript || type === BSONElementType.symbol) {
      length = getSize(bytes, offset) + 4;
      if (type === BSONElementType.binData) {
        length += 1;
      }
      if (type === BSONElementType.dbPointer) {
        length += 12;
      }
    } else {
      throw new BSONOffsetError(`Invalid 0x${type.toString(16).padStart(2, "0")} type byte`, offset);
    }
    if (length > documentSize) {
      throw new BSONOffsetError("value reports length larger than document", offset);
    }
    elements.push([type, nameOffset, nameLength, offset, length]);
    offset += length;
  }
  return elements;
}
var onDemand = Object.create(null);
onDemand.parseToElements = parseToElements;
onDemand.ByteUtils = ByteUtils;
onDemand.NumberUtils = NumberUtils;
Object.freeze(onDemand);
var MAXSIZE = 1024 * 1024 * 17;
var buffer = ByteUtils.allocate(MAXSIZE);

// node_modules/@paralleldrive/cuid2/index.js
var { createId, init, getConstants, isCuid } = require_src();
var $createId = createId;

// src/lib/operations/create.ts
init_dist();
var isAutoIncrement = (field) => {
  return field.default?.name === "autoincrement";
};
var defaultFieldhandlers = [
  [
    isAutoIncrement,
    (properties, field) => {
      return findNextIncrement(properties, field.name);
    }
  ],
  [
    (field) => field.default?.name === "now",
    () => {
      return new Date;
    }
  ],
  [
    (field) => field.default?.name?.includes("uuid"),
    () => {
      return uuid();
    }
  ],
  [
    (field) => field.default?.name === "auto",
    () => {
      return new ObjectId().toString();
    }
  ],
  [
    (field) => field.default?.name === "cuid",
    () => {
      return $createId();
    }
  ],
  [
    (field) => field.default?.name === "dbgenerated",
    () => {
      return uuid();
    }
  ]
];
function calculateDefaultFieldValue(field, properties) {
  if (typeof field.default === "object") {
    const handler = defaultFieldhandlers.find(([check]) => check(field));
    if (handler)
      return handler[1](properties, field);
  }
  if (field.type === "BigInt" && typeof field.default === "string")
    return BigInt(field.default);
  if (field.type === "Json" && typeof field.default === "string")
    return JSON.parse(field.default);
  if (field.type === "Decimal" && typeof field.default === "number")
    return new Decimal(field.default);
  if (["string", "number", "boolean"].includes(typeof field.default))
    return field.default;
  return;
}
function createDefaultValues(fields, properties) {
  return fields.reduce((defaultValues, currentField) => {
    if (currentField.hasDefaultValue === true) {
      const defaultValue = calculateDefaultFieldValue(currentField, properties);
      if (defaultValue !== undefined)
        defaultValues[currentField.name] = defaultValue;
    } else if (currentField.kind !== "object") {
      defaultValues[currentField.name] = null;
    }
    return defaultValues;
  }, {});
}
function connectOrCreate(delegate, delegates) {
  return (item) => {
    return Object.entries(item).reduce((accumulator, [key, value]) => {
      if (typeof value === "object" && value?.connectOrCreate) {
        const connectOrCreate2 = value.connectOrCreate;
        const field = delegate.model.fields.find((field2) => field2.name === key);
        const subDelegate = getDelegateFromField(field, delegates);
        let connected = findOne({ where: connectOrCreate2.where }, subDelegate, delegates);
        if (!connected)
          connected = create(connectOrCreate2.create, {}, subDelegate, delegates, subDelegate.onChange);
        return {
          ...accumulator,
          ...getFieldFromRelationshipWhere(connected, field)
        };
      }
      if (typeof value === "object" && value?.connect) {
        const connect2 = value.connect;
        const field = delegate.model.fields.find((field2) => field2.name === key);
        const joinField = getJoinField(field, delegates);
        const subDelegate = getDelegateFromField(field, delegates);
        if (Array.isArray(connect2)) {
          connect2.forEach((c) => {
            subDelegate.update({
              where: c,
              data: getFieldFromRelationshipWhere(accumulator, joinField)
            });
          });
        } else {
          if (field.relationFromFields.length > 0) {
            const connected = findOne({ where: connect2 }, subDelegate, delegates);
            if (connected) {
              return {
                ...accumulator,
                ...getFieldFromRelationshipWhere(connected, field)
              };
            }
          } else {
            subDelegate.update({
              where: connect2,
              data: {
                ...getFieldFromRelationshipWhere(accumulator, joinField)
              }
            });
          }
        }
        return accumulator;
      }
      return {
        ...accumulator,
        [key]: value
      };
    }, {});
  };
}
function nestedCreate(current, delegates) {
  return (item) => {
    const created = {
      ...createDefaultValues(current.model.fields, current.getProperties()),
      ...removeUndefined(item)
    };
    current.model.fields.forEach((field) => {
      const value = created[field.name];
      if (value) {
        const joinfield = getJoinField(field, delegates);
        if (joinfield) {
          const delegate = getDelegateFromField(field, delegates);
          const connect2 = getFieldFromRelationshipWhere(created, joinfield);
          if (value.create) {
            delete created[field.name];
            const data = value.create;
            if (Array.isArray(data)) {
              data.forEach((item2) => {
                create({ ...item2, ...connect2 }, {}, delegate, delegates, delegate.onChange);
              });
            } else {
              const nestedCreated = create({ ...data, ...connect2 }, {}, delegate, delegates, delegate.onChange);
              Object.assign(created, getFieldFromRelationshipWhere(nestedCreated, field));
            }
          }
          if (value.createMany) {
            delete created[field.name];
            const { data } = value.createMany;
            data.forEach((d) => {
              create({ ...d, ...connect2 }, {}, delegate, delegates, delegate.onChange);
            });
          }
        }
      }
    });
    return created;
  };
}
function create(item, options, delegate, delegates, onChange) {
  const formated = pipe(nestedCreate(delegate, delegates), connectOrCreate(delegate, delegates))(item);
  const created = pipe(includes(options, delegate, delegates), select(options.select))(formated);
  onChange([...delegate.getItems(), formated]);
  return created;
}
// src/lib/operations/delete.ts
function deleteMany(args, current, delegates, onChange) {
  const { toDelete, withoutDeleted } = current.getItems().reduce((accumulator, currentValue) => {
    const shouldDelete = where(args.where, current, delegates)(currentValue);
    const deleted = pipe(includes(args, current, delegates), select(args.select))(currentValue);
    if (shouldDelete) {
      return {
        toDelete: [...accumulator.toDelete, deleted],
        withoutDeleted: accumulator.withoutDeleted
      };
    }
    return {
      toDelete: accumulator.toDelete,
      withoutDeleted: [...accumulator.withoutDeleted, currentValue]
    };
  }, { toDelete: [], withoutDeleted: [] });
  onChange(withoutDeleted);
  toDelete.forEach((item) => {
    current.model.fields.forEach((field) => {
      const joinfield = getJoinField(field, delegates);
      if (!joinfield)
        return;
      const delegate = getDelegateFromField(field, delegates);
      if (joinfield.relationOnDelete === "SetNull") {
        delegate.updateMany({
          where: getFieldFromRelationshipWhere(item, joinfield),
          data: {
            [joinfield.relationFromFields[0]]: null
          }
        });
      } else if (joinfield.relationOnDelete === "Cascade") {
        delegate.deleteMany({
          where: getFieldFromRelationshipWhere(item, joinfield)
        });
      }
    });
  });
  return toDelete;
}
// src/lib/operations/update.ts
var update = (args, isCreating, item, current, delegates) => {
  const { data } = args;
  current.model.fields.forEach((field) => {
    if (data[field.name]) {
      const fieldData = data[field.name];
      if (field.kind === "object") {
        if (fieldData.connect) {
          const connected = data[field.name];
          delete data[field.name];
          const delegate = delegates[camelize(field.type)];
          const joinfield = getJoinField(field, delegates);
          const joinValue = connected.connect[joinfield.relationToFields[0]];
          if (!joinfield.isList) {
            const joined = findOne({ where: args.where }, getDelegateFromField(joinfield, delegates), delegates);
            delegate.updateMany({
              where: { [joinfield.relationToFields[0]]: joinValue },
              data: getFieldFromRelationshipWhere(joined, joinfield)
            });
          } else {
            const joined = findOne({ where: connected.connect }, getDelegateFromField(field, delegates), delegates);
            Object.assign(data, getFieldFromRelationshipWhere(joined, field));
          }
        }
        if (fieldData.connectOrCreate) {
          delete data[field.name];
          const delegate = getDelegateFromField(field, delegates);
          connectOrCreate(current, delegates)({ [camelize(field.name)]: fieldData });
          const joined = findOne({ where: fieldData.connectOrCreate.where }, delegate, delegates);
          Object.assign(data, getFieldFromRelationshipWhere(joined, field));
        }
        if (fieldData.create || fieldData.createMany) {
          const toCreate = data[field.name];
          delete data[field.name];
          const delegate = getDelegateFromField(field, delegates);
          const joinfield = getJoinField(field, delegates);
          if (field.relationFromFields?.[0]) {
            delegate.create(data[field.name].create);
            Object.assign(data, getFieldFromRelationshipWhere(item, field));
          } else {
            const formatCreatedItem = (val) => {
              return {
                ...val,
                [joinfield.name]: {
                  connect: joinfield.relationToFields.reduce((prev, cur) => {
                    let val2 = data[cur];
                    if (!isCreating && !val2) {
                      val2 = findOne(args, delegates[camelize(joinfield.type)], delegates)?.[cur];
                    }
                    return { ...prev, [cur]: val2 };
                  }, {})
                }
              };
            };
            if (fieldData.createMany) {
              fieldData.createMany.data.map(formatCreatedItem).forEach((createSingle) => delegate.create({ data: createSingle }));
            } else {
              if (Array.isArray(fieldData.create)) {
                fieldData.create.map(formatCreatedItem).forEach((createSingle) => delegate.create({ data: createSingle }));
              } else {
                const createData = { ...toCreate.create };
                const mapped = formatCreatedItem(toCreate.create)[joinfield.name].connect;
                if (joinfield) {
                  Object.assign(createData, getFieldFromRelationshipWhere(mapped, joinfield));
                }
                delegate.create({ data: createData });
              }
            }
          }
        }
        if (fieldData.update || fieldData.updateMany) {
          const joinfield = getJoinField(field, delegates);
          const where2 = {};
          if (joinfield) {
            Object.assign(where2, getFieldFromRelationshipWhere(args.where, joinfield));
          }
          delete data[field.name];
          const delegate = delegates[camelize(field.type)];
          if (fieldData.updateMany) {
            Object.assign(where2, fieldData.updateMany.where);
            if (Array.isArray(fieldData.updateMany)) {
              fieldData.updateMany.forEach((toUpdateMany) => {
                delegate.updateMany({ where: where2, data: toUpdateMany.data ?? toUpdateMany });
              });
            } else {
              delegate.updateMany({ where: where2, data: fieldData.updateMany.data ?? fieldData.updateMany });
            }
          } else {
            const joinfield2 = getJoinField(field, delegates);
            Object.assign(where2, fieldData.update.where);
            if (Array.isArray(fieldData.update)) {
              fieldData.update.forEach((toUpdate) => {
                delegate.updateMany({ where: where2, data: toUpdate.data ?? toUpdate });
              });
            } else {
              const item2 = findOne(args, delegates[camelize(joinfield2.type)], delegates);
              delegate.updateMany({
                where: getFieldRelationshipWhere(item2, field, delegates),
                data: fieldData.update.data ?? fieldData.update
              });
            }
          }
        }
        if (fieldData.upsert) {
          const upsert = fieldData.upsert;
          delete data[field.name];
          const subDelegate = delegates[camelize(field.type)];
          const item2 = findOne({ where: args.where }, current, delegates);
          if (item2) {
            const joinWhere = getFieldRelationshipWhere(item2, field, delegates);
            const joined = Object.values(joinWhere)[0] ? findOne({ where: joinWhere }, subDelegate, delegates) : null;
            if (joined) {
              updateMany({ where: joinWhere, data: upsert.update }, subDelegate, delegates, subDelegate.onChange);
            } else {
              const created = create(upsert.create, {}, subDelegate, delegates, subDelegate.onChange);
              Object.assign(data, getFieldFromRelationshipWhere(created, field));
            }
          }
        }
      }
      if (field.isList) {
        if (fieldData.push && typeof fieldData.push !== "function") {
          if (Array.isArray(fieldData.push))
            Object.assign(data, { [field.name]: item[field.name].concat(fieldData.push) });
          else
            Object.assign(data, { [field.name]: item[field.name].concat([fieldData.push]) });
        }
      }
      if (fieldData.increment) {
        Object.assign(data, { [field.name]: item[field.name] + fieldData.increment });
      }
      if (fieldData.decrement) {
        Object.assign(data, { [field.name]: item[field.name] - fieldData.decrement });
      }
      if (fieldData.multiply) {
        Object.assign(data, { [field.name]: item[field.name] * fieldData.multiply });
      }
      if (fieldData.divide) {
        Object.assign(data, { [field.name]: item[field.name] / fieldData.divide });
      }
      if (fieldData.set) {
        Object.assign(data, { [field.name]: fieldData.set });
      }
    }
    if ((isCreating || data[field.name] === null) && (data[field.name] === null || data[field.name] === undefined)) {
      if (field.hasDefaultValue) {
        const defaultValue = calculateDefaultFieldValue(field, current.getProperties());
        if (defaultValue !== undefined && !data[field.name])
          Object.assign(data, { [field.name]: defaultValue });
      } else if (field.kind !== "object")
        Object.assign(data, Object.assign(data, { [field.name]: null }));
    }
  });
  return data;
};
function updateMany(args, current, delegates, onChange) {
  const { toUpdate, updated } = current.getItems().reduce((accumulator, currentValue) => {
    const shouldUpdate = where(args.where, current, delegates)(currentValue);
    if (shouldUpdate) {
      const baseValue = {
        ...currentValue,
        ...removeUndefined(update(args, false, currentValue, current, delegates))
      };
      const updated2 = pipe(includes(args, current, delegates), select(args.select))(baseValue);
      return {
        toUpdate: [...accumulator.toUpdate, updated2],
        updated: [...accumulator.updated, baseValue]
      };
    }
    return {
      toUpdate: accumulator.toUpdate,
      updated: [...accumulator.updated, currentValue]
    };
  }, { toUpdate: [], updated: [] });
  onChange(updated);
  return toUpdate;
}
// node_modules/@prisma/client/package.json
var version = "6.19.3";

// src/lib/globals.ts
async function getGlobals() {
  const { PrismaClientKnownRequestError: PrismaClientKnownRequestError2, Decimal: Decimal2 } = await Promise.resolve().then(() => (init_dist(), exports_dist));
  const DMMF = await (async () => {
    if (true) {
      return await Promise.resolve().then(() => (init_dist2(), exports_dist2));
    }
    return await Promise.resolve().then(() => (init_dist3(), exports_dist3));
  })();
  return {
    PrismaClientKnownRequestError: PrismaClientKnownRequestError2,
    Decimal: Decimal2,
    DMMF
  };
}

// src/lib/delegate.ts
async function generateDelegate(model, data, name, properties, delegates, onChange) {
  const { PrismaClientKnownRequestError: PrismaClientKnownRequestError2 } = await getGlobals();
  const delegate = {};
  Object.assign(delegate, {
    delete: (args = {}) => {
      const deleted = deleteMany(args, delegate, delegates, onChange);
      if (deleted.length === 0)
        return Promise.reject(new PrismaClientKnownRequestError2(`No record was found for a delete on ${delegate.model.name}`, {
          code: "P2025",
          clientVersion: version,
          meta: {
            cause: "Record to delete does not exist.",
            modelName: delegate.model.name
          }
        }));
      return Promise.resolve(deleted[0]);
    },
    deleteMany: (args = {}) => {
      const deleted = deleteMany(args, delegate, delegates, onChange);
      return Promise.resolve({ count: deleted.length });
    },
    update: (args) => {
      const updated = updateMany(args, delegate, delegates, onChange);
      const [update3] = updated;
      return update3 ? Promise.resolve(update3) : Promise.reject(new PrismaClientKnownRequestError2(`No record was found for an update on ${delegate.model.name}`, {
        code: "P2025",
        clientVersion: version,
        meta: {
          cause: "Record to update not found.",
          modelName: delegate.model.name
        }
      }));
    },
    updateMany: (args) => {
      const updated = updateMany(args, delegate, delegates, onChange);
      return Promise.resolve({ count: updated.length });
    },
    create: (args) => {
      const { data: data2, ...options } = args;
      return Promise.resolve(create(data2, options, delegate, delegates, onChange));
    },
    createMany: (args) => {
      const { data: data2, ...options } = args;
      data2.forEach((d) => {
        create(d, options, delegate, delegates, onChange);
      });
      return Promise.resolve({ count: args.data.length });
    },
    upsert: (args) => {
      const res = findOne(args, delegate, delegates);
      if (res) {
        const updated = updateMany({ ...args, data: args.update }, delegate, delegates, onChange);
        return Promise.resolve(updated[0] ?? null);
      } else {
        const { create: data2, ...options } = args;
        return Promise.resolve(create(data2, options, delegate, delegates, onChange));
      }
    },
    findMany: (args = {}) => {
      return Promise.resolve(findMany(args, delegate, delegates));
    },
    findUnique: (args = {}) => {
      return Promise.resolve(findOne(args, delegate, delegates));
    },
    findFirst: (args = {}) => {
      return Promise.resolve(findOne(args, delegate, delegates));
    },
    findUniqueOrThrow: (args = {}) => {
      const found = findOne(args, delegate, delegates);
      if (!found)
        return Promise.reject(new PrismaClientKnownRequestError2(`No record was found for a query on ${delegate.model.name}`, {
          code: "P2025",
          clientVersion: version
        }));
      return Promise.resolve(found);
    },
    findFirstOrThrow: (args = {}) => {
      const found = findOne(args, delegate, delegates);
      if (!found)
        return Promise.reject(new PrismaClientKnownRequestError2(`No record was found for a query on ${delegate.model.name}`, {
          code: "P2025",
          clientVersion: version
        }));
      return Promise.resolve(found);
    },
    count: (args = {}) => {
      const found = findMany(args, delegate, delegates);
      return Promise.resolve(found.length);
    },
    aggregate: (args = {}) => {
      const found = findMany(args, delegate, delegates);
      const aggregated = aggregate(args, found);
      return Promise.resolve(aggregated);
    },
    groupBy: (args) => {
      return Promise.resolve(groupBy(args, delegate, delegates));
    },
    createManyAndReturn: (args) => {
      const { data: data2, ...options } = args;
      const created = data2.map((d) => create(d, options, delegate, delegates, onChange));
      return Promise.resolve(created);
    },
    model,
    getItems: () => data[name],
    getProperties: () => properties[name],
    onChange
  });
  return delegate;
}

// src/lib/dmmf.ts
import * as path from "path";
async function generateDMMF(schemaPath) {
  const pathToModule = schemaPath ?? __require.resolve(path.resolve(process.cwd(), "prisma/schema.prisma"));
  return await (async () => {
    if (false) {}
    const { getSchemaWithPath: getSchemaWithPathV7, getDMMF: getDMMFV7 } = (await import("@prisma/internals-v7")).default;
    const schema = await getSchemaWithPathV7({
      schemaPath: {
        configProvidedPath: pathToModule
      }
    });
    return await getDMMFV7({ datamodel: schema.schemas });
  })();
}

// src/lib/prismock.ts
async function generateDelegates(options) {
  const models = options.models ?? [];
  const data = {};
  const properties = {};
  const delegates = {};
  async function getData() {
    return data;
  }
  async function setData(d) {
    console.log('Deprecation notice: setData will be removed in a future version and should not be used anymore. Please use a mix of "reset" and create/createMany to achieve the same result');
    Object.assign(data, d);
    Object.assign(properties, Object.entries(d).reduce((accumulator, [currentKey]) => {
      const model = models.find((m) => camelize(m.name) === currentKey);
      return {
        ...accumulator,
        [currentKey]: {
          increment: model.fields.reduce((propertiesAccumulator, currentField) => {
            if (isAutoIncrement(currentField)) {
              return { ...propertiesAccumulator, [currentField.name]: d[currentKey].length };
            }
            return propertiesAccumulator;
          }, {})
        }
      };
    }, {}));
  }
  await Promise.all(models.map(async (model) => {
    const name = camelize(model.name);
    data[name] = [];
    properties[name] = {
      increment: {}
    };
    const delegate = await generateDelegate(model, data, name, properties, delegates, (items) => {
      Object.assign(data, { [name]: items });
    });
    Object.assign(delegates, {
      [name]: delegate
    });
  }, {}));
  const clientDelegates = Object.entries(delegates).reduce((accumulator, [delegateKey, delegateValue]) => {
    return {
      ...accumulator,
      [delegateKey]: omit(delegateValue, ["model", "properties", "getItems"])
    };
  }, {});
  return { delegates: clientDelegates, getData, setData };
}

// src/lib/extensions/model.ts
function applyModelExtensions(client, extensions) {
  if (typeof extensions === "function") {
    const extendedClient = extensions(client);
    return extendedClient;
  }
  const model = extensions.model ?? {};
  const extendedModels = Object.keys(model);
  const hasAllModelsExtension = extendedModels.some((model2) => model2 === "$allModels");
  const proxiedModels = {};
  function proxyModel(modelName) {
    const originalModel = proxiedModels[modelName] ?? client[modelName];
    const extension = model[modelName];
    const proxiedModel = new Proxy(originalModel, {
      get(target, prop, receiver) {
        if (!extension || !(prop in extension)) {
          return target[prop];
        }
        const extensionMethod = extension[prop];
        if (typeof extensionMethod !== "function") {
          return target[prop];
        }
        return extensionMethod.bind(receiver);
      }
    });
    proxiedModels[modelName] = proxiedModel;
    return proxiedModel;
  }
  for (const modelName of extendedModels) {
    if (modelName === "$allModels") {
      continue;
    }
    if (!(modelName in client)) {
      continue;
    }
    proxyModel(modelName);
  }
  if (hasAllModelsExtension && model["$allModels"]) {
    const extension = model["$allModels"];
    for (const modelName of extendedModels) {
      const originalModel = proxiedModels[modelName] ?? client[modelName];
      const proxiedModel = new Proxy(originalModel, {
        get(target, prop, receiver) {
          if (!(prop in extension)) {
            return target[prop];
          }
          const extensionMethod = extension[prop];
          if (typeof extensionMethod !== "function") {
            return target[prop];
          }
          return extensionMethod.bind(receiver);
        }
      });
      proxiedModels[modelName] = proxiedModel;
    }
  }
  return new Proxy(client, {
    get(target, prop, _receiver) {
      if (prop in proxiedModels) {
        return proxiedModels[prop];
      }
      return target[prop];
    }
  });
}

// src/lib/extensions/query.ts
function applyQueryExtensions(client, extensions) {
  if (typeof extensions === "function") {
    const extendedClient = extensions(client);
    return extendedClient;
  }
  const queryExtendedModelMap = extensions.query ?? {};
  const extendedModels = Object.keys(queryExtendedModelMap);
  const proxiedModels = {};
  for (const modelName of extendedModels) {
    let proxyQueryMethod = function(method, modelName2, target) {
      if (!(method in extendedMethods)) {
        return target[method];
      }
      const extension2 = queryExtendedModelMap[modelName2];
      if (!extension2 || typeof extension2 !== "object") {
        return target[method];
      }
      const extendedMethod = extension2[method];
      if (!extendedMethod) {
        return target[method];
      }
      const obj = {
        [method]: function(args) {
          return extendedMethod({
            model: modelName2,
            operation: method,
            args,
            query: (modifiedArgs) => target[method](modifiedArgs)
          });
        }
      };
      return obj[method].bind(target);
    };
    if (modelName === "$allModels") {
      continue;
    }
    if (!(modelName in client)) {
      continue;
    }
    const extension = queryExtendedModelMap[modelName];
    if (!extension) {
      continue;
    }
    if (typeof extension !== "object") {
      continue;
    }
    const extendedMethods = extension;
    proxiedModels[modelName] = new Proxy(client[modelName], {
      get(target, prop, _receiver) {
        if (!(prop in extendedMethods)) {
          return target[prop];
        }
        const extendedMethod = extendedMethods[prop];
        if (!extendedMethod) {
          return target[prop];
        }
        return proxyQueryMethod(prop, modelName, target);
      }
    });
  }
  return new Proxy(client, {
    get(target, prop, _receiver) {
      if (prop in proxiedModels) {
        return proxiedModels[prop];
      }
      return target[prop];
    }
  });
}

// src/lib/extensions/result.ts
function buildResultExtendedModel(client, proxiedModels, modelExtensions, modelName, PrismaDMMF) {
  const model = proxiedModels[modelName] ?? client[modelName];
  if (Object.keys(modelExtensions).length === 0) {
    return model;
  }
  const singleResultActions = [
    PrismaDMMF.ModelAction.findFirst,
    PrismaDMMF.ModelAction.findFirstOrThrow,
    PrismaDMMF.ModelAction.findUnique,
    PrismaDMMF.ModelAction.findUniqueOrThrow,
    PrismaDMMF.ModelAction.create,
    PrismaDMMF.ModelAction.update,
    PrismaDMMF.ModelAction.upsert
  ];
  const multipleResultActions = [
    PrismaDMMF.ModelAction.findMany,
    PrismaDMMF.ModelAction.createManyAndReturn
  ];
  const allResultActions = [...singleResultActions, ...multipleResultActions];
  const proxyMethod = (actionName) => {
    if (!(actionName in model)) {
      return () => null;
    }
    const modelMethod = actionName;
    const method = model[modelMethod];
    if (typeof method !== "function") {
      return method;
    }
    function attach(value) {
      const originalValue = value;
      for (const key in modelExtensions) {
        const modelExtension = modelExtensions[key];
        if (key in value) {
          return new Proxy(value, {
            get(target, prop, _receiver) {
              if (prop !== key) {
                return target[prop];
              }
              return modelExtension?.compute(target);
            }
          });
        }
        Object.defineProperty(value, key, {
          get: () => modelExtension?.compute(originalValue),
          configurable: true,
          enumerable: true
        });
      }
      return value;
    }
    return (...args) => {
      return method(...args).then((result) => {
        if (result === null || result === undefined) {
          return result;
        }
        function comp(result2) {
          if (typeof result2 !== "object") {
            return result2;
          }
          if (singleResultActions.includes(actionName) && !Array.isArray(result2)) {
            return attach(result2);
          }
          if (multipleResultActions.includes(actionName) && Array.isArray(result2)) {
            return result2.map(attach);
          }
          return result2;
        }
        if ("then" in result) {
          return result.then(comp);
        }
        return comp(result);
      });
    };
  };
  const proxiedMethods = allResultActions.reduce((acc, next) => ({
    ...acc,
    [next]: proxyMethod(next)
  }), {});
  const proxiedModel = new Proxy(model, {
    get(target, prop, _receiver) {
      if (prop in proxiedMethods) {
        const v = proxiedMethods[prop];
        if (typeof v === "function") {
          return v.bind(target);
        }
      }
      return target[prop];
    }
  });
  return proxiedModel;
}
function applyResultExtensions(client, extensions, datamodel, PrismaDMMF) {
  if (typeof extensions === "function") {
    const extendedClient = extensions(client);
    return extendedClient;
  }
  const resultExtendedModelMap = extensions.result ?? {};
  const extendedModels = Object.keys(resultExtendedModelMap);
  const hasAllModelsExtension = extendedModels.some((model) => model === "$allModels");
  const proxiedModels = {};
  function proxyModel(modelName) {
    const originalModel = proxiedModels[modelName] ?? client[modelName];
    if (!originalModel) {
      return;
    }
    const proxiedModel = buildResultExtendedModel(client, proxiedModels, resultExtendedModelMap[modelName], modelName, PrismaDMMF);
    proxiedModels[modelName] = proxiedModel;
    return proxiedModel;
  }
  for (const modelName of extendedModels) {
    if (modelName === "$allModels") {
      continue;
    }
    if (!(modelName in client)) {
      continue;
    }
    proxyModel(modelName);
  }
  if (hasAllModelsExtension && resultExtendedModelMap["$allModels"]) {
    for (const model of datamodel.datamodel.models) {
      const modelName = model.name;
      if (!(modelName in client)) {
        continue;
      }
      const proxiedModel = buildResultExtendedModel(client, proxiedModels, resultExtendedModelMap["$allModels"], modelName, PrismaDMMF);
      proxiedModels[modelName] = proxiedModel;
    }
  }
  return new Proxy(client, {
    get(target, prop, _receiver) {
      if (prop in proxiedModels) {
        return proxiedModels[prop];
      }
      return target[prop];
    }
  });
}

// src/lib/extensions/index.ts
function applyExtensions(client, extensions, datamodel, PrismaDMMF) {
  const resultExtended = applyResultExtensions(client, extensions, datamodel, PrismaDMMF);
  const queryExtended = applyQueryExtensions(resultExtended, extensions);
  const modelExtended = applyModelExtensions(queryExtended, extensions);
  return modelExtended;
}

// src/lib/client.ts
class Prismock {
  schemaPath;
  datamodel;
  PrismaDMMF;
  genPromise;
  constructor(schemaPath) {
    this.schemaPath = schemaPath;
    this.genPromise = this.generate().then(({ datamodel, PrismaDMMF }) => {
      this.datamodel = datamodel;
      this.PrismaDMMF = PrismaDMMF;
      return { datamodel, PrismaDMMF };
    });
  }
  static async create(schemaPath) {
    const p = new Prismock(schemaPath);
    const { datamodel, PrismaDMMF } = await p.genPromise;
    p.datamodel = datamodel;
    p.PrismaDMMF = PrismaDMMF;
    return p;
  }
  static async createDefault(schemaPath) {
    const p = new Prismock(schemaPath);
    const { datamodel, PrismaDMMF } = await p.genPromise;
    p.datamodel = datamodel;
    p.PrismaDMMF = PrismaDMMF;
    return p;
  }
  async reset() {
    await this.generate();
  }
  async generate() {
    const datamodel = await generateDMMF(this.schemaPath);
    const { delegates, setData, getData } = await generateDelegates({
      models: [
        ...datamodel.datamodel.models
      ]
    });
    Object.entries({ ...delegates, setData, getData }).forEach(([key, value]) => {
      if (key in this)
        Object.assign(this[key], value);
      else
        Object.assign(this, { [key]: value });
    });
    const { DMMF: PrismaDMMF } = await getGlobals();
    return { datamodel, PrismaDMMF };
  }
  async $connect() {
    await this.genPromise;
    return this;
  }
  $disconnect() {
    return Promise.resolve();
  }
  $on() {}
  $use() {
    return this;
  }
  $executeRaw() {
    return Promise.resolve(0);
  }
  $executeRawUnsafe() {
    return Promise.resolve(0);
  }
  $queryRaw() {
    return Promise.resolve([]);
  }
  $queryRawUnsafe() {
    return Promise.resolve([]);
  }
  $extends(extensionDefs) {
    if (!this.datamodel) {
      throw new Error("Datamodel not loaded");
    }
    if (!this.PrismaDMMF) {
      throw new Error("PrismaDMMF not loaded");
    }
    return applyExtensions(this, extensionDefs, this.datamodel, this.PrismaDMMF);
  }
  async $transaction(args) {
    if (Array.isArray(args)) {
      return Promise.all(args);
    }
    return args(this);
  }
}
function getPgLitePrismockData(options) {
  const schemaPathDir = path2.dirname(options.schemaPath);
  const migrationsPath = path2.join(schemaPathDir, "migrations");
  const migrationsDirContents = fs.readdirSync(migrationsPath, {
    withFileTypes: true
  });
  const migrationsDir = migrationsDirContents.filter((file) => file.isDirectory()).sort((a, b) => a.name.localeCompare(b.name));
  const connectionPromise = options.adapter.connect();
  const reset = async () => {
    const connection = await connectionPromise;
    await connection.executeScript(`
      DROP SCHEMA public CASCADE;
      CREATE SCHEMA public;
    `);
    await connection.executeScript(`
      DO $$ BEGIN
        CREATE ROLE postgres WITH LOGIN SUPERUSER;
      EXCEPTION
        WHEN duplicate_object THEN NULL;
      END $$;
    `);
    for (const migration of migrationsDir) {
      const migrationPath = path2.join(migrationsPath, migration.name, "migration.sql");
      const migrationContent = await fs.promises.readFile(migrationPath, "utf8");
      await connection.executeScript(migrationContent);
    }
  };
  const getData = async () => {
    const data = {};
    for (const model of options.datamodel.datamodel.models) {
      const tableName = model.dbName ?? model.name;
      const idColumn = model.fields.find((field) => field.isId);
      const defaultOrderBy = [];
      if (idColumn) {
        defaultOrderBy.push({ [idColumn.dbName ?? idColumn.name]: "asc" });
      }
      const orderBy = model.primaryKey?.fields.map((field) => ({ [field]: "asc" })) ?? defaultOrderBy;
      const items = await options.prismaClient[camelize(model.name)].findMany({
        orderBy
      });
      data[camelize(model.name)] = items;
    }
    return data;
  };
  const setData = async (data) => {
    for (const model in data) {
      const items = data[model];
      const prismaModel = options.datamodel.datamodel.models.find((m) => camelize(m.name) === camelize(model) || m.dbName === model);
      if (!prismaModel) {
        continue;
      }
      const tableName = prismaModel.dbName ?? prismaModel.name;
      await prisma[camelize(model)].createMany({
        data: items
      });
    }
  };
  return {
    reset,
    getData,
    setData
  };
}
async function loadPgliteContribExtensions(extensionNames) {
  if (extensionNames === undefined || extensionNames.length === 0) {
    return;
  }
  const extensions = {};
  for (const name of extensionNames) {
    const mod2 = await import(`@electric-sql/pglite/contrib/${name}`);
    const ext = mod2[name] ?? mod2.default;
    if (ext === undefined) {
      throw new Error(`PGlite contrib "${name}": expected named export "${name}" or a default export`);
    }
    extensions[name] = ext;
  }
  return extensions;
}
async function getClient(options) {
  const datamodel = await generateDMMF(options.schemaPath);
  if (options.usePgLite) {
    const { PGlite } = await import("@electric-sql/pglite");
    const { PrismaPGlite } = await import("pglite-prisma-adapter");
    const contribExtensions = await loadPgliteContribExtensions(options.pgLiteExtensions);
    const pglite = new PGlite("memory://", {
      relaxedDurability: true,
      initialMemory: 1073741824,
      ...contribExtensions && { extensions: contribExtensions }
    });
    const adapter = new PrismaPGlite(pglite);
    const prisma2 = new options.prismaClient({
      adapter,
      ...options.clientOptions
    });
    const prismockData = getPgLitePrismockData({
      schemaPath: options.schemaPath,
      pglite,
      adapter,
      datamodel,
      prismaClient: prisma2
    });
    await prismockData.reset();
    return Object.assign(prisma2, prismockData);
  }
  return await Prismock.create(options.schemaPath);
}
async function getClientClass(options) {
  const datamodel = await generateDMMF(options.schemaPath);
  if (options.usePgLite) {
    const { PGlite } = await import("@electric-sql/pglite");
    const { PrismaPGlite } = await import("pglite-prisma-adapter");
    const contribExtensions = await loadPgliteContribExtensions(options.pgLiteExtensions);

    class PrismaClientMocked2 extends options.PrismaClient {
      pglite;
      adapter;
      datamodel;
      prismockData;
      constructor(...args) {
        const pglite = new PGlite("memory://", {
          relaxedDurability: true,
          initialMemory: 1073741824,
          ...contribExtensions && { extensions: contribExtensions }
        });
        const adapter = new PrismaPGlite(pglite);
        const inputPrismaOptions = args[0] ?? {};
        const { datasourceUrl: _datasourceUrl, ...prismaOptions } = inputPrismaOptions;
        super({ ...prismaOptions, adapter });
        this.pglite = pglite;
        this.adapter = adapter;
        this.datamodel = datamodel;
        this.prismockData = getPgLitePrismockData({
          schemaPath: options.schemaPath,
          pglite,
          adapter,
          datamodel,
          prismaClient: this
        });
      }
      async $connect() {
        await this.reset();
        return super.$connect();
      }
      async reset() {
        await this.prismockData.reset();
      }
      async getData() {
        return this.prismockData.getData();
      }
      async setData(data) {
        return this.prismockData.setData(data);
      }
    }
    return PrismaClientMocked2;
  }

  class PrismaClientMocked extends Prismock {
    constructor() {
      super(options.schemaPath);
    }
  }
  return PrismaClientMocked;
}
async function getDefaultClient() {
  const { PrismaClient } = await import("@prisma/client");
  return await getClient({
    prismaClient: PrismaClient,
    schemaPath: "./prisma/schema.prisma",
    usePgLite: process.env.PRISMOCK_USE_PG_LITE ? true : undefined
  });
}
async function getDefaultClientClass() {
  const { PrismaClient } = await import("@prisma/client");
  return await getClientClass({
    PrismaClient,
    schemaPath: "./prisma/schema.prisma",
    usePgLite: process.env.PRISMOCK_USE_PG_LITE ? true : undefined
  });
}
var createPrismock = getDefaultClient;
export {
  getDefaultClientClass,
  getDefaultClient,
  getClientClass,
  getClient,
  createPrismock,
  Prismock
};

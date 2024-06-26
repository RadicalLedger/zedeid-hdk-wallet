"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bip39_1 = require("bip39");
const bip32_1 = require("bip32");
const secp256k1_1 = __importDefault(require("@bitcoinerlab/secp256k1"));
const zedeid_did_method_key_1 = __importDefault(require("zedeid-did-method-key"));
class Wallet {
    constructor(MethodClass = new zedeid_did_method_key_1.default()) {
        this.bip32 = (0, bip32_1.BIP32Factory)(secp256k1_1.default);
        /* set the method, key or ethr etc */
        this.method = MethodClass;
    }
    /**
     * Generate mnemonic string for a given length
     * @param length number (128 or 512)
     * @returns {string} mnemonic string
     */
    generateMnemonic(length = 128) {
        return (0, bip39_1.generateMnemonic)(length);
    }
    /**
     * Convert mnemonic string to seed buffer
     * @param mnemonic string
     * @returns Buffer
     */
    mnemonicToSeed(mnemonic) {
        return (0, bip39_1.mnemonicToSeedSync)(mnemonic);
    }
    /**
     * Create master node from given seed buffer or hex string
     * @param seed Buffer or Hex string
     * @returns BIP32Interface
     */
    fromSeed(seed) {
        if (typeof seed == 'string')
            seed = Buffer.from(seed, 'hex');
        this.masterNode = this.bip32.fromSeed(seed);
        return this.masterNode;
    }
    /**
     * Create  the master node from given mnemonic string
     * @param mnemonic string
     * @returns BIP32Interface
     */
    fromMnemonic(mnemonic) {
        this.masterNode = this.bip32.fromSeed(this.mnemonicToSeed(mnemonic));
        return this.masterNode;
    }
    /**
     * Create master node from given private key buffer or hex string
     * @param privateKey Buffer or Hex string
     * @param chainCode Buffer or Hex string
     * @returns BIP32Interface
     */
    fromPrivateKey(privateKey, chainCode) {
        if (typeof privateKey == 'string')
            privateKey = Buffer.from(privateKey, 'hex');
        if (typeof chainCode == 'string')
            chainCode = Buffer.from(chainCode, 'hex');
        this.masterNode = this.bip32.fromPrivateKey(privateKey, chainCode);
        return this.masterNode;
    }
    /**
     * Get DID address, private key, public key and details from the given node
     * @param node BIP32Interface
     * @returns {KeysInterface} { did, address, privateKey, publicKey, chainCode, didDocument }.
     */
    async getKeys(node) {
        return this.method.getKeys(node);
    }
    /**
     * Get DID address, private key, public key and details from the master node
     * @returns {KeysInterface} { did, address, privateKey, publicKey, chainCode, didDocument }
     */
    async getMasterKeys() {
        if (this === null || this === void 0 ? void 0 : this.masterNode) {
            return await this.getKeys(this === null || this === void 0 ? void 0 : this.masterNode);
        }
        else {
            throw Error('Master node is not defined');
        }
    }
    /**
     * Get DID address, private key, public key and details from the master node with a given path ( Child Node )
     * @param path string (eg: "m/0'")
     * @returns {KeysInterface} { did, address, privateKey, publicKey, chainCode, didDocument }
     */
    async derivePath(path) {
        var _a;
        if (this === null || this === void 0 ? void 0 : this.masterNode) {
            const childNode = (_a = this.masterNode) === null || _a === void 0 ? void 0 : _a.derivePath(path);
            return await this.getKeys(childNode);
        }
        else {
            throw Error('Master node is not defined');
        }
    }
}
exports.default = Wallet;
//# sourceMappingURL=index.js.map
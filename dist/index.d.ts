import { BIP32Interface } from 'bip32';
export default class Wallet {
    private bip32;
    private method;
    protected masterNode: BIP32Interface | undefined;
    constructor(MethodClass?: MethodInterface);
    /**
     * Generate mnemonic string for a given length
     * @param length number (128 or 512)
     * @returns {string} mnemonic string
     */
    generateMnemonic(length?: number): string;
    /**
     * Convert mnemonic string to seed buffer
     * @param mnemonic string
     * @returns Buffer
     */
    mnemonicToSeed(mnemonic: string): Buffer;
    /**
     * Create master node from given seed buffer or hex string
     * @param seed Buffer or Hex string
     * @returns BIP32Interface
     */
    fromSeed(seed: Buffer | string): BIP32Interface;
    /**
     * Create  the master node from given mnemonic string
     * @param mnemonic string
     * @returns BIP32Interface
     */
    fromMnemonic(mnemonic: string): BIP32Interface;
    /**
     * Create master node from given private key buffer or hex string
     * @param privateKey Buffer or Hex string
     * @param chainCode Buffer or Hex string
     * @returns BIP32Interface
     */
    fromPrivateKey(privateKey: Buffer | string, chainCode: Buffer | string): BIP32Interface;
    /**
     * Get DID address, private key, public key and details from the given node
     * @param node BIP32Interface
     * @returns {KeysInterface} { did, address, privateKey, publicKey, chainCode, didDocument }.
     */
    getKeys(node: BIP32Interface): Promise<KeysInterface>;
    /**
     * Get DID address, private key, public key and details from the master node
     * @returns {KeysInterface} { did, address, privateKey, publicKey, chainCode, didDocument }
     */
    getMasterKeys(): Promise<KeysInterface>;
    /**
     * Get DID address, private key, public key and details from the master node with a given path ( Child Node )
     * @param path string (eg: "m/0'")
     * @returns {KeysInterface} { did, address, privateKey, publicKey, chainCode, didDocument }
     */
    derivePath(path: string): Promise<KeysInterface>;
}

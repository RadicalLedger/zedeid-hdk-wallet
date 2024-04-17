# DID HD WALLET LIB

This class provides a simple interface for generating mnemonics, managing BIP32 nodes, and deriving keys and addresses for various blockchain methods.

# Installation

-   Node.js 16.0+ is required.

To install locally (for development):

```bash
git clone https://github.com/RadicalLedger/zedeid-hdk-wallet-core.git
cd zedeid-hdk-wallet-core

yarn install or npm install
yarn test or npm run test
```

## Usage

Here's an example of how to use the Wallet class:

```ts
import Wallet from 'zedeid-hdk-wallet-core';
import KeyMethod from 'zedeid-did-method-key';

const wallet = new Wallet(KeyMethod);

// Generate a mnemonic string
const mnemonic = wallet.generateMnemonic();

// Convert a mnemonic string to a seed buffer
const seed = wallet.mnemonicToSeed(mnemonic);

// Create a master node from a seed buffer
const masterNode = wallet.fromSeed(seed);

// Derive a child node from the master node
const childNode = masterNode.derivePath("m/0'");

// Get the keys and address for the child node
const keys = wallet.getKeys(childNode);

console.log(keys);

// Or get the keys and address for the master node
const masterKeys = wallet.getMasterKeys();

console.log(masterKeys);
```

## Methods

### `generateMnemonic(length: number = 128): string`

Generates a mnemonic string of a given length. The default length is 128 bits.

### `mnemonicToSeed(mnemonic: string): Buffer`

Converts a mnemonic string to a seed buffer.

### `fromSeed(seed: Buffer | string): BIP32Interface`

Creates a master node from a seed buffer or a hex string.

### `fromMnemonic(mnemonic: string): BIP32Interface`

Creates a master node from a mnemonic string.

### `fromPrivateKey(privateKey: Buffer | string, chainCode: Buffer | string): BIP32Interface`

Creates a master node from a private key buffer or a hex string and a chain code buffer or a hex string.

### `getKeys(node: BIP32Interface): Promise<KeysInterface>`

Gets the DID address, private key, public key, chain code, and did document for a given node.

### `getMasterKeys(): Promise<KeysInterface>`

Gets the DID address, private key, public key, chain code, and did document for the master node.

### `derivePath(path: string): Promise<KeysInterface>`

Derives a child node from the master node using a given path and gets the DID address, private key, public key, chain code, and did document for the child node.

## Types

The Wallet class uses the following types:

-   `BIP32Interface`: A BIP32 node interface.
-   `KeysInterface`: An interface for the keys and address of a node.
-   `MethodInterface`: An interface for a blockchain method that can get the keys and address for a given node.

# Extending the Wallet Class

You can extend the `Wallet` class to add support for additional blockchain methods. To do this, you need to implement the `MethodInterface` and pass it to the Wallet constructor. Here's an example of how to add support for the Ethereum blockchain:

```ts
import EthrMethod from 'zedeid-did-method-ethr';

const ethWallet = new Wallet(EthMethod);

// Derive a child node from the master node and get the Ethereum address
const ethKeys = await ethWallet.derivePath("m/44'/60'/0'/0/0");

console.log(ethrKeys);
```

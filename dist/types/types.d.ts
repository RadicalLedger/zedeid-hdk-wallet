import { BIP32Interface } from 'bip32';

declare interface DidDocumentInterface {
    '@context': Object | string;
    id: string;
    [x: string | symbol]: string;
}

declare interface KeysInterface {
    did: string;
    address: string;
    privateKey: string;
    publicKey: string;
    chainCode: string;
    didDocument: DidDocumentInterface;
}

declare interface CreateDidDocumentInterface {
    didDocument: DidDocumentInterface;
}

declare interface VerificationKeyInterface {
    [x: string | symbol]: any;
}

declare interface MethodInterface {
    getKeys(node: BIP32Interface): Promise<KeysInterface>;
    getDocument(privateKey: string): Promise<CreateDidDocumentInterface>;
    createVerificationMethod(
        seed: string,
        includePrivateKey?: boolean | undefined
    ): Promise<VerificationKeyInterface>;
}

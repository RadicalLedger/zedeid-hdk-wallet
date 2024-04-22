interface DidDocumentInterface {
    '@context': Object | string;
    id: string;
    [x: string | symbol]: string;
}

interface KeysInterface {
    did: string;
    address: string;
    privateKey: string;
    publicKey: string;
    chainCode: string;
    didDocument: DidDocumentInterface;
}

interface CreateDidDocumentInterface {
    didDocument: DidDocumentInterface;
}

interface VerificationKeyInterface {
    [x: string | symbol]: any;
}

interface MethodInterface {
    getKeys(node: BIP32Interface): Promise<KeysInterface>;
    getDocument(privateKey: string): Promise<CreateDidDocumentInterface>;
    createVerificationMethod(
        seed: string,
        includePrivateKey?: boolean | undefined
    ): Promise<VerificationKeyInterface>;
}

import Wallet from '../src/index';

describe('HD Wallet Key Method', function () {
    it('create master node', async () => {
        const seed = '000102030405060708090a0b0c0d0e0f';
        const wallet = new Wallet();

        wallet.fromSeed(seed);
        const keys = await wallet.getMasterKeys();

        expect(keys).toEqual({
            did: 'did:key:z6MkurFJqdePvMpkRG9kTRStYpsr4q6cPKhZZPxd73L1miPk',
            address: 'z6MkurFJqdePvMpkRG9kTRStYpsr4q6cPKhZZPxd73L1miPk',
            privateKey: 'e8f32e723decf4051aefac8e2c93c9c5b214313817cdb01a1494b917c8436b35',
            publicKey: 'e4c2d43d39541b739d431b90532f71a6221bedb1991cd0ac4f9f1fe6759bd72b',
            chainCode: '873dff81c02f525623fd1fe5167eac3a55a049de3d314bb42ee227ffed37d508',
            didDocument: {
                '@context': [
                    'https://www.w3.org/ns/did/v1',
                    'https://w3id.org/security/suites/ed25519-2018/v1',
                    'https://w3id.org/security/suites/x25519-2019/v1'
                ],
                id: 'did:key:z6MkurFJqdePvMpkRG9kTRStYpsr4q6cPKhZZPxd73L1miPk',
                verificationMethod: [
                    {
                        id: 'did:key:z6MkurFJqdePvMpkRG9kTRStYpsr4q6cPKhZZPxd73L1miPk#z6MkurFJqdePvMpkRG9kTRStYpsr4q6cPKhZZPxd73L1miPk',
                        type: 'Ed25519VerificationKey2018',
                        controller: 'did:key:z6MkurFJqdePvMpkRG9kTRStYpsr4q6cPKhZZPxd73L1miPk',
                        publicKeyBase58: 'GPzGFPPxapLHJmK3mrV3hjKrFFpkySTCsP3hGmMzrVcN'
                    }
                ],
                authentication: [
                    'did:key:z6MkurFJqdePvMpkRG9kTRStYpsr4q6cPKhZZPxd73L1miPk#z6MkurFJqdePvMpkRG9kTRStYpsr4q6cPKhZZPxd73L1miPk'
                ],
                assertionMethod: [
                    'did:key:z6MkurFJqdePvMpkRG9kTRStYpsr4q6cPKhZZPxd73L1miPk#z6MkurFJqdePvMpkRG9kTRStYpsr4q6cPKhZZPxd73L1miPk'
                ],
                capabilityInvocation: [
                    'did:key:z6MkurFJqdePvMpkRG9kTRStYpsr4q6cPKhZZPxd73L1miPk#z6MkurFJqdePvMpkRG9kTRStYpsr4q6cPKhZZPxd73L1miPk'
                ],
                capabilityDelegation: [
                    'did:key:z6MkurFJqdePvMpkRG9kTRStYpsr4q6cPKhZZPxd73L1miPk#z6MkurFJqdePvMpkRG9kTRStYpsr4q6cPKhZZPxd73L1miPk'
                ]
            }
        });
    });

    it('create child node 1', async () => {
        const seed = '000102030405060708090a0b0c0d0e0f';
        const wallet = new Wallet();

        wallet.fromSeed(seed);
        const keys = await wallet.derivePath("m/0'");

        expect(keys).toEqual({
            did: 'did:key:z6MkueGCDFd5xzkEJBAEqLwyRpjYr3bNZZgrDJKjRYgD4tFS',
            address: 'z6MkueGCDFd5xzkEJBAEqLwyRpjYr3bNZZgrDJKjRYgD4tFS',
            privateKey: 'edb2e14f9ee77d26dd93b4ecede8d16ed408ce149b6cd80b0715a2d911a0afea',
            publicKey: 'e1b0dc611a457ee5b8d2cf3b26fb291c96cd351a84bd30f5510d22c32864a7c9',
            chainCode: '47fdacbd0f1097043b78c63c20c34ef4ed9a111d980047ad16282c7ae6236141',
            didDocument: {
                '@context': [
                    'https://www.w3.org/ns/did/v1',
                    'https://w3id.org/security/suites/ed25519-2018/v1',
                    'https://w3id.org/security/suites/x25519-2019/v1'
                ],
                id: 'did:key:z6MkueGCDFd5xzkEJBAEqLwyRpjYr3bNZZgrDJKjRYgD4tFS',
                verificationMethod: [
                    {
                        id: 'did:key:z6MkueGCDFd5xzkEJBAEqLwyRpjYr3bNZZgrDJKjRYgD4tFS#z6MkueGCDFd5xzkEJBAEqLwyRpjYr3bNZZgrDJKjRYgD4tFS',
                        type: 'Ed25519VerificationKey2018',
                        controller: 'did:key:z6MkueGCDFd5xzkEJBAEqLwyRpjYr3bNZZgrDJKjRYgD4tFS',
                        publicKeyBase58: 'GC19d1NedTFmBgKY9mz8ajBZ2UKX9gSVXHQobGiC9fU4'
                    }
                ],
                authentication: [
                    'did:key:z6MkueGCDFd5xzkEJBAEqLwyRpjYr3bNZZgrDJKjRYgD4tFS#z6MkueGCDFd5xzkEJBAEqLwyRpjYr3bNZZgrDJKjRYgD4tFS'
                ],
                assertionMethod: [
                    'did:key:z6MkueGCDFd5xzkEJBAEqLwyRpjYr3bNZZgrDJKjRYgD4tFS#z6MkueGCDFd5xzkEJBAEqLwyRpjYr3bNZZgrDJKjRYgD4tFS'
                ],
                capabilityInvocation: [
                    'did:key:z6MkueGCDFd5xzkEJBAEqLwyRpjYr3bNZZgrDJKjRYgD4tFS#z6MkueGCDFd5xzkEJBAEqLwyRpjYr3bNZZgrDJKjRYgD4tFS'
                ],
                capabilityDelegation: [
                    'did:key:z6MkueGCDFd5xzkEJBAEqLwyRpjYr3bNZZgrDJKjRYgD4tFS#z6MkueGCDFd5xzkEJBAEqLwyRpjYr3bNZZgrDJKjRYgD4tFS'
                ]
            }
        });
    });

    it('create child node 2', async () => {
        const seed = '000102030405060708090a0b0c0d0e0f';
        const wallet = new Wallet();

        wallet.fromSeed(seed);
        const keys = await wallet.derivePath("m/0'/1");

        expect(keys).toEqual({
            did: 'did:key:z6Mkevy6P5aJtNuFN1WQ5gY1XDpjtK79KKGBTwLz3q1A8Rco',
            address: 'z6Mkevy6P5aJtNuFN1WQ5gY1XDpjtK79KKGBTwLz3q1A8Rco',
            privateKey: '3c6cb8d0f6a264c91ea8b5030fadaa8e538b020f0a387421a12de9319dc93368',
            publicKey: '07191857afe31cb5157b6657c671143bd540802e2b5d3e7793d72b1f6dc2c024',
            chainCode: '2a7857631386ba23dacac34180dd1983734e444fdbf774041578e9b6adb37c19',
            didDocument: {
                '@context': [
                    'https://www.w3.org/ns/did/v1',
                    'https://w3id.org/security/suites/ed25519-2018/v1',
                    'https://w3id.org/security/suites/x25519-2019/v1'
                ],
                id: 'did:key:z6Mkevy6P5aJtNuFN1WQ5gY1XDpjtK79KKGBTwLz3q1A8Rco',
                verificationMethod: [
                    {
                        id: 'did:key:z6Mkevy6P5aJtNuFN1WQ5gY1XDpjtK79KKGBTwLz3q1A8Rco#z6Mkevy6P5aJtNuFN1WQ5gY1XDpjtK79KKGBTwLz3q1A8Rco',
                        type: 'Ed25519VerificationKey2018',
                        controller: 'did:key:z6Mkevy6P5aJtNuFN1WQ5gY1XDpjtK79KKGBTwLz3q1A8Rco',
                        publicKeyBase58: 'Ui3nqKsYqQnFWfhQ7aAg8Gk4jqHuS1pmvS4DZ39DCqR'
                    }
                ],
                authentication: [
                    'did:key:z6Mkevy6P5aJtNuFN1WQ5gY1XDpjtK79KKGBTwLz3q1A8Rco#z6Mkevy6P5aJtNuFN1WQ5gY1XDpjtK79KKGBTwLz3q1A8Rco'
                ],
                assertionMethod: [
                    'did:key:z6Mkevy6P5aJtNuFN1WQ5gY1XDpjtK79KKGBTwLz3q1A8Rco#z6Mkevy6P5aJtNuFN1WQ5gY1XDpjtK79KKGBTwLz3q1A8Rco'
                ],
                capabilityInvocation: [
                    'did:key:z6Mkevy6P5aJtNuFN1WQ5gY1XDpjtK79KKGBTwLz3q1A8Rco#z6Mkevy6P5aJtNuFN1WQ5gY1XDpjtK79KKGBTwLz3q1A8Rco'
                ],
                capabilityDelegation: [
                    'did:key:z6Mkevy6P5aJtNuFN1WQ5gY1XDpjtK79KKGBTwLz3q1A8Rco#z6Mkevy6P5aJtNuFN1WQ5gY1XDpjtK79KKGBTwLz3q1A8Rco'
                ]
            }
        });
    });

    it('create child node 3', async () => {
        const seed = '000102030405060708090a0b0c0d0e0f';
        const wallet = new Wallet();

        wallet.fromSeed(seed);
        const keys = await wallet.derivePath("m/0'/1/2'");

        expect(keys).toEqual({
            did: 'did:key:z6MkhiWgQjVCBwrTBbXCrKcrQMqSEwFP5QruKn2gVBNNQPq9',
            address: 'z6MkhiWgQjVCBwrTBbXCrKcrQMqSEwFP5QruKn2gVBNNQPq9',
            privateKey: 'cbce0d719ecf7431d88e6a89fa1483e02e35092af60c042b1df2ff59fa424dca',
            publicKey: '307b520f197e93b66ee347e0789161b597ec166a22a5e5ce72d32171c0e1a788',
            chainCode: '04466b9cc8e161e966409ca52986c584f07e9dc81f735db683c3ff6ec7b1503f',
            didDocument: {
                '@context': [
                    'https://www.w3.org/ns/did/v1',
                    'https://w3id.org/security/suites/ed25519-2018/v1',
                    'https://w3id.org/security/suites/x25519-2019/v1'
                ],
                id: 'did:key:z6MkhiWgQjVCBwrTBbXCrKcrQMqSEwFP5QruKn2gVBNNQPq9',
                verificationMethod: [
                    {
                        id: 'did:key:z6MkhiWgQjVCBwrTBbXCrKcrQMqSEwFP5QruKn2gVBNNQPq9#z6MkhiWgQjVCBwrTBbXCrKcrQMqSEwFP5QruKn2gVBNNQPq9',
                        type: 'Ed25519VerificationKey2018',
                        controller: 'did:key:z6MkhiWgQjVCBwrTBbXCrKcrQMqSEwFP5QruKn2gVBNNQPq9',
                        publicKeyBase58: '4GFdpVEkrQMz56gWAkf1ZGHSRMyXfXcYdm7keuQMVB3m'
                    }
                ],
                authentication: [
                    'did:key:z6MkhiWgQjVCBwrTBbXCrKcrQMqSEwFP5QruKn2gVBNNQPq9#z6MkhiWgQjVCBwrTBbXCrKcrQMqSEwFP5QruKn2gVBNNQPq9'
                ],
                assertionMethod: [
                    'did:key:z6MkhiWgQjVCBwrTBbXCrKcrQMqSEwFP5QruKn2gVBNNQPq9#z6MkhiWgQjVCBwrTBbXCrKcrQMqSEwFP5QruKn2gVBNNQPq9'
                ],
                capabilityInvocation: [
                    'did:key:z6MkhiWgQjVCBwrTBbXCrKcrQMqSEwFP5QruKn2gVBNNQPq9#z6MkhiWgQjVCBwrTBbXCrKcrQMqSEwFP5QruKn2gVBNNQPq9'
                ],
                capabilityDelegation: [
                    'did:key:z6MkhiWgQjVCBwrTBbXCrKcrQMqSEwFP5QruKn2gVBNNQPq9#z6MkhiWgQjVCBwrTBbXCrKcrQMqSEwFP5QruKn2gVBNNQPq9'
                ]
            }
        });
    });

    it('create child node 4', async () => {
        const seed = '000102030405060708090a0b0c0d0e0f';
        const wallet = new Wallet();

        wallet.fromSeed(seed);
        const keys = await wallet.derivePath("m/0'/1/2'/2");

        expect(keys).toEqual({
            did: 'did:key:z6Mki4zFqa9iNURsC896SHw8woa5QHSGNdLmVZccPhJQJLFy',
            address: 'z6Mki4zFqa9iNURsC896SHw8woa5QHSGNdLmVZccPhJQJLFy',
            privateKey: '0f479245fb19a38a1954c5c7c0ebab2f9bdfd96a17563ef28a6a4b1a2a764ef4',
            publicKey: '35ba1e0e0e04bb0d4afde15c56db2b6a9c129bb664a953a5a9afda7ce1d007c8',
            chainCode: 'cfb71883f01676f587d023cc53a35bc7f88f724b1f8c2892ac1275ac822a3edd',
            didDocument: {
                '@context': [
                    'https://www.w3.org/ns/did/v1',
                    'https://w3id.org/security/suites/ed25519-2018/v1',
                    'https://w3id.org/security/suites/x25519-2019/v1'
                ],
                id: 'did:key:z6Mki4zFqa9iNURsC896SHw8woa5QHSGNdLmVZccPhJQJLFy',
                verificationMethod: [
                    {
                        id: 'did:key:z6Mki4zFqa9iNURsC896SHw8woa5QHSGNdLmVZccPhJQJLFy#z6Mki4zFqa9iNURsC896SHw8woa5QHSGNdLmVZccPhJQJLFy',
                        type: 'Ed25519VerificationKey2018',
                        controller: 'did:key:z6Mki4zFqa9iNURsC896SHw8woa5QHSGNdLmVZccPhJQJLFy',
                        publicKeyBase58: '4cjDFKuH2vwQ5dJPkiyJ6i25aiAQxk6QoYhgZRLPP7Ub'
                    }
                ],
                authentication: [
                    'did:key:z6Mki4zFqa9iNURsC896SHw8woa5QHSGNdLmVZccPhJQJLFy#z6Mki4zFqa9iNURsC896SHw8woa5QHSGNdLmVZccPhJQJLFy'
                ],
                assertionMethod: [
                    'did:key:z6Mki4zFqa9iNURsC896SHw8woa5QHSGNdLmVZccPhJQJLFy#z6Mki4zFqa9iNURsC896SHw8woa5QHSGNdLmVZccPhJQJLFy'
                ],
                capabilityInvocation: [
                    'did:key:z6Mki4zFqa9iNURsC896SHw8woa5QHSGNdLmVZccPhJQJLFy#z6Mki4zFqa9iNURsC896SHw8woa5QHSGNdLmVZccPhJQJLFy'
                ],
                capabilityDelegation: [
                    'did:key:z6Mki4zFqa9iNURsC896SHw8woa5QHSGNdLmVZccPhJQJLFy#z6Mki4zFqa9iNURsC896SHw8woa5QHSGNdLmVZccPhJQJLFy'
                ]
            }
        });
    });

    it('create child node 5', async () => {
        const seed = '000102030405060708090a0b0c0d0e0f';
        const wallet = new Wallet();

        wallet.fromSeed(seed);
        const keys = await wallet.derivePath("m/0'/1/2'/2/1000000000");

        expect(keys).toEqual({
            did: 'did:key:z6MkuRQTXm8CpKcpPGJQnpg6pWTSPcyEYihsKMVc8t9Vo46G',
            address: 'z6MkuRQTXm8CpKcpPGJQnpg6pWTSPcyEYihsKMVc8t9Vo46G',
            privateKey: '471b76e389e528d6de6d816857e012c5455051cad6660850e58372a6c3e6e7c8',
            publicKey: 'de65a794a6a6442f08b9d57806392c7b3ebcdf02b6e8b8e40488acda1bd3d9cd',
            chainCode: 'c783e67b921d2beb8f6b389cc646d7263b4145701dadd2161548a8b078e65e9e',
            didDocument: {
                '@context': [
                    'https://www.w3.org/ns/did/v1',
                    'https://w3id.org/security/suites/ed25519-2018/v1',
                    'https://w3id.org/security/suites/x25519-2019/v1'
                ],
                id: 'did:key:z6MkuRQTXm8CpKcpPGJQnpg6pWTSPcyEYihsKMVc8t9Vo46G',
                verificationMethod: [
                    {
                        id: 'did:key:z6MkuRQTXm8CpKcpPGJQnpg6pWTSPcyEYihsKMVc8t9Vo46G#z6MkuRQTXm8CpKcpPGJQnpg6pWTSPcyEYihsKMVc8t9Vo46G',
                        type: 'Ed25519VerificationKey2018',
                        controller: 'did:key:z6MkuRQTXm8CpKcpPGJQnpg6pWTSPcyEYihsKMVc8t9Vo46G',
                        publicKeyBase58: 'Fy9QwWsmUn8MGmTi7FiFyQuSa3hP8qTWdLagJcBUsqJt'
                    }
                ],
                authentication: [
                    'did:key:z6MkuRQTXm8CpKcpPGJQnpg6pWTSPcyEYihsKMVc8t9Vo46G#z6MkuRQTXm8CpKcpPGJQnpg6pWTSPcyEYihsKMVc8t9Vo46G'
                ],
                assertionMethod: [
                    'did:key:z6MkuRQTXm8CpKcpPGJQnpg6pWTSPcyEYihsKMVc8t9Vo46G#z6MkuRQTXm8CpKcpPGJQnpg6pWTSPcyEYihsKMVc8t9Vo46G'
                ],
                capabilityInvocation: [
                    'did:key:z6MkuRQTXm8CpKcpPGJQnpg6pWTSPcyEYihsKMVc8t9Vo46G#z6MkuRQTXm8CpKcpPGJQnpg6pWTSPcyEYihsKMVc8t9Vo46G'
                ],
                capabilityDelegation: [
                    'did:key:z6MkuRQTXm8CpKcpPGJQnpg6pWTSPcyEYihsKMVc8t9Vo46G#z6MkuRQTXm8CpKcpPGJQnpg6pWTSPcyEYihsKMVc8t9Vo46G'
                ]
            }
        });
    });
});

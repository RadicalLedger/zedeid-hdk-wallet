import Wallet from '../src/index';
import WebMethod from 'zedeid-did-method-web';

describe('HD Wallet Web Method', function () {
    it('create master node', async () => {
        const seed = '000102030405060708090a0b0c0d0e0f';
        const wallet = new Wallet(new WebMethod('radicalledger.com'));

        wallet.fromSeed(seed);
        const keys = await wallet.getMasterKeys();

        expect(keys).toEqual({
            did: 'did:web:radicalledger.com',
            address: '0x056db290f8ba3250ca64a45d16284d04bc6f5fbf',
            privateKey: 'e8f32e723decf4051aefac8e2c93c9c5b214313817cdb01a1494b917c8436b35',
            publicKey: '0339a36013301597daef41fbe593a02cc513d0b55527ec2df1050e2e8ff49c85c2',
            chainCode: '873dff81c02f525623fd1fe5167eac3a55a049de3d314bb42ee227ffed37d508',
            didDocument: {
                '@context': 'https://w3id.org/did/v1',
                assertionMethod: [
                    'did:web:radicalledger.com#owner',
                    'did:web:radicalledger.com#ecdsa'
                ],
                authentication: [
                    'did:web:radicalledger.com#owner',
                    'did:web:radicalledger.com#ecdsa'
                ],
                id: 'did:web:radicalledger.com',
                publicKey: [
                    {
                        controller: 'did:web:radicalledger.com',
                        id: 'did:web:radicalledger.com#owner',
                        publicKeyHex:
                            '0439a36013301597daef41fbe593a02cc513d0b55527ec2df1050e2e8ff49c85c23cbe7ded0e7ce6a594896b8f62888fdbc5c8821305e2ea42bf01e37300116281',
                        type: 'Secp256k1VerificationKey2018'
                    }
                ],
                service: [],
                verificationMethod: [
                    {
                        controller: 'did:web:radicalledger.com',
                        id: 'did:web:radicalledger.com#ecdsa',
                        publicKeyHex:
                            '0339a36013301597daef41fbe593a02cc513d0b55527ec2df1050e2e8ff49c85c2',
                        type: 'EcdsaSecp256k1VerificationKey2019'
                    }
                ]
            }
        });
    });

    it('create child node 1', async () => {
        const seed = '000102030405060708090a0b0c0d0e0f';
        const wallet = new Wallet(new WebMethod('radicalledger.com'));

        wallet.fromSeed(seed);
        const keys = await wallet.derivePath("m/0'");

        expect(keys).toEqual({
            did: 'did:web:radicalledger.com',
            address: '0xbf6e48966d0dcf553b53e7b56cb2e0e72dca9e19',
            privateKey: 'edb2e14f9ee77d26dd93b4ecede8d16ed408ce149b6cd80b0715a2d911a0afea',
            publicKey: '035a784662a4a20a65bf6aab9ae98a6c068a81c52e4b032c0fb5400c706cfccc56',
            chainCode: '47fdacbd0f1097043b78c63c20c34ef4ed9a111d980047ad16282c7ae6236141',
            didDocument: {
                '@context': 'https://w3id.org/did/v1',
                assertionMethod: [
                    'did:web:radicalledger.com#owner',
                    'did:web:radicalledger.com#ecdsa'
                ],
                authentication: [
                    'did:web:radicalledger.com#owner',
                    'did:web:radicalledger.com#ecdsa'
                ],
                id: 'did:web:radicalledger.com',
                publicKey: [
                    {
                        controller: 'did:web:radicalledger.com',
                        id: 'did:web:radicalledger.com#owner',
                        publicKeyHex:
                            '045a784662a4a20a65bf6aab9ae98a6c068a81c52e4b032c0fb5400c706cfccc567f717885be239daadce76b568958305183ad616ff74ed4dc219a74c26d35f839',
                        type: 'Secp256k1VerificationKey2018'
                    }
                ],
                service: [],
                verificationMethod: [
                    {
                        controller: 'did:web:radicalledger.com',
                        id: 'did:web:radicalledger.com#ecdsa',
                        publicKeyHex:
                            '035a784662a4a20a65bf6aab9ae98a6c068a81c52e4b032c0fb5400c706cfccc56',
                        type: 'EcdsaSecp256k1VerificationKey2019'
                    }
                ]
            }
        });
    });

    it('create child node 2', async () => {
        const seed = '000102030405060708090a0b0c0d0e0f';
        const wallet = new Wallet(new WebMethod('radicalledger.com'));

        wallet.fromSeed(seed);
        const keys = await wallet.derivePath("m/0'/1");

        expect(keys).toEqual({
            did: 'did:web:radicalledger.com',
            address: '0x29379f45f515c494483298225d1b347f73d1babf',
            privateKey: '3c6cb8d0f6a264c91ea8b5030fadaa8e538b020f0a387421a12de9319dc93368',
            publicKey: '03501e454bf00751f24b1b489aa925215d66af2234e3891c3b21a52bedb3cd711c',
            chainCode: '2a7857631386ba23dacac34180dd1983734e444fdbf774041578e9b6adb37c19',
            didDocument: {
                '@context': 'https://w3id.org/did/v1',
                assertionMethod: [
                    'did:web:radicalledger.com#owner',
                    'did:web:radicalledger.com#ecdsa'
                ],
                authentication: [
                    'did:web:radicalledger.com#owner',
                    'did:web:radicalledger.com#ecdsa'
                ],
                id: 'did:web:radicalledger.com',
                publicKey: [
                    {
                        controller: 'did:web:radicalledger.com',
                        id: 'did:web:radicalledger.com#owner',
                        publicKeyHex:
                            '04501e454bf00751f24b1b489aa925215d66af2234e3891c3b21a52bedb3cd711c008794c1df8131b9ad1e1359965b3f3ee2feef0866be693729772be14be881ab',
                        type: 'Secp256k1VerificationKey2018'
                    }
                ],
                service: [],
                verificationMethod: [
                    {
                        controller: 'did:web:radicalledger.com',
                        id: 'did:web:radicalledger.com#ecdsa',
                        publicKeyHex:
                            '03501e454bf00751f24b1b489aa925215d66af2234e3891c3b21a52bedb3cd711c',
                        type: 'EcdsaSecp256k1VerificationKey2019'
                    }
                ]
            }
        });
    });

    it('create child node 3', async () => {
        const seed = '000102030405060708090a0b0c0d0e0f';
        const wallet = new Wallet(new WebMethod('radicalledger.com'));

        wallet.fromSeed(seed);
        const keys = await wallet.derivePath("m/0'/1/2'");

        expect(keys).toEqual({
            did: 'did:web:radicalledger.com',
            address: '0xd8e85fbbb4b3b3c71c4e63a5580d0c12fb4d2f71',
            privateKey: 'cbce0d719ecf7431d88e6a89fa1483e02e35092af60c042b1df2ff59fa424dca',
            publicKey: '0357bfe1e341d01c69fe5654309956cbea516822fba8a601743a012a7896ee8dc2',
            chainCode: '04466b9cc8e161e966409ca52986c584f07e9dc81f735db683c3ff6ec7b1503f',
            didDocument: {
                '@context': 'https://w3id.org/did/v1',
                assertionMethod: [
                    'did:web:radicalledger.com#owner',
                    'did:web:radicalledger.com#ecdsa'
                ],
                authentication: [
                    'did:web:radicalledger.com#owner',
                    'did:web:radicalledger.com#ecdsa'
                ],
                id: 'did:web:radicalledger.com',
                publicKey: [
                    {
                        controller: 'did:web:radicalledger.com',
                        id: 'did:web:radicalledger.com#owner',
                        publicKeyHex:
                            '0457bfe1e341d01c69fe5654309956cbea516822fba8a601743a012a7896ee8dc24310ef3676384179e713be3115e93f34ac9a3933f6367aeb3081527ea74027b7',
                        type: 'Secp256k1VerificationKey2018'
                    }
                ],
                service: [],
                verificationMethod: [
                    {
                        controller: 'did:web:radicalledger.com',
                        id: 'did:web:radicalledger.com#ecdsa',
                        publicKeyHex:
                            '0357bfe1e341d01c69fe5654309956cbea516822fba8a601743a012a7896ee8dc2',
                        type: 'EcdsaSecp256k1VerificationKey2019'
                    }
                ]
            }
        });
    });

    it('create child node 4', async () => {
        const seed = '000102030405060708090a0b0c0d0e0f';
        const wallet = new Wallet(new WebMethod('radicalledger.com'));

        wallet.fromSeed(seed);
        const keys = await wallet.derivePath("m/0'/1/2'/2");

        expect(keys).toEqual({
            did: 'did:web:radicalledger.com',
            address: '0x1d3462d2319ac0bfc1a52e177a9d372492752130',
            privateKey: '0f479245fb19a38a1954c5c7c0ebab2f9bdfd96a17563ef28a6a4b1a2a764ef4',
            publicKey: '02e8445082a72f29b75ca48748a914df60622a609cacfce8ed0e35804560741d29',
            chainCode: 'cfb71883f01676f587d023cc53a35bc7f88f724b1f8c2892ac1275ac822a3edd',
            didDocument: {
                '@context': 'https://w3id.org/did/v1',
                assertionMethod: [
                    'did:web:radicalledger.com#owner',
                    'did:web:radicalledger.com#ecdsa'
                ],
                authentication: [
                    'did:web:radicalledger.com#owner',
                    'did:web:radicalledger.com#ecdsa'
                ],
                id: 'did:web:radicalledger.com',
                publicKey: [
                    {
                        controller: 'did:web:radicalledger.com',
                        id: 'did:web:radicalledger.com#owner',
                        publicKeyHex:
                            '04e8445082a72f29b75ca48748a914df60622a609cacfce8ed0e35804560741d292728ad8d58a140050c1016e21f285636a580f4d2711b7fac3957a594ddf416a0',
                        type: 'Secp256k1VerificationKey2018'
                    }
                ],
                service: [],
                verificationMethod: [
                    {
                        controller: 'did:web:radicalledger.com',
                        id: 'did:web:radicalledger.com#ecdsa',
                        publicKeyHex:
                            '02e8445082a72f29b75ca48748a914df60622a609cacfce8ed0e35804560741d29',
                        type: 'EcdsaSecp256k1VerificationKey2019'
                    }
                ]
            }
        });
    });

    it('create child node 5', async () => {
        const seed = '000102030405060708090a0b0c0d0e0f';
        const wallet = new Wallet(new WebMethod('radicalledger.com'));

        wallet.fromSeed(seed);
        const keys = await wallet.derivePath("m/0'/1/2'/2/1000000000");

        expect(keys).toEqual({
            did: 'did:web:radicalledger.com',
            address: '0x73659c60270d326c06ac204f1a9c63f889a3d14b',
            privateKey: '471b76e389e528d6de6d816857e012c5455051cad6660850e58372a6c3e6e7c8',
            publicKey: '022a471424da5e657499d1ff51cb43c47481a03b1e77f951fe64cec9f5a48f7011',
            chainCode: 'c783e67b921d2beb8f6b389cc646d7263b4145701dadd2161548a8b078e65e9e',
            didDocument: {
                '@context': 'https://w3id.org/did/v1',
                assertionMethod: [
                    'did:web:radicalledger.com#owner',
                    'did:web:radicalledger.com#ecdsa'
                ],
                authentication: [
                    'did:web:radicalledger.com#owner',
                    'did:web:radicalledger.com#ecdsa'
                ],
                id: 'did:web:radicalledger.com',
                publicKey: [
                    {
                        controller: 'did:web:radicalledger.com',
                        id: 'did:web:radicalledger.com#owner',
                        publicKeyHex:
                            '042a471424da5e657499d1ff51cb43c47481a03b1e77f951fe64cec9f5a48f7011cf31cb47de7ccf6196d3a580d055837de7aa374e28c6c8a263e7b4512ceee362',
                        type: 'Secp256k1VerificationKey2018'
                    }
                ],
                service: [],
                verificationMethod: [
                    {
                        controller: 'did:web:radicalledger.com',
                        id: 'did:web:radicalledger.com#ecdsa',
                        publicKeyHex:
                            '022a471424da5e657499d1ff51cb43c47481a03b1e77f951fe64cec9f5a48f7011',
                        type: 'EcdsaSecp256k1VerificationKey2019'
                    }
                ]
            }
        });
    });
});

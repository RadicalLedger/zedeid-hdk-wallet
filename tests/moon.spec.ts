import Wallet from '../src/index';
import MoonMethod from 'zedeid-did-method-moon';

describe('HD Wallet Ethr Method', function () {
    it('create master node', async () => {
        const seed = '000102030405060708090a0b0c0d0e0f';
        const wallet = new Wallet(new MoonMethod());

        wallet.fromSeed(seed);
        const keys = await wallet.getMasterKeys();

        expect(keys).toEqual({
            did: 'did:moon:0x056db290f8ba3250ca64a45d16284d04bc6f5fbf',
            address: '0x056db290f8ba3250ca64a45d16284d04bc6f5fbf',
            privateKey: 'e8f32e723decf4051aefac8e2c93c9c5b214313817cdb01a1494b917c8436b35',
            publicKey: '0339a36013301597daef41fbe593a02cc513d0b55527ec2df1050e2e8ff49c85c2',
            chainCode: '873dff81c02f525623fd1fe5167eac3a55a049de3d314bb42ee227ffed37d508',
            didDocument: {
                '@context': 'https://w3id.org/did/v1',
                id: 'did:moon:0x056db290f8ba3250ca64a45d16284d04bc6f5fbf',
                publicKey: [
                    {
                        id: 'did:moon:0x056db290f8ba3250ca64a45d16284d04bc6f5fbf#owner',
                        owner: 'did:moon:0x056db290f8ba3250ca64a45d16284d04bc6f5fbf',
                        type: 'Secp256k1VerificationKey2018',
                        ethereumAddress: '0x056db290f8ba3250ca64a45d16284d04bc6f5fbf'
                    }
                ],
                authentication: [
                    {
                        type: 'Secp256k1SignatureAuthentication2018',
                        publicKey: 'did:moon:0x056db290f8ba3250ca64a45d16284d04bc6f5fbf#owner'
                    }
                ],
                assertionMethod: [
                    {
                        type: 'Secp256k1SignatureAuthentication2018',
                        publicKey: 'did:moon:0x056db290f8ba3250ca64a45d16284d04bc6f5fbf#owner'
                    }
                ],
                service: []
            }
        });
    });

    it('create master node with chain', async () => {
        const seed = '000102030405060708090a0b0c0d0e0f';
        const wallet = new Wallet(new MoonMethod('alpha'));

        wallet.fromSeed(seed);
        const keys = await wallet.getMasterKeys();

        expect(keys).toEqual({
            did: 'did:moon:alpha:0x056db290f8ba3250ca64a45d16284d04bc6f5fbf',
            address: '0x056db290f8ba3250ca64a45d16284d04bc6f5fbf',
            privateKey: 'e8f32e723decf4051aefac8e2c93c9c5b214313817cdb01a1494b917c8436b35',
            publicKey: '0339a36013301597daef41fbe593a02cc513d0b55527ec2df1050e2e8ff49c85c2',
            chainCode: '873dff81c02f525623fd1fe5167eac3a55a049de3d314bb42ee227ffed37d508',
            didDocument: {
                '@context': 'https://w3id.org/did/v1',
                id: 'did:moon:alpha:0x056db290f8ba3250ca64a45d16284d04bc6f5fbf',
                publicKey: [
                    {
                        id: 'did:moon:alpha:0x056db290f8ba3250ca64a45d16284d04bc6f5fbf#owner',
                        owner: 'did:moon:alpha:0x056db290f8ba3250ca64a45d16284d04bc6f5fbf',
                        type: 'Secp256k1VerificationKey2018',
                        ethereumAddress: '0x056db290f8ba3250ca64a45d16284d04bc6f5fbf'
                    }
                ],
                authentication: [
                    {
                        type: 'Secp256k1SignatureAuthentication2018',
                        publicKey: 'did:moon:alpha:0x056db290f8ba3250ca64a45d16284d04bc6f5fbf#owner'
                    }
                ],
                assertionMethod: [
                    {
                        type: 'Secp256k1SignatureAuthentication2018',
                        publicKey: 'did:moon:alpha:0x056db290f8ba3250ca64a45d16284d04bc6f5fbf#owner'
                    }
                ],
                service: []
            }
        });
    });

    it('create child node 1', async () => {
        const seed = '000102030405060708090a0b0c0d0e0f';
        const wallet = new Wallet(new MoonMethod());

        wallet.fromSeed(seed);
        const keys = await wallet.derivePath("m/0'");

        expect(keys).toEqual({
            did: 'did:moon:0xbf6e48966d0dcf553b53e7b56cb2e0e72dca9e19',
            address: '0xbf6e48966d0dcf553b53e7b56cb2e0e72dca9e19',
            privateKey: 'edb2e14f9ee77d26dd93b4ecede8d16ed408ce149b6cd80b0715a2d911a0afea',
            publicKey: '035a784662a4a20a65bf6aab9ae98a6c068a81c52e4b032c0fb5400c706cfccc56',
            chainCode: '47fdacbd0f1097043b78c63c20c34ef4ed9a111d980047ad16282c7ae6236141',
            didDocument: {
                '@context': 'https://w3id.org/did/v1',
                id: 'did:moon:0xbf6e48966d0dcf553b53e7b56cb2e0e72dca9e19',
                publicKey: [
                    {
                        id: 'did:moon:0xbf6e48966d0dcf553b53e7b56cb2e0e72dca9e19#owner',
                        owner: 'did:moon:0xbf6e48966d0dcf553b53e7b56cb2e0e72dca9e19',
                        type: 'Secp256k1VerificationKey2018',
                        ethereumAddress: '0xbf6e48966d0dcf553b53e7b56cb2e0e72dca9e19'
                    }
                ],
                authentication: [
                    {
                        type: 'Secp256k1SignatureAuthentication2018',
                        publicKey: 'did:moon:0xbf6e48966d0dcf553b53e7b56cb2e0e72dca9e19#owner'
                    }
                ],
                assertionMethod: [
                    {
                        type: 'Secp256k1SignatureAuthentication2018',
                        publicKey: 'did:moon:0xbf6e48966d0dcf553b53e7b56cb2e0e72dca9e19#owner'
                    }
                ],
                service: []
            }
        });
    });

    it('create child node 2', async () => {
        const seed = '000102030405060708090a0b0c0d0e0f';
        const wallet = new Wallet(new MoonMethod());

        wallet.fromSeed(seed);
        const keys = await wallet.derivePath("m/0'/1");

        expect(keys).toEqual({
            did: 'did:moon:0x29379f45f515c494483298225d1b347f73d1babf',
            address: '0x29379f45f515c494483298225d1b347f73d1babf',
            privateKey: '3c6cb8d0f6a264c91ea8b5030fadaa8e538b020f0a387421a12de9319dc93368',
            publicKey: '03501e454bf00751f24b1b489aa925215d66af2234e3891c3b21a52bedb3cd711c',
            chainCode: '2a7857631386ba23dacac34180dd1983734e444fdbf774041578e9b6adb37c19',
            didDocument: {
                '@context': 'https://w3id.org/did/v1',
                id: 'did:moon:0x29379f45f515c494483298225d1b347f73d1babf',
                publicKey: [
                    {
                        id: 'did:moon:0x29379f45f515c494483298225d1b347f73d1babf#owner',
                        owner: 'did:moon:0x29379f45f515c494483298225d1b347f73d1babf',
                        type: 'Secp256k1VerificationKey2018',
                        ethereumAddress: '0x29379f45f515c494483298225d1b347f73d1babf'
                    }
                ],
                authentication: [
                    {
                        type: 'Secp256k1SignatureAuthentication2018',
                        publicKey: 'did:moon:0x29379f45f515c494483298225d1b347f73d1babf#owner'
                    }
                ],
                assertionMethod: [
                    {
                        type: 'Secp256k1SignatureAuthentication2018',
                        publicKey: 'did:moon:0x29379f45f515c494483298225d1b347f73d1babf#owner'
                    }
                ],
                service: []
            }
        });
    });

    it('create child node 3', async () => {
        const seed = '000102030405060708090a0b0c0d0e0f';
        const wallet = new Wallet(new MoonMethod());

        wallet.fromSeed(seed);
        const keys = await wallet.derivePath("m/0'/1/2'");

        expect(keys).toEqual({
            did: 'did:moon:0xd8e85fbbb4b3b3c71c4e63a5580d0c12fb4d2f71',
            address: '0xd8e85fbbb4b3b3c71c4e63a5580d0c12fb4d2f71',
            privateKey: 'cbce0d719ecf7431d88e6a89fa1483e02e35092af60c042b1df2ff59fa424dca',
            publicKey: '0357bfe1e341d01c69fe5654309956cbea516822fba8a601743a012a7896ee8dc2',
            chainCode: '04466b9cc8e161e966409ca52986c584f07e9dc81f735db683c3ff6ec7b1503f',
            didDocument: {
                '@context': 'https://w3id.org/did/v1',
                id: 'did:moon:0xd8e85fbbb4b3b3c71c4e63a5580d0c12fb4d2f71',
                publicKey: [
                    {
                        id: 'did:moon:0xd8e85fbbb4b3b3c71c4e63a5580d0c12fb4d2f71#owner',
                        owner: 'did:moon:0xd8e85fbbb4b3b3c71c4e63a5580d0c12fb4d2f71',
                        type: 'Secp256k1VerificationKey2018',
                        ethereumAddress: '0xd8e85fbbb4b3b3c71c4e63a5580d0c12fb4d2f71'
                    }
                ],
                authentication: [
                    {
                        type: 'Secp256k1SignatureAuthentication2018',
                        publicKey: 'did:moon:0xd8e85fbbb4b3b3c71c4e63a5580d0c12fb4d2f71#owner'
                    }
                ],
                assertionMethod: [
                    {
                        type: 'Secp256k1SignatureAuthentication2018',
                        publicKey: 'did:moon:0xd8e85fbbb4b3b3c71c4e63a5580d0c12fb4d2f71#owner'
                    }
                ],
                service: []
            }
        });
    });

    it('create child node 4', async () => {
        const seed = '000102030405060708090a0b0c0d0e0f';
        const wallet = new Wallet(new MoonMethod());

        wallet.fromSeed(seed);
        const keys = await wallet.derivePath("m/0'/1/2'/2");

        expect(keys).toEqual({
            did: 'did:moon:0x1d3462d2319ac0bfc1a52e177a9d372492752130',
            address: '0x1d3462d2319ac0bfc1a52e177a9d372492752130',
            privateKey: '0f479245fb19a38a1954c5c7c0ebab2f9bdfd96a17563ef28a6a4b1a2a764ef4',
            publicKey: '02e8445082a72f29b75ca48748a914df60622a609cacfce8ed0e35804560741d29',
            chainCode: 'cfb71883f01676f587d023cc53a35bc7f88f724b1f8c2892ac1275ac822a3edd',
            didDocument: {
                '@context': 'https://w3id.org/did/v1',
                id: 'did:moon:0x1d3462d2319ac0bfc1a52e177a9d372492752130',
                publicKey: [
                    {
                        id: 'did:moon:0x1d3462d2319ac0bfc1a52e177a9d372492752130#owner',
                        owner: 'did:moon:0x1d3462d2319ac0bfc1a52e177a9d372492752130',
                        type: 'Secp256k1VerificationKey2018',
                        ethereumAddress: '0x1d3462d2319ac0bfc1a52e177a9d372492752130'
                    }
                ],
                authentication: [
                    {
                        type: 'Secp256k1SignatureAuthentication2018',
                        publicKey: 'did:moon:0x1d3462d2319ac0bfc1a52e177a9d372492752130#owner'
                    }
                ],
                assertionMethod: [
                    {
                        type: 'Secp256k1SignatureAuthentication2018',
                        publicKey: 'did:moon:0x1d3462d2319ac0bfc1a52e177a9d372492752130#owner'
                    }
                ],
                service: []
            }
        });
    });

    it('create child node 5', async () => {
        const seed = '000102030405060708090a0b0c0d0e0f';
        const wallet = new Wallet(new MoonMethod());

        wallet.fromSeed(seed);
        const keys = await wallet.derivePath("m/0'/1/2'/2/1000000000");

        expect(keys).toEqual({
            did: 'did:moon:0x73659c60270d326c06ac204f1a9c63f889a3d14b',
            address: '0x73659c60270d326c06ac204f1a9c63f889a3d14b',
            privateKey: '471b76e389e528d6de6d816857e012c5455051cad6660850e58372a6c3e6e7c8',
            publicKey: '022a471424da5e657499d1ff51cb43c47481a03b1e77f951fe64cec9f5a48f7011',
            chainCode: 'c783e67b921d2beb8f6b389cc646d7263b4145701dadd2161548a8b078e65e9e',
            didDocument: {
                '@context': 'https://w3id.org/did/v1',
                id: 'did:moon:0x73659c60270d326c06ac204f1a9c63f889a3d14b',
                publicKey: [
                    {
                        id: 'did:moon:0x73659c60270d326c06ac204f1a9c63f889a3d14b#owner',
                        owner: 'did:moon:0x73659c60270d326c06ac204f1a9c63f889a3d14b',
                        type: 'Secp256k1VerificationKey2018',
                        ethereumAddress: '0x73659c60270d326c06ac204f1a9c63f889a3d14b'
                    }
                ],
                authentication: [
                    {
                        type: 'Secp256k1SignatureAuthentication2018',
                        publicKey: 'did:moon:0x73659c60270d326c06ac204f1a9c63f889a3d14b#owner'
                    }
                ],
                assertionMethod: [
                    {
                        type: 'Secp256k1SignatureAuthentication2018',
                        publicKey: 'did:moon:0x73659c60270d326c06ac204f1a9c63f889a3d14b#owner'
                    }
                ],
                service: []
            }
        });
    });
});

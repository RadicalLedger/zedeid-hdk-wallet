import Wallet, { Types } from '../src/index';

describe('HD wallet', function () {
    it('create master node', async () => {
        const seed = '000102030405060708090a0b0c0d0e0f';

        const wallet = new Wallet(Types.SEED, seed);
        const keys = await wallet.getMasterKeys();

        expect(keys).toEqual({
            privateKey: 'e8f32e723decf4051aefac8e2c93c9c5b214313817cdb01a1494b917c8436b35',
            publicKey: 'e4c2d43d39541b739d431b90532f71a6221bedb1991cd0ac4f9f1fe6759bd72b',
            did: 'did:key:z6MkurFJqdePvMpkRG9kTRStYpsr4q6cPKhZZPxd73L1miPk',
            verificationKey: {
                id: 'did:key:z6MkurFJqdePvMpkRG9kTRStYpsr4q6cPKhZZPxd73L1miPk#z6MkurFJqdePvMpkRG9kTRStYpsr4q6cPKhZZPxd73L1miPk',
                type: 'Ed25519VerificationKey2018',
                controller: 'did:key:z6MkurFJqdePvMpkRG9kTRStYpsr4q6cPKhZZPxd73L1miPk',
                publicKeyBase58: 'GPzGFPPxapLHJmK3mrV3hjKrFFpkySTCsP3hGmMzrVcN',
                privateKeyBase58:
                    '5f8YbEuVeiWG1wMSUo9PRxLCUhNLuefAZkiurGkxkJBMZdxnQCuVYxDzMT6rNLS9K4w1akvB43zHWFBbt8qUehkN'
            }
        });
    });

    it('create child node 1', async () => {
        const seed = '000102030405060708090a0b0c0d0e0f';

        const wallet = new Wallet(Types.SEED, seed);
        const keys = await wallet.getChildKeys("m/0'");

        expect(keys).toEqual({
            privateKey: 'edb2e14f9ee77d26dd93b4ecede8d16ed408ce149b6cd80b0715a2d911a0afea',
            publicKey: 'e1b0dc611a457ee5b8d2cf3b26fb291c96cd351a84bd30f5510d22c32864a7c9',
            did: 'did:key:z6MkueGCDFd5xzkEJBAEqLwyRpjYr3bNZZgrDJKjRYgD4tFS',
            verificationKey: {
                id: 'did:key:z6MkueGCDFd5xzkEJBAEqLwyRpjYr3bNZZgrDJKjRYgD4tFS#z6MkueGCDFd5xzkEJBAEqLwyRpjYr3bNZZgrDJKjRYgD4tFS',
                type: 'Ed25519VerificationKey2018',
                controller: 'did:key:z6MkueGCDFd5xzkEJBAEqLwyRpjYr3bNZZgrDJKjRYgD4tFS',
                publicKeyBase58: 'GC19d1NedTFmBgKY9mz8ajBZ2UKX9gSVXHQobGiC9fU4',
                privateKeyBase58:
                    '5kdwLhW3e1rubhrFzKcKFc9joHZQoR4G2wS8N38KusQLGf4W3HWcFfGKBPQqcLwFRB4FQxUSLHr3A5Sb5qLgWD6Y'
            }
        });
    });

    it('create child node 2', async () => {
        const seed = '000102030405060708090a0b0c0d0e0f';

        const wallet = new Wallet(Types.SEED, seed);
        const keys = await wallet.getChildKeys("m/0'/1");

        expect(keys).toEqual({
            privateKey: '3c6cb8d0f6a264c91ea8b5030fadaa8e538b020f0a387421a12de9319dc93368',
            publicKey: '07191857afe31cb5157b6657c671143bd540802e2b5d3e7793d72b1f6dc2c024',
            did: 'did:key:z6Mkevy6P5aJtNuFN1WQ5gY1XDpjtK79KKGBTwLz3q1A8Rco',
            verificationKey: {
                id: 'did:key:z6Mkevy6P5aJtNuFN1WQ5gY1XDpjtK79KKGBTwLz3q1A8Rco#z6Mkevy6P5aJtNuFN1WQ5gY1XDpjtK79KKGBTwLz3q1A8Rco',
                type: 'Ed25519VerificationKey2018',
                controller: 'did:key:z6Mkevy6P5aJtNuFN1WQ5gY1XDpjtK79KKGBTwLz3q1A8Rco',
                publicKeyBase58: 'Ui3nqKsYqQnFWfhQ7aAg8Gk4jqHuS1pmvS4DZ39DCqR',
                privateKeyBase58:
                    '2D4zXcX1Dv4bLwRaU3aAhNnyWN4a7uUmR5z6jaxk3vR8gRTsTYfYUfh3vKAW57iDbVdiiHM2r5CxJ9vm2RZHbQzo'
            }
        });
    });

    it('create child node 3', async () => {
        const seed = '000102030405060708090a0b0c0d0e0f';

        const wallet = new Wallet(Types.SEED, seed);
        const keys = await wallet.getChildKeys("m/0'/1/2'");

        expect(keys).toEqual({
            privateKey: 'cbce0d719ecf7431d88e6a89fa1483e02e35092af60c042b1df2ff59fa424dca',
            publicKey: '307b520f197e93b66ee347e0789161b597ec166a22a5e5ce72d32171c0e1a788',
            did: 'did:key:z6MkhiWgQjVCBwrTBbXCrKcrQMqSEwFP5QruKn2gVBNNQPq9',
            verificationKey: {
                id: 'did:key:z6MkhiWgQjVCBwrTBbXCrKcrQMqSEwFP5QruKn2gVBNNQPq9#z6MkhiWgQjVCBwrTBbXCrKcrQMqSEwFP5QruKn2gVBNNQPq9',
                type: 'Ed25519VerificationKey2018',
                controller: 'did:key:z6MkhiWgQjVCBwrTBbXCrKcrQMqSEwFP5QruKn2gVBNNQPq9',
                publicKeyBase58: '4GFdpVEkrQMz56gWAkf1ZGHSRMyXfXcYdm7keuQMVB3m',
                privateKeyBase58:
                    '55LLKdxvEDHrpqrExfneGtBkgsa4TRm3uXq97khZrsPvPYoxdKBdTMDiPkPVEm4ETtev4oasW4HK9mG46rK9mfbV'
            }
        });
    });

    it('create child node 4', async () => {
        const seed = '000102030405060708090a0b0c0d0e0f';

        const wallet = new Wallet(Types.SEED, seed);
        const keys = await wallet.getChildKeys("m/0'/1/2'/2");

        expect(keys).toEqual({
            privateKey: '0f479245fb19a38a1954c5c7c0ebab2f9bdfd96a17563ef28a6a4b1a2a764ef4',
            publicKey: '35ba1e0e0e04bb0d4afde15c56db2b6a9c129bb664a953a5a9afda7ce1d007c8',
            did: 'did:key:z6Mki4zFqa9iNURsC896SHw8woa5QHSGNdLmVZccPhJQJLFy',
            verificationKey: {
                id: 'did:key:z6Mki4zFqa9iNURsC896SHw8woa5QHSGNdLmVZccPhJQJLFy#z6Mki4zFqa9iNURsC896SHw8woa5QHSGNdLmVZccPhJQJLFy',
                type: 'Ed25519VerificationKey2018',
                controller: 'did:key:z6Mki4zFqa9iNURsC896SHw8woa5QHSGNdLmVZccPhJQJLFy',
                publicKeyBase58: '4cjDFKuH2vwQ5dJPkiyJ6i25aiAQxk6QoYhgZRLPP7Ub',
                privateKeyBase58:
                    'JifJryT78cQ2kCwvbgvC7mFQjG1Lo9au3duYC1pWPr3AgRmSe1BCQk4ruCDWMgLAikQFc2QdWCYVUnf2HtHZiRu'
            }
        });
    });

    it('create child node 5', async () => {
        const seed = '000102030405060708090a0b0c0d0e0f';

        const wallet = new Wallet(Types.SEED, seed);
        const keys = await wallet.getChildKeys("m/0'/1/2'/2/1000000000");

        expect(keys).toEqual({
            privateKey: '471b76e389e528d6de6d816857e012c5455051cad6660850e58372a6c3e6e7c8',
            publicKey: 'de65a794a6a6442f08b9d57806392c7b3ebcdf02b6e8b8e40488acda1bd3d9cd',
            did: 'did:key:z6MkuRQTXm8CpKcpPGJQnpg6pWTSPcyEYihsKMVc8t9Vo46G',
            verificationKey: {
                id: 'did:key:z6MkuRQTXm8CpKcpPGJQnpg6pWTSPcyEYihsKMVc8t9Vo46G#z6MkuRQTXm8CpKcpPGJQnpg6pWTSPcyEYihsKMVc8t9Vo46G',
                type: 'Ed25519VerificationKey2018',
                controller: 'did:key:z6MkuRQTXm8CpKcpPGJQnpg6pWTSPcyEYihsKMVc8t9Vo46G',
                publicKeyBase58: 'Fy9QwWsmUn8MGmTi7FiFyQuSa3hP8qTWdLagJcBUsqJt',
                privateKeyBase58:
                    '2RTUPACFEm79ZHgs2NPtzJdhWsY1uQAGz8hknzsrgWYhZPJrEG2uatasHxf5o6oK6Gm5EQ48oAn8SGxkuj3GTUAx'
            }
        });
    });
});

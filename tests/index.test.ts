import Wallet, { Types} from '../dist'

describe(
    'HD wallet', function () {
        it('create master node', function () {
            const seed = '000102030405060708090a0b0c0d0e0f'

            const wallet = new Wallet(Types.SEED, seed)
            const base58 = wallet.getBase58()
            expect(base58).toEqual('xprv9s21ZrQH143K3QTDL4LXw2F7HEK3wJUD2nW2nRk4stbPy6cq3jPPqjiChkVvvNKmPGJxWUtg6LnF5kejMRNNU3TGtRBeJgk33yuGBxrMPHi');
        }),

        it('create child node 1', function () {

            const seed = '000102030405060708090a0b0c0d0e0f'

            const wallet = new Wallet(Types.SEED, seed)
            const {base58} = wallet.getChildKeys('m/0\'')
            expect(base58).toEqual('xprv9uHRZZhk6KAJC1avXpDAp4MDc3sQKNxDiPvvkX8Br5ngLNv1TxvUxt4cV1rGL5hj6KCesnDYUhd7oWgT11eZG7XnxHrnYeSvkzY7d2bhkJ7');
        })

        it('create child node 2',  function () {

            const seed = '000102030405060708090a0b0c0d0e0f'

            const wallet = new Wallet(Types.SEED, seed)
            const {base58} = wallet.getChildKeys('m/0\'/1')
            expect(base58).toEqual('xprv9wTYmMFdV23N2TdNG573QoEsfRrWKQgWeibmLntzniatZvR9BmLnvSxqu53Kw1UmYPxLgboyZQaXwTCg8MSY3H2EU4pWcQDnRnrVA1xe8fs');
        })

        it('create child node 3',  function () {

            const seed = '000102030405060708090a0b0c0d0e0f'

            const wallet = new Wallet(Types.SEED, seed)
            const {base58} = wallet.getChildKeys('m/0\'/1/2\'')
            expect(base58).toEqual('xprv9z4pot5VBttmtdRTWfWQmoH1taj2axGVzFqSb8C9xaxKymcFzXBDptWmT7FwuEzG3ryjH4ktypQSAewRiNMjANTtpgP4mLTj34bhnZX7UiM');
        })

        it('create child node 4',  function () {

            const seed = '000102030405060708090a0b0c0d0e0f'

            const wallet = new Wallet(Types.SEED, seed)
            const {base58} = wallet.getChildKeys('m/0\'/1/2\'/2')
            expect(base58).toEqual('xprvA2JDeKCSNNZky6uBCviVfJSKyQ1mDYahRjijr5idH2WwLsEd4Hsb2Tyh8RfQMuPh7f7RtyzTtdrbdqqsunu5Mm3wDvUAKRHSC34sJ7in334');
        })

        it('create child node 5',  function () {

            const seed = '000102030405060708090a0b0c0d0e0f'

            const wallet = new Wallet(Types.SEED, seed)
            const {base58} = wallet.getChildKeys('m/0\'/1/2\'/2/1000000000')
            expect(base58).toEqual('xprvA41z7zogVVwxVSgdKUHDy1SKmdb533PjDz7J6N6mV6uS3ze1ai8FHa8kmHScGpWmj4WggLyQjgPie1rFSruoUihUZREPSL39UNdE3BBDu76');
        })
    }
);

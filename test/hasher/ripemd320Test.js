/*global describe, it */
'use strict';
import TestHasher from "../TestHasher";
import Ripemd from "../../src/hasher/ripemd";

// The RIPEMD320 test suite
// http://homes.esat.kuleuven.be/~bosselae/ripemd160.html

class Ripemd320Test extends TestHasher {
  test() {
    let t = this;
    /** @test {Ripemd} */
    describe('Hash ripemd320 tests', function () {
      it("ripemd320('')", function () {
        t.testHash({
          message: '',
          hash: '22d65d5661536cdc75c1fdf5c6de7b41b9f27325ebc61e8557177d705a0ec880151c3a32a00899b8'
        })
      });

      it("ripemd320('a')", function () {
        t.testHash({
          message: 'a',
          hash: 'ce78850638f92658a5a585097579926dda667a5716562cfcf6fbe77f63542f99b04705d6970dff5d'
        })
      });

      it("ripemd320('abc')", function () {
        t.testHash({
          message: 'abc',
          hash: 'de4c01b3054f8930a79d09ae738e92301e5a17085beffdc1b8d116713e74f82fa942d64cdbc4682d'
        })
      });

      it("ripemd320('message digest')", function () {
        t.testHash({
          message: 'message digest',
          hash: '3a8e28502ed45d422f68844f9dd316e7b98533fa3f2a91d29f84d425c88d6b4eff727df66a7c0197'
        })
      });

      it("ripemd320('a..z')", function () {
        t.testHash({
          message: 'abcdefghijklmnopqrstuvwxyz',
          hash: 'cabdb1810b92470a2093aa6bce05952c28348cf43ff60841975166bb40ed234004b8824463e6b009'
        })
      });

      it("ripemd320('abcdbcdecdefdefgefghfghighijhijkijkljklmklmnlmnomnopnopq')", function () {
        t.testHash({
          message: 'abcdbcdecdefdefgefghfghighijhijkijkljklmklmnlmnomnopnopq',
          hash: 'd034a7950cf722021ba4b84df769a5de2060e259df4c9bb4a4268c0e935bbc7470a969c9d072a1ac'
        })
      });

      it("ripemd320('A..Za..z0..9')", function () {
        t.testHash({
          message: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789',
          hash: 'ed544940c86d67f250d232c30b7b3e5770e0c60c8cb9a4cafe3b11388af9920e1b99230b843c86a4'
        })
      });

      it("ripemd320('1234567890' x 8)", function () {
        t.testHash({
          message: new Array(9).join('1234567890'),
          hash: '557888af5f6d8ed62ab66945c6d2a0a47ecd5341e915eb8fea1d0524955f825dc717e4a008ab2d42'
        })
      });

      /**
       * @test {Ripemd#setState}
       * @test {Ripemd#getState}
       */
      it('hash setState() getState()', function () {
        t.testSetGetState()
      });
    });
  }

  getInstance(options) {
    return new Ripemd(options || {length: 320});
  }
}

export default Ripemd320Test
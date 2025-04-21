import CryptoJS from 'crypto-js';

const key = CryptoJS.enc.Hex.parse('ac0cfcd5e4f2486d978cb864932d80eb');
const iv = CryptoJS.enc.Hex.parse('1e572210427940e681fcb4ade791dad0');

export class CryptUtil {
  private static _instance: CryptUtil;
  public static getInstance = (): CryptUtil => {
    if (this._instance === undefined) this._instance = new CryptUtil();
    return this._instance;
  };
  private constructor() {}

  getEncryptedData = (msg: string) => {
    const encryptedText = CryptoJS.AES.encrypt(msg, key, {iv: iv}).toString();
    return encryptedText;
  };

  getDecryptedData = (msg: string) => {
    const decryptedText = CryptoJS.AES.decrypt(msg, key, {iv: iv}).toString(
      CryptoJS.enc.Utf8,
    );

    return decryptedText;
  };
}

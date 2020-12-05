"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isValidIdNumber = void 0;
const Luhn_1 = __importDefault(require("./Luhn"));
const isValidIdNumber = (idNumber) => {
    idNumber = idNumber.trim();
    const numbersRegex = /^\d+$/;
    const isNumbers = numbersRegex.test(idNumber);
    if (!isNumbers) {
        return { error: !0, msg: "Must only contain numbers" };
    }
    let fullRegex = /^(((?:([02468][048])|(?:[13579][26]))((?:(?:0[13578]|1[02])(?:0[1-9]|[12]\d|3[01]))|(?:(?:0[469]|11)(?:0[1-9]|[12]\d|30))|(?:02(?:0[1-9]|1\d|2[0-9])))|(?:([02468][1235679])|(?:[123569][01345789]))((?:(?:0[13578]|1[02])(?:0[1-9]|[12]\d|3[01]))|(?:(?:0[469]|11)(?:0[1-9]|[12]\d|30))|(?:02(?:0[1-9]|1\d|2[0-8]))))(\d{4}[012]8\d))$/;
    const isFine = fullRegex.test(idNumber);
    if (!isFine) {
        return { error: !0, msg: "Not a valid ID" };
    }
    const isValidId = Luhn_1.default(idNumber);
    if (isValidId) {
        return { error: !1, msg: "" };
    }
    return { error: !0, msg: "Not a valid ID" };
};
exports.isValidIdNumber = isValidIdNumber;

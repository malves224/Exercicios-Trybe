"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateCircle = exports.calculateTrapeze = exports.calculateDiamond = void 0;
const calculateDiamond = (D, d) => (D * d) / 2;
exports.calculateDiamond = calculateDiamond;
const calculateTrapeze = (b, B, h) => ((b + B) * h) / 2;
exports.calculateTrapeze = calculateTrapeze;
const calculateCircle = (r) => Math.PI * Math.pow(r, 2);
exports.calculateCircle = calculateCircle;

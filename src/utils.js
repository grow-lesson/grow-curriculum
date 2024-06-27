// utils.js
import { Capacitor } from '@capacitor/core';

export const isCapacitor = () => {
  console.log("Checking Capacitor environment"); // デバッグ用ログ
  return Capacitor.isNativePlatform();
};
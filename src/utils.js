// utils.js
import { Capacitor } from '@capacitor/core';

export const isCapacitor = () => {
  return Capacitor.isNativePlatform();
};
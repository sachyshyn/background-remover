import { StorageService } from './storage';

export const localStorageService = new StorageService(localStorage);
export const sessionStorageService = new StorageService(sessionStorage);

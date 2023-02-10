export class StorageService {
  constructor(private readonly storage: Storage) {}

  private checkStorage() {
    return typeof this.storage !== 'undefined';
  }

  getItem(key: string) {
    if (this.checkStorage()) {
      const unparsedValue = this.storage.getItem(key) as string;

      if (unparsedValue === undefined) {
        return null;
      }

      const value = JSON.parse(unparsedValue);

      return value;
    }

    return null;
  }

  setItem<T>(key: string, value: T) {
    if (this.checkStorage()) {
      const stringifiedValue = JSON.stringify(value);
      this.storage.setItem(key, stringifiedValue);
    }
  }

  removeItem(key: string) {
    if (this.checkStorage()) {
      this.storage.removeItem(key);
    }
  }

  clear() {
    if (this.checkStorage()) {
      this.storage.clear();
    }
  }
}

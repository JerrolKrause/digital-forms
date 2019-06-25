import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';
import { Settings } from './settings';

export function createInitialState(): Settings {
  return {
    token: null,
    userName: null,
    version: null,
    role: null
  };
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'settings', resettable: true })
export class SettingsStore extends Store<Settings> {
  constructor() {
    super(createInitialState());
  }
}

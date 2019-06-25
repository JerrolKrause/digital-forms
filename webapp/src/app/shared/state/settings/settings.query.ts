import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import { SettingsStore } from './settings.store';
import { Settings } from './settings';

@Injectable({ providedIn: 'root' })
export class SettingsQuery extends Query<Settings> {
  constructor(protected store: SettingsStore) {
    super(store);
  }
}

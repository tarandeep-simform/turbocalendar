// @flow

import type {TurboModule} from 'react-native/Libraries/TurboModule/RCTExport';
import {TurboModuleRegistry} from 'react-native';

export interface Spec extends TurboModule {
  +getConstants: () => {||};

  // your module methods go here, for example:
  getMessage():string;
}

export default (TurboModuleRegistry.get<Spec>('NativeCalendarModule'): ?Spec);
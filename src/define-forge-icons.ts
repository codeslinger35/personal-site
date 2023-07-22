import {
    tylIconHome,
    tylIconDescription
} from '@tylertech/tyler-icons/standard';

import { tylIconDog } from '@tylertech/tyler-icons/extended';

import { IconRegistry } from '@tylertech/forge';

export function defineIcons() {
    IconRegistry.define([
        tylIconHome,
        tylIconDescription,
        tylIconDog
    ]);
}

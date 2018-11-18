
import { Injectable } from '@angular/core';

import 'hammerjs';

/// <reference path="../../../node_modules/@types/hammerjs/index.d.ts" />

@Injectable()
export class GestureService {
    /**
     * Registering gestures because of: https://github.com/ionic-team/ionic/issues/14883
     * @param names names of the gestures
     * @param element Html element to apply gestures on
     */
    async registerGesture(
        names: string[],
        element: HTMLElement
    ): Promise<HammerManager> {
        if (element) {
            const hammerManager = new Hammer.Manager(element);
            await names.forEach(name => {
                switch (name) {
                    case 'pinch':
                        hammerManager.add(new Hammer.Pinch({ event: 'pinch' }));
                        break;
                    case 'rotate':
                        hammerManager.add(
                            new Hammer.Pinch({ event: 'rotate' })
                        );
                        break;
                    case 'pan':
                        hammerManager.add(new Hammer.Pinch({ event: 'pan' }));
                        break;
                }
            });
            return hammerManager;
        }
        return null;
    }
}

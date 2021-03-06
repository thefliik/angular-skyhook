/**
 * @ignore
 */
/** a second comment */

import { NgZone } from '@angular/core';
import { DropTargetMonitor } from '../target-monitor';
import { invariant } from './invariant';
import { DropTargetSpec } from '../drop-target-specification';

export function createTargetFactory(spec: DropTargetSpec, zone: Zone): any {

  class Target {

    constructor(private monitor: DropTargetMonitor) {
      this.monitor = monitor;
    }

    withChangeDetection<T>(fn: () => T): T {
      let x = fn();
      zone.scheduleMicroTask('DropTarget', () => { });
      return x;
    }

    receiveMonitor(monitor: any) {
      this.monitor = monitor;
    }

    canDrop() {
      if (!spec.canDrop) {
        return true;
      }

      // don't run isDragging in the zone. Should be a pure function of `this`.
      return spec.canDrop(this.monitor);
    }

    hover() {
      if (!spec.hover) {
        return;
      }
      this.withChangeDetection(() => {
        spec.hover(this.monitor);
      });
    }

    drop() {
      if (!spec.drop) {
        return undefined;
      }

      return this.withChangeDetection(() => {
        const dropResult = spec.drop(this.monitor);
        return dropResult;
      });
    }
  }

  return function createTarget(monitor: any): any {
    return new Target(monitor);
  };
}

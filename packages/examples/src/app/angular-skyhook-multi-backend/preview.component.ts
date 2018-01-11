import { Component, Directive, TemplateRef, ContentChild, ContentChildren, QueryList, Input, ViewContainerRef, Host, Inject, ChangeDetectionStrategy } from "@angular/core";
import { SkyhookDndService } from 'angular-skyhook';
import { combineLatest, tap, startWith, filter, map, delay } from 'rxjs/operators';
import { Observable } from "rxjs/Observable";
import { DragDropManager } from 'dnd-core';

export class PreviewTemplateContext {
    public $implicit: string | symbol;
    public type: string | symbol;
    public item: {} & any = {};
}

type Tmpl = TemplateRef<PreviewTemplateContext>;

/**
 * If you pass an `<ng-template let-type let-item="item">` to `<skyhook-preview>` as a child,
 * then that template will be rendered so as to follow the mouse around while dragging.
 * What you put in that template is up to you, but in most cases this will be
 * 
 * ```
 * <skyhook-preview>
 *   <ng-template let-type let-item="item">
 *     <ng-content [ngSwitch]="type">
 *       <!-- one kind of preview per type, using *ngSwitchCase="'TYPE'" -->
 *     </ng-content>
 *   </ng-template>
 * </skyhook-preview>
 * ```
 */
@Component({
    selector: 'skyhook-preview',
    template: `
    <ng-container *ngIf="collect$|async as c">
        <skyhook-preview-renderer *ngIf="c.previewEnabled">
        <ng-container *ngIf="c.isDragging" >
            <ng-container *ngTemplateOutlet="content; context: { $implicit: c.itemType, type: c.itemType, item: c.item }"></ng-container>
            </ng-container>
        </skyhook-preview-renderer>
    </ng-container>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SkyhookPreviewComponent {

    @ContentChild(TemplateRef) content: Tmpl;

    layer = this.skyhook.dragLayer();

    // we don't need all the fast-moving props here, so this optimises change detection
    // on the projected template's inputs (i.e. the context).
    // the fast-moving stuff is contained in the preview renderer.
    // also, we include this.isPreviewEnabled() because in this component with OnPush,
    // a plain getter isn't checked more than once, and this forces it to be called on each event.
    collect$ = this.layer.listen(monitor => ({
        item: monitor.getItem(),
        itemType: monitor.getItemType(),
        isDragging: monitor.isDragging(),
        previewEnabled: this.isPreviewEnabled(),
    }));

    warned = false;

    constructor(
        private skyhook: SkyhookDndService,
        private manager: DragDropManager
    ) { }

    ngOnDestroy() {
        this.layer.unsubscribe();
    }

    warn(msg: string) {
        if(!this.warned) {
            console.warn(msg);
        }
        this.warned = true;
    }

    isPreviewEnabled() {
        if (this.manager == null) {
            this.warn("no drag and drop manager defined, are you sure you imported SkyhookDndModule?");
            return false;
        }
        const backend = this.manager.getBackend();
        if (backend == null) {
            this.warn("no drag and drop backend defined, are you sure you imported SkyhookDndModule.forRoot(backend)?");
            return false;
        }
        // for when you are not using dnd-multi-backend
        if (backend.previewEnabled == null) {
            return true;
        }
        return backend.previewEnabled();
    }

}
import { animate, style, transition, trigger } from '@angular/animations';

export const openClose = trigger('openClose', [
    transition(':enter', [
      style({ height: 0 }),
      animate('150ms', style({ height: '*' })),
    ]),
    transition(':leave', [
      animate('150ms', style({ height: 0 }))
    ])
]);
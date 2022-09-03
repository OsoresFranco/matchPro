import { Component, Input } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';
import { TooltipPosition } from '@ng-matero/extensions/tooltip';

@Component({
  selector: 'app-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.scss'],
})
export class TooltipComponent {
  @Input() stadium: string = '';
}

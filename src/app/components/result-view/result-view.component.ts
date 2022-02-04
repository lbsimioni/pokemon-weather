import { Component, Input } from '@angular/core';

import { Result } from 'src/app/models/result.model';

@Component({
  selector: 'app-result-view',
  templateUrl: './result-view.component.html',
  styleUrls: ['./result-view.component.css'],
})
export class ResultViewComponent {
  @Input() result: Result = {};
}

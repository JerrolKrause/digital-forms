import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { UiStateService } from '$ui';

@Component({
  selector: 'app-crew',
  templateUrl: './crew.component.html',
  styleUrls: ['./crew.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CrewComponent implements OnInit {

  public toBeSigned = [
    {
      guid: '1',
      Date: '6/24/2019',
      Address: '8187 Plumb Branch Drive Garden City, NY 11530',
      Foreman: 'Leslie A. Hazel',
      Signed: false,
      Forms: ['hazards'],
      View: 'Job Briefing',
    },
    {
      guid: '2',
      Date: '6/23/2019',
      Address: '23 Anywhere Street, Irvine CA 92604',
      Foreman: 'Leslie A. Hazel',
      Signed: false,
      Forms: ['hazards'],
      View: 'Job Briefing',
    },
    {
      guid: '3',
      Date: '6/23/2019',
      Address: '54 Uptown Rd, Irvine CA 92604',
      Foreman: 'Leslie A. Hazel',
      Signed: false,
      Forms: ['hazards'],
      View: 'Job Briefing',
    },
  ];

  constructor(public uiState: UiStateService) { }

  ngOnInit() {
  }

}

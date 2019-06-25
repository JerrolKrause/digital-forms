import { Component, OnInit, ChangeDetectionStrategy, OnDestroy, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { ModalsService } from '$modals';
import { Router } from '@angular/router';
import { CREW_SELECTED } from 'src/app/routes/forms/shared/services/questionaire';

export interface JobBriefSummary {
  guid?: string;
  Address: string;
  Date: string;
  Foreman: string;
  Signed: boolean;
  Forms: string[];
  View: string;
}

const ELEMENT_DATA: JobBriefSummary[] = [
  {
    guid: '1',
    Date: '1/14/2019',
    Address: '7511 Columbia St. El Paso, TX 79930',
    Foreman: 'Willie Gale',
    Signed: true,
    Forms: ['hazards'],
    View: 'Job Briefing',
  },
  {
    guid: '2',
    Date: '2/14/2019',
    Address: '9395 Circle St. Tacoma, WA 98444',
    Foreman: 'Christopher P. Harris',
    Signed: true,
    Forms: ['hazards'],
    View: 'Job Briefing',
  },
  {
    guid: '3',
    Date: '3/15/2019',
    Address: '7348 North East Ave. Knoxville, TN 37918',
    Foreman: 'Derek M. Westcott',
    Signed: true,
    Forms: ['hazards'],
    View: 'Job Briefing',
  },
  {
    guid: '4',
    Date: '3/22/2019',
    Address: '7303 Winchester Drive Northbrook, IL 60062',
    Foreman: 'Donald C. Archie',
    Signed: true,
    Forms: ['hazards'],
    View: 'Job Briefing',
  },
  {
    guid: '5',
    Date: '4/1/2019',
    Address: '9676 Fairway Road Oak Forest, IL 60452',
    Foreman: 'Douglas B. House',
    Signed: false,
    Forms: ['hazards'],
    View: 'Job Briefing',
  },
  {
    guid: '6',
    Date: '4/2/2019',
    Address: '7579 Glendale Drive Billerica, MA 01821',
    Foreman: 'Devin L. Leslie',
    Signed: true,
    Forms: ['hazards'],
    View: 'Job Briefing',
  },
  {
    guid: '7',
    Date: '4/12/2019',
    Address: '821 Devonshire Dr. Loxahatchee, FL 33470',
    Foreman: 'Sean K. Wilson',
    Signed: true,
    Forms: ['hazards'],
    View: 'Job Briefing',
  },
  {
    guid: '8',
    Date: '4/24/2019',
    Address: '421 Bridle St. Royersford, PA 19468',
    Foreman: 'Jordon G. Ibarra',
    Signed: true,
    Forms: ['hazards'],
    View: 'Job Briefing',
  },
  {
    guid: '9',
    Date: '6/21/2019',
    Address: '515 E. Sage St. La Porte, IN 46350',
    Foreman: 'Brian D. Wroblewski',
    Signed: true,
    Forms: ['hazards'],
    View: 'Job Briefing',
  },
  {
    guid: '10',
    Date: '6/24/2019',
    Address: '8187 Plumb Branch Drive Garden City, NY 11530',
    Foreman: 'Leslie A. Hazel',
    Signed: false,
    Forms: ['hazards'],
    View: 'Job Briefing',
  },
];

@Component({
  selector: 'app-summary-table',
  templateUrl: './summary-table.component.html',
  styleUrls: ['./summary-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('crewExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class SummaryTableComponent implements OnInit, OnDestroy {
  public displayedColumns: string[] = ['Date', 'Address', 'Form', 'View', 'Modify'];
  public dataSource = new MatTableDataSource(ELEMENT_DATA);
  public expandedElement: JobBriefSummary | null;
  public crewSelected: any = CREW_SELECTED;
  constructor(private modals: ModalsService, private router: Router) {}

  @ViewChild(MatSort, { static: true }) sort: MatSort;

  ngOnInit() {
    // Open log out modal window
    // this.modals.open('AddFormModalComponent', false, 'lg', 60).afterClosed();
    this.dataSource.sort = this.sort;
  }

  public applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  /**
   * Modify an existing form after opening the crew modal
   * @param $event 
   * @param guid 
   */
  public modifyForm($event: Event, guid: string) {
    console.warn(guid);
    $event.stopPropagation();
    this.modals
      .open('AddCrewModalComponent', false, 'lg', 'Modify Form')
      .afterClosed()
      .subscribe(() => this.router.navigate(['/forms/job-briefing', guid]));
  }

  public addForm($event: Event) {
    $event.stopPropagation();
    this.modals
      .open('AddFormModalComponent', false, 'lg', false)
      .afterClosed()
      .subscribe(value => {
        console.log(`Dialog sent: ${value}`);
        if (value !== undefined) {
          this.modals
            .open('AddCrewModalComponent', false, 'lg', 60)
            .afterClosed()
            .subscribe(value => {
              console.log(`Dialog sent: ${value}`);
              if (value !== undefined) {
                this.router.navigate(['/forms/job-briefing']).then(
                  nav => {
                    console.log(nav); // true if navigation is successful
                  },
                  err => {
                    console.log(err); // when there's an error
                  },
                );
              }
            });
        }
      });
  }

  public signatureForm($event: Event) {
    $event.stopPropagation();
    this.modals.open('SignatureModalComponent', false, 'lg', 60).afterClosed();
  }

  public crewForm($event: Event) {
    $event.stopPropagation();
    this.modals.open('AddCrewModalComponent', false, 'lg', 60).afterClosed();
  }

  public summaryForm($event: Event) {
    $event.stopPropagation();
    this.modals.open('SummaryViewerModalComponent', false, 'xl', 60).afterClosed();
  }

  /** Must be present even if not used for autounsub */
  ngOnDestroy() {}
}

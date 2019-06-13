import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { DomainService } from '$domain';
import { FormBuilder, FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { REMOVAL_METHOD } from './questionaire';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css'],
})
export class UserFormComponent implements OnInit, OnChanges {
  @Input() user: Models.User;
  public isEditing = false;
  public formMain: FormGroup;
  public checkboxData: any = {};
  public removalMethod: any;

  constructor(private domain: DomainService, private fb: FormBuilder) {}

  ngOnInit() {
    this.checkboxData['name'] = 'test';
    this.checkboxData['checked'] = true;
    this.checkboxData['disabled'] = true;
    this.removalMethod = REMOVAL_METHOD;

    this.formMain = this.fb.group({
      address: ['', []],
      company: ['', []],
      email: ['', []],
      id: ['', []],
      name: ['', [Validators.required]],
      phone: ['', []],
      username: ['', [Validators.required]],
      website: ['', []],
      orders: new FormArray([]),
    });

    this.addCheckboxes();
  }

  ngOnChanges(model: SimpleChanges) {
    if (this.formMain && model.user) {
      this.formMain.patchValue(this.user);
      this.isEditing = true;
    }
  }

  /**
   * Create/update user
   */
  public userSubmit() {
    // If editing, use put
    if (this.isEditing) {
      this.domain.users.put(this.formMain.value).subscribe(() => {
        this.formMain.reset(); // Reset form after completion
        this.isEditing = false;
      });
    } else {
      // If creating, use post
      this.domain.users.post(this.formMain.value).subscribe(() => this.formMain.reset());
    }
  }

  /**
   * Stop editing to create a new user
   */
  public userStopEdit() {
    this.formMain.reset();
    this.isEditing = false;
  }

  /**
   * Load user into editing pane
   * @param user
   */
  public userEdit(user: Models.User) {
    this.formMain.patchValue(user);
    this.isEditing = true;
  }

  private addCheckboxes() {
    this.removalMethod.map((o: any, i: number) => {
      console.log(o);

      const control = new FormControl(i === 0); // if first item set to true, else false
      (this.formMain.controls.orders as FormArray).push(control);
    });
  }
}

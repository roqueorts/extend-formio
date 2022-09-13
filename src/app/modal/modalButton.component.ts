import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ModalComponent } from './modal/modal.component';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalButtonComponent {
  name: string = "";
  constructor(public dialog: MatDialog) { }

  @Input() buttonLabel: string = '';

  onClick() {
    this.dialog.open(ModalComponent, {
      height: '400px',
      width: '600px',
    });

  }


}

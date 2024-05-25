import { Component, Input, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-flowerpot',
  standalone: true,
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './flowerpot.component.html',
  styleUrl: './flowerpot.component.css'
})
export class FlowerpotComponent implements OnInit {
  @Input() imageSrc!: string;
  @Input() title!: string;
  @Input() description!: string;

  constructor(public dialog: MatDialog) { }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '200px',
      height: '100px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  ngOnInit(): void {
  }
}

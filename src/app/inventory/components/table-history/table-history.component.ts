import { Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {MatSort} from "@angular/material/sort";
import {NgForm} from "@angular/forms";
import {MatPaginator} from "@angular/material/paginator";
import {Router} from "@angular/router";
import { MatIcon } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-table-history',
  standalone: true,
  imports: [MatSort, MatPaginator,MatIcon,FormsModule,CommonModule,MatTableModule],
  templateUrl: './table-history.component.html',
  styleUrl: './table-history.component.css',
})
export class TableHistoryComponent implements OnInit {
  @ViewChild('studentForm', {static: false})
  studentForm!: NgForm;

  tableData!: any;
  dataSource = new MatTableDataSource<any>();
  displayedColumns: string[] = ['id', 'title', 'date','actions']

  @ViewChild(MatPaginator, {static: true})
  paginator!: MatPaginator;
  isEditMode = false;

  @ViewChild(MatSort,{static: true})
  sort!: MatSort;

  constructor(private router: Router) {
   
  }


  
  expandedElementId: number | null = null;

  toggleDetail(id: number) {
    if (this.expandedElementId === id) {
      this.expandedElementId = null;  // Si ya está expandido, colapsar.
    } else {
      this.expandedElementId = id;  // Expandir el nuevo.
    }
  }

  closeDetail() {
    this.expandedElementId = null;
  }
  
  
  
  
  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

    //this.getAllOffers ();
 // Generamos datos de muestra
 this.generateSampleData();
  }

  generateSampleData() {
    const sampleData = Array.from({ length: 30 }, (_, index) => ({
      id: index + 1,
      title: `Title ${index + 1}`,
      date: new Date(2020, 0, index + 1).toLocaleDateString('en-US'),
      description: `Description for item ${index + 1}`  // Añadir descripción para cada elemento

    }));
  
    this.dataSource.data = sampleData;
  }
  getAllOffers() {
    /*this.httpDataService.getList().subscribe((response: any) => {
      this.dataSource.data = response;
      this.dataSource.sort = this.sort;

    });*/
  }

  

  cancelEdit() {
    this.isEditMode = false;
    this.studentForm.resetForm();
  }

  deleteItem(id: string) {
    /*this.httpDataService.deleteItem(id).subscribe((reponse: any) => {
      this.dataSource.data = this.dataSource.data.filter((o: any) => {
        return o.id !== id ? o : false;
      });
      alert('Offer eliminado con éxito');
    });
    console.log(this.dataSource.data);*/
   
  }


  addOffer() {
    this.tableData.id = 0;
    /*this.httpDataService.createItem(this.tableData).subscribe((response: any) => {
      this.dataSource.data.push({...response});
      this.dataSource.data = this.dataSource.data.map((o: any) => { return o; });
    });*/

  }

  updateOffer() {
   /* this.httpDataService.updateItem(this.tableData.id, this.tableData).subscribe((response: any) => {
      this.dataSource.data = this.dataSource.data.map((o: any) => {
        if (o.id == response.id) {
          o = response;
        }
        return o;
      });
    });*/

  }
  onSubmit() {
    if (this.studentForm.form.valid) {
      console.log('valid');
      if (this.isEditMode) {
        console.log('about to update');
        this.updateOffer();
      } else {
        console.log('about to create');
        this.addOffer();

      }
      this.cancelEdit();
    } else {
      console.log('Invalid data');
    }

  }

}

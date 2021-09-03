import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { PersonHogwarts } from '../../models/personHogwarts.model';
import { MatPaginator } from '@angular/material/paginator';


@Component({
  selector: 'app-person-hogwarts-table',
  templateUrl: './person-hogwarts-table.component.html',
  styleUrls: ['./person-hogwarts-table.component.scss']
})
export class PersonHogwartsTableComponent implements OnInit {
  @Input("dataElement") _dataElement : PersonHogwarts[] = [];
  @ViewChild(MatSort) sort: MatSort = new MatSort();
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  displayedColumns = [ 'image', 'name', 'patronus', 'yearOfBirth' ];
  dataSource: MatTableDataSource<PersonHogwarts> = new MatTableDataSource();

  constructor() { }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this._dataElement);
  }

  ngOnChanges(_dataElement: PersonHogwarts[]) {
    this.dataSource = new MatTableDataSource(this._dataElement);
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  getAge(yearOfBirth: number) {
    if (!yearOfBirth) {
      return "N/A";
    }
    return Math.abs(new Date().getFullYear() - yearOfBirth);
  }
  
}

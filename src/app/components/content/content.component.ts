import { Component, OnInit } from '@angular/core';
import { PersonHogwarts } from 'src/app/models/personHogwarts.model';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  dataTable: PersonHogwarts[] = [];
  
  constructor( private _globalService: GlobalService ) { }

  ngOnInit(): void {
    this.getStudensData();
  }

  getStudensData() {
    this._globalService.getStudent().subscribe(
      result => {
        this.dataTable = result;
      },
      error => {
        console.log(<any>error);
      }
    );
  }

  getTeacherData() {
    this._globalService.getTeacher().subscribe(
      result => {
        this.dataTable = result;
      },
      error => {
        console.log(<any>error);
      }
    );
  }

  getStudentByHouseData(house: string) {
    this._globalService.getStudentByHouse(house).subscribe(
      result => {
        this.dataTable = result;
      },
      error => {
        console.log(<any>error);
      }
    );
  }

}

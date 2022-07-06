
import { Component, ViewChild} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

export interface UserData{
  id : number,
  title : string,
  userid : number,
  body : string
}

const ELEMENT_DATA: UserData[] = [
  {id: 1, title: 'Hydrogen', userid: 1.0079, body: 'H'},
  {id: 2, title: 'Helium', userid: 4.0026, body: 'He'},
  {id: 3, title: 'Lithium', userid: 6.941, body: 'Li'},
  {id: 4, title: 'Beryllium', userid: 9.0122, body: 'Be'},
  {id: 5, title: 'Boron', userid: 10.811, body: 'B'},
  {id: 6, title: 'Carbon', userid: 12.0107, body: 'C'},
  {id: 7, title: 'Nitrogen', userid: 14.0067, body: 'N'},
  {id: 8, title: 'Oxygen', userid: 15.9994, body: 'O'},
  {id: 9, title: 'Fluorine', userid: 18.9984, body: 'F'},
  {id: 10, title: 'Neon', userid: 20.1797, body: 'Ne'},
];


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DarkMode';
  isDarkTheme = false;
  
  displayedColumns: string[] = ['id', 'title', 'userid', 'body'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  @ViewChild(MatPaginator) paginator : MatPaginator

  
  ngOnInit(){
    this.dataSource.paginator = this.paginator;
  }

  applyFilter (filterValue : string){
    this.dataSource.filter = filterValue.trim().toLowerCase();

  }
  
  toggleTheme() {
    this.isDarkTheme = !this.isDarkTheme;
    if (this.title == "DarkMode"){
        this.title="LightMode"
    }
    else{
      this.title="DarkMode"
    }

  }


}
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator, MatPaginatorIntl } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { FalleroResponse } from 'src/app/interfaces/fallero.interface';
import { FallerosService } from 'src/app/services/falleros.service';
import { AgregarEditarFalleroComponent } from '../../agregar-editar-fallero/agregar-editar-fallero.component';


@Component({
  selector: 'app-user-admin',
  templateUrl: './user-admin.component.html',
  styleUrls: ['./user-admin.component.css']
})
export class UserAdminComponent implements OnInit, AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  dataSource: MatTableDataSource<FalleroResponse>;

  displayedColumns: string[] = ['nombre', 'apellidos', 'dni', 'telefono', 'fechaNac', 'fechaReg', 'comision', 'acciones'];

  falleros: FalleroResponse[] = [];

  constructor(private _falleroService: FallerosService, public dialog: MatDialog) {
    this.dataSource = new MatTableDataSource();
    this.dataSource.sort = this.sort;
  }

  ngOnInit(): void {
    this.getAllFalleros();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  getAllFalleros() {
    this._falleroService.getFalleros().subscribe(
      response => {
        this.dataSource.data = response;
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }
    );
    
  }

  apuntarEditar() {
    const dialogRef = this.dialog.open(AgregarEditarFalleroComponent, {
      width: '50%',
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('Dialogo cerrado');
      // this.animal = result;
    });

  }



}

import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorIntl } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { FalleroResponse } from 'src/app/interfaces/fallero.interface';
import { FallerosService } from 'src/app/services/falleros.service';

const listaFalleros: FalleroResponse[] = [
  { nombre: 'Pedro', apellidos: 'Garcia', dni: 'asd', fechaNac: '2023-05-12', fechaRegistro: '2023-05-12', id_Rol_Fallero: 1, id_Rol_Gestion: 1, idFallero: 1, telefono: '123456789' },
  { nombre: 'Pedro', apellidos: 'Garcia', dni: 'asd', fechaNac: '2023-05-12', fechaRegistro: '2023-05-12', id_Rol_Fallero: 1, id_Rol_Gestion: 1, idFallero: 1, telefono: '123456789' },
  { nombre: 'Pedro', apellidos: 'Garcia', dni: 'asd', fechaNac: '2023-05-12', fechaRegistro: '2023-05-12', id_Rol_Fallero: 1, id_Rol_Gestion: 1, idFallero: 1, telefono: '123456789' },
  { nombre: 'Antonio', apellidos: 'Garcia', dni: 'asd', fechaNac: '2023-05-12', fechaRegistro: '2023-05-12', id_Rol_Fallero: 1, id_Rol_Gestion: 1, idFallero: 1, telefono: '123456789' },
  { nombre: 'Pedro', apellidos: 'A Garcia', dni: 'asd', fechaNac: '2023-05-12', fechaRegistro: '2023-05-12', id_Rol_Fallero: 1, id_Rol_Gestion: 1, idFallero: 1, telefono: '123456789' },
  { nombre: 'Pedro6', apellidos: 'Garcia', dni: 'asd', fechaNac: '2023-05-12', fechaRegistro: '2023-05-12', id_Rol_Fallero: 1, id_Rol_Gestion: 1, idFallero: 1, telefono: '123456789' },
  { nombre: 'Pedro7', apellidos: 'Garcia', dni: 'asd', fechaNac: '2023-05-12', fechaRegistro: '2023-05-12', id_Rol_Fallero: 1, id_Rol_Gestion: 1, idFallero: 1, telefono: '123456789' },
  { nombre: 'Pedro8', apellidos: 'Garcia', dni: 'asd', fechaNac: '2023-05-12', fechaRegistro: '2023-05-12', id_Rol_Fallero: 1, id_Rol_Gestion: 1, idFallero: 1, telefono: '123456789' },]


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

  constructor(private _falleroService: FallerosService) {
    this.dataSource = new MatTableDataSource(listaFalleros);
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
        this.falleros = response;
      });
  }
  
  

}

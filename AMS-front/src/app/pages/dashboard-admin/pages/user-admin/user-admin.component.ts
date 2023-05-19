import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator, MatPaginatorIntl } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { FalleroResponse } from 'src/app/interfaces/fallero.interface';
import { FallerosService } from 'src/app/services/falleros.service';
import { AgregarEditarFalleroComponent } from '../../components/agregar-editar-fallero/agregar-editar-fallero.component';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { Router } from '@angular/router';


@Component({
  selector: 'app-user-admin',
  templateUrl: './user-admin.component.html',
  styleUrls: ['./user-admin.component.css']
})
export class UserAdminComponent implements OnInit, AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  dataSource: MatTableDataSource<FalleroResponse>;

  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';

  displayedColumns: string[] = ['nombre', 'apellidos', 'dni', 'telefono', 'fechaNac', 'fechaReg', 'comision', 'acciones'];

  falleros: FalleroResponse[] = [];

  loading: boolean = true;

  constructor(private _falleroService: FallerosService, public dialog: MatDialog, private _snackBar: MatSnackBar, private route: Router) {
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
    this.loading = true;

    setTimeout(() => {
      this._falleroService.getFalleros().subscribe(
        response => {
          this.loading = false;
          this.dataSource.data = response;
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        }
      );
    }, 500);

  }

  apuntarEditar(id?: number) {
    const dialogRef = this.dialog.open(AgregarEditarFalleroComponent, {
      width: '50%',
      disableClose: true,
      data: { id: id}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.getAllFalleros();
      }
    });

  }

  deleteFallero(id: number) {
    this.loading = true;
    this._falleroService.deleteFalleros(id).subscribe(() => {
      this.getAllFalleros();
      this.deleteExit();
    })
  }

  deleteExit() {
    this._snackBar.open('El fallero/a ha sido eliminado con éxito ', '', {
      duration: 5000,
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition
    });
  }

  goBack(){
    this.route.navigate(['/admin'])
  }


}

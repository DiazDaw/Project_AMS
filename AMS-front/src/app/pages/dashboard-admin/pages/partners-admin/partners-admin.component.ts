import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { PartnersService } from 'src/app/services/partners.service';
import { Partners } from 'src/app/interfaces/partners.interface';
import { AgregarEditarPartnerComponent } from '../../components/agregar-editar-partner/agregar-editar-partner.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-partners-admin',
  templateUrl: './partners-admin.component.html',
  styleUrls: ['./partners-admin.component.css']
})
export class PartnersAdminComponent implements OnInit, AfterViewInit {

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  dataSource: MatTableDataSource<Partners>;

  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';

  displayedColumns: string[] = ['nombre', 'producto', 'cif','email','direccion','telefono', 'acciones'];

  proveedores: Partners[] = [];

  loading: boolean = true;

  constructor(private _partnersService: PartnersService, 
    public dialog: MatDialog, 
    private _snackBar: MatSnackBar,
    private route: Router) {
    this.dataSource = new MatTableDataSource();
    this.dataSource.sort = this.sort;
  }

  ngOnInit(): void {
    this.getAllPlaces();
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

  getAllPlaces() {
    this.loading = true;

    setTimeout(() => {
      this._partnersService.getPartner().subscribe(
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
    const dialogRef = this.dialog.open(AgregarEditarPartnerComponent, {
      width: '100%',
      disableClose: true,
      data: { id: id}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.getAllPlaces();
      }
    });

  }

  deletePlace(id: number) {
    this.loading = true;
    this._partnersService.deletePartner(id).subscribe(() => {
      this.getAllPlaces();
      this.deleteExit();
    })
  }

  deleteExit() {
    this._snackBar.open('El proveedor ha sido eliminado con éxito ', '', {
      duration: 5000,
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition
    });
  }

  goBack(){
    this.route.navigate(['/admin'])
  }
}

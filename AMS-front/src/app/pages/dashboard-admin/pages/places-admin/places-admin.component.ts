import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Places } from 'src/app/interfaces/places.interface';
import { PlacesService } from 'src/app/services/places.service';
import { AgregarEditarLugarComponent } from '../../components/agregar-editar-lugar/agregar-editar-lugar.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-places-admin',
  templateUrl: './places-admin.component.html',
  styleUrls: ['./places-admin.component.css']
})
export class PlacesAdminComponent implements OnInit, AfterViewInit {

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  dataSource: MatTableDataSource<Places>;

  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';

  displayedColumns: string[] = ['nombre', 'direccion', 'aforo', 'acciones'];

  lugares: Places[] = [];

  loading: boolean = true;

  constructor(private _placesService: PlacesService, 
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
      this._placesService.getPlace().subscribe(
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
    const dialogRef = this.dialog.open(AgregarEditarLugarComponent, {
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
    this._placesService.deletePlace(id).subscribe(() => {
      this.getAllPlaces();
      this.deleteExit();
    })
  }

  deleteExit() {
    this._snackBar.open('El lugar ha sido eliminado con éxito ', '', {
      duration: 5000,
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition
    });
  }

  goBack(){
    this.route.navigate(['/admin'])
  }
}

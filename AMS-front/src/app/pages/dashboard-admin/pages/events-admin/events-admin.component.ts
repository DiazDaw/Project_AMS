import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Activities } from 'src/app/interfaces/activities.interface';
import { ActivitiesModel } from 'src/app/models/activities.model';
import { AgregarEditarFalleroComponent } from '../../components/agregar-editar-fallero/agregar-editar-fallero.component';
import { ActivitiesService } from 'src/app/services/activities.service';
import { AgregarEditarActividadComponent } from '../../components/agregar-editar-actividad/agregar-editar-actividad.component';
import { Router } from '@angular/router';
import { Coordinators } from 'src/app/interfaces/coordinators.interface';

@Component({
  selector: 'app-events-admin',
  templateUrl: './events-admin.component.html',
  styleUrls: ['./events-admin.component.css']
})
export class EventsAdminComponent implements OnInit, AfterViewInit {

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  dataSource: MatTableDataSource<ActivitiesModel>;

  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';

  

  displayedColumns: string[] = ['nombre', 'fechaInicio', 'fechaFin', 'lugar', 'coordinador', 'acciones'];

  actividades: ActivitiesModel[] = [];

  coordinadores: Coordinators[] = [];

  loading: boolean = true;

  constructor(private _activitiesService: ActivitiesService, 
    public dialog: MatDialog, 
    private _snackBar: MatSnackBar,
    private route: Router) {
    this.dataSource = new MatTableDataSource();
    this.dataSource.sort = this.sort;
  }

  ngOnInit(): void {
    this.getAllEvents();
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

  getAllEvents() {
    this.loading = true;

    setTimeout(() => {
      this._activitiesService.getEvents().subscribe(
        response => {
          this.loading = false;
          this.dataSource.data = response.map(activity => new ActivitiesModel(activity));
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        }
      );
    }, 500);

  }

  
  apuntarEditar(id?: number) {
    const dialogRef = this.dialog.open(AgregarEditarActividadComponent, {
      width: '50%',
      disableClose: true,
      data: { id: id}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.getAllEvents();
      }
    });

  }

  deleteActivity(id: number) {
    this.loading = true;
    this._activitiesService.deleteActivity(id).subscribe(() => {
      this.getAllEvents();
      this.deleteExit();
    })
  }

  deleteExit() {
    this._snackBar.open('La actividad ha sido eliminada con éxito ', '', {
      duration: 5000,
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition
    });
  }
  
  goBack(){
    this.route.navigate(['/admin'])
  }
}

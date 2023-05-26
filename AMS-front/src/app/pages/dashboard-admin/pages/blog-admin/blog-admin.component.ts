import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition, MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Places } from 'src/app/interfaces/places.interface';
import { PlacesService } from 'src/app/services/places.service';
import { AgregarEditarLugarComponent } from '../../components/agregar-editar-lugar/agregar-editar-lugar.component';
import { BlogService } from 'src/app/services/blog.service';
import { Post } from 'src/app/interfaces/post.interface';

@Component({
  selector: 'app-blog-admin',
  templateUrl: './blog-admin.component.html',
  styleUrls: ['./blog-admin.component.css']
})
export class BlogAdminComponent implements OnInit, AfterViewInit {

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  dataSource: MatTableDataSource<Post>;

  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';

  displayedColumns: string[] = ['titulo', 'autor', 'fecha', 'estado', 'denunciado', 'acciones'];

  lugares: Places[] = [];

  loading: boolean = true;

  revisado: boolean = false;

  constructor(private _blogService: BlogService,
    public dialog: MatDialog,
    private _snackBar: MatSnackBar,
    private route: Router) {
    this.dataSource = new MatTableDataSource();
    this.dataSource.sort = this.sort;
  }

  ngOnInit(): void {
    this.getAllPost();
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

  getAllPost() {
    this.loading = true;

    setTimeout(() => {
      this._blogService.getPost().subscribe(
        response => {
          this.loading = false;
          this.dataSource.data = response;
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        }
      );
    }, 500);

  }


  deletePost(id: number) {
    this.loading = true;
    this._blogService.deletePost(id).subscribe(() => {
      this.getAllPost();
      this.deleteExit();
    })
  }

  deleteExit() {
    this._snackBar.open('El post ha sido eliminado con éxito ', '', {
      duration: 5000,
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition
    });
  }

  goBack() {
    this.route.navigate(['/admin'])
  }

  cambiarEstado(element: Post) {
    // Verificar si el elemento tiene un idBlog válido
    if (element.idBlog !== undefined) {
      // Cambiar el estado del elemento a 4
      element.id_Estado = 4;
  
      // Llamar al método updatePost para actualizar el estado en el servidor
      this._blogService.updateEstadoEntrada(element.idBlog, element.id_Estado).subscribe(
        () => {
          // El estado se ha actualizado correctamente
          // Realizar cualquier otra acción necesaria
  
          // Por ejemplo, redirigir a otra página
          this.redirectToPost(element.idBlog);
        },
        (error) => {
          // Ocurrió un error al intentar actualizar el estado
          console.error('Error al actualizar el estado del post:', error);
          // Realizar cualquier manejo de errores necesario
        }
      );
    } else {
      console.error('El idBlog del elemento es undefined');
      // Realizar cualquier manejo de errores necesario si el idBlog es undefined
    }
  }
  


  redirectToPost(id?: number) {
    this.route.navigate(['/blog', id]);
    this.revisado = true;
  }
}

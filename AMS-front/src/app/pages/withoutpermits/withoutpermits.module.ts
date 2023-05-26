import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WithoutpermitsComponent } from './withoutpermits.component';
import { WithoutpermitsRoutingModule } from './withoutpermits-routing.module';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [WithoutpermitsComponent],
  imports: [
    CommonModule,
    WithoutpermitsRoutingModule,
    MatButtonModule
  ]
})
export class WithoutpermitsComponentModule { }

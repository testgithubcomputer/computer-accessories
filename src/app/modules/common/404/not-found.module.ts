import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './not-found.component';
import { NotFoundRoutingModule } from './not-found-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NotFoundService } from './not-found.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NotFoundRoutingModule,

  ],
  exports: [
    NotFoundComponent],
  declarations: [
    NotFoundComponent
  ],
  providers: [NotFoundService],
})
export class NotFoundModule { }



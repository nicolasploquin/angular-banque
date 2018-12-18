import { NgModule } from '@angular/core';
import * as md from '@angular/material';

@NgModule({
  imports: [
    md.MatBadgeModule,
    md.MatButtonModule,
    md.MatFormFieldModule,
    md.MatIconModule,
    md.MatInputModule,
    md.MatListModule,
    md.MatToolbarModule
  ],
  exports: [
    md.MatBadgeModule,
    md.MatButtonModule,
    md.MatFormFieldModule,
    md.MatIconModule,
    md.MatInputModule,
    md.MatListModule,
    md.MatToolbarModule
  ],
  declarations: []
})
export class AppMaterialModule { }

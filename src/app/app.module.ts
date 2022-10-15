import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DxCheckBoxModule, DxSelectBoxModule, DxDateBoxModule, DxPopupModule, DxNumberBoxModule } from 'devextreme-angular';
import { DxGanttModule } from 'devextreme-angular/ui/gantt';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjelerGanttComponent } from './Proje-Takip-Rapor/projeler-gantt/projeler-gantt.component';
import { ProjeGanttDetailsComponent } from './Proje-Takip-Rapor/projeler-gantt/proje-gantt-details/proje-gantt-details/proje-gantt-details.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjelerGanttComponent,
    ProjeGanttDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DxGanttModule,
    DxCheckBoxModule,
    DxSelectBoxModule,
    DxDateBoxModule,
    DxPopupModule,
    DxNumberBoxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

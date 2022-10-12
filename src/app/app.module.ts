import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DxGanttModule } from 'devextreme-angular/ui/gantt';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjelerGanttComponent } from './Proje-Takip-Rapor/projeler-gantt/projeler-gantt.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjelerGanttComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DxGanttModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

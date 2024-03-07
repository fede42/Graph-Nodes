import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GraphNodesModule } from './graph-nodes/graph-nodes.module';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    GraphNodesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

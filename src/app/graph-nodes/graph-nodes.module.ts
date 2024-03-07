import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GraphNodesComponent } from './graph-nodes.component';
import { NodesRendererComponent } from './nodes-renderer/nodes-renderer.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    GraphNodesComponent,
    NodesRendererComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    GraphNodesComponent
  ]
})
export class GraphNodesModule { }

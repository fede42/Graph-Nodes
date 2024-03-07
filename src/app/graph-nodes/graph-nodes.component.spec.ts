import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphNodesComponent } from './graph-nodes.component';

describe('GraphNodesComponent', () => {
  let component: GraphNodesComponent;
  let fixture: ComponentFixture<GraphNodesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GraphNodesComponent]
    });
    fixture = TestBed.createComponent(GraphNodesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

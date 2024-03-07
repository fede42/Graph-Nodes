import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NodesRendererComponent } from './nodes-renderer.component';

describe('NodesRendererComponent', () => {
  let component: NodesRendererComponent;
  let fixture: ComponentFixture<NodesRendererComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NodesRendererComponent]
    });
    fixture = TestBed.createComponent(NodesRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

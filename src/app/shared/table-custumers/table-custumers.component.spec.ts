import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableCustumersComponent } from './table-custumers.component';

describe('TableCustumersComponent', () => {
  let component: TableCustumersComponent;
  let fixture: ComponentFixture<TableCustumersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableCustumersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableCustumersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

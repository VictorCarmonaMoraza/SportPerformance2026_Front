import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingMetricsPage } from './training-metrics-page';

describe('TrainingMetricsPage', () => {
  let component: TrainingMetricsPage;
  let fixture: ComponentFixture<TrainingMetricsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrainingMetricsPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrainingMetricsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

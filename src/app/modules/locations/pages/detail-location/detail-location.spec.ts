import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailLocation } from './detail-location';

describe('DetailLocation', () => {
  let component: DetailLocation;
  let fixture: ComponentFixture<DetailLocation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailLocation]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailLocation);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailEpisode } from './detail-episode';

describe('DetailEpisode', () => {
  let component: DetailEpisode;
  let fixture: ComponentFixture<DetailEpisode>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailEpisode]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailEpisode);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

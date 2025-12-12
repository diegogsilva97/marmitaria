import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PackagesDetails } from './packages-details';

describe('PackagesDetails', () => {
  let component: PackagesDetails;
  let fixture: ComponentFixture<PackagesDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PackagesDetails]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PackagesDetails);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

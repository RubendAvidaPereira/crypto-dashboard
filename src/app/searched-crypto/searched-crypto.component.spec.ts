import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchedCryptoComponent } from './searched-crypto.component';

describe('SearchedCryptoComponent', () => {
  let component: SearchedCryptoComponent;
  let fixture: ComponentFixture<SearchedCryptoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchedCryptoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchedCryptoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

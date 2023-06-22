import { TestBed } from '@angular/core/testing';
import { GigabytesToMegabytesPipe } from './gigabytes-to-megabytes.pipe';

describe('GigabytesToMegabytesPipe', () => {
  TestBed.configureTestingModule({
    declarations: [GigabytesToMegabytesPipe],
    providers: [GigabytesToMegabytesPipe]
  })
  it('create an instance', () => {
    const pipe = new GigabytesToMegabytesPipe();
    expect(pipe).toBeTruthy();
  });
});

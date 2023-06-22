import { ElementRef } from '@angular/core';
import { FirstcharacterinputtxtDirective } from './firstcharacterinputtxt.directive';

describe('FirstcharacterinputtxtDirective', () => {
  it('should create an instance', () => {
    const el = new ElementRef(1)
    const directive = new FirstcharacterinputtxtDirective(el);
    expect(directive).toBeTruthy();
  });
});

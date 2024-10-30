import {  ComponentFixture,fakeAsync, TestBed, tick, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { routes } from './app-routing.module'
import { Location } from '@angular/common';
import { PageonemonthListComponent } from './pageonemonth-list/pageonemonth-list.component';
import { AppComponent } from './app.component';
import { Router} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { GigabytesToMegabytesPipe } from './_pipe/gigabytes-to-megabytes.pipe';


fdescribe('Router: App', () => {
  let component: PageonemonthListComponent;
  let fixture: ComponentFixture<PageonemonthListComponent>;

  let appComponent: AppComponent;
  let appFixture: ComponentFixture<AppComponent>;

  let objRouter: Router;
  let location: Location;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
        declarations: [PageonemonthListComponent,AppComponent,GigabytesToMegabytesPipe],
        providers: [GigabytesToMegabytesPipe],
        imports: [HttpClientModule, AppRoutingModule,FormsModule,RouterTestingModule.withRoutes(routes)]  
    }).compileComponents()
  }));

  beforeEach(() =>{
    objRouter = TestBed.inject(Router);
    location = TestBed.inject(Location);
    fixture = TestBed.createComponent(PageonemonthListComponent);
    component = fixture.componentInstance
    fixture.detectChanges();
    appFixture = TestBed.createComponent(AppComponent);
    appComponent = appFixture.componentInstance;
    objRouter.initialNavigation();
  });

  it('create an instance', () => {
    const pipe = new GigabytesToMegabytesPipe();
    expect(pipe).toBeTruthy();
  });

  it('should display in GB', () => {
    const megabyte = 1024;
    const twgigabyte = megabyte * 2
    const pipe = new GigabytesToMegabytesPipe();

    const result = pipe.transform(2);

    expect(result).toBe(twgigabyte);

 });

  it('unit test case for default routes', fakeAsync(() => {

    objRouter.navigate(['pageoneMonthList']);
    tick();
    expect(location.path()).toBe('/pageoneMonthList');
    // appFixture.detectChanges();
    // appFixture.whenStable().then(() =>{
    //     expect(location.path()).toEqual('/pageoneMonthList');
    // })
  }));

  it('unit test case for pageoneDetails routes', fakeAsync(() => {
    objRouter.navigate(['pageoneDetails']);
    tick();
    expect(location.path()).toBe('/pageoneDetails');
  }));
})

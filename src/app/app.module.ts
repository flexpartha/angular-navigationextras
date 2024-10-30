import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageonemonthListComponent } from './pageonemonth-list/pageonemonth-list.component';
import { PageonedetailComponent } from './pageonedetail/pageonedetail.component';
import { GigabytesToMegabytesPipe } from './_pipe/gigabytes-to-megabytes.pipe';
import { FirstcharacterinputtxtDirective } from './_directive/firstcharacterinputtxt.directive';
import { SearchPipePipe } from './_pipe/search-pipe.pipe';
import { ChildcomponentComponent } from './parentChild/childcomponent/childcomponent.component';
import {
  APP_BASE_HREF,
  HashLocationStrategy,
  LocationStrategy,
} from '@angular/common';
import { environment } from '../environments/environment';
import { AngmaterialtableComponent } from './angmaterialtable/angmaterialtable.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [
    AppComponent,
    PageonemonthListComponent,
    PageonedetailComponent,
    GigabytesToMegabytesPipe,
    FirstcharacterinputtxtDirective,
    SearchPipePipe,
    ChildcomponentComponent,
    AngmaterialtableComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatTableModule,
    BrowserAnimationsModule,
  ],
  providers: [
    {
      provide: APP_BASE_HREF,
      useValue: environment.BASE_URL,
    },
    { provide: LocationStrategy, useClass: HashLocationStrategy },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

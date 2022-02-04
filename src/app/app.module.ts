import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CityFormComponent } from './components/city-form/city-form.component';
import { LoadingComponent } from './components/loading/loading.component';
import { ResultViewComponent } from './components/result-view/result-view.component';

@NgModule({
  declarations: [AppComponent, CityFormComponent, LoadingComponent, ResultViewComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

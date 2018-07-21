import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material';
import { ProductListComponent } from './products/product-list.component'
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
	ProductListComponent
  ],
  imports: [
    BrowserModule,
	MatCardModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

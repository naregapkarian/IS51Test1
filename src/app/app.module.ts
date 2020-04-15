import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialDesignModule } from './material-design/material-design.module';
import { SharedComponentsModule } from './shared-components/shared-components.module';
import { SharedServicesModule } from './shared-services/shared-services.module';

import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRouting } from './app.routes';
import { OrdersComponent } from './orders/orders.component';

@NgModule({
  declarations: [
    AppComponent,
    OrdersComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    MaterialDesignModule,
    SharedComponentsModule,
    SharedServicesModule,
    AppRouting
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { CUSTOM_ELEMENTS_SCHEMA, NgModule, } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LiblistingRoutingModule } from './liblisting-routing.module';
import { LiblistingComponent } from './liblisting.component';
import { ListingAngular15Module } from 'listing-angular15';
// import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker'; 
// import { ImageCropperModule } from 'ngx-image-cropper';
import { MaterialModule } from './material.module';
// import { BrowserModule } from '@angular/platform-browser';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { ApiService } from './api.service';
import { HttpClient } from '@angular/common/http';
import { MatFormFieldModule } from '@angular/material/form-field';



@NgModule({
  declarations: [
    LiblistingComponent
  ],
  imports: [
    CommonModule, MatFormFieldModule,
    MaterialModule,
    MatInputModule,
    LiblistingRoutingModule,
    ListingAngular15Module,
    // NgxMaterialTimepickerModule,
    // ImageCropperModule,
    // NgxMaterialTimepickerModule,
    // NgxMaterialTimepickerModule,


  ],
  exports: [MatInputModule,
  ],
  providers: [ApiService, HttpClient],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],


})
export class LiblistingModule { }

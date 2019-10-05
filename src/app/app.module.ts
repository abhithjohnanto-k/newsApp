import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NewsapiService } from './newsapi.service';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatCardModule,
  MatMenuModule
} from '@angular/material';
import {
  MatToolbarModule,
  MatIconModule,
  MatSidenavModule,
  MatListModule
} from '@angular/material';


@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    MatButtonModule,
    MatCardModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule
  ],
  providers: [NewsapiService],
  bootstrap: [AppComponent]
})
export class AppModule {}

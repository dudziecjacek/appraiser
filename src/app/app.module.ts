import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeOneComponent } from './components/pages/home-one/home-one.component';
import { NavbarComponent } from './components/layouts/navbar/navbar.component';
import { FooterComponent } from './components/layouts/footer/footer.component';
import { PreloaderComponent } from './components/layouts/preloader/preloader.component';
import { AboutComponent } from './components/pages/about/about.component';
import { FaqComponent } from './components/pages/faq/faq.component';
import { ErrorComponent } from './components/pages/error/error.component';
import { AstrodividerComponent } from './components/pages/css-decorators/astrodivider/astrodivider.component';
import { DecoratedListComponent } from './components/pages/css-decorators/decorated-list/decorated-list.component';
import { PriceListComponent } from './components/pages/css-decorators/price-list/price-list.component';
import { DocumentTileComponent } from './components/pages/document-tile/document-tile.component';
import { ContactFormComponent } from './components/pages/contact-form/contact-form.component';
import { ContactService } from './components/pages/contact-form/contact.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeOneComponent,
    NavbarComponent,
    FooterComponent,
    PreloaderComponent,
    AboutComponent,
    FaqComponent,
    ErrorComponent,
    AstrodividerComponent,
    DecoratedListComponent,
    PriceListComponent,
    DocumentTileComponent,
    ContactFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ContactService],
  bootstrap: [AppComponent]
})
export class AppModule { }

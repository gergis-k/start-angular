import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Shared/Components/navbar/navbar.component';
import { MasterComponent } from './Shared/Components/master/master.component';
import { PortfolioItemComponent } from './Shared/Components/portfolio-item/portfolio-item.component';
import { PortfolioComponent } from './Shared/Components/portfolio/portfolio.component';
import { AboutComponent } from './Shared/Components/about/about.component';
import { ContactComponent } from './Shared/Components/contact/contact.component';
import { FooterComponent } from './Shared/Components/footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MasterComponent,
    PortfolioItemComponent,
    PortfolioComponent,
    AboutComponent,
    ContactComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeaderComponent } from './components/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { BrandComponent } from './components/brand/brand.component';
import { FeatureComponent } from './components/feature/feature.component';
import { Whatgpt3Component } from './components/whatgpt3/whatgpt3.component';
import { FeaturesComponent } from './components/features/features.component';
import { PossibilityComponent } from './components/possibility/possibility.component';
import { CTAComponent } from './components/cta/cta.component';
import { BlogComponent } from './components/blog/blog.component';
import { FooterComponent } from './components/footer/footer.component';
import { ArticleComponent } from './components/article/article.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    BrandComponent,
    FeatureComponent,
    Whatgpt3Component,
    FeaturesComponent,
    PossibilityComponent,
    CTAComponent,
    BlogComponent,
    FooterComponent,
    ArticleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

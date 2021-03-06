import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ToggleMenuComponent } from './components/toggle-menu/toggle-menu.component';
import { CategoriesListComponent } from './components/categories-list/categories-list.component';
import { CategoryItemComponent } from './components/category-item/category-item.component';
import { HomePage } from './pages/home/home.page';
import { HeroNewProductComponent } from './components/hero-new-product/hero-new-product.component';
import { HttpClientModule } from '@angular/common/http';
import { ShowcaseComponent } from './components/showcase/showcase.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ToggleMenuComponent,
    CategoriesListComponent,
    CategoryItemComponent,
    HomePage,
    HeroNewProductComponent,
    ShowcaseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

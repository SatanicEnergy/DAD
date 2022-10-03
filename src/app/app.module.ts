import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { ListComponent } from './views/list/list.component';
import { EntreeComponent } from './views/list/entree/entree.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ListComponent,
    EntreeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { ListComponent } from './views/list/list.component';
import { EntreeComponent } from './views/list/entree/entree.component';
import { LoadScriptsService } from './shared/services/load-scripts.service';

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
  providers: [LoadScriptsService],
  bootstrap: [AppComponent]
})
export class AppModule { }

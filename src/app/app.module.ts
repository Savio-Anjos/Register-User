import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Components
import { HeaderComponent } from './components/header/header.component';
import { RegisterComponent } from './components/register/register.component';
import { ListComponent } from './components/list/list.component';
import { ItemListComponent } from './components/item-list/item-list.component';

//Pages
import { LoginComponent } from './pages/login/login.component';

@NgModule({
  declarations: [
    AppComponent,

    HeaderComponent,
    LoginComponent,
    RegisterComponent,
    ListComponent,
    ItemListComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

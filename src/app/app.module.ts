import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ApolloModule, Apollo } from 'apollo-angular';
import { HttpLink, HttpLinkModule } from 'apollo-angular-link-http';
import { InMemoryCache } from '@apollo/client/core';
import { ApolloLink } from 'apollo-link';
import { onError } from 'apollo-link-error';

import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { ListComponent } from './components/list/list.component';
import { ItemListComponent } from './components/item-list/item-list.component';
import { UsersComponent } from './components/users/users.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    RegisterComponent,
    ListComponent,
    ItemListComponent,
    UsersComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, ApolloModule],
  providers: [
    HttpLink,
    {
      provide: ApolloLink,
      useFactory: (httpLink: HttpLink) => {
        const http = httpLink.create({ uri: environment.graphqlUrl });

        const errorLink = onError(({ graphQLErrors, networkError }) => {
          if (graphQLErrors)
            graphQLErrors.forEach(({ message, locations, path }) =>
              console.log(
                `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
              )
            );
          if (networkError) console.log(`[Network error]: ${networkError}`);
        });

        return ApolloLink.from([errorLink, http]);
      },
      deps: [HttpLink],
    },
    InMemoryCache,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

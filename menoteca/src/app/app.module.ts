import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ThinkingComponent } from './components/thinking/thinking.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ListThinkingComponent } from './components/list-thinking/list-thinking.component';
import { AddThinkingComponent } from './components/add-thinking/add-thinking.component';
import { ModalExcluirComponent } from './modals/modal-excluir/modal-excluir.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ThinkingComponent,
    ListThinkingComponent,
    AddThinkingComponent,
    ModalExcluirComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';

//Modules
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { FormularioComponent } from './formulario/formulario.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { BarraSuperiorComponent } from './home/barra-superior/barra-superior.component';
import { TodosEpComponent } from './home/todos-ep/todos-ep.component';
import { UltimosEpComponent } from './home/ultimos-ep/ultimos-ep.component';
import { DetalhesEpComponent } from './home/detalhes-ep/detalhes-ep.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    LoginComponent,
    CadastroComponent,
    FormularioComponent,
    HomeComponent,
    BarraSuperiorComponent,
    TodosEpComponent,
    UltimosEpComponent,
    DetalhesEpComponent
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    MatIconModule,
    MatInputModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

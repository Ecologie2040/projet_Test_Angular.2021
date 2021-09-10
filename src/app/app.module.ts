import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { PipeModule } from './shared/pipes/pipe.module';
import { MatSliderModule } from '@angular/material/slider';
import { CommonModule } from '@angular/common';
import {ButtonModule} from 'primeng/button';
import {DividerModule} from 'primeng/divider';



import { IsAuthGuard } from './shared/guard/is-auth.guard';
import { UnauthGuard } from './shared/guard/unauth.guard';
import { PageDashboardComponent } from './pages/page-dashboard/page-dashboard.component';
import { MenuComponent } from './composants/menu/menu.component';
import { HeaderComponent } from './composants/header/header.component';
import { PageArticleComponent } from './pages/articles/page-article/page-article.component';
import { DetailArticleComponent } from './composants/detail-article/detail-article.component';
import { PaginationComponent } from './composants/pagination/pagination.component';
import { BouttonActionComponent } from './composants/boutton-action/boutton-action.component';
import { NouvelArticleComponent } from './pages/articles/nouvel-article/nouvel-article.component';
import { NouvelUpdateArticleComponent } from './pages/articles/nouvel-update-article/nouvel-update-article.component';
import { PointVergulePipe } from './pages/pipes/point-vergule.pipe';
import { NombreArtPipe } from './pages/pipes/nombre-art.pipe';
import { InfoSupComponent } from './pages/articles/info-sup/info-sup.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [UnauthGuard]


  },
 
  {
    path: 'create-user',
    component: CreateUserComponent,
    canActivate: [UnauthGuard]

  },
  {
    path: 'home',
    component: PageDashboardComponent,
    canActivate: [IsAuthGuard],
  },
  {
    path: '',
    component: PageDashboardComponent,
    canActivate: [IsAuthGuard],
      children: [
        {path: 'articles', component: PageArticleComponent,
            canActivate: [IsAuthGuard],
        },
        {path: 'nouvelarticle', component: NouvelArticleComponent,
            canActivate: [IsAuthGuard],
        },
        {path: 'nouvelarticle/:idArticle', component: NouvelUpdateArticleComponent,
            canActivate: [IsAuthGuard],
        },
        {
          path: 'account', component: HomeComponent,
            canActivate: [IsAuthGuard]
        },
        {path: 'infoSupComponent', component: InfoSupComponent,
            canActivate: [IsAuthGuard],
        },

      ]

  },



];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    CreateUserComponent,
    PageDashboardComponent,
    MenuComponent,
    HeaderComponent,
    PageArticleComponent,
    DetailArticleComponent,
    PaginationComponent,
    BouttonActionComponent,
    NouvelArticleComponent,
    NouvelUpdateArticleComponent,
    PointVergulePipe,
    NombreArtPipe,
    InfoSupComponent,
    
    
    
    
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    AppRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSliderModule,
    CommonModule,
    ButtonModule,
    DividerModule
    
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

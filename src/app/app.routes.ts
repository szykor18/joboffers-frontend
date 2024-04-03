import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ErrorComponent } from './error/error.component';
import { RouteGuardService } from './service/route-guard.service';
import { MainpageComponent } from './mainpage/mainpage.component';
import { RegisterComponent } from './register/register.component';

export const routes: Routes = [
    {path:'', component: LoginComponent},
    {path:'login', component: LoginComponent},
    {path:'main', component: MainpageComponent, canActivate:[RouteGuardService]},
    {path:'register', component: RegisterComponent },
    {path:'**', component: ErrorComponent}
];

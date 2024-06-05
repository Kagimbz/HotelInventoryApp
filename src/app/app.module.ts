import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContainerComponent } from './container/container.component';
import { EmployeesComponent } from './employees/employees.component';
import { APP_CONFIG, APP_CONFIG_TOKEN } from './app_config/appconfig.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { RequestInterceptor } from './request.interceptor';
import { InitService } from './init.service';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { NavigationComponent } from './navigation/navigation.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { NotFoundComponent } from './not-found/not-found.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { HoverDirective } from './hover.directive';
import { EmailvalidatorDirective } from './email_validator/emailvalidator.directive';
import { RoomsModule } from './rooms/rooms.module';
import { HeaderModule } from './header/header.module';

function initFactory(initService : InitService) {
  return () => initService.init();
}

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    EmployeesComponent,
    NavigationComponent,
    NotFoundComponent,
    LoginComponent,
    HoverDirective,
    EmailvalidatorDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    FormsModule,
    RoomsModule,
    HeaderModule,
    AppRoutingModule
  ],
  providers: [{
    provide: APP_CONFIG_TOKEN,
    useValue: APP_CONFIG
  },{
    provide: HTTP_INTERCEPTORS,
    useClass: RequestInterceptor,
    multi: true
  }, {
    provide: APP_INITIALIZER,
    useFactory: initFactory,
    deps: [InitService],
    multi: true
  }, provideAnimationsAsync()],
  bootstrap: [AppComponent]
})
export class AppModule { }

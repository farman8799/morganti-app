import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { TermConditionComponent } from './term-condition/term-condition.component';
import { DeliveryReturnComponent } from './delivery-return/delivery-return.component';
import { AddressComponent } from './address/address.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthInterceptor } from './interceptor/auth.interceptor';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { SideMenuComponent } from './shared/component/side-menu/side-menu.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';
import { SharedModule } from './shared/shared.module';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideMenuComponent,
    FooterComponent,
    AboutUsComponent,
    ContactUsComponent,
    NotFoundComponent,
    PrivacyPolicyComponent,
    TermConditionComponent,
    DeliveryReturnComponent,
    AddressComponent,
    MainLayoutComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    SharedModule,
    HttpClientModule,
  
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },

  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

import {BrowserModule} from '@angular/platform-browser';
import {HostListener, NgModule} from '@angular/core';
import {CdkTableModule} from '@angular/cdk/table';
import {CdkTreeModule} from '@angular/cdk/tree';
import {AppComponent} from './app.component';
import {NavBarComponent} from './navbar/navbar.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HomeComponent} from './home/home.component';
import {WineCardComponent} from './wine-card/wine-card.component';
import {AppRoutingModule} from './app-routing.module';
import {AppMaterialModule} from './app-material.module';
import {HttpClientModule} from '@angular/common/http';
import {WineService} from './wine/wine.service';
import {ContextualService} from './webSearch/contextual.service';
import {ImagePreloadDirectiveDirective} from './directive/image-preload-directive.directive';
import {ShopComponent} from './shop/shop.component';
import {ContactComponent} from './contact/contact.component';
import {SearchBarComponent} from './search-bar/search-bar.component';
import {PageTitleComponent} from './page-title/page-title.component';
import { AvatarComponent } from './avatar/avatar.component';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import {TypingAnimationModule} from "angular-typing-animation";
import { EducationComponent } from './education/education.component';
import { SkillsComponent } from './skills/skills.component';
import { ExperienceComponent } from './experience/experience.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ScrollTopComponent } from './scrolltop/scroll-top.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    WineCardComponent,
    ImagePreloadDirectiveDirective,
    ShopComponent,
    ContactComponent,
    SearchBarComponent,
    PageTitleComponent,
    AvatarComponent,
    EducationComponent,
    SkillsComponent,
    ExperienceComponent,
    PortfolioComponent,
    ScrollTopComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CdkTableModule,
    CdkTreeModule,
    AppMaterialModule,
    HttpClientModule,
    ScrollToModule.forRoot(),
    TypingAnimationModule
  ],
  providers: [WineService,ContextualService],
  bootstrap: [AppComponent]
})
/*TODO: Renamed this to avoid TSLint issue caused by including node_modules in project*/
export class MainAppModule {
}

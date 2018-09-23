import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app.routing';
import { NavbarModule } from './shared/navbar/navbar.module';
import { FooterModule } from './shared/footer/footer.module';
import { SidebarModule } from './sidebar/sidebar.module';
import { LbdModule } from './lbd/lbd.module';

import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { TablesComponent } from './tables/tables.component';
import { TypographyComponent } from './typography/typography.component';
import { IconsComponent } from './icons/icons.component';
import { MapsComponent } from './maps/maps.component';
import { NotificationsComponent } from './notifications/notifications.component';

import { ApiServices } from './services/http-services';
import { WebsocketService } from './services/websocket-services';

@NgModule({
	declarations: [
		AppComponent,
		HomeComponent,
		UserComponent,
		TablesComponent,
		TypographyComponent,
		IconsComponent,
		MapsComponent,
		NotificationsComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		HttpModule,
		HttpClientModule,
		NavbarModule,
		FooterModule,
		SidebarModule,
		RouterModule,
		AppRoutingModule,
		LbdModule
	],
	providers: [ApiServices, WebsocketService],
	bootstrap: [AppComponent]
})
export class AppModule { }

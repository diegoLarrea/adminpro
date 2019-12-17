import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { APP_ROUTES } from "./app.routes.";
import { AppComponent } from "./app.component";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./login/register/register.component";
import { PagesModule } from "./pages/pages.module";
import { SharedModule } from "./shared/shared.module";

@NgModule({
  declarations: [AppComponent, LoginComponent, RegisterComponent],
  imports: [BrowserModule, PagesModule, SharedModule, APP_ROUTES],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { ThemePickerComponent } from './components/theme-picker/theme-picker.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, CardComponent, NavigationComponent, ThemePickerComponent, FooterComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CharacterService } from './services/CharacterServices/Character.service';
import { HttpService } from './services/http.service';
import { EquipmentScreenComponent } from './pages/EquipmentEditor/screens/equipment-screen.component';
import { EquipmentEditorModule } from './pages/EquipmentEditor/equipmentEditor.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    CharacterService,
    HttpService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

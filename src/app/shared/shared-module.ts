import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './componets/header/header.component';
import { InputComponent } from './componets/input/input.component';
import { UserFormComponent } from './componets/user-form/user-form.component';
import { PrincipalNewsComponent } from './componets/principal-news/principal-news.component';
import { ButtonComponent } from './componets/button/button.component';
import { CardComponent } from './componets/card/card.component';
import { LinkComponent } from './componets/link/link.component';
import { ModalComponent } from './componets/modal/modal.component';
import { SelectComponent } from './componets/select/select.component';
import { SideBarComponent } from './componets/side-bar/side-bar.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [
    HeaderComponent,
    InputComponent,
    UserFormComponent,
    PrincipalNewsComponent,
    ButtonComponent,
    CardComponent,
    LinkComponent,
    ModalComponent,
    SelectComponent,
    SideBarComponent,
    HeaderComponent,
  ],
  imports: [
    CommonModule,
    IonicModule
  ], 
  providers:[],
  exports: [InputComponent,ButtonComponent],
})
export class SharedModule { }

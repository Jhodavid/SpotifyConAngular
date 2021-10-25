import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SudeBarComponent } from './compomemrs/sude-bar/sude-bar.component';
import { MediaPlayerComponent } from './compomemrs/media-player/media-player.component';
import { UserComponent } from './compomemrs/user/user.component';



@NgModule({
  declarations: [
    SudeBarComponent,
    MediaPlayerComponent,
    UserComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }

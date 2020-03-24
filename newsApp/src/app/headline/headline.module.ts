import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HeadlineComponent } from './headline.component';
import { NewsApiService } from '../news-api.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: HeadlineComponent
      }
    ])
  ],
  declarations: [HeadlineComponent],
  providers: [
    NewsApiService
  ]
})
export class HeadlineComponentModule {}

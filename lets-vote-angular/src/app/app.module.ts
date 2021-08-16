import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { BoothComponent } from '../components/booth/booth.component';
import { ResultComponent } from '../components/result/result.component';
import { VotingCardComponent } from '../components/votingCard/votingCard.component';
import { VotingFormComponent } from '../components/votingForm/votingForm.component';
import { VotingContainerComponent } from '../components/votingContainer/votingContainer.component';

@NgModule({
  declarations: [
    AppComponent,
    VotingContainerComponent,
    VotingFormComponent,
    VotingCardComponent,
    BoothComponent,
    ResultComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

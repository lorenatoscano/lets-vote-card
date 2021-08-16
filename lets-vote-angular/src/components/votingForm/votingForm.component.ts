import { Component, Input } from "@angular/core";

@Component({
  selector: 'voting-form',
  templateUrl: './votingForm.component.html',
  styleUrls: ['./votingForm.component.css']
})

export class VotingFormComponent {
  title = '';
  threeOptions = '';
}

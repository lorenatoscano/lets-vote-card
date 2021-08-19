import { Component } from "@angular/core";

@Component({
  selector: 'voting-container',
  templateUrl: './votingContainer.component.html',
  styleUrls: ['./votingContainer.component.css']
})

export class VotingContainerComponent {
  isStarted = false;
  status = 'open';
}

import { Component } from "@angular/core";

@Component({
  selector: 'voting-container',
  templateUrl: './votingContainer.component.html',
  styleUrls: ['./votingContainer.component.css']
})

export class VotingContainerComponent {
  isStarted = false;
  title = 'Reunião amanhã';
  status = 'open';
  votes = [
    { option: 'Sim', count: 6 },
    { option: 'Não', count: 3 },
    { option: 'Talvez', count: 1 },
  ];
}

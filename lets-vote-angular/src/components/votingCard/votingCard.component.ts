import { Component, Input } from "@angular/core";

@Component({
  selector: 'voting-card',
  templateUrl: './votingCard.component.html',
  styleUrls: ['./votingCard.component.css']
})

export class VotingCardComponent {
  @Input() title: string = '';
  @Input() status: string = '';
  @Input() votes: any[] = [];

  get options() {
    return this.votes.map(vote => vote.option);
  }

  onVote(index: number) {
    this.votes[index].count++;
    this.status = 'closed';
  }
}


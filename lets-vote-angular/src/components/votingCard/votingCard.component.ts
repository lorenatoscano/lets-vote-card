import { Component, Input } from "@angular/core";
import { StoreService } from "src/store.service";

@Component({
  selector: 'voting-card',
  templateUrl: './votingCard.component.html',
  styleUrls: ['./votingCard.component.css']
})

export class VotingCardComponent {
  constructor(public store: StoreService) { }

  @Input() status: string = '';
  votes: { option: string, count: number }[] = [];

  ngOnInit() {
    this.votes = this.store.options.map(option => {
      return {
        option: option,
        count: 0,
      };
    });
  }

  onVote(index: number) {
    console.log(this.votes[index]);
    this.votes[index].count++;
    this.status = 'closed';
  }
}


import { Component, Input } from "@angular/core";

@Component({
  selector: 'result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})

export class ResultComponent {
  @Input() votes: any[] = [];

  get total() {
    let total = this.votes.reduce((x, y) => x + y.count, 0);

    if (total == 0) {
      return 1;
    }

    return total;
  }

  calculatePercentage(value: number) {
    return Math.round(100 * value / this.total);
  }
}
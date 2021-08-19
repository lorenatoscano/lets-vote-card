import { Component, Input, Output, EventEmitter } from "@angular/core";
import { StoreService } from "src/store.service";

@Component({
  selector: 'voting-form',
  templateUrl: './votingForm.component.html',
  styleUrls: ['./votingForm.component.css']
})

export class VotingFormComponent {
  constructor(public store: StoreService) { }

  @Output() start = new EventEmitter();

  title = '';
  threeOptions = '';

  handleSubmit() {
    this.store.title = this.title;
    this.store.setOptions(Number(this.threeOptions));

    this.start.emit("start");
  }
}

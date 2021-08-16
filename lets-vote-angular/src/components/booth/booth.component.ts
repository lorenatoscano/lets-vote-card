import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: 'booth',
  templateUrl: './booth.component.html',
  styleUrls: ['./booth.component.css']
})

export class BoothComponent {
  @Input() options: any[] = [];
  @Output() vote = new EventEmitter();
}
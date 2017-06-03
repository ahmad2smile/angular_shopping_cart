import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cross',
  templateUrl: './cross.component.html',
  styleUrls: ['./cross.component.css']
})
export class CrossComponent implements OnInit {

  constructor() { }

	@Input() crossColor: string = "#fff";

  ngOnInit() {
  }

}

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

	@Input() totallProducts: number;
	@Input() brandLogo: string;
	@Input() navBgColor: string = "#fff";
	@Input() linkItemRoute: string;

  ngOnInit() {
  }

}

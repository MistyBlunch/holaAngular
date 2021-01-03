import { Component, OnInit } from '@angular/core';

declare let UIkit: any;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent implements OnInit {
  autor = '< MistyBlunch />';
  about = 'About />';
  projects = 'Projects />';
  contact = 'Contact />';

  constructor() { }

  ngOnInit(): void {
  }

  showAlert(): void {
    UIkit.modal.alert('UIkit alert!');
  }
}

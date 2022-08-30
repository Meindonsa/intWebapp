import { Component,OnInit, } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
  }

  showDropdowNotification() {
    document.getElementById('notificationsDropdown')?.classList.add('show');
  }
  showDrompdowProfil() {
    document.getElementById('userDropdown')?.classList.add('show');
  }
}

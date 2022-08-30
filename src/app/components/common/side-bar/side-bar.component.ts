import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss'],
})
export class SideBarComponent implements OnInit {
  menuList: any;
  constructor() {}

  ngOnInit(): void {
    const sidePanelToggler = document.getElementById('sidepanel-toggler');
    const sidePanel = document.getElementById('app-sidepanel');
    const sidePanelDrop = document.getElementById('sidepanel-drop');
    const sidePanelClose = document.getElementById('sidepanel-close');

    sidePanelToggler.addEventListener('click', () => {
      if (sidePanel.classList.contains('sidepanel-visible')) {
        sidePanel.classList.remove('sidepanel-visible');
        sidePanel.classList.add('sidepanel-hidden');
      } else {
        sidePanel.classList.remove('sidepanel-hidden');
        sidePanel.classList.add('sidepanel-visible');
      }
    });
    sidePanelClose.addEventListener('click', (e) => {
      e.preventDefault();
      sidePanelToggler.click();
    });

    sidePanelDrop.addEventListener('click', (e) => {
      sidePanelToggler.click();
    });
    this.showMenuList();
  }
  showMenuList() {
    this.menuList = [
      {
        icon: 'pi pi-home',
        text: 'Overview',
        link: '/home',
      },
      {
        icon: 'pi pi-building',
        text: 'Entreprise',
        link: '/companies',
      },
      {
        icon: 'pi pi-users',
        text: 'Agents',
        link: '/employees',
      },
      {
        icon: 'pi pi-directions',
        text: 'Interventions',
        link: '/interventions',
      },
      {
        icon: 'pi pi-file',
        text: 'Facture',
        link: '/#',
      },
      {
        icon: 'pi pi-question-circle',
        text: 'Aide',
        link: '/#',
      },
    ];
  }
}

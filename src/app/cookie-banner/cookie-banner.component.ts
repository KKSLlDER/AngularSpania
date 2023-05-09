import { Component } from '@angular/core';

@Component({
  selector: 'app-cookie-banner',
  templateUrl: './cookie-banner.component.html',
  styleUrls: ['./cookie-banner.component.scss']
})
export class CookieBannerComponent {
  accepted: boolean = localStorage.getItem('cookiesAccepted') === 'true';

  accept() {
    this.accepted = true;
    localStorage.setItem('cookiesAccepted', 'true');
  }
}
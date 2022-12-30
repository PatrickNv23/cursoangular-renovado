import { Component, OnInit } from '@angular/core';
import { AuthService } from '@data/services/api/auth.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  constructor(
    private authService: AuthService
  ) {

  }

  ngOnInit() {
  }

  public logout() {
    this.authService.logout();
  }

}

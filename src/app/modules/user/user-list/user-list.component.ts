import { Component, OnInit } from '@angular/core';
import { ICardUser } from '@shared/components/cards/card-user/icard-user.metadata';
//import { USERS_DATA } from '@data/constants/users.const';
import { UserService } from '@data/services/api/user.service';
import { ICarouselItem } from '@shared/components/carousel/Icarousel-item.metadata';
import { CAROUSEL_DATA_ITEMS } from '@data/constants/carousel.const';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  public carouselData: ICarouselItem[] = CAROUSEL_DATA_ITEMS;
  public users: ICardUser[]; // USERS_DATA;
  public tasks: { title: string }[] = [
    {
      title: 'primera tarea',
    },
    {
      title: 'segunda tarea'
    },
    {
      title: 'tercera tarea'
    }
  ];

  public options = ['un', 'dos', 'tres', 'cuatro', 'cinco', 'doce', 'veinte', 'ningun'];

  public subtitleStyle = {
    color: 'black'
  }

  constructor(
    private userService: UserService
  ) {
    this.userService.getAllUsers().subscribe(r => {
      if (!r.error) {
        this.users = r.data;
      }
    });
  }

  ngOnInit() {
  }

  public trackByUserId(index, item) {
    return item.id;
  }

  public addNewUser() {
    this.users.push({
      id: 23,
      name: 'Elon Musk',
      age: 27,
      description: 'Desarrollador fullstack',
      avatar: 'https://ideapod.com/wp-content/uploads/2017/08/person-1.jpg',
      work: 'Frontend Developer',
      gender: 'M'
    },)
  }

  public changeButtonToBlueColor() {
    this.subtitleStyle.color = 'blue';
  }

  public changeButtonToRedColor() {
    this.subtitleStyle.color = 'red';
  }

}

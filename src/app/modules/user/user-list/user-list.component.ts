import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ICardUser } from '@shared/components/cards/card-user/icard-user.metadata';
//import { USERS_DATA } from '@data/constants/users.const';
import { UserService } from '@data/services/api/user.service';
import { ICarouselItem } from '@shared/components/carousel/Icarousel-item.metadata';
import { CAROUSEL_DATA_ITEMS } from '@data/constants/carousel.const';
import { Subscribable, Subscription } from 'rxjs';
import { SOLID_BUTTON_TYPE_ENUM } from '@shared/components/buttons/solid-button/solid-button-type.enum';
import { SolidButtonComponent } from '@shared/components';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit, OnDestroy, AfterViewInit {

  public carouselData: ICarouselItem[];
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
  public title: string;
  public userSubscription: Subscription;
  public priceSoles: number;
  public obj: Array<any>;

  // variables para el ejemplo de PIPES
  public stringVar: string;
  public dateVar: number;
  public currencyVar: number;
  public decimalVar: number;
  public objPipeJson: Array<any>;
  //Custom PIPE
  public user: {
    name: string;
    gender: 'M' | 'F';
    role: string;
  }

  //Extras
  public $btnTypes = SOLID_BUTTON_TYPE_ENUM;
  @ViewChild('mainButton', null) mainButton: SolidButtonComponent;
  @ViewChild('container', null) container: ElementRef;

  constructor(
    private userService: UserService
  ) {
    this.carouselData = CAROUSEL_DATA_ITEMS;
    this.userService.setTitle("Lista de Usuarios");
    this.title = this.userService.getTitle();
    this.priceSoles = 0;
    this.obj = [{ id: 1, name: 'primero', joinDate: 1599935113003 }],
      this.objPipeJson = [{ id: 1, name: 'primero', joinDate: 1599935113003 }]
    this.stringVar = 'Hola es un curso de angular';
    this.dateVar = (new Date()).getTime();
    this.currencyVar = 123456.20;
    this.decimalVar = 123123474743.3459;
    this.user = {
      name: 'Paco Gonzales',
      gender: 'M',
      role: 'Administrador'
    }
  }
  ngAfterViewInit(): void {
    console.log("After view init - User List Component")
  }

  ngOnInit() {
    this.getUsers();
    console.log("ngOnInit - UserListComponent")
  }

  addAmount() {
    this.priceSoles += 10;
    this.obj.push({
      id: this.obj.length + 1,
      name: 'otro',
      joinDate: 1599935113003
    })
  }

  getUsers() {
    this.userSubscription = this.userService
      .getAllUsers()
      .subscribe(r => this.users = (r.error) ? [] : r.data);
  }

  ngOnDestroy(): void {
    this.userService.clearTitle();
    if (this.userSubscription) {
      this.userSubscription.unsubscribe();
    }
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


  actions(events: SOLID_BUTTON_TYPE_ENUM) {
    switch (events) {
      case SOLID_BUTTON_TYPE_ENUM.SUCCESS:
        console.log("Ejecutando método success");
        break;
      case SOLID_BUTTON_TYPE_ENUM.PRIMARY:
        console.log("Ejecutando método primary");
        break;
      case SOLID_BUTTON_TYPE_ENUM.DANGER:
        console.log("Ejecutando método danger");
        break;
    }

    this.mainButton.title = 'Actualizar';
    this.container.nativeElement.style.display = 'none'
  }

}

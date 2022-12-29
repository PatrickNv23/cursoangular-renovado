import { Component, OnInit, Input, OnChanges, SimpleChanges, DoCheck } from '@angular/core';

@Component({
  selector: 'app-title-h1',
  templateUrl: './title-h1.component.html',
  styleUrls: ['./title-h1.component.scss']
})
export class TitleH1Component implements OnInit, DoCheck {
  @Input() text: string;
  @Input() type: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'dark' = 'primary';
  @Input() priceSoles: number;
  public priceDollar: number;
  public priceEuros: number;
  @Input() data: Array<any> = [];

  constructor() {
    this.text = '';
    this.type = 'primary';
    this.priceSoles = 0;
    this.priceDollar = 0;
    this.priceEuros = 0;
  }


  ngDoCheck(): void {
    this.priceDollar = this.priceSoles * this.getCurrentDolarFromApi();
    this.priceEuros = this.priceSoles * this.getCurrentEuroFromApi();
    this.data.map(i => {
      i.isActive = true;
    })
    console.log(this.data);
  }


  ngOnInit() {
  }

  // ngOnChanges(changes: SimpleChanges): void {
  //   if (changes.priceSoles && changes.priceSoles.currentValue) {
  //     this.priceSoles = changes.pricePesos.currentValue;
  //     this.priceDollar = this.priceSoles * this.getCurrentDolarFromApi();
  //     this.priceEuros = this.priceSoles * this.getCurrentEuroFromApi();
  //   }

  //   if (changes.data && changes.data.currentValue) {
  //     console.log('data changed');
  //   }
  // }

  getCurrentDolarFromApi() {
    return 22; // simulando
  }

  getCurrentEuroFromApi() {
    return 22.5 // simulando
  }
}

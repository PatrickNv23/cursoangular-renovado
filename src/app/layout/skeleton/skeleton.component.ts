import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skeleton',
  templateUrl: './skeleton.component.html',
  styleUrls: ['./skeleton.component.scss']
})
export class SkeletonComponent implements OnInit, AfterViewInit {
  public loader = 'assets/images/loader/loader.gif';
  public isLoading = true;
  constructor() { }

  ngAfterViewInit(): void {

    setTimeout(() => {
      this.isLoading = false;
    }, 1000)
  }

  ngOnInit() {
  }

}

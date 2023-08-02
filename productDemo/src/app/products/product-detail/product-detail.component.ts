import { Component, Input, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnInit {

  //construstors should be relatively empty and devoid of logic other than setting initial variables.
  // Adding business logic inside a constructor makes it challenging to mock it in testing scenarios.
  constructor(){
    //console.log(`Name is ${this.name} in the constructor`);
  }
  ngOnInit(): void {
    //A good use of the OnInit hook is when we need to initialize a component with data from an external source.
    //console.log(`Name is ${this.name} in the ngOnInit`);
    throw new Error('Method not implemented.');
  }

  @Input() name = ' ';
  @Output() bought = new EventEmitter<string>();

  buy(){
    this.bought.emit(this.name);
  }

  get productName(): string{
    return this.name;
  }
}

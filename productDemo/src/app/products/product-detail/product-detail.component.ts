import { Component, Input, OnInit, Output, EventEmitter, OnChanges, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnChanges {

  //construstors should be relatively empty and devoid of logic other than setting initial variables.
  // Adding business logic inside a constructor makes it challenging to mock it in testing scenarios.
  constructor(){
    //console.log(`Name is ${this.name} in the constructor`);
  }

  //implementing the OnChanges hook
  ngOnChanges(changes: SimpleChanges): void {
    const product = changes['name'];
    const oldValue = product.previousValue;
    const newValue = product.currentValue;
    console.log(`Product changed from ${oldValue} to ${newValue}`);
  }

  //implementing the ngOnInit hook
  ngOnInit(): void {
    //A good use of the OnInit hook is when we need to initialize a component with data from an external source.
    //console.log(`Name is ${this.name} in the ngOnInit`);
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

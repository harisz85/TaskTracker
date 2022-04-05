import { outputAst } from '@angular/compiler';
import { Component, OnInit,Input ,Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
@Input() text!:string;
@Input() color!:string;
@Output() btnClick = new EventEmitter();

  constructor() { }


//methods

onClick() {
  this.btnClick.emit()
  console.log();
}

  ngOnInit(): void {
  }



}

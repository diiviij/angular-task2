import { Component, Input } from '@angular/core';

@Component({
  selector: 'hello',
  template: `
  <h2>Welcome{{name}}
</h2>
 <h2>{{2+2}}</h2>
<h2>{{"welcome"+name}}</h2>
<h2>{{name.length}}</h2>
<h2>{{name.toUpperCase()}}</h2>
 `,
  styles: [`h2 { font-family: Lato; }`]
})
export class HelloComponent  {
  @Input() name: string;
}

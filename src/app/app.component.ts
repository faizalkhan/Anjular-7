import { Component } from '@angular/core';
import {FormControl, FormGroup, FormArray  } from'@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'firstproject';
  

ngOnInit() {
  this.loadScript('assets/vendor/jquery/jquery-2.2.4.min.js');
  this.loadScript('assets/vendor/bootstrap/js/bootstrap.bundle.min.js');
  this.loadScript('assets/vendor/jquery-easing/jquery.easing.min.js');
  this.loadScript('assets/vendor/chart.js/Chart.min.js');
  this.loadScript('assets/vendor/datatables/jquery.dataTables.js');
  this.loadScript('assets/vendor/datatables/dataTables.bootstrap4.js');
  this.loadScript('assets/js/sb-admin.js');
  this.loadScript('assets/js/demo/datatables-demo.js');
  this.loadScript('assets/js/demo/chart-area-demo.js');

}
    
public loadScript(url: string) {

  let node = document.createElement('script');
  node.src = url;
  node.type = 'text/javascript';
  node.async = true;
  node.charset = 'utf-8';
  document.getElementsByTagName('body')[0].appendChild(node)
}

    }
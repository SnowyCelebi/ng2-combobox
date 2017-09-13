import { Component, Input } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import "rxjs/add/operator/mergeMap";
import 'rxjs/add/operator/map'
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/delay';
import { Combobox } from './Combobox/combobox.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    dataSet = ['Cotton','Polyester','Cotton/Polyester','Rib Knit']; 
    changeData() {
        this.dataSet = ['New Data', 'New Data222222222222222222222222222222222222222222222222222222222222222222', 'New Data3', 'New Data4', 'New Data5', 'New Data6', 'New Data7']
    }
    resetData() {
        this.dataSet = ['Cotton','Polyester','Cotton/Polyester','Rib Knit'];
    }
} 
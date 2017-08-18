import { Component, Input } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import "rxjs/add/operator/mergeMap";
import 'rxjs/add/operator/map'
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/delay';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'app';
    options = ['Cotton','Polyester','Cotton/Polyester','Rib Knit'];
    selectedOption = null;
    optionSearchResults = [];
    show = false;
    public keyUp = new Subject<string>();
    constructor() {
        const observable = this.keyUp
        .map(value => (<HTMLInputElement>event.target).value)
        .debounceTime(500)
        .mergeMap((search) => {
            return Observable.of(search).delay(300);
        })
        .subscribe((data) => {this.onKeyUp(data);});
    }
    onBlur() {
        this.optionSearchResults = [];
    }

    onSelect(option) {
        this.selectedOption = option;
        this.show = !this.show;
    }

    onSelectSearchResult(option) {
        console.log("aaaa");
        this.selectedOption = option;
    }

    toggle() {
        this.show = !this.show;
    }

    onKeyUp(data) {
        let results = [];
        for (let option of this.options) {
            if (option.includes(data)) {
                results.push(option);
            }
        }
        this.optionSearchResults = results;
    }
            // tạo cái list những option có chứa data:
            // quét hết các option
            // nếu option i có chứa data
            // them option i vao lst ketqua
            // show list ketqua

}


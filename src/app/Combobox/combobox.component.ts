import { Component, Input } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { SimpleChanges } from '@angular/core';
import "rxjs/add/operator/mergeMap";
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/delay';

@Component({
    selector: 'sm-combobox',
    templateUrl: './combobox.component.html',
    styleUrls: ['./combobox.component.css']
})
export class Combobox {
    @Input() initialOptions = [];
    ngOnInit() {
        console.log (this.initialOptions)
        this.options = this.initialOptions;
    };
    ngOnChanges(changes: SimpleChanges) {
        if (this.show = true) {
            this.show = false
        }
        this.options = changes.initialOptions.currentValue;
    }
    options = [];
    selectedOption = null;
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
        this.collapse();
    }

    onSelect(option) {
        this.selectedOption = option;
        this.collapse();
        this.options = this.initialOptions;
    }

    expand() {
        this.show = true;
    }

    collapse() {
        this.show = false;
    }

    toggle() {
        this.show = !this.show;
    }

    search(data) {
        let results = [];
        for (let option of this.initialOptions) {
            if (option.includes(data)) {
                results.push(option);
                this.expand()
            }
        }    
        return results;
    }
    onKeyUp(data) {
        this.options = this.search(data);
    }
}
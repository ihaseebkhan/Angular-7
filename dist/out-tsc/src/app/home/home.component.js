import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { DataService } from '../data.service';
var HomeComponent = /** @class */ (function () {
    function HomeComponent(data) {
        this.data = data;
        this.h1style = false;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.data.getusers().subscribe(function (data) {
            _this.users = data;
            console.log(data);
        });
    };
    HomeComponent.prototype.firstClick = function () {
        this.data.firstClick();
        if (this.h1style = true) {
            this.h1style = false;
        }
        else {
            this.h1style = true;
        }
    };
    HomeComponent = tslib_1.__decorate([
        Component({
            selector: 'app-home',
            templateUrl: './home.component.html',
            styleUrls: ['./home.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [DataService])
    ], HomeComponent);
    return HomeComponent;
}());
export { HomeComponent };
//# sourceMappingURL=home.component.js.map
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Icon } from "../../models/icon";
import { Icons } from "../../providers/icons";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
    icons: Icon[];

    constructor(public navCtrl: NavController, private iconsProvider: Icons) {
        iconsProvider.load().subscribe(icons => {
            this.icons = icons;
        });
    }

    onIconClick(event, item) {

    }
}

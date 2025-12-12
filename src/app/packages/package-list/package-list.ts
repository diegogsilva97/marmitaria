import { Component } from '@angular/core';
import { PackageItem } from './package-item/package-item';

@Component({
  selector: 'app-package-list',
  imports: [PackageItem],
  templateUrl: './package-list.html',
  styleUrl: './package-list.css',
})
export class PackageList {

}

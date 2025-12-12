import { Component } from '@angular/core';
import { PackageList } from './package-list/package-list';
import { PackagesDetails } from './package-details/packages-details';

@Component({
  selector: 'app-packages',
  imports: [PackageList,PackagesDetails],
  templateUrl: './packages.html',
  styleUrl: './packages.css',
})
export class Packages {

}

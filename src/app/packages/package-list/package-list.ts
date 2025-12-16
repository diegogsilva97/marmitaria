import { Component, OnInit } from '@angular/core';
import { PackageItem } from './package-item/package-item';
import { Package } from './package.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-package-list',
  imports: [PackageItem,CommonModule],
  templateUrl: './package-list.html',
  styleUrl: './package-list.css',
})
export class PackageList{
  packages:Package[] = [
    new Package('Churrasco', 'Churrasco de picanha', 'https://cptstatic.s3.amazonaws.com/imagens/enviadas/materias/materia7011/churrasco-cursos-cpt.jpg'),
    new Package('Churrasco', 'Churrasco de picanha', 'https://cptstatic.s3.amazonaws.com/imagens/enviadas/materias/materia7011/churrasco-cursos-cpt.jpg')
  ];

}

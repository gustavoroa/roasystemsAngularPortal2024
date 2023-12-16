import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../../services/language.service';
import { Language } from '../../shared/classes/language';

@Component({
  selector: 'app-languages-list',
  templateUrl: './languages-list.component.html',
  styleUrl: './languages-list.component.css'
})

export class LanguagesListComponent implements OnInit {
  columns: string[] = [];    // "columns" property
  languages: Language[] = [];

  constructor(private languageService: LanguageService) {}

  ngOnInit(): void {
    this.columns = ['Language Code', 'Name', 'Description' /*, otther more column names separed by comma */];
    this.languageService.getLanguages().subscribe(
      (data) => {
        this.languages = data;
      }, 
      (error) => {
        console.error('Error fetching languages:', error);
      }
    );
  }
}
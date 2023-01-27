import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homework1',
  templateUrl: './homework1.component.html',
  styleUrls: ['./homework1.component.scss']
})
export class Homework1Component implements OnInit {

  public arrBadWords: Array<string> = ['java', 'css'];
  public barWordList!: string;
  public newWord = '';
  public textAreaValue = '';

  constructor() { }

  ngOnInit(): void {
    this.render()
  }

  addWord(): void {
    this.arrBadWords.push(this.newWord)
    this.render()
  }

  reset(): void {
    this.arrBadWords = [];
    this.newWord = '';
    this.textAreaValue = '';
    this.render()
  }

  cenzor(): void {
    const text = this.textAreaValue;
    let textArr: Array<string> = text.split(' ');
    for (let i = 0; i < textArr.length; i++) {
      for (let j = 0; j < this.arrBadWords.length; j++) {
        if (textArr[i] == this.arrBadWords[j]) {
          let replaceWord: string = textArr[i].replace(/\S/gi, '*');
          textArr[i] = replaceWord;
        }
      }
    }
    this.textAreaValue = textArr.join(' ')
  }

  render(): void {
    this.barWordList = this.arrBadWords.join(', ')
  }

}

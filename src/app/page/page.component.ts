import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {
  makeStateKey,
  StateKey,
  TransferState,
} from '@angular/platform-browser';

@Component({
  template: '#page',
})
export class PageComponent implements OnInit {
  private stateKey: StateKey<object> = makeStateKey('page');

  constructor(
    private readonly httpClient: HttpClient,
    private readonly transferState: TransferState
  ) {}

  ngOnInit() {
    if (this.transferState.hasKey(this.stateKey)) {
      const response = this.transferState.get(this.stateKey, undefined);
      console.log('transferState', response);
    } else {
      this.httpClient.get<any>(`https://api.publicapis.org/entries`).subscribe({
        next: (response) => {
          this.transferState.set(this.stateKey, response);
          console.log('http: ', response);
        },
        error: (e) => {
          console.error(e);
        },
      });
    }
  }
}

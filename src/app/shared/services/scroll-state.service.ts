import { Injectable, signal, effect } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ScrollStateService {
  #trendingScrollState = signal(0);

  set trendingScrollState(value: number) {
    this.#trendingScrollState.set(value);
  }
  get trendingScrollState() {
    return this.#trendingScrollState();
  }
}

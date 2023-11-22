import axios from 'axios';
import {
  action,
  computed,
  makeAutoObservable,
  observable,
  runInAction,
} from 'mobx';

class Pins {
  pins = [];
  isFetching = false;
  error: any = null;
  constructor() {
    makeAutoObservable(this);
  }
  fetchPins() {
    const env = process.env.REACT_APP_ACCESS_KEY;
    this.isFetching = true;
    axios
      .get(
        `https://api.unsplash.com/photos?page=1&client_id=1lOatS8sZwQW2Ua0_kTP0NtSnl-0PldENIdJTZJ_ajo`,
      )
      .then(response => {
        this.pins = response.data;
        this.isFetching = false;
      })
      .catch(err => {
        this.error = err;
        this.isFetching = false;
      });
  }
  // addPin(pin: any) {
  //   this.pins = [...this.pins, {...pin, id: pin.id}];
  // }
  // deletePin(id: any) {
  //   this.pins = this.pins.filter(pin => pin.id !== id);
  // }
  get allpins() {
    return this.pins;
  }
}

export const pinsStore = new Pins();

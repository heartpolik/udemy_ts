/// <reference types="@types/google.maps" />

import { User } from './User';
import { Company } from './Company';
import { Map } from './Map';

const user = new User();
console.log(user);

const company = new Company();
console.log(company);

const map = new Map('map');
map.addMarker(user);
map.addMarker(company); 
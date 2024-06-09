import { Inject, Injectable } from '@angular/core';
import { LINK_TOKEN } from './link-config.service';
import { LinkConfig } from './link-config';

@Injectable({
  providedIn: 'any'
})
export class ConfigService {

  constructor(@Inject(LINK_TOKEN) private linkConfig: LinkConfig) { }
}

import { InjectionToken } from "@angular/core";
import { LinkConfig } from "./link-config";

export const LINK_TOKEN = new InjectionToken<LinkConfig>('linkConfig');

export const LINK_TOKEN_VALUE_1: LinkConfig = {
    title: 'home'
}

export const LINK_TOKEN_VALUE_2: LinkConfig = {
    title: 'room'
}
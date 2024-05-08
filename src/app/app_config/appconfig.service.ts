import { InjectionToken } from "@angular/core";
import { environment } from "../../environments/environment";

export interface AppConfig {
    apiUrl: string;
}


export const APP_CONFIG_TOKEN = new InjectionToken<AppConfig>('app config');

export const APP_CONFIG: AppConfig = {
    apiUrl: environment.apiUrl
};
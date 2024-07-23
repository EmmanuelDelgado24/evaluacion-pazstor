import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
bootstrapApplication(AppComponent, appConfig)
    .catch(function (err) { return console.error(err); });
var text = 'Hello TypeScript';
console.log(text);
//# sourceMappingURL=main.js.map
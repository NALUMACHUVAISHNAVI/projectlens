import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ShellComponent } from './layouts/shell.component';
import { SessionService } from './core/services/session.service';

@Component({ selector: 'app-root', imports: [RouterOutlet, ShellComponent], template: `@if (session.user()) { <app-shell><router-outlet /></app-shell> } @else { <router-outlet /> }` })
export class AppComponent { readonly session = inject(SessionService); }

import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { SessionService } from '../core/services/session.service';

@Component({ selector: 'app-shell', imports: [RouterLink, RouterLinkActive], template: `<header><a routerLink="/dashboard" class="brand">◈ ProjectLens</a><span>{{ session.user()?.name }} · {{ session.user()?.role }}</span><button type="button" (click)="session.signOut()">Sign out</button></header><div class="shell"><nav aria-label="Main navigation"><a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>@if (session.user()?.role === 'POD_LEAD') { <a routerLink="/submit" routerLinkActive="active">Submit idea</a> }<a routerLink="/dashboard" routerLinkActive="active">Submissions</a><a routerLink="/dashboard" routerLinkActive="active">Reviews</a></nav><main><ng-content /></main></div>` })
export class ShellComponent { readonly session = inject(SessionService); }

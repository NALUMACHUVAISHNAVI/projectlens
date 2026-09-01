import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { SessionService } from '../../core/services/session.service';
import { UserRole } from '../../core/models/project-submission.model';

@Component({ imports: [FormsModule], template: `<section class="auth-page"><div><p class="eyebrow">PROJECTLENS</p><h1>Better project ideas. Less trainer administration.</h1><p>Ideas are automatically scored against the cohort criteria and checked for similarity before they reach the trainer.</p></div><form class="auth-card" (ngSubmit)="signIn()"><h2>Welcome</h2><label>Name<input name="name" [(ngModel)]="name" required></label><label>Role<select name="role" [(ngModel)]="role"><option value="TRAINER">Trainer</option><option value="POD_LEAD">Pod Lead</option><option value="POD_MEMBER">Pod Member</option></select></label>@if (role !== 'TRAINER') {<label>Pod name<input name="pod" [(ngModel)]="podName" required></label>}<button class="primary" type="submit">Continue</button><small>This prototype uses role selection locally. Backend JWT login can replace it later.</small></form></section>` })
export class LoginComponent { private readonly session = inject(SessionService); private readonly router = inject(Router); name = ''; role: UserRole = 'TRAINER'; podName = ''; signIn(): void { this.session.signIn({ name: this.name || 'ProjectLens user', role: this.role, podName: this.podName }); void this.router.navigateByUrl('/dashboard'); } }

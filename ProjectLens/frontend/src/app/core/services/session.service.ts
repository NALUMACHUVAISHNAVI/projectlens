import { Injectable, signal } from '@angular/core';
import { CurrentUser } from '../models/project-submission.model';
@Injectable({ providedIn: 'root' })
export class SessionService { readonly user = signal<CurrentUser | null>(this.read()); signIn(user: CurrentUser): void { localStorage.setItem('projectlens-user', JSON.stringify(user)); this.user.set(user); } signOut(): void { localStorage.removeItem('projectlens-user'); this.user.set(null); } private read(): CurrentUser | null { const raw = localStorage.getItem('projectlens-user'); return raw ? JSON.parse(raw) as CurrentUser : null; } }

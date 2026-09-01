import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { DecisionStatus, ProjectSubmission } from '../models/project-submission.model';
@Injectable({ providedIn: 'root' })
export class ProjectApiService { private readonly http = inject(HttpClient); private readonly apiUrl = 'http://localhost:8080/api/submissions'; getSubmissions(): Observable<ProjectSubmission[]> { return this.http.get<ProjectSubmission[]>(this.apiUrl); } createSubmission(payload: Omit<ProjectSubmission, 'id' | 'alignmentScore' | 'overlapScore' | 'decisionStatus'>): Observable<ProjectSubmission> { return this.http.post<ProjectSubmission>(this.apiUrl, payload); } setDecision(id: number, status: DecisionStatus): Observable<ProjectSubmission> { return this.http.patch<ProjectSubmission>(`${this.apiUrl}/${id}/decision`, { status }); } }

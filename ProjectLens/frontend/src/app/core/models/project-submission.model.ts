export type DecisionStatus = 'PENDING' | 'APPROVED' | 'NEEDS_REVISION' | 'REJECTED';
export interface ProjectSubmission { id?: number; podName: string; title: string; problemStatement: string; objectives: string; technologyStack: string; documentationLink?: string; alignmentScore: number; overlapScore: number; decisionStatus: DecisionStatus; }
export type UserRole = 'TRAINER' | 'POD_LEAD' | 'POD_MEMBER';
export interface CurrentUser { name: string; role: UserRole; podName?: string; }

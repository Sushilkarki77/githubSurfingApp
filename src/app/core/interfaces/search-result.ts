import { RepoSummary } from './repo-summary';

export interface SearchResult {
    total_count: number;
    incomplete_results: boolean;
    items: RepoSummary[];
}

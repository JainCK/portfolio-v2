export interface GitHubProject {
  id: string;
  name: string;
  description: string | null;
  url: string;
  topics: string[];
}

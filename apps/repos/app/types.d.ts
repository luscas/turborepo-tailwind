export interface RepositoryDTO {
  id: number;
  html_url: string;
  full_name: string;
  name: string;
  updated_at: Date;
  owner: {
    avatar_url: string;
    login: string;
    html_url: string;
  }
}

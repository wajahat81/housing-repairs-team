import { apiClient } from "./api/client";


export interface HealthResponse {
  status: string;
  environment: string;
}


export async function getHealth(): Promise<HealthResponse> {
  return apiClient<HealthResponse>("/health");
}
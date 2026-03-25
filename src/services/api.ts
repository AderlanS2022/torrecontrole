// Base API service simulation
export const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export class ApiError extends Error {
  constructor(public message: string, public status: number = 500) {
    super(message);
    this.name = 'ApiError';
  }
}

// Simulated response wrapper
export interface ApiResponse<T> {
  data: T;
  message?: string;
  status: number;
}

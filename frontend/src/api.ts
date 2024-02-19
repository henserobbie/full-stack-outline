const API_URL = "http://localhost:5000/api";

interface ApiResponse {
    data: any;
  }
  
class Api {
    private apiUrl: string;
  
    constructor() {
      this.apiUrl = API_URL;
    }
  
    private async fetchWrapper(url: string, options: RequestInit = {}): Promise<ApiResponse> {
        const response = await fetch(url, options);
        const data = await response.json();
  
        if (!response.ok) {
            throw new Error(`API error: ${response.status} - ${data.message}`);
        }
  
        return { data };
    }
  
    async getTest(): Promise<ApiResponse> {
        const url = `${this.apiUrl}/test`;
        return this.fetchWrapper(url);
    }
  
    async postTest(data: any): Promise<ApiResponse> {
        const url = `${this.apiUrl}/test`;
        const options: RequestInit = {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        };
    
        return this.fetchWrapper(url, options);
    }
}
  
export default Api;
  
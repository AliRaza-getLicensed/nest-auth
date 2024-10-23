export interface RegisterResponse {
  access_token: string;
  user: {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
    phone_number: string;
  };
}

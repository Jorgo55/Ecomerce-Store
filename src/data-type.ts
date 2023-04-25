export interface SignUp {
  name: string;
  password: string;
  email: string;
  // id: number;
}

export interface Login {
  email: string;
  password: string;
  // id: number;
}

export interface Product {
  name: string;
  price: number;
  category: string;
  color: string;
  description: string;
  image: string;
}

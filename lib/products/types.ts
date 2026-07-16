export interface Product {
  id: string;

  category_id: string;

  slug: string;

  name: string;

  description: string;

  price: number;

  image_url: string;

  created_at?: string;

  updated_at?: string;
}

export interface Category {
  id: string;

  name: string;

  description: string;

  image_url: string;

  display_order: number;

  active: boolean;
}
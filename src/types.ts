export interface MenuItem {
  id: string;
  name: string;
  price: number;
  category: string;
  description: string;
  ingredients: string[];
  allergens: string[];
  nutritionalValue: {
    calories: number;
    protein: string;
    carbs: string;
    fat: string;
  };
  image: string;
  isWeeklyHighlight?: boolean;
  selectedDetails?: string;
  excludedIngredients?: string[];
  premiumToppings?: string[];
  kitchenNotes?: string;
}

export interface CafeEvent {
  id: string;
  title: string;
  date: string;
  time: string;
  category: 'Community' | 'Arts & Music' | 'Education' | 'Nature';
  description: string;
  location: string;
  image: string;
}

export interface CartItem {
  menuItem: MenuItem;
  quantity: number;
  selectedDetails?: string;
  excludedIngredients?: string[];
  premiumToppings?: string[];
  kitchenNotes?: string;
}

export interface MemberProfile {
  name: string;
  email: string;
  cardNumber: string;
  joinedDate: string;
  points: number;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  text: string;
  avatar: string;
}

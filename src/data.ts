import { MenuItem, CafeEvent, Testimonial } from './types';

export const MENU_ITEMS: MenuItem[] = [
  {
    id: 'hbg-001',
    name: 'Avocado & Poached Egg Toast',
    price: 6.90,
    category: 'Toasts & Toasties',
    description: 'Smashed creamy avocado on thick rustic toast with a perfectly poached organic egg.',
    ingredients: ['Artisanal Toast', 'Avocado Mash', 'Poached Egg', 'Maldon Salt'],
    allergens: ['Gluten', 'Eggs'],
    nutritionalValue: { calories: 380, protein: '14g', carbs: '28g', fat: '18g' },
    image: 'https://images.unsplash.com/photo-1541532713592-79a0317b6b77?auto=format&fit=crop&q=80&w=800',
    isWeeklyHighlight: true
  },
  {
    id: 'hbg-002',
    name: 'Garlic, Tomato & Olive Oil Toasted Sourdough',
    price: 4.50,
    category: 'Toasts & Toasties',
    description: 'Crisp toasted bread rubbed with fresh garlic, vine-ripened tomatoes, and extra virgin olive oil.',
    ingredients: ['Sourdough', 'Garlic', 'Ripe Tomato', 'Olive Oil'],
    allergens: ['Gluten'],
    nutritionalValue: { calories: 240, protein: '6g', carbs: '32g', fat: '9g' },
    image: 'https://images.unsplash.com/photo-1572448862527-d3c904757de6?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'hbg-003',
    name: 'Turkey & Cheese Sandwich',
    price: 4.90,
    category: 'Sandwiches',
    description: 'Hand-carved premium turkey breast and melted mature cheese pressed on fresh farmhouse bread.',
    ingredients: ['Farmhouse Bread', 'Smoked Turkey', 'Melted Cheddar'],
    allergens: ['Gluten', 'Dairy'],
    nutritionalValue: { calories: 420, protein: '24g', carbs: '38g', fat: '14g' },
    image: 'https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'hbg-004',
    name: 'Avocado, Tomato & Egg Sandwich',
    price: 5.50,
    category: 'Sandwiches',
    description: 'A fresh combination of sliced avocado, ripe tomatoes, and boiled egg on wholemeal.',
    ingredients: ['Wholemeal Bread', 'Avocado', 'Vine Tomato', 'Hard-Boiled Egg'],
    allergens: ['Gluten', 'Eggs'],
    nutritionalValue: { calories: 390, protein: '12g', carbs: '34g', fat: '16g' },
    image: 'https://images.unsplash.com/photo-1541532713592-79a0317b6b77?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'hbg-005',
    name: 'Scrambled Eggs on Toast',
    price: 6.50,
    category: 'Breakfast Specials',
    description: 'Fluffy organic scrambled eggs served beautifully on freshly baked rustic toast.',
    ingredients: ['Rustic Toast', 'Organic Eggs', 'Grass-fed Butter'],
    allergens: ['Gluten', 'Eggs', 'Dairy'],
    nutritionalValue: { calories: 310, protein: '14g', carbs: '22g', fat: '12g' },
    image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'hbg-006',
    name: 'Vegan Breakfast Special',
    price: 8.50,
    category: 'Breakfast Specials',
    description: 'A vibrant medley of stir-fried seasonal garden veggies, grilled tomatoes, fresh avocado, and sourdough.',
    ingredients: ['Sourdough', 'Seasoned Garden Veggies', 'Grilled Tomato', 'Slices of Avocado'],
    allergens: ['Gluten'],
    nutritionalValue: { calories: 350, protein: '10g', carbs: '45g', fat: '11g' },
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=800',
    isWeeklyHighlight: true
  },
  {
    id: 'hbg-007',
    name: 'Roasted Red Pepper Soup',
    price: 5.50,
    category: 'Soups',
    description: 'A rich, velvety soup roasted to perfection and garnished with fresh garden herbs.',
    ingredients: ['Roasted Red Peppers', 'Onion', 'Garlic', 'Vegetable Stock', 'Garden Herbs'],
    allergens: ['None'],
    nutritionalValue: { calories: 180, protein: '4g', carbs: '24g', fat: '3g' },
    image: 'https://images.unsplash.com/photo-1547592165-e1d17fed6005?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'hbg-008',
    name: 'Sweet Potato Curry',
    price: 7.50,
    category: 'Homemade Specials',
    description: 'An aromatic, gentle curry with tender sweet potato slices, local spices, and coconut milk.',
    ingredients: ['Sweet Potato', 'Coconut Milk', 'Turmeric', 'Coriander', 'Basmati Rice'],
    allergens: ['None'],
    nutritionalValue: { calories: 480, protein: '9g', carbs: '65g', fat: '14g' },
    image: 'https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'hbg-009',
    name: 'Beef Burger & Fries',
    price: 6.50,
    category: 'Homemade Specials',
    description: 'Perfectly seasoned organic beef patty, melted cheese, and toasted bun. Served with golden rust-style fries.',
    ingredients: ['Organic Beef Patty', 'Cheddar Leaf', 'Toasted Bun', 'Golden Fries'],
    allergens: ['Gluten', 'Dairy'],
    nutritionalValue: { calories: 690, protein: '34g', carbs: '52g', fat: '28g' },
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=80&w=800',
    isWeeklyHighlight: true
  },
  {
    id: 'hbg-010',
    name: 'Coronation Chicken Wrap',
    price: 5.90,
    category: 'Wraps & Handhelds',
    description: 'Tender chicken strips tossed in our house mild-curry cream, rolled in a toasted tortilla.',
    ingredients: ['Flour Tortilla', 'Chicken Breast Strips', 'Mild Curry Coronation Sauce'],
    allergens: ['Gluten', 'Eggs'],
    nutritionalValue: { calories: 430, protein: '22g', carbs: '38g', fat: '15g' },
    image: 'https://images.unsplash.com/photo-1626700051175-6518c4793f4f?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'hbg-011',
    name: 'Goats Cheese Salad',
    price: 6.50,
    category: 'Salads & Greens',
    description: 'Rich crumbled goat cheese over a vibrant bed of fresh greens and house vinaigrette.',
    ingredients: ['Mixed Forest Greens', 'Goat Cheese Crumble', 'French Vinaigrette'],
    allergens: ['Dairy'],
    nutritionalValue: { calories: 290, protein: '8g', carbs: '12g', fat: '18g' },
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'hbg-012',
    name: 'Classic Victoria Sponge Cake',
    price: 4.00,
    category: 'Cakes & Sweet Treats',
    description: 'Airy, light traditional sponge sponge layers filled with sweet buttercream and strawberry jam.',
    ingredients: ['Flour', 'Buttercream', 'Strawberry Jam'],
    allergens: ['Gluten', 'Dairy', 'Eggs'],
    nutritionalValue: { calories: 340, protein: '4g', carbs: '44g', fat: '12g' },
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'hbg-013',
    name: 'Freshly Baked Carrot Cake',
    price: 4.50,
    category: 'Cakes & Sweet Treats',
    description: 'Delicately spiced moist cake laced with nuts and topped with rich velvety cream cheese frosting.',
    ingredients: ['Carrot', 'Walnuts', 'Cream Cheese Frosting'],
    allergens: ['Gluten', 'Dairy', 'Nuts', 'Eggs'],
    nutritionalValue: { calories: 380, protein: '5g', carbs: '46g', fat: '16g' },
    image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&q=80&w=800'
  }
];

export const EVENTS: CafeEvent[] = [
  {
    id: 'evt-001',
    title: 'Cafe Acoustics',
    date: 'Wednesday, June 17, 2026',
    time: '6:30 PM - 9:30 PM',
    category: 'Arts & Music',
    description: 'Enjoy acoustic live sets and heartwarming local poetry in our cafe space.',
    location: 'Main Cafe Greenhouse Area',
    image: 'https://images.unsplash.com/photo-1511192336575-5a79af67a629?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'evt-002',
    title: 'Illustration & Terrariums',
    date: 'Saturday, June 20, 2026',
    time: '11:00 AM - 1:00 PM',
    category: 'Education',
    description: 'Learn watercolor illustration followed by planting your own closed glass biome terrarium.',
    location: 'Community Hub Workshop',
    image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'evt-003',
    title: 'Urban Conservation & Meetup Forum',
    date: 'Tuesday, June 23, 2026',
    time: '7:00 PM - 8:30 PM',
    category: 'Nature',
    description: 'Open panel with local neighbors regarding sustainable, organic urban rewilding and composting.',
    location: 'Hummingbird Study Lounge',
    image: 'https://images.unsplash.com/photo-1544531586-fde5298cdd40?auto=format&fit=crop&q=80&w=600'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-001',
    name: 'Eleanor Vance',
    role: 'Local Urban Ecologist',
    text: "Hummingbird isn't just my favorite coffee and lunch stop; it's a living, breathing retreat. Working on my field records under the vibrant canopy with a hot Matcha is pure therapeutic bliss.",
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150'
  },
  {
    id: 'test-002',
    name: 'Marcus Brody',
    role: 'Acoustic Guitarist & Singer',
    text: 'Performing at the Rainforest Canopy acoustics night felt truly divine. The sound echoes beautifully through the Monstera leaves, and the community is warm, attentive, and collaborative.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150'
  },
  {
    id: 'test-003',
    name: 'Samir Patel',
    role: 'Neighborhood Community Organizer',
    text: 'Designing community initiatives can be complex, but Hummingbird welcomed our monthly forums with open arms. They embody the authentic spirit of bringing people together to nurture both humans and nature.',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150'
  }
];

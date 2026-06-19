import { MenuItem, CafeEvent, Testimonial } from './types';
import avocadoPoachedEggImage from './assets/images/avocado_poached_egg_1781872898791.jpg';

export const MENU_ITEMS: MenuItem[] = [
  // --- TOASTS & TOASTIES ---
  {
    id: 'tst-001',
    name: 'A Selection of Jams',
    price: 3.50,
    category: 'Toasts & Toasties',
    description: '',
    ingredients: ['Toasted Sourdough', 'Artisanal Jam Selection', 'Butter'],
    allergens: ['Gluten', 'Dairy'],
    nutritionalValue: { calories: 215, protein: '4g', carbs: '42g', fat: '3g' },
    image: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'tst-002',
    name: 'Garlic, Tomato & Olive Oil',
    price: 4.50,
    category: 'Toasts & Toasties',
    description: '',
    ingredients: ['Toasted Sourdough', 'Fresh Garlic Rub', 'Vine Tomatoes', 'Extra Virgin Olive Oil', 'Sea Salt'],
    allergens: ['Gluten'],
    nutritionalValue: { calories: 245, protein: '5g', carbs: '32g', fat: '9g' },
    image: 'https://images.unsplash.com/photo-1572448862527-d3c904757de6?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'tst-003',
    name: 'Ham & Cheese',
    price: 4.90,
    category: 'Toasts & Toasties',
    description: '',
    ingredients: ['Farmhouse Bread', 'Cured Ham Slices', 'Mature Cheddar Cheese'],
    allergens: ['Gluten', 'Dairy'],
    nutritionalValue: { calories: 410, protein: '22g', carbs: '35g', fat: '16g' },
    image: 'https://images.unsplash.com/photo-1475090169767-40ed8d18a67d?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'tst-004',
    name: 'Cheese & Peppers',
    price: 4.90,
    category: 'Toasts & Toasties',
    description: '',
    ingredients: ['Sourdough Bread', 'Roasted Red Peppers', 'Cheddar Blend', 'Mozzarella', 'Sweet Basil'],
    allergens: ['Gluten', 'Dairy'],
    nutritionalValue: { calories: 385, protein: '15g', carbs: '36g', fat: '14g' },
    image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'tst-005',
    name: 'Spinach, Garlic & Cheese',
    price: 5.50,
    category: 'Toasts & Toasties',
    description: '',
    ingredients: ['Multi-grain Toast', 'Sautéed Spinach', 'Fresh Chopped Garlic', 'Swiss Cheese', 'Cheddar Cheese'],
    allergens: ['Gluten', 'Dairy'],
    nutritionalValue: { calories: 365, protein: '14g', carbs: '30g', fat: '15g' },
    image: 'https://images.unsplash.com/photo-1538220856186-0be0c085984d?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'tst-006',
    name: 'Avocado & Poached Egg',
    price: 6.90,
    category: 'Toasts & Toasties',
    description: '',
    ingredients: ['Thick Cut Sourdough', 'Avocado Mash', 'Poached Egg', 'Chili Flakes', 'Maldon Salt'],
    allergens: ['Gluten', 'Eggs'],
    nutritionalValue: { calories: 395, protein: '14g', carbs: '28g', fat: '19g' },
    image: avocadoPoachedEggImage,
    isWeeklyHighlight: true
  },

  // --- SANDWICHES ---
  {
    id: 'sdw-001',
    name: 'Turkey & Cheese',
    price: 4.90,
    category: 'Sandwiches',
    description: '',
    ingredients: ['Farmhouse Bread', 'Roast Turkey Breast', 'Swiss Cheese', 'Lolo Rosso Lettuce', 'Dijon Spread'],
    allergens: ['Gluten', 'Dairy'],
    nutritionalValue: { calories: 420, protein: '26g', carbs: '34g', fat: '12g' },
    image: 'https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'sdw-002',
    name: 'Tuna, Egg & Mayo',
    price: 4.90,
    category: 'Sandwiches',
    description: '',
    ingredients: ['Wholemeal Bread', 'Flaked Tuna', 'Boiled Egg', 'Real Mayonnaise', 'Teaser Dill', 'Cucumber'],
    allergens: ['Gluten', 'Eggs', 'Fish'],
    nutritionalValue: { calories: 460, protein: '28g', carbs: '32g', fat: '18g' },
    image: 'https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'sdw-003',
    name: 'Peppers & Hummus',
    price: 4.90,
    category: 'Sandwiches',
    description: '',
    ingredients: ['Wholemeal Bread', 'Flame Roasted Peppers', 'Rich Creamy Hummus', 'Wild Rocket Slices'],
    allergens: ['Gluten', 'Sesame'],
    nutritionalValue: { calories: 340, protein: '10g', carbs: '44g', fat: '11g' },
    image: 'https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'sdw-004',
    name: 'Chicken, Lettuce & Tomato',
    price: 5.50,
    category: 'Sandwiches',
    description: '',
    ingredients: ['White Granary Slices', 'Grilled Chicken Strips', 'Cos Lettuce Leaves', 'Plum Vine Tomatoes', 'Light Mayo'],
    allergens: ['Gluten', 'Eggs'],
    nutritionalValue: { calories: 395, protein: '25g', carbs: '35g', fat: '10g' },
    image: 'https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'sdw-005',
    name: 'Avocado, Tomato & Egg',
    price: 5.50,
    category: 'Sandwiches',
    description: '',
    ingredients: ['Crusty Farmhouse Bread', 'Seasoned Avocado Pieces', 'Vine Tomatoes', 'Boiled Egg Slices'],
    allergens: ['Gluten', 'Eggs'],
    nutritionalValue: { calories: 380, protein: '12g', carbs: '33g', fat: '16g' },
    image: 'https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&q=80&w=800'
  },

  // --- BREAKFAST SPECIALS ---
  {
    id: 'bsp-001',
    name: 'Scrambled Eggs on Toast',
    price: 6.50,
    category: 'Breakfast Specials',
    description: 'Your choice of up to 3 ingredients scrambled together, spread out on your choice of toast.',
    ingredients: ['Eggs', 'Sourdough Toast', 'Salt & Pepper'],
    allergens: ['Eggs', 'Gluten'],
    nutritionalValue: { calories: 390, protein: '18g', carbs: '28g', fat: '15g' },
    image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'bsp-002',
    name: 'Omelette',
    price: 6.90,
    category: 'Breakfast Specials',
    description: 'Your choice of up to 3 ingredients scrambled together, with a side of toast.',
    ingredients: ['Three Fresh Farm Eggs', 'Salt & Pepper Blend', 'Farmhouse Toast'],
    allergens: ['Eggs', 'Gluten'],
    nutritionalValue: { calories: 420, protein: '24g', carbs: '24g', fat: '19g' },
    image: 'https://images.unsplash.com/photo-1494597564530-871f2b93ac55?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'bsp-003',
    name: 'Mini English',
    price: 7.50,
    category: 'Breakfast Specials',
    description: 'Sausage, bacon, fried egg, hash brown, baked beans & toast.',
    ingredients: ['Sausage link', 'Back bacon rashers', 'Fried farm egg', 'Hash brown', 'Baked beans', 'Sourdough toast'],
    allergens: ['Gluten', 'Eggs'],
    nutritionalValue: { calories: 590, protein: '31g', carbs: '46g', fat: '28g' },
    image: 'https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'bsp-004',
    name: 'Vegan Breakfast',
    price: 8.50,
    category: 'Breakfast Specials',
    description: 'Combination of veggies lightly stir-fried, with a side of grilled tomatoes, avocado & sourdough.',
    ingredients: ['Mixed Stir Fry Veggies', 'Grilled Tomatoes', 'Avocado Slices', 'Sourdough Toast'],
    allergens: ['Gluten'],
    nutritionalValue: { calories: 440, protein: '12g', carbs: '49g', fat: '18g' },
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'bsp-005',
    name: 'Large English Breakfast',
    price: 9.50,
    category: 'Breakfast Specials',
    description: 'Two sausages, two rashes of bacon, fried mushrooms, grilled tomatoes, two fried eggs, two hash browns, baked beans & toast.',
    ingredients: ['Two sausages', 'Two bacon rashes', 'Fried button mushrooms', 'Grilled hybrid tomatoes', 'Two fried eggs', 'Two hash browns', 'Baked beans', 'Farmhouse toast'],
    allergens: ['Gluten', 'Eggs'],
    nutritionalValue: { calories: 980, protein: '55g', carbs: '78g', fat: '52g' },
    image: 'https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?auto=format&fit=crop&q=80&w=800'
  },

  // --- SOUPS ---
  {
    id: 'sop-001',
    name: 'Soup of the Day',
    price: 4.00,
    category: 'Soups',
    description: '',
    ingredients: ['Freshly harvested seasonal local vegetables', 'Clear vegetable base broth', 'Herbs'],
    allergens: [],
    nutritionalValue: { calories: 150, protein: '3g', carbs: '24g', fat: '2g' },
    image: 'https://images.unsplash.com/photo-1547592165-e1d17fed6005?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'sop-002',
    name: 'Courgette Soup',
    price: 4.50,
    category: 'Soups',
    description: '',
    ingredients: ['Marrow courgettes', 'Finely sliced spring onion', 'Vegetable broth', 'Fresh mint'],
    allergens: [],
    nutritionalValue: { calories: 140, protein: '4g', carbs: '20g', fat: '3g' },
    image: 'https://images.unsplash.com/photo-1547592165-e1d17fed6005?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'sop-003',
    name: 'Lentil Soup',
    price: 4.50,
    category: 'Soups',
    description: '',
    ingredients: ['Red Split Lentils', 'Stirred carrot pieces', 'Traditional celery stalks', 'Cumin powder'],
    allergens: [],
    nutritionalValue: { calories: 230, protein: '14g', carbs: '38g', fat: '1g' },
    image: 'https://images.unsplash.com/photo-1547592165-e1d17fed6005?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'sop-004',
    name: 'Roasted Red Pepper Soup',
    price: 5.50,
    category: 'Soups',
    description: '',
    ingredients: ['Charred sweet red peppers', 'Tender onions', 'Slow roasted garlic cloves', 'Fresh basil infusion'],
    allergens: [],
    nutritionalValue: { calories: 180, protein: '5g', carbs: '29g', fat: '3g' },
    image: 'https://images.unsplash.com/photo-1547592165-e1d17fed6005?auto=format&fit=crop&q=80&w=800'
  },

  // --- HOMEMADE ---
  {
    id: 'hmd-001',
    name: 'Vegetable Rice Stir Fry',
    price: 6.50,
    category: 'Homemade',
    description: '',
    ingredients: ['Long grain rice', 'Broccoli heads', 'Crush sweet carrots', 'Button mushrooms', 'Sesame-flavored oil'],
    allergens: ['Sesame'],
    nutritionalValue: { calories: 370, protein: '8g', carbs: '65g', fat: '6g' },
    image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'hmd-002',
    name: 'Beef Burger & Fries',
    price: 6.50,
    category: 'Homemade',
    description: '',
    ingredients: ['Prime grass-fed beef patty', 'Soft toasted sesame brioche bun', 'Classic thick-cut French fries'],
    allergens: ['Gluten', 'Sesame'],
    nutritionalValue: { calories: 730, protein: '38g', carbs: '68g', fat: '32g' },
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'hmd-003',
    name: 'Vegetable Lasagna',
    price: 7.50,
    category: 'Homemade',
    description: '',
    ingredients: ['Wholewheat pasta sheets', 'Chargrilled courgettes', 'Rich rich red marinara sauce', 'Béchamel white sauce', 'Melted parmesan'],
    allergens: ['Gluten', 'Dairy'],
    nutritionalValue: { calories: 430, protein: '17g', carbs: '48g', fat: '16g' },
    image: 'https://images.unsplash.com/photo-1574894709920-11b28e7367e3?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'hmd-004',
    name: 'Shepherds Pie',
    price: 7.50,
    category: 'Homemade',
    description: '',
    ingredients: ['Sautéed minced lamb', 'Garden peas and carrots stir', 'Thick brown onion gravy', 'Whipped mashed potato top'],
    allergens: ['Dairy'],
    nutritionalValue: { calories: 485, protein: '28g', carbs: '38g', fat: '21g' },
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'hmd-005',
    name: 'Sweet Potato Curry',
    price: 7.50,
    category: 'Homemade',
    description: '',
    ingredients: ['Cubed roasted sweet potatoes', 'Protein-filled chickpeas', 'Creamy coconut milk broth', 'Madras spice blend', 'Basmati rice side'],
    allergens: [],
    nutritionalValue: { calories: 450, protein: '11g', carbs: '72g', fat: '10g' },
    image: 'https://images.unsplash.com/photo-1545247181-516773cae7bc?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'hmd-006',
    name: 'Beef Lasagna',
    price: 7.50,
    category: 'Homemade',
    description: '',
    ingredients: ['Pasta sheets', 'Slow simmered minced beef bolognese', 'Creamy white béchamel', 'Parmigiano-Reggiano', 'Mozzarella crust'],
    allergens: ['Gluten', 'Dairy'],
    nutritionalValue: { calories: 510, protein: '32g', carbs: '45g', fat: '22g' },
    image: 'https://images.unsplash.com/photo-1574894709920-11b28e7367e3?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'hmd-007',
    name: 'Chicken & Veg Stir Fry',
    price: 8.50,
    category: 'Homemade',
    description: '',
    ingredients: ['Sautéed chicken breast strips', 'Crusty red/green bell peppers', 'Sweet red onion', 'Crunchy bean sprouts', 'Glazing ginger-soy sauce'],
    allergens: ['Soy'],
    nutritionalValue: { calories: 420, protein: '34g', carbs: '35g', fat: '12g' },
    image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'hmd-008',
    name: 'Hummus, Veggie Bowl',
    price: 8.50,
    category: 'Homemade',
    description: '',
    ingredients: ['House smooth organic hummus', 'Quinoa base', 'Crisp cucumber salad', 'Shredded carrot ribbons', 'Wilted baby spinach'],
    allergens: ['Sesame'],
    nutritionalValue: { calories: 390, protein: '12g', carbs: '48g', fat: '14g' },
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'hmd-009',
    name: 'Prawn Curry & Rice',
    price: 8.50,
    category: 'Homemade',
    description: '',
    ingredients: ['Ocean wild prawns', 'Simmered tomato-onion gravy', 'Fresh green chilies', 'Aromatic basmati rice'],
    allergens: ['Shellfish'],
    nutritionalValue: { calories: 410, protein: '24g', carbs: '59g', fat: '8g' },
    image: 'https://images.unsplash.com/photo-1545247181-516773cae7bc?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'hmd-010',
    name: 'Peppered Chicken & Rice',
    price: 8.50,
    category: 'Homemade',
    description: '',
    ingredients: ['Pan-seared chicken breast', 'Heavy black pepper seasoning sauce', 'Bell pepper medley sauté', 'Boiled rice side'],
    allergens: [],
    nutritionalValue: { calories: 440, protein: '33g', carbs: '54g', fat: '10g' },
    image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&q=80&w=800'
  },

  // --- WRAPS ---
  {
    id: 'wrp-001',
    name: 'Tuna, Egg & Rice',
    price: 4.90,
    category: 'Wraps',
    description: '',
    ingredients: ['Flaked Albacore tuna', 'Hard-boiled egg wedges', 'Spiced brown rice', 'Soft flour wrap'],
    allergens: ['Gluten', 'Eggs', 'Fish'],
    nutritionalValue: { calories: 395, protein: '22g', carbs: '44g', fat: '11g' },
    image: 'https://images.unsplash.com/photo-1626700051175-6518c4793f4f?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'wrp-002',
    name: 'Curry, Chickpea & Salad',
    price: 4.90,
    category: 'Wraps',
    description: '',
    ingredients: ['Slow cooked madras chickpea', 'Fresh wild salad mix', 'Flour wrap'],
    allergens: ['Gluten'],
    nutritionalValue: { calories: 320, protein: '9g', carbs: '49g', fat: '8g' },
    image: 'https://images.unsplash.com/photo-1626700051175-6518c4793f4f?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'wrp-003',
    name: 'Tuna, Cheese & Cucumber',
    price: 4.90,
    category: 'Wraps',
    description: '',
    ingredients: ['Flaked tuna meat', 'Shredded mature cheddar', 'Sliced English cucumber', 'Flour tortilla wrap'],
    allergens: ['Gluten', 'Dairy', 'Fish'],
    nutritionalValue: { calories: 375, protein: '20g', carbs: '42g', fat: '12g' },
    image: 'https://images.unsplash.com/photo-1626700051175-6518c4793f4f?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'wrp-004',
    name: 'Hummus & Veggies',
    price: 5.90,
    category: 'Wraps',
    description: '',
    ingredients: ['Garlic chickpea hummus', 'Mixed spinach & carrots', 'Cucumber sticks', 'Wholewheat wrap'],
    allergens: ['Gluten', 'Sesame'],
    nutritionalValue: { calories: 290, protein: '8g', carbs: '44g', fat: '9g' },
    image: 'https://images.unsplash.com/photo-1626700051175-6518c4793f4f?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'wrp-005',
    name: 'Coronation Chicken',
    price: 5.90,
    category: 'Wraps',
    description: '',
    ingredients: ['Chopped chicken breast', 'Sweet mango chutney dressing', 'Curry powder', 'Pitted sultanas', 'Tortilla wrap'],
    allergens: ['Gluten', 'Dairy'],
    nutritionalValue: { calories: 410, protein: '25g', carbs: '44g', fat: '14g' },
    image: 'https://images.unsplash.com/photo-1626700051175-6518c4793f4f?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'wrp-006',
    name: 'Prawn, Lettuce & Mayo',
    price: 6.50,
    category: 'Wraps',
    description: '',
    ingredients: ['Tender cold water prawns', 'Crisp gem lettuce', 'Real rich mayonnaise', 'Soft flour tortilla'],
    allergens: ['Gluten', 'Eggs', 'Shellfish'],
    nutritionalValue: { calories: 360, protein: '19g', carbs: '41g', fat: '12g' },
    image: 'https://images.unsplash.com/photo-1626700051175-6518c4793f4f?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'wrp-007',
    name: 'Chicken Cesar Salad',
    price: 6.50,
    category: 'Wraps',
    description: '',
    ingredients: ['Sliced chicken breast', 'Romaine lettuce leaves', 'Creamy Caesar dressing', 'Parmesan shavings', 'Grate tortilla wrap'],
    allergens: ['Gluten', 'Dairy', 'Eggs'],
    nutritionalValue: { calories: 420, protein: '26g', carbs: '42g', fat: '16g' },
    image: 'https://images.unsplash.com/photo-1626700051175-6518c4793f4f?auto=format&fit=crop&q=80&w=800'
  },

  // --- A SLICE OF PIE ---
  {
    id: 'pie-001',
    name: 'Vegetable Pie',
    price: 5.50,
    category: 'A Slice of Pie',
    description: 'Each served with a side of salad',
    ingredients: ['Mixed fresh garden vegetables', 'Herb infused gravy', 'Golden pastry crust'],
    allergens: ['Gluten'],
    nutritionalValue: { calories: 310, protein: '6g', carbs: '41g', fat: '12g' },
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'pie-002',
    name: 'Spinach Pie',
    price: 5.50,
    category: 'A Slice of Pie',
    description: 'Each served with a side of salad',
    ingredients: ['Garden fresh spinach leaves', 'Crumbled feta cheese', 'Crispy traditional phyllo dough'],
    allergens: ['Gluten', 'Dairy'],
    nutritionalValue: { calories: 295, protein: '8g', carbs: '33g', fat: '13g' },
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'pie-003',
    name: 'Cauliflower Cheese Pie',
    price: 5.50,
    category: 'A Slice of Pie',
    description: 'Each served with a side of salad',
    ingredients: ['Cauliflower florets', 'Sharp rich cheddar sauce', 'Flaky butter pastry shell'],
    allergens: ['Gluten', 'Dairy'],
    nutritionalValue: { calories: 340, protein: '9g', carbs: '38g', fat: '15g' },
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'pie-004',
    name: 'Chicken Pot Pie',
    price: 6.50,
    category: 'A Slice of Pie',
    description: 'Each served with a side of salad',
    ingredients: ['Diced chicken breast meat', 'Carrots and peas in white sauce', 'Flaky puff puff pastry topper'],
    allergens: ['Gluten', 'Dairy'],
    nutritionalValue: { calories: 430, protein: '22g', carbs: '44g', fat: '20g' },
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=800'
  },

  // --- ICE CREAM ---
  {
    id: 'ice-001',
    name: 'Ice Cream Cone',
    price: 2.00,
    category: 'Ice Cream',
    description: 'Range of toppings available',
    ingredients: ['Your choice of ice cream flavor', 'Crispy waffle cone shell'],
    allergens: ['Gluten', 'Dairy'],
    nutritionalValue: { calories: 180, protein: '3g', carbs: '28g', fat: '6g' },
    image: 'https://images.unsplash.com/photo-1501443762994-82bd5dace89a?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'ice-002',
    name: 'Drip Milkshake',
    price: 4.50,
    category: 'Ice Cream',
    description: 'Strawberry, banana or chocolate milkshake with whipped cream & matching toppings.',
    ingredients: ['Fresh milk', 'Premium ice cream base', 'Strawberry, banana, or cocoa syrup', 'Fluffy whipped cream'],
    allergens: ['Dairy'],
    nutritionalValue: { calories: 460, protein: '9g', carbs: '64g', fat: '18g' },
    image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'ice-003',
    name: 'Ice Cream Sundae',
    price: 5.50,
    category: 'Ice Cream',
    description: '3 Scoops of ice cream, sauce, syrup, sprinkles, whipped cream & marshmallows.',
    ingredients: ['3 scoops of ice cream', 'Sweet dessert sauce', 'Flavored syrups', 'Sugar sprinkles', 'Whipped cream', 'Marshmallow pieces'],
    allergens: ['Dairy'],
    nutritionalValue: { calories: 540, protein: '8g', carbs: '78g', fat: '20g' },
    image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'ice-004',
    name: 'Banana Split',
    price: 5.50,
    category: 'Ice Cream',
    description: 'Banana, 3 scoops of ice cream, sauce or syrup & whipped cream.',
    ingredients: ['Whole fresh ripe banana', '3 scoops of ice cream', 'Chocolate sauce or fruit syrup', 'Whipped cream'],
    allergens: ['Dairy'],
    nutritionalValue: { calories: 510, protein: '7g', carbs: '74g', fat: '19g' },
    image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&q=80&w=800'
  },

  // --- SWEET CORNER ---
  {
    id: 'swc-001',
    name: 'Fruit Yoghurt Pot',
    price: 5.50,
    category: 'Sweet Corner',
    description: 'A blend of Fresh Fruit, Oats & Yogurt',
    ingredients: ['Fresh organic berries and fruits', 'Rolled oats', 'Rich Greek yogurt'],
    allergens: ['Dairy', 'Gluten'],
    nutritionalValue: { calories: 290, protein: '11g', carbs: '46g', fat: '4g' },
    image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'swc-002',
    name: 'Fruit Salad',
    price: 4.90,
    category: 'Sweet Corner',
    description: 'A fruit cocktail containing your favourites sliced into bite sizes pieces.',
    ingredients: ['Sliced apples', 'Wild juicy berries', 'Kiwi slices', 'Oranges', 'Pineapple chunks'],
    allergens: [],
    nutritionalValue: { calories: 120, protein: '2g', carbs: '28g', fat: '0g' },
    image: 'https://images.unsplash.com/photo-1519996521430-02b798c1d881?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'swc-003',
    name: 'Pancakes',
    price: 4.90,
    category: 'Sweet Corner',
    description: 'Only to fluffy homemade pancakes.',
    ingredients: ['Fluffy gold pancakes', 'Fresh flour batter', 'Leavened organic baking mix'],
    allergens: ['Gluten', 'Eggs', 'Dairy'],
    nutritionalValue: { calories: 350, protein: '8g', carbs: '59g', fat: '8g' },
    image: 'https://images.unsplash.com/photo-1528207776546-365bb710ee93?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'swc-004',
    name: 'Waffles',
    price: 4.90,
    category: 'Sweet Corner',
    description: 'Golden brown Belgian waffles.',
    ingredients: ['Freshly grid belgian waffle', 'Sweet waffle butter mix'],
    allergens: ['Gluten', 'Eggs', 'Dairy'],
    nutritionalValue: { calories: 370, protein: '7g', carbs: '61g', fat: '9g' },
    image: 'https://images.unsplash.com/photo-1562376502-6f769499c886?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'swc-005',
    name: 'Waffle Box',
    price: 20.00,
    category: 'Sweet Corner',
    description: '10 Waffles with your choice of ingredients.',
    ingredients: ['10 freshly baked premium waffles', 'Selection of assorted ingredients'],
    allergens: ['Gluten', 'Eggs', 'Dairy'],
    nutritionalValue: { calories: 2400, protein: '45g', carbs: '380g', fat: '70g' },
    image: 'https://images.unsplash.com/photo-1562376502-6f769499c886?auto=format&fit=crop&q=80&w=800'
  },

  // --- SALADS ---
  {
    id: 'sld-001',
    name: 'Tuna Salad',
    price: 5.50,
    category: 'Salads',
    description: '',
    ingredients: ['Pole caught albacore tuna', 'Crisp romaine lettuce', 'Draped olive oil', 'English cucumber slices'],
    allergens: ['Fish'],
    nutritionalValue: { calories: 280, protein: '24g', carbs: '8g', fat: '14g' },
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'sld-002',
    name: 'Chickpea Salad',
    price: 5.50,
    category: 'Salads',
    description: '',
    ingredients: ['Organic boiled chickpeas', 'Diced red tomatoes', 'Cucumber bites', 'Chopped parsley leaves', 'Lemon-herb vinaigrette dressing'],
    allergens: [],
    nutritionalValue: { calories: 240, protein: '9g', carbs: '34g', fat: '6g' },
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'sld-003',
    name: 'Tuna Rice Salad',
    price: 5.50,
    category: 'Salads',
    description: '',
    ingredients: ['Flaked tuna meat', 'Steamed whole grain brown rice', 'Sweet garden corn', 'Finely sliced red capsicums', 'Lemon salad wrap dressing'],
    allergens: ['Fish'],
    nutritionalValue: { calories: 340, protein: '21g', carbs: '42g', fat: '9g' },
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'sld-004',
    name: 'Pasta Salad',
    price: 6.50,
    category: 'Salads',
    description: '',
    ingredients: ['Tricolor spiral fusilli noodles', 'Black kalamata olives halves', 'Sweet cherry tomatoes', 'Cubed mild cheddar', 'Zesty Italian vinaigrette dress'],
    allergens: ['Gluten', 'Dairy'],
    nutritionalValue: { calories: 380, protein: '11g', carbs: '48g', fat: '14g' },
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'sld-005',
    name: 'Goats Cheese Salad',
    price: 6.50,
    category: 'Salads',
    description: '',
    ingredients: ['Creamy soft goat cheese logs', 'Baby leaf spinach leaves', 'Red grapes halves', 'Toasted walnuts', 'Balsamic reduction glaze'],
    allergens: ['Dairy', 'Nuts'],
    nutritionalValue: { calories: 310, protein: '9g', carbs: '18g', fat: '21g' },
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'sld-006',
    name: 'Chicken Cesar Salad',
    price: 6.50,
    category: 'Salads',
    description: '',
    ingredients: ['Sliced pan-seared chicken breast', 'Crunchy Romaine hearts', 'Toasted garlic sourdough croutons', 'Shaved Grana Padano parmesan', 'Rich garlic Caesar dressing'],
    allergens: ['Gluten', 'Dairy', 'Eggs'],
    nutritionalValue: { calories: 430, protein: '31g', carbs: '15g', fat: '26g' },
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=800'
  },

  // --- CAKES ---
  {
    id: 'cak-001',
    name: 'Cupcakes',
    price: 2.50,
    category: 'Cakes',
    description: '',
    ingredients: ['Sweet sponge muffin cake base', 'Creamy vanilla or cocoa buttercream swirl frosting'],
    allergens: ['Gluten', 'Eggs', 'Dairy'],
    nutritionalValue: { calories: 230, protein: '3g', carbs: '32g', fat: '10g' },
    image: 'https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'cak-002',
    name: 'Victoria Sponge',
    price: 4.00,
    category: 'Cakes',
    description: '',
    ingredients: ['Traditional light layered sponge', 'Vibrant strawberry seed jam layer', 'Vanilla buttercream filling'],
    allergens: ['Gluten', 'Eggs', 'Dairy'],
    nutritionalValue: { calories: 360, protein: '5g', carbs: '49g', fat: '15g' },
    image: 'https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'cak-003',
    name: 'Cheesecake',
    price: 4.00,
    category: 'Cakes',
    description: '',
    ingredients: ['Crispy buttered digestive biscuit crust base', 'Sweet fluffy cream cheese batter filling', 'Vanilla beans pod extract'],
    allergens: ['Gluten', 'Dairy'],
    nutritionalValue: { calories: 410, protein: '7g', carbs: '39g', fat: '25g' },
    image: 'https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'cak-004',
    name: 'Chocolate Cake',
    price: 4.50,
    category: 'Cakes',
    description: '',
    ingredients: ['Rich moist cocoa layered cake layers', 'Decadent dark chocolate frosting glaze chocolate bits'],
    allergens: ['Gluten', 'Eggs', 'Dairy'],
    nutritionalValue: { calories: 440, protein: '6g', carbs: '52g', fat: '22g' },
    image: 'https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'cak-005',
    name: 'Carrot Cake',
    price: 4.50,
    category: 'Cakes',
    description: '',
    ingredients: ['Spiced moist cake base with fresh grated carrot pieces', 'Toasted chopped walnuts', 'Tangy rich cream cheese frosting topper'],
    allergens: ['Gluten', 'Dairy', 'Eggs', 'Nuts'],
    nutritionalValue: { calories: 390, protein: '5g', carbs: '44g', fat: '21g' },
    image: 'https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&q=80&w=800'
  },

  // --- JACKET POTATO ---
  {
    id: 'pot-001',
    name: 'Small Jacket Potato',
    price: 7.50,
    category: 'Jacket Potato',
    description: 'With your choice of toppings',
    ingredients: ['Fluffy oven roasted standard Russet', 'Traditional butter pat'],
    allergens: ['Dairy'],
    nutritionalValue: { calories: 290, protein: '5g', carbs: '58g', fat: '4g' },
    image: 'https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'pot-002',
    name: 'Large Jacket Potato',
    price: 9.50,
    category: 'Jacket Potato',
    description: 'With your choice of toppings',
    ingredients: ['Heavily baked jumbo size Russet', 'Generous butter mix'],
    allergens: ['Dairy'],
    nutritionalValue: { calories: 410, protein: '8g', carbs: '84g', fat: '6g' },
    image: 'https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'pot-003',
    name: 'Small Sweet Jacket Potato',
    price: 7.50,
    category: 'Jacket Potato',
    description: 'With your choice of toppings',
    ingredients: ['Tender sweet potato baked whole shell', 'Salted whipped butter'],
    allergens: ['Dairy'],
    nutritionalValue: { calories: 260, protein: '4g', carbs: '52g', fat: '3g' },
    image: 'https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'pot-004',
    name: 'Large Sweet Jacket Potato',
    price: 9.50,
    category: 'Jacket Potato',
    description: 'With your choice of toppings',
    ingredients: ['Generous sized sweet potato caramelized', 'Double whipped salted butter fluff'],
    allergens: ['Dairy'],
    nutritionalValue: { calories: 380, protein: '6g', carbs: '78g', fat: '5g' },
    image: 'https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?auto=format&fit=crop&q=80&w=800'
  }
];

export const EVENTS: CafeEvent[] = [
  {
    id: 'evt-001',
    title: 'Expresso Your Potential: Barista & Resume Masterclass',
    date: 'Saturday, June 27, 2026',
    time: '10:30 AM - 12:30 PM',
    category: 'Education',
    description: 'Our custom hands-on session focusing on professional coffee brewing basics combined with Canva design layouts and resume polishing strategies to unlock local talent.',
    location: 'Hummingbird Study Lounge',
    image: 'https://images.unsplash.com/photo-1517256064527-09c53b2d0bc6?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'evt-002',
    title: 'Private Community Outreach Tea Party',
    date: 'Sunday, July 5, 2026',
    time: '2:00 PM - 5:00 PM',
    category: 'Community',
    description: 'A cozy, sponsored charity gathering featuring premium organic tea, pastry pairings, and fun lighthearted games for local families, elders, and children to cultivate connection.',
    location: 'Main Cafe Greenhouse Area',
    image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'evt-003',
    title: 'Noon Network Nibbling Showcase Mixer',
    date: 'Wednesday, July 8, 2026',
    time: '12:00 PM - 2:00 PM',
    category: 'Community',
    description: 'Our premium professional speed-networking slot and signature Mediterranean hot buffet lunch. Exchange business cards, share insights, and spark partnerships.',
    location: 'Community Hub Workshop',
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=600'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-001',
    name: 'Julie S.',
    role: 'Local Google Reviewer',
    text: "Super friendly service and the coffee is excellent. The selection of healthy options, particularly the toasted wraps, fresh salads, and custom bakes, is fantastic. We loved relaxing in their beautiful new Eurocity spot!",
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150'
  },
  {
    id: 'test-002',
    name: 'Peter B.',
    role: 'Gibraltar Local Guide',
    text: "Amazing space, brilliant hospitality and outstanding specialty coffee. Highly recommend for any dietary preference – they have a great selection of gluten-free treats and plant-based dishes. Easily the finest cafe on the Rock!",
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150'
  },
  {
    id: 'test-003',
    name: 'Sarah T.',
    role: 'Eurocity Regular Paton',
    text: "Absolutely lovely cafe! The atmosphere is always warm and incredibly welcoming, the lattes are delicious, and the staff are exceptionally attentive. It's the perfect place to catch up on work or meet friends.",
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150'
  },
  {
    id: 'test-004',
    name: 'Marcus G.',
    role: 'Verified Customer',
    text: "A massive upgrade at their gorgeous new location in Eurocity Passage! Top-tier specialty espresso, healthy food prepared fresh daily, and wonderfully kind customer service. It truly is a sanctuary.",
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150'
  }
];

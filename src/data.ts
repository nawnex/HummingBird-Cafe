import { MenuItem, CafeEvent, Testimonial } from './types';

export const MENU_ITEMS: MenuItem[] = [
  // --- TOASTS & TOASTIES ---
  {
    id: 'tst-001',
    name: 'A Selection of Jams',
    price: 3.50,
    category: 'Toasts & Toasties',
    description: 'A selection of our sweet artisanal jams served with toasted sourdough crusts.',
    ingredients: ['Toasted Sourdough', 'Artisanal Jam Selection', 'Butter'],
    allergens: ['Gluten', 'Dairy'],
    nutritionalValue: { calories: 210, protein: '4g', carbs: '42g', fat: '3g' },
    image: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'tst-002',
    name: 'Garlic, Tomato & Olive Oil',
    price: 4.50,
    category: 'Toasts & Toasties',
    description: 'Crisp toasted bread rubbed with fresh pungent garlic, seasoned vine tomatoes, and extra virgin olive oil.',
    ingredients: ['Toasted Sourdough', 'Fresh Garlic Rub', 'Vine Tomatoes', 'Extra Virgin Olive Oil', 'Sea Salt'],
    allergens: ['Gluten'],
    nutritionalValue: { calories: 240, protein: '6g', carbs: '32g', fat: '9g' },
    image: 'https://images.unsplash.com/photo-1572448862527-d3c904757de6?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'tst-003',
    name: 'Ham & Cheese Toastie',
    price: 4.90,
    category: 'Toasts & Toasties',
    description: 'Savory premium cured ham and melted cheddar cheese pressed in fresh farmhouse bread.',
    ingredients: ['Farmhouse Bread', 'Cured Ham Slices', 'Mature Cheddar Cheese'],
    allergens: ['Gluten', 'Dairy'],
    nutritionalValue: { calories: 410, protein: '22g', carbs: '35g', fat: '16g' },
    image: 'https://images.unsplash.com/photo-1475090169767-40ed8d18a67d?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'tst-004',
    name: 'Cheese & Peppers Toastie',
    price: 4.90,
    category: 'Toasts & Toasties',
    description: 'Triple-cheese sourdough blend melted over sweet flame-roasted bell peppers and red onions.',
    ingredients: ['Sourdough Bread', 'Roasted Red Peppers', 'Cheddar Blend', 'Mozzarella', 'Sweet Basil'],
    allergens: ['Gluten', 'Dairy'],
    nutritionalValue: { calories: 380, protein: '15g', carbs: '36g', fat: '14g' },
    image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'tst-005',
    name: 'Spinach, Garlic & Cheese',
    price: 5.50,
    category: 'Toasts & Toasties',
    description: 'Sautéed forest spinach seasoned with garden garlic and a rich melted Swiss & cheddar cheese blend on wholesome grain toast.',
    ingredients: ['Multi-grain Toast', 'Sautéed Spinach', 'Fresh Chopped Garlic', 'Swiss Cheese', 'Cheddar Cheese'],
    allergens: ['Gluten', 'Dairy'],
    nutritionalValue: { calories: 360, protein: '14g', carbs: '30g', fat: '15g' },
    image: 'https://images.unsplash.com/photo-1541532713592-79a0317b6b77?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'tst-006',
    name: 'Avocado & Poached Egg Toast',
    price: 6.90,
    category: 'Toasts & Toasties',
    description: 'Smashed organic seasoned avocado with a perfectly runny poached egg on thick cut sourdough. Personalise Your Snack: Switch, add or remove ingredients!',
    ingredients: ['Thick Cut Sourdough', 'Avocado Mash', 'Poached Egg', 'Chili Flakes', 'Maldon Salt'],
    allergens: ['Gluten', 'Eggs'],
    nutritionalValue: { calories: 390, protein: '14g', carbs: '28g', fat: '19g' },
    image: 'https://images.unsplash.com/photo-1541532713592-79a0317b6b77?auto=format&fit=crop&q=80&w=800',
    isWeeklyHighlight: true
  },

  // --- SANDWICHES ---
  {
    id: 'sdw-001',
    name: 'Turkey & Cheese Sandwich',
    price: 4.90,
    category: 'Sandwiches',
    description: 'Lean carved roast turkey breast, mature Swiss cheese, crisp bibb lettuce, and mustard cream on freshly baked farmhouse bread.',
    ingredients: ['Farmhouse Bread', 'Roast Turkey Breast', 'Swiss Cheese', 'Lolo Rosso Lettuce', 'Dijon Spread'],
    allergens: ['Gluten', 'Dairy'],
    nutritionalValue: { calories: 420, protein: '26g', carbs: '34g', fat: '12g' },
    image: 'https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'sdw-002',
    name: 'Tuna, Egg & Mayo Sandwich',
    price: 4.90,
    category: 'Sandwiches',
    description: 'Dolphin-safe pole-caught tuna salad layered with soft hard-boiled egg slices, light mayonnaise, and cucumber ribbons.',
    ingredients: ['Wholemeal Bread', 'Flaked Tuna', 'Boiled Egg', 'Real Mayonnaise', 'Teaser Dill', 'Cucumber'],
    allergens: ['Gluten', 'Eggs', 'Fish'],
    nutritionalValue: { calories: 460, protein: '28g', carbs: '32g', fat: '18g' },
    image: 'https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'sdw-003',
    name: 'Peppers & Hummus Sandwich',
    price: 4.90,
    category: 'Sandwiches',
    description: 'Generous rich organic chickpea hummus, slow-roasted sweet bell pepper strips, and baby spinach leaves on seeded wholewheat.',
    ingredients: ['Seeded Wholewheat Bread', 'Original Hummus', 'Roasted Sweet Bell Peppers', 'Baby Spinach'],
    allergens: ['Gluten', 'Sesame'],
    nutritionalValue: { calories: 310, protein: '9g', carbs: '45g', fat: '8g' },
    image: 'https://images.unsplash.com/photo-1539252554453-80ab65ce3586?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'sdw-004',
    name: 'Chicken, Lettuce & Tomato',
    price: 5.50,
    category: 'Sandwiches',
    description: 'Classic roasted chicken tenders, crisp romaine fronds, juicy vine-ripened tomatoes, and house mayonnaise spread.',
    ingredients: ['Sliced Farmhouse Sourdough', 'Roast Chicken Breast', 'Romaine Lettuce', 'Vine Tomatoes', 'Herbed Mayo'],
    allergens: ['Gluten', 'Eggs'],
    nutritionalValue: { calories: 440, protein: '28g', carbs: '33g', fat: '14g' },
    image: 'https://images.unsplash.com/photo-1541532713592-79a0317b6b77?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'sdw-005',
    name: 'Avocado, Tomato & Egg Sandwich',
    price: 5.50,
    category: 'Sandwiches',
    description: 'Fresh chunky avocado, juicy red tomatoes, boiled egg slices, and cracked black pepper on freshly carved grain bread.',
    ingredients: ['Sliced Seeded Grain Bread', 'Avocado Slices', 'Sliced Tomato', 'Hard-Boiled Egg', 'Black Pepper'],
    allergens: ['Gluten', 'Eggs'],
    nutritionalValue: { calories: 395, protein: '13g', carbs: '35g', fat: '17g' },
    image: 'https://images.unsplash.com/photo-1541532713592-79a0317b6b77?auto=format&fit=crop&q=80&w=800'
  },

  // --- BREAKFAST SPECIALS ---
  {
    id: 'bkt-001',
    name: 'Scrambled Eggs on Toast',
    price: 6.50,
    category: 'Breakfast Specials',
    description: 'Your choice of up to 3 ingredients scrambled together, spread out on your choice of freshly toasted bread. Extremely nourishing.',
    ingredients: ['Farmhouse Sourdough', 'Country Eggs', 'Melted Butter', 'Choice of Toppings'],
    allergens: ['Gluten', 'Eggs', 'Dairy'],
    nutritionalValue: { calories: 340, protein: '16g', carbs: '24g', fat: '14g' },
    image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'bkt-002',
    name: 'Omelette & Toast',
    price: 6.90,
    category: 'Breakfast Specials',
    description: 'Your choice of up to 3 ingredients scrambled and folded together, served with a piping hot side of golden buttered toast.',
    ingredients: ['Fluffy Country Eggs', 'Seasoned Toppings', 'Country Toast', 'Spreads'],
    allergens: ['Eggs', 'Dairy', 'Gluten'],
    nutritionalValue: { calories: 380, protein: '18g', carbs: '20g', fat: '16g' },
    image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'bkt-003',
    name: 'Mini English Breakfast',
    price: 7.50,
    category: 'Breakfast Specials',
    description: 'A cozy classic plate of premium sausage, thick-cut bacon, fresh fried egg, crispy golden hash brown, rich baked beans & toast.',
    ingredients: ['Premium Sausage', 'Thick Bacon', 'Egg', 'Hash Brown', 'Heinz Baked Beans', 'Sourdough Toast'],
    allergens: ['Gluten', 'Eggs', 'Dairy'],
    nutritionalValue: { calories: 590, protein: '28g', carbs: '44g', fat: '25g' },
    image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'bkt-004',
    name: 'Vegan Breakfast Sensation',
    price: 8.50,
    category: 'Breakfast Specials',
    description: 'A beautiful combination of choice veggies lightly stir-fried, with a hot side of wood-grilled tomatoes, sliced avocado & sourdough.',
    ingredients: ['Sourdough Slices', 'Sliced Avocado', 'Grilled Tomatoes', 'Stir-fried Baby Greens', 'Seasoned Peppers'],
    allergens: ['Gluten'],
    nutritionalValue: { calories: 360, protein: '11g', carbs: '46g', fat: '13g' },
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'bkt-005',
    name: 'Large English Breakfast',
    price: 9.50,
    category: 'Breakfast Specials',
    description: 'The ultimate morning plate: Two sausages, two rashes of thick bacon, butter-fried cup mushrooms, wood-grilled tomatoes, two rich fried eggs, two crispy hash browns, classic baked beans & farmhouse toast.',
    ingredients: ['Two Premium Sausages', 'Two Thick Bacon Rashers', 'Mushrooms', 'Tomatoes', 'Two Fried Eggs', 'Two Hash Browns', 'Baked Beans', 'Toast'],
    allergens: ['Gluten', 'Eggs', 'Dairy'],
    nutritionalValue: { calories: 880, protein: '44g', carbs: '68g', fat: '42g' },
    image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&q=80&w=800'
  },

  // --- SOUPS ---
  {
    id: 'sop-001',
    name: 'Soup of the Day',
    price: 4.00,
    category: 'Soups',
    description: 'Our hand-crafted soup of the day, freshly simmers with seasonal herbs, root vegetables, and crusty bread.',
    ingredients: ['Home Vegetable Stock', 'Seasonal Veg', 'Garnishes', 'Warm Bread'],
    allergens: ['Gluten'],
    nutritionalValue: { calories: 190, protein: '5g', carbs: '28g', fat: '4g' },
    image: 'https://images.unsplash.com/photo-1547592165-e1d17fed6005?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'sop-002',
    name: 'Courgette Soup',
    price: 4.50,
    category: 'Soups',
    description: 'A light, summery silky soup made from organic blended courgettes, sweet cream, and garden baby dill.',
    ingredients: ['Fresh Courgette', 'Vegetable Broth', 'Double Cream', 'Baby Dill', 'Croutons'],
    allergens: ['Gluten', 'Dairy'],
    nutritionalValue: { calories: 210, protein: '4g', carbs: '22g', fat: '8g' },
    image: 'https://images.unsplash.com/photo-1547592165-e1d17fed6005?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'sop-003',
    name: 'Hearty Lentil Soup',
    price: 4.50,
    category: 'Soups',
    description: 'Rich home-cooked brown and red lentils slowly simmered in aromatic country spices, fresh carrots, and parsley.',
    ingredients: ['Brown Lentils', 'Red Lentils', 'Carrots', 'Cumin & Coriander', 'Fresh Parsley'],
    allergens: ['None'],
    nutritionalValue: { calories: 230, protein: '12g', carbs: '36g', fat: '2g' },
    image: 'https://images.unsplash.com/photo-1547592165-e1d17fed6005?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'sop-004',
    name: 'Roasted Red Pepper Soup',
    price: 5.50,
    category: 'Soups',
    description: 'A rich, deeply velvety gourmet soup roasted to sweet perfection and garnished with premium fresh garden basil.',
    ingredients: ['Fire-Roasted Red Peppers', 'Caramelized Onion', 'Plump Garlic', 'Fresh Basil Leaves', 'Cracked Pepper'],
    allergens: ['None'],
    nutritionalValue: { calories: 180, protein: '4g', carbs: '24g', fat: '3g' },
    image: 'https://images.unsplash.com/photo-1547592165-e1d17fed6005?auto=format&fit=crop&q=80&w=800'
  },

  // --- HOMEMADE ---
  {
    id: 'hom-001',
    name: 'Vegetable Rice Stir Fry',
    price: 6.50,
    category: 'Homemade',
    description: 'Crisp garden fresh vegetables wok-seared in light soy and toasted sesame, served over delicate fluffy white rice. Make it Large (Larger Portion Size) — +£2.00!',
    ingredients: ['Fluffy Basmati Rice', 'Wok-fired Peppers', 'Broccoli Florets', 'Crisp Carrots', 'Sesame-Soy Sauce'],
    allergens: ['Gluten', 'Sesame', 'Soya'],
    nutritionalValue: { calories: 420, protein: '8g', carbs: '72g', fat: '6g' },
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'hom-002',
    name: 'Beef Burger & Fries',
    price: 6.50,
    category: 'Homemade',
    description: 'A dynamic classic burger featuring a beautifully seasoned grass-fed beef patty, cheddar slice, crisp lettuce, on a toasted brioche bun with sea-salted fries.',
    ingredients: ['Prime Beef Patty', 'Toasted Brioche Bun', 'Cheddar Slices', 'Crisp Romaine', 'Chunky House Fries'],
    allergens: ['Gluten', 'Dairy'],
    nutritionalValue: { calories: 710, protein: '36g', carbs: '54g', fat: '29g' },
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=80&w=800',
    isWeeklyHighlight: true
  },
  {
    id: 'hom-003',
    name: 'Vegetable Lasagna',
    price: 7.50,
    category: 'Homemade',
    description: 'Authentic stone oven-baked layers of pasta sheets, fresh seasoned garden veggies, rich herb tomato passata & velvety bechamel.',
    ingredients: ['Durum Wheat Pasta Sheets', 'Mixed Courgettes & Peppers', 'Herb Tomato Sauce', 'Creamy Premium Bechamel'],
    allergens: ['Gluten', 'Dairy'],
    nutritionalValue: { calories: 490, protein: '16g', carbs: '58g', fat: '18g' },
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'hom-004',
    name: 'Hearty Shepherds Pie',
    price: 7.50,
    category: 'Homemade',
    description: 'Savory simmered minced beef in a rich root vegetable gravy, baked under a golden-crusted cloud of whipped cream potatoes.',
    ingredients: ['Simmered Lean Minced Beef', 'Diced Carrots & Peas', 'Rich Gravy Base', 'Creamy Whipped Potato Crust'],
    allergens: ['Dairy'],
    nutritionalValue: { calories: 510, protein: '32g', carbs: '42g', fat: '20g' },
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'hom-005',
    name: 'Sweet Potato Curry',
    price: 7.50,
    category: 'Homemade',
    description: 'An aromatic, slow-simmered mild curry featuring tender roasted sweet potato chunks, house spices, and creamy organic coconut milk. Served with fluffy rice.',
    ingredients: ['Sweet Potato', 'Coconut Milk Broth', 'Turmeric & Cardamom', 'Green Coriander', 'Long Basmati Rice'],
    allergens: ['None'],
    nutritionalValue: { calories: 480, protein: '9g', carbs: '65g', fat: '14g' },
    image: 'https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'hom-006',
    name: 'Savory Beef Lasagna',
    price: 7.50,
    category: 'Homemade',
    description: 'Classic rich layers of fresh lasagna sheet pasta, slow-cooked minced beef bolognese, mozzarella, and dynamic white bechamel sauce.',
    ingredients: ['Wheat Pasta Sheets', 'Beef Bolognese Sauce', 'Fine Herbs', 'Melted Mozzarella', 'Bechamel Cream'],
    allergens: ['Gluten', 'Dairy'],
    nutritionalValue: { calories: 580, protein: '34g', carbs: '52g', fat: '24g' },
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'hom-007',
    name: 'Chicken & Veg Stir Fry',
    price: 8.50,
    category: 'Homemade',
    description: 'Tender wok-cooked farm chicken breast strips and colourful garden vegetables tossed in our signature black bean stir-fry glaze. Served over rice. Make it Large — +£2.00!',
    ingredients: ['Carved Chicken Breast', 'Crisp Peppers', 'Onions', 'Wok Greens', 'Basmati Rice', 'Glaze'],
    allergens: ['Gluten', 'Soya'],
    nutritionalValue: { calories: 520, protein: '38g', carbs: '58g', fat: '11g' },
    image: 'https://images.unsplash.com/photo-1544531586-fde5298cdd40?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'hom-008',
    name: 'Hummus, Veggie Bowl',
    price: 8.50,
    category: 'Homemade',
    description: 'A premium clean assembly of original smooth hummus, massaged baby spinach, avocado quarters, cucumbers, vine-ripe tomatoes, and extra virgin olive oil.',
    ingredients: ['Smooth Pure Hummus', 'Spinach Greens', 'Chunky Sliced Avocado', 'Cucumbers', 'Sourcing Tomatoes'],
    allergens: ['Sesame'],
    nutritionalValue: { calories: 340, protein: '11g', carbs: '38g', fat: '16g' },
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'hom-009',
    name: 'Prawn Curry & Rice',
    price: 8.50,
    category: 'Homemade',
    description: 'Succulent king prawns simmered in an aromatic coconut cream and lemongrass curry sauce, served on premium basmati rice.',
    ingredients: ['Peeled King Prawns', 'Coconut Lemongrass Broth', 'Spices Infusion', 'Long Basmati Rice'],
    allergens: ['Crustaceans'],
    nutritionalValue: { calories: 460, protein: '26g', carbs: '55g', fat: '11g' },
    image: 'https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'hom-010',
    name: 'Peppered Chicken & Rice',
    price: 8.50,
    category: 'Homemade',
    description: 'Tender chicken breast pan-seared with sweet bell peppers and tossed in a rich, spicy cracked black pepper glaze. Served with fluffy white rice.',
    ingredients: ['Seared Chicken Breast', 'Coarsely Cracked Black Pepper', 'Bell Peppers', 'Fluffy Steamed Rice'],
    allergens: ['Gluten', 'Soya'],
    nutritionalValue: { calories: 490, protein: '35g', carbs: '60g', fat: '9g' },
    image: 'https://images.unsplash.com/photo-1544531586-fde5298cdd40?auto=format&fit=crop&q=80&w=800'
  },

  // --- WRAPS ---
  {
    id: 'wrp-001',
    name: 'Tuna, Egg & Rice Wrap',
    price: 4.90,
    category: 'Wraps',
    description: 'Dolphin-safe shredded tuna salad, sliced boiled eggs, and grain rice seasoned with garden herbs, rolled tightly. Personalise Your Wrap - Switch, add or remove ingredients! Make it Large — +£1.50!',
    ingredients: ['Soft Wheat Wrap', 'Shredded Tuna', 'Hard Boiled Egg', 'Seasoned Steamed Rice', 'Citrus Dill'],
    allergens: ['Gluten', 'Eggs', 'Fish'],
    nutritionalValue: { calories: 470, protein: '22g', carbs: '48g', fat: '14g' },
    image: 'https://images.unsplash.com/photo-1626700051175-6518c4793f4f?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'wrp-002',
    name: 'Curry, Chickpea & Salad Wrap',
    price: 4.90,
    category: 'Wraps',
    description: 'Warm curried chickpeas scrambled with crisp garden greens, sweet tomatoes, and a light herb drizzle.',
    ingredients: ['Warm Tortilla Wrap', 'Curried Spiced Chickpeas', 'Crisp Romaine Lettuce', 'Diced Tomatoes'],
    allergens: ['Gluten'],
    nutritionalValue: { calories: 380, protein: '12g', carbs: '56g', fat: '8g' },
    image: 'https://images.unsplash.com/photo-1626700051175-6518c4793f4f?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'wrp-003',
    name: 'Tuna, Cheese & Cucumber Wrap',
    price: 4.90,
    category: 'Wraps',
    description: 'Gourmet tuna flakes, shredded red cheddar, and crisp sliced cucumber rolls in a soft, lightly toasted tortilla.',
    ingredients: ['Soft Flour Tortilla', 'Seasoned Tuna', 'Shredded Cheddar', 'Crisp Cucumber Ribbons'],
    allergens: ['Gluten', 'Dairy', 'Fish'],
    nutritionalValue: { calories: 430, protein: '24g', carbs: '38g', fat: '15g' },
    image: 'https://images.unsplash.com/photo-1626700051175-6518c4793f4f?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'wrp-004',
    name: 'Hummus & Veggies Wrap',
    price: 5.90,
    category: 'Wraps',
    description: 'Creamy smooth original chickpea hummus, baby spinach leaves, carrots, cucumber ribbons, and sweet bell peppers rolled carefully.',
    ingredients: ['Gluten-free Style Wrap', 'Chickpea Hummus', 'Baby Spinach Greens', 'Carrots', 'Cucumber', 'Bell Pepper'],
    allergens: ['Sesame'],
    nutritionalValue: { calories: 290, protein: '8g', carbs: '44g', fat: '7g' },
    image: 'https://images.unsplash.com/photo-1626700051175-6518c4793f4f?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'wrp-005',
    name: 'Coronation Chicken Wrap',
    price: 5.90,
    category: 'Wraps',
    description: 'Savory hand-shredded chicken breast tossed in our aromatic, rich coronation cream sauce, wrapped in a toasted tortilla.',
    ingredients: ['Toasted Flour Tortilla', 'Shredded Chicken Breast', 'Mild Curry Coronation Sauce'],
    allergens: ['Gluten', 'Eggs'],
    nutritionalValue: { calories: 440, protein: '25g', carbs: '36g', fat: '16g' },
    image: 'https://images.unsplash.com/photo-1626700051175-6518c4793f4f?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'wrp-006',
    name: 'Prawn, Lettuce & Mayo Wrap',
    price: 6.50,
    category: 'Wraps',
    description: 'Succulent chilled king prawns, crisp shredded iceberg lettuce, and cold real mayonnaise wrapped to perfection.',
    ingredients: ['Soft Wheat Wrap', 'Sweet King Prawns', 'Iceberg Lettuce Shreds', 'Real Cream Mayo'],
    allergens: ['Gluten', 'Eggs', 'Crustaceans'],
    nutritionalValue: { calories: 390, protein: '18g', carbs: '32g', fat: '14g' },
    image: 'https://images.unsplash.com/photo-1626700051175-6518c4793f4f?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'wrp-007',
    name: 'Chicken Caesar Salad Wrap',
    price: 6.50,
    category: 'Wraps',
    description: 'Juicy roasted chicken, aged dry parmesan ribbons, crunchy croutons, and rich Caesar dressing rolled inside a soft tortilla wrap.',
    ingredients: ['Soft Tortilla Wrap', 'Roasted Chicken Slices', 'Parmesan Cheese', 'House Caesar Dressing'],
    allergens: ['Gluten', 'Dairy', 'Eggs'],
    nutritionalValue: { calories: 510, protein: '29g', carbs: '38g', fat: '22g' },
    image: 'https://images.unsplash.com/photo-1626700051175-6518c4793f4f?auto=format&fit=crop&q=80&w=800'
  },

  // --- A SLICE OF PIE ---
  {
    id: 'pie-001',
    name: 'Vegetable Pie',
    price: 5.50,
    category: 'A Slice of Pie',
    description: 'Baked buttery shortcrust pastry filled with chunky garden season vegetables in cheese. Served with a side of crisp garden salad.',
    ingredients: ['Shortcrust Pastry Shell', 'Medley of Roast Veg', 'Sharp Cheddar Glaze', 'Garden Side Salad'],
    allergens: ['Gluten', 'Dairy'],
    nutritionalValue: { calories: 430, protein: '11g', carbs: '45g', fat: '21g' },
    image: 'https://images.unsplash.com/photo-1517254485314-297b7749659f?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'pie-002',
    name: 'Spinach Pie',
    price: 5.50,
    category: 'A Slice of Pie',
    description: 'Traditional Mediterranean-style layered flaky phyllo pastry pie packed with farm spinach and feta curds. Served with a side of salad.',
    ingredients: ['Crisp Phyllo Layers', 'Seasoned Spinach', 'Greek Feta Cheese', 'Spiced Herbs', 'Crisp Side Salad'],
    allergens: ['Gluten', 'Dairy'],
    nutritionalValue: { calories: 390, protein: '12g', carbs: '38g', fat: '19g' },
    image: 'https://images.unsplash.com/photo-1517254485314-297b7749659f?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'pie-003',
    name: 'Cauliflower Cheese Pie',
    price: 5.50,
    category: 'A Slice of Pie',
    description: 'Warm and comforting crumbly golden pastry pie baked with cauliflower florets in thick, bubbly double cream mature cheese sauce. Served with salad side.',
    ingredients: ['Shortcrust Pastry', 'Cauliflower Florets', 'Mature Cheese Sauce', 'Cream', 'Side Salad'],
    allergens: ['Gluten', 'Dairy'],
    nutritionalValue: { calories: 450, protein: '13g', carbs: '44g', fat: '22g' },
    image: 'https://images.unsplash.com/photo-1517254485314-297b7749659f?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'pie-004',
    name: 'Chicken Pot Pie',
    price: 6.50,
    category: 'A Slice of Pie',
    description: 'A comforting bistro standard: roasted farm chicken pieces, sweet garden peas, carrots, in a velvety gravy under a golden puff crust. Served with a side of salad.',
    ingredients: ['Golden Puff Pastry Lid', 'Roasted Chicken Pieces', 'Garden Peas & Carrots', 'Chicken Gravy', 'Side Salad'],
    allergens: ['Gluten', 'Dairy', 'Eggs'],
    nutritionalValue: { calories: 490, protein: '22g', carbs: '42g', fat: '24g' },
    image: 'https://images.unsplash.com/photo-1517254485314-297b7749659f?auto=format&fit=crop&q=80&w=800'
  },

  // --- ICE CREAM ---
  {
    id: 'ice-001',
    name: 'Ice Cream Cone',
    price: 2.00,
    category: 'Ice Cream',
    description: 'A beautiful scoop of premium double-cream vanilla, strawberry or chocolate ice cream on a crispy wafer cone. Range of toppings available!',
    ingredients: ['Crispy Wafer Cone', 'Double-Cream Ice Cream Scoop', 'Optional Marshmallows & Sprinkles'],
    allergens: ['Gluten', 'Dairy'],
    nutritionalValue: { calories: 190, protein: '4g', carbs: '28g', fat: '6g' },
    image: 'https://images.unsplash.com/photo-1501443762994-82bd5dace89a?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'ice-002',
    name: 'Drip Milkshake',
    price: 4.50,
    category: 'Ice Cream',
    description: 'Premium strawberry, banana or chocolate ice cream milkshake topped generously with freshly whipped cream, drizzle sauces, and matching sprinkles.',
    ingredients: ['Blended Ice Cream', 'Whole Milk', 'Whipped Dairy Cream', 'Gourmet Red/Choc Drizzle Sauce'],
    allergens: ['Dairy'],
    nutritionalValue: { calories: 410, protein: '8g', carbs: '52g', fat: '18g' },
    image: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'ice-003',
    name: 'Gourmet Ice Cream Sundae',
    price: 5.50,
    category: 'Ice Cream',
    description: 'The absolute king of sundaes: Three rich scoops of choice dairy ice cream layered with syrup, sprinkles, chocolate sauce, whipped cream & mini marshmallows.',
    ingredients: ['Three Large Ice Cream Scoops', 'Sweet Strawberry/Chocolate Syrup', 'Whipped Cream Swirls', 'Fluffy Marshmallows', 'Sprinkles'],
    allergens: ['Dairy'],
    nutritionalValue: { calories: 540, protein: '9g', carbs: '78g', fat: '22g' },
    image: 'https://images.unsplash.com/photo-1501443762994-82bd5dace89a?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'ice-004',
    name: 'Traditional Banana Split',
    price: 5.50,
    category: 'Ice Cream',
    description: 'Ripe sweet banana sliced down the center with three scoops of premium ice cream, gooey chocolate and strawberry syrup, and freshly whipped cream.',
    ingredients: ['Whole Ripe Banana', 'Three Scoops Ice Cream', 'Choc Fudge Glaze', 'Strawberry Coulis', 'Whipping Cream'],
    allergens: ['Dairy'],
    nutritionalValue: { calories: 520, protein: '8g', carbs: '74g', fat: '20g' },
    image: 'https://images.unsplash.com/photo-1501443762994-82bd5dace89a?auto=format&fit=crop&q=80&w=800'
  },

  // --- SWEET CORNER ---
  {
    id: 'swt-001',
    name: 'Fruit Yogurt Pot',
    price: 5.50,
    category: 'Sweet Corner',
    description: 'A healthy and refreshing layered morning cup blending seasonal thick fresh sliced fruits, baked oats granola, and thick probiotic Greek yogurt.',
    ingredients: ['Creamy Greek Yogurt', 'Fresh Berries & Sliced Banana', 'Toasted Rolled Oats Granola', 'Organic Honey Drizzle'],
    allergens: ['Dairy', 'Gluten'],
    nutritionalValue: { calories: 280, protein: '12g', carbs: '42g', fat: '5g' },
    image: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'swt-002',
    name: 'Orchard Fruit Salad',
    price: 4.90,
    category: 'Sweet Corner',
    description: 'A beautiful fresh fruit cocktail containing your favorite sweet orchard fruits sliced cleanly into bite-sized pieces.',
    ingredients: ['Ripe Strawberries', 'Apple Chunks', 'Grape Quarters', 'Oranges', 'Blueberries', 'Melon Slices'],
    allergens: ['None'],
    nutritionalValue: { calories: 130, protein: '2g', carbs: '31g', fat: '0g' },
    image: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'swt-003',
    name: 'Buttermilk Pancakes Stack',
    price: 4.90,
    category: 'Sweet Corner',
    description: 'Fluffy freshly made buttermilk pancake stack. Options to customise under our bar: Add Honey, Syrup, Fresh Fruit, Cream, Nutella, Bananas, Strawberries, Caramel, Jam & Peanut Butter.',
    ingredients: ['Fluffy Pancake Flour Batter', 'Sweet Maple/Honey Syrup', 'Confectioners Sugar Dust'],
    allergens: ['Gluten', 'Eggs', 'Dairy'],
    nutritionalValue: { calories: 380, protein: '8g', carbs: '64g', fat: '9g' },
    image: 'https://images.unsplash.com/photo-1515419071159-aa2040435928?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'swt-004',
    name: 'Traditional Belgian Waffles',
    price: 4.90,
    category: 'Sweet Corner',
    description: 'Warm golden baked grid-patterned sweet waffles. Add Honey, Syrup, Fresh Fruit, Cream, Nutella, Bananas, Strawberries, Caramel, Jam & Peanut Butter.',
    ingredients: ['Warm Grid Waffle', 'Sugared Crust', 'Maple Topping Glaze'],
    allergens: ['Gluten', 'Eggs', 'Dairy'],
    nutritionalValue: { calories: 410, protein: '7g', carbs: '68g', fat: '12g' },
    image: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'swt-005',
    name: 'Ultimate Grand Waffle Box',
    price: 20.00,
    category: 'Sweet Corner',
    description: 'The perfect companion for a table of friends: 10 soft warm Belgian waffles with your choice of creative toppings, syrups, fruits, creams & peanut butters.',
    ingredients: ['10 Soft Belgian Waffles', 'Toppings Platter', 'Whipped Creams', 'Nutella Bowls', 'Fresh Berries Tray'],
    allergens: ['Gluten', 'Eggs', 'Dairy', 'Nuts'],
    nutritionalValue: { calories: 2400, protein: '42g', carbs: '380g', fat: '74g' },
    image: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&q=80&w=800'
  },

  // --- SALADS ---
  {
    id: 'sld-001',
    name: 'Tuna Salad',
    price: 5.50,
    category: 'Salads',
    description: 'Chunky flaked tuna served over an eye-safe colorful bed of crisp greenhouse greens, garden cucumbers, ripe cherry tomatoes, and red onions. Personalise Your Salad!',
    ingredients: ['Flaked Tuna Chunk', 'Greenhouse Lettuce Mix', 'English Cucumbers', 'Cherry Tomatoes', 'Red Onion Slices'],
    allergens: ['Fish'],
    nutritionalValue: { calories: 250, protein: '22g', carbs: '11g', fat: '12g' },
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'sld-002',
    name: 'Spiced Chickpea Salad',
    price: 5.50,
    category: 'Salads',
    description: 'Highly textured salad of protein-rich chickpeas seasoned in citrus cumin, chopped peppers, green cucumber, and clean red onion on leaves.',
    ingredients: ['Cumin Spiced Chickpeas', 'Shredded Cucumbers', 'Sweet Onions', 'Chopped Romaine', 'Citrus Vinaigrette'],
    allergens: ['None'],
    nutritionalValue: { calories: 210, protein: '10g', carbs: '32g', fat: '4g' },
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'sld-003',
    name: 'Tuna Savory Rice Salad',
    price: 5.50,
    category: 'Salads',
    description: 'A layered energising salad of chilled long basmati rice, flaked tuna chunks, garden sweetcorn, and sweet pepper dices in a light lemon dressing.',
    ingredients: ['Chilled Basmati Rice', 'Flaked Tuna Salad', 'Sweetcorn Niblets', 'Sweet Peppers Diced', 'Lemon Herb Zest'],
    allergens: ['Fish'],
    nutritionalValue: { calories: 340, protein: '20g', carbs: '44g', fat: '8g' },
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'sld-004',
    name: 'Garden Herb Pasta Salad',
    price: 6.50,
    category: 'Salads',
    description: 'Chilled fusilli pasta coils tossed with sweet organic olives, plump cherry tomatoes, crisp peppers, and real Italian olive oil vinaigrette.',
    ingredients: ['Fusilli Pasta', 'Sliced Black Olives', 'Diced Tomatoes', 'Sweet Peppers', 'Vinaigrette Dressing'],
    allergens: ['Gluten'],
    nutritionalValue: { calories: 290, protein: '7g', carbs: '42g', fat: '10g' },
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'sld-005',
    name: 'Creamy Goats Cheese Salad',
    price: 6.50,
    category: 'Salads',
    description: 'Premium creamy crumbled goat cheese served over a vibrant greenhouse bed of fresh mixed baby salad greens with a sweet honey mustard drizzle.',
    ingredients: ['Crumbled Goat Cheese', 'Mixed Greenhouse Greens', 'Honey Mustard Dressing', 'Walnut Accents'],
    allergens: ['Dairy', 'Nuts'],
    nutritionalValue: { calories: 290, protein: '8g', carbs: '12g', fat: '18g' },
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'sld-006',
    name: 'Classic Chicken Caesar Salad',
    price: 6.50,
    category: 'Salads',
    description: 'Oven-roasted chicken breast strips layered on crisp crunch romaine leaves with toasted herbal croutons, parmesan sprinkles, and real Caesar dressing.',
    ingredients: ['Romaine Lettuce Hearts', 'Roast Chicken Breast', 'Garlic Croutons', 'Parmesan Slices', 'Caesar Dressing'],
    allergens: ['Gluten', 'Dairy', 'Eggs'],
    nutritionalValue: { calories: 410, protein: '28g', carbs: '18g', fat: '24g' },
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=800'
  },

  // --- CAKES ---
  {
    id: 'cak-001',
    name: 'Elegant Cupcakes Selection',
    price: 2.50,
    category: 'Cakes',
    description: 'Light and moist individual cupcake sponges topped with an exceptional decorative swirl of velvety sweet vanilla buttercream frosting.',
    ingredients: ['Whipped Sponge Cake', 'Vanilla Buttercream Frosting', 'Rainbow Sprinkles'],
    allergens: ['Gluten', 'Eggs', 'Dairy'],
    nutritionalValue: { calories: 240, protein: '2g', carbs: '38g', fat: '9g' },
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'cak-002',
    name: 'Classic Victoria Sponge',
    price: 4.00,
    category: 'Cakes',
    description: 'A traditional and airy light sponge cake sandwiched beautifully with smooth vanilla cream and gourmet wild strawberry preserves.',
    ingredients: ['Golden Sponge Cake', 'Sweet Vanilla Buttercream', 'Strawberry Jam Preserves'],
    allergens: ['Gluten', 'Eggs', 'Dairy'],
    nutritionalValue: { calories: 340, protein: '4g', carbs: '44g', fat: '12g' },
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'cak-003',
    name: 'Velvety New York Cheesecake',
    price: 4.00,
    category: 'Cakes',
    description: 'A silky-smooth traditional baked cream cheese filling set on a crunchy butter-crumbled digestive biscuit cookie base.',
    ingredients: ['Digestive Biscuit Crumbs', 'Melted Butter', 'Cream Cheese Batter', 'Vanilla Extract'],
    allergens: ['Dairy', 'Gluten', 'Eggs'],
    nutritionalValue: { calories: 390, protein: '6g', carbs: '42g', fat: '22g' },
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'cak-004',
    name: 'Double Cocoa Chocolate Cake',
    price: 4.50,
    category: 'Cakes',
    description: 'An indulgent, moist double-layered dark chocolate sponge filled and covered in deep real cocoa fudge icing.',
    ingredients: ['Real Dark Cocoa Butter', 'Whipped Sponge Layers', 'Rich Fudge Frosting'],
    allergens: ['Gluten', 'Dairy', 'Eggs'],
    nutritionalValue: { calories: 430, protein: '5g', carbs: '52g', fat: '18g' },
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'cak-005',
    name: 'Country Walnuts Carrot Cake',
    price: 4.50,
    category: 'Cakes',
    description: 'A beautifully moist spiced carrot cake speckled with raw walnuts and finished with high-quality cream cheese frosting.',
    ingredients: ['Grated Sweet Carrots', 'Spiced Flour Batter', 'Raw Walnut Pieces', 'Cream Cheese Frosting'],
    allergens: ['Gluten', 'Dairy', 'Eggs', 'Nuts'],
    nutritionalValue: { calories: 380, protein: '5g', carbs: '46g', fat: '16g' },
    image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&q=80&w=800'
  },

  // --- JACKET POTATO ---
  {
    id: 'pot-001',
    name: 'Small Jacket Potato',
    price: 7.50,
    category: 'Jacket Potato',
    description: 'Oven-baked fluffy Russet potato with a satisfying crispy skin, served with your custom choice of toppings.',
    ingredients: ['Oven Baked Russet Potato', 'Creamy Salted Butter', 'Toppings Choice'],
    allergens: ['Dairy'],
    nutritionalValue: { calories: 290, protein: '5g', carbs: '58g', fat: '4g' },
    image: 'https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'pot-002',
    name: 'Large Jacket Potato',
    price: 9.50,
    category: 'Jacket Potato',
    description: 'Generous jumbo oven-baked Russet potato with fluffy potato flesh and crispy skin, served with your choice of toppings.',
    ingredients: ['Large Russet Baked Potato', 'Salted Butter Mash', 'Selected Toppings'],
    allergens: ['Dairy'],
    nutritionalValue: { calories: 410, protein: '8g', carbs: '84g', fat: '6g' },
    image: 'https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'pot-003',
    name: 'Small Sweet Jacket Potato',
    price: 7.50,
    category: 'Jacket Potato',
    description: 'Oven-roasted sweet potato cooked to tender, sweet caramel perfection. Served with salted butter and your choice of toppings.',
    ingredients: ['Oven Sweet Potato Baked', 'Salted Whipped Butter', 'Toppings Choice'],
    allergens: ['Dairy'],
    nutritionalValue: { calories: 260, protein: '4g', carbs: '52g', fat: '3g' },
    image: 'https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'pot-004',
    name: 'Large Sweet Jacket Potato',
    price: 9.50,
    category: 'Jacket Potato',
    description: 'A generous large whole oven-baked sweet potato, cooked slow to caramelise, served with rich salted butter and toppings.',
    ingredients: ['Large Sweet Potato Baked', 'Whipped Salted Butter', 'Custom Toppings'],
    allergens: ['Dairy'],
    nutritionalValue: { calories: 380, protein: '6g', carbs: '78g', fat: '5g' },
    image: 'https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?auto=format&fit=crop&q=80&w=800'
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

import baggy from './baggy.avif'
import headshet from './headshet.webp'
import laptop from './laptop.avif'
import pendrive from './pendrive.jpg'

export const products = [
    {
      id: 1,
      name: 'ASUS Gaming Laptop',
      brand: 'ASUS',
      price: 999.99,
      description: 'Powerful gaming laptop with high-end graphics and fast performance.',
      category: 'Laptops',
      imageUrl: laptop,
    },
    {
      id: 2,
      name: 'HP Pen Drive 128GB',
      brand: 'HP',
      price: 19.99,
      description: 'Reliable 128GB USB 3.0 pen drive for quick data transfer.',
      category: 'Storage',
      imageUrl: pendrive,
    },
    {
      id: 3,
      name: 'Boat Headset',
      brand: 'Boat',
      price: 49.99,
      description: 'Wireless Bluetooth headset with noise cancellation.',
      category: 'Audio',
      imageUrl: headshet,
    },
    {
      id: 4,
      name: 'Denim Look Jeans',
      brand: 'Denim',
      price: 39.99,
      description: 'Comfortable men’s jeans with a stylish denim look.',
      category: 'Fashion',
      imageUrl: baggy,
    },
  ];
  
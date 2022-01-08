import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'Minh Nhật',
      email: 'nhat@gmail.com',
      password: bcrypt.hashSync('1234', 8),
      isAdmin: true,
      isSeller: false,
    },
    {
      name: 'Hiền',
      email: 'hien@gmail.com',
      password: bcrypt.hashSync('1234', 8),
      isSeller: false,
      isAdmin: false,
    },
    {
      name: 'Huong',
      email: 'huong@gmail.com',
      password: bcrypt.hashSync('1234', 8),
      isSeller: true,
      isAdmin: false,
    },
  ],
  fruits: [
    {
      name: 'Apple 1',
      category: 'Euro Fruit',
      image:
        'https://i.pinimg.com/736x/02/d1/8d/02d18dda75a869b005522046f5aa245b.jpg',
      price: 120,
      countInStock: 10,
      brand: 'AppleInc',
      rating: 5,
      numReviews: 10,
      description: 'high quality product',
    },
    {
      name: 'Apple 2',
      category: 'Asia Fruit',
      image:
        'https://i.pinimg.com/736x/02/d1/8d/02d18dda75a869b005522046f5aa245b.jpg',
      price: 150,
      countInStock: 10,
      brand: 'AppleInc',
      rating: 4,
      numReviews: 10,
      description: 'high quality product',
    },
    {
      name: 'Apple 3',
      category: 'VietNam Fruit',
      image:
        'https://i.pinimg.com/736x/02/d1/8d/02d18dda75a869b005522046f5aa245b.jpg',
      price: 80,
      countInStock: 10,
      brand: 'AppleInc',
      rating: 3,
      numReviews: 10,
      description: 'high quality product',
    },
    {
      name: 'Apple 4',
      category: 'Euro Fruit',
      image:
        'https://i.pinimg.com/736x/02/d1/8d/02d18dda75a869b005522046f5aa245b.jpg',
      price: 60,
      countInStock: 10,
      brand: 'AppleInc',
      rating: 2,
      numReviews: 10,
      description: 'high quality product',
    },
    {
      name: 'Apple 5',
      category: 'Thailand Fruit',
      image:
        'https://i.pinimg.com/736x/02/d1/8d/02d18dda75a869b005522046f5aa245b.jpg',
      price: 180,
      countInStock: 10,
      brand: 'AppleInc',
      rating: 1,
      numReviews: 10,
      description: 'high quality product',
    },
    {
      name: 'Apple 6',
      category: 'Euro Fruit',
      image:
        'https://i.pinimg.com/736x/02/d1/8d/02d18dda75a869b005522046f5aa245b.jpg',
      price: 100,
      countInStock: 10,
      brand: 'AppleInc',
      rating: 4.5,
      numReviews: 10,
      description: 'high quality product',
      reviews : [
        {
          name: "Hiền",
          comment: "Trái cây cực ngon",
          rating: 2,
        },
        {
          name: "Huong",
          comment: "Goodddddd",
          rating: 5,
        }
      ]
    },
  ],

  reviews : [
    {
      name: "Hiền",
      comment: "Trái cây cực ngon",
      rating: 2,
    },
    {
      name: "Huong",
      comment: "Goodddddd",
      rating: 5,
    }
  ]
};
export default data;

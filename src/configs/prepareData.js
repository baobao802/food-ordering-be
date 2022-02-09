import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'Admin',
      email: 'admin@gmail.com',
      password: bcrypt.hashSync('1234', 8),
      isAdmin: true,
      isSeller: false,
    },
    {
      name: 'Hiền',
      email: 'hien@gmail.com',
      password: bcrypt.hashSync('1234', 8),
      address: 'Da Nang',
      phone: '0123477778',
      isSeller: false,
      isAdmin: false,
    },
    {
      name: 'Thịnh',
      email: 'thinh@gmail.com',
      password: bcrypt.hashSync('1234', 8),
      address: 'Da Nang',
      phone: '0123477778',
      isSeller: false,
      isAdmin: false,
    },
    {
      name: 'Quốc',
      email: 'quoc@gmail.com',
      password: bcrypt.hashSync('1234', 8),
      address: 'Da Nang',
      phone: '0123477778',
      isSeller: false,
      isAdmin: false,
    },
    {
      name: 'Trương Công Quốc Thịnh',
      email: 'cong@gmail.com',
      password: bcrypt.hashSync('1234', 8),
      address: 'Da Nang',
      phone: '0123477778',
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
    {
      name: 'Lien Huong',
      email: 'huonglien212@gmail.com',
      password: bcrypt.hashSync('1234', 8),
      isSeller: false,
      isAdmin: false,
    }
  ],
  fruits: [
    {
      name: 'Táo Queen New Zealand',
      category: 'Táo',
      image:
        'https://product.hstatic.net/1000050401/product/tao_queen_nz_large.png',
      price: 170000,
      countInStock: 100,
      brand: 'New Zealand',
      description: `- Táo Nữ Hoàng quả tròn, vỏ mỏng có màu sắc đỏ thẫm, trọng lượng khoảng 7 đến 8 quả/kg.
      - Táo Queen New Zealand ăn rất giòn, thơm, nhiều nước, hương vị ngọt ngào và là một trong những loại táo phù hợp với khẩu vị của người Việt nhất.
      - Táo rất nhiều chất dinh dưỡng ngoài ăn tươi ra còn làm các món ăn khác như:  salad, táo nướng, thập cẩm, bánh táo, thạch táo, ép nước…
      `,
    },
    {
      name: 'Táo Xanh Ngọt Mỹ',
      category: 'Táo',
      image:
        'https://product.hstatic.net/1000050401/product/t_c3_a1o_20nh_e1_ba_adt_20xanh_large.png',
      price: 180000,
      countInStock: 100,
      brand: 'Mỹ',
      description: `- Táo xanh tốt cho sức khỏe hơn táo đỏ vì chúng chứa nhiều chất dinh dưỡng. Một quả táo xanh nhỏ chứa: 21g carbs, 4g chất xơ, 4g protein, 4mg sắt, 6mg Vitamin C… 
      - Táo xanh khi còn nguyên vỏ chứa 80 calo. Sau khi gọt vỏ, nó chứa 63 calo.
      `,
    },
    {
      name: 'Táo Fuji Hàn Quốc',
      category: 'Táo',
      image:
        'https://product.hstatic.net/1000050401/product/t_c3_a1o_20fuji_203_large.png',
      price: 150000,
      countInStock: 100,
      brand: 'Hàn Quốc',
      description: `- Táo Fuji Hàn Quốc giữ lại được các tính chất, dinh dưỡng khi nướng. 
      - Chính vì vậy mà nó thường được dùng làm bánh, ăn sống hay sử dụng trong các món ăn rau trộn, salad. 
      - Táo Fuji Hàn Quốc được trồng theo phương pháp hữu cơ đem đến vị ngọt, ngon đậm đà khó quên
      `,
    },
    {
      name: 'Táo KiKu Mỹ Size Khủng',
      category: 'Táo',
      image:
        'https://product.hstatic.net/1000050401/product/t_c3_a1o_20fuji_20h_c3_a0n_20qu_e1_bb_91c_large.png',
      price: 150000,
      countInStock: 100,
      brand: 'Mỹ',
      description: `- Táo Kiku Mỹ (KG) được bình chọn là giống táo ngọt được yêu thích nhất của Mỹ. 
      - Sản phẩm có màu đỏ ruby phối trên nền vang tươi tạo nên vẻ ngoài tinh tế, sang trọng. 
      - Sản phẩm đạt các tiêu chuẩn xuất khẩu nghiêm ngặt của Mỹ, không sử dụng các hóa chất độc hại.
      `,
    },
    {
      name: 'Táo Rockit Newzealand',
      category: 'Táo',
      image:
        'https://vinfruits.com/wp-content/uploads/2017/02/t1-01-1024x1024.jpg',
      price: 155000,
      countInStock: 100,
      brand: 'Mỹ',
      description: `- Táo Rockit là dòng táo có nguồn gốc xuất xứ từ vịnh Hawke của New Zealand với hình dáng nhỏ, vỏ ngoài màu hồng đậm pha chút sắc vàng.
      - Có tác dụng giảm cân, đẹp da, rất được nhiều chị em phụ nữ ưa chuộng`
    },
    {
      name: 'Táo Vàng Kinsei Nhật Bản',
      category: 'Táo',
      image:
        'https://vinfruits.com/wp-content/uploads/2019/11/tao-vang-kinsei-nhat-vinfruits-1-1024x1024.jpg',
      price: 150000,
      countInStock: 100,
      brand: 'Hàn Quốc',
      description: `- Táo Vàng Kinsei Nhật Bản với vẻ ngoài sang trọng, lớp vỏ vàng mướt. 
      - Kinsei Nhật Bản là loại táo có mùi thơm nhất trong các loại táo. 
      - Táo Kinsei ngọt thanh, nhiều nước, giòn và thơm lâu
      `
    },
    {
      name: 'Táo Xanh Granny Smith Mỹ',
      category: 'Táo',
      image:
        'https://vinfruits.com/wp-content/uploads/2017/02/tao-xanh-my-vinfruits-6.jpg',
      price: 150000,
      countInStock: 100,
      brand: 'Mỹ',
      description: `- Táo xanh Granny Smith Nam Phi/ Mỹ  có màu xanh lá, vị chua đậm, rất giòn, nhiều nước.
      - Ruột màu trắng, ăn rất giòn, có vị chua nhẹ.
      - Thịt không bị chuyển màu nâu khi để ở nhiệt độ môi trường.
      `,
    },
    {
      name: 'Nho Kyoho Hàn Quốc',
      category: 'Nho',
      image:
        'https://hstatic.net/401/1000050401/1/2015/12-16/nho_den_1_2f34bb90-5e62-4791-4c76-f47f74c3f030_large.png',
      price: 400000,
      countInStock: 100,
      brand: 'Hàn Quốc',
      description: `- Giống nho của Nhật từ năm 1946 và rất phổ biến ở Nhật Bản, Hàn Quốc
      - Vỏ mỏng, trái rất mọng nước
      - Kích thước trái rất lớn, tương đương với nho mẫu đơn
      - Nhập khẩu trực tiếp từ Hàn Quốc
      `,
    },
    {
      name: 'Nho Khô Sunview Mỹ',
      category: 'Nho',
      image:
        'https://product.hstatic.net/1000050401/product/22_dd0eba9d371248439d4b310335b18384_large.png',
      price: 145000,
      countInStock: 100,
      brand: 'Mỹ',
      description: `- Thành phần quả nho tự nhiên, không chứa chất bảo quản, an toàn cho sức khỏe người dùng
      - Vị thơm ngon, hấp dẫn, cung cấp nhiều vitamin, khoáng chất
      - Được sản xuất trên dây chuyền công nghệ hiện đại tại Mỹ, đảm bảo vệ sinh an toàn thực phẩm
      `,
    },
    {
      name: 'Nho Đỏ Ko Hạt Úc',
      category: 'Nho',
      image:
        'https://hstatic.net/401/1000050401/1/2016/8-7/nho_do_khong_hat_large.png',
      price: 145000,
      countInStock: 100,
      brand: 'Úc',
      description: `- Nho đỏ không hạt Úc có quả màu đỏ tươi, vỏ mỏng, thịt dày giòn, hương vị thơm ngọt ngào và mọng nước đem đến cảm giác sảng khoái tuyệt vời mỗi khi ăn. 
      - Có thể ăn trực tiếp hoặc ép nước dùng hàng ngày đều tận hưởng được hương vị cũng như giá trị dinh dưỡng của quả.
      - Cứ 100g thịt nho đỏ không hạt Úc có chứa khoảng 68 calo, 10-12g đường dễ hấp thụ, 11mg vitamin C, cùng polyphenol, chất xơ, kali, vitamin A, vitamin B, chất chống oxy hóa… nên là thực phẩm cực lành mạnh và tốt cho sức khỏe của con người
      `,
    },
    {
      name: 'Nho Mẫu Đơn Hàn Quốc',
      category: 'Nho',
      image:
        'https://sw001.hstatic.net/12/0db0957367facc/untitled_design__36__large.png',
      price: 780000,
      countInStock: 100,
      brand: 'Hàn Quốc',
      description: `- Nho đỏ không hạt Úc có quả màu đỏ tươi, vỏ mỏng, thịt dày giòn, hương vị thơm ngọt ngào và mọng nước đem đến cảm giác sảng khoái tuyệt vời mỗi khi ăn. 
      - Có thể ăn trực tiếp hoặc ép nước dùng hàng ngày đều tận hưởng được hương vị cũng như giá trị dinh dưỡng của quả.
      - Cứ 100g thịt nho đỏ không hạt Úc có chứa khoảng 68 calo, 10-12g đường dễ hấp thụ, 11mg vitamin C, cùng polyphenol, chất xơ, kali, vitamin A, vitamin B, chất chống oxy hóa… nên là thực phẩm cực lành mạnh và tốt cho sức khỏe của con người
      `,
    },
    {
      name: 'Nho Khô Úc Hộp 500g',
      category: 'Nho',
      image:
        'https://product.hstatic.net/1000050401/product/3_183d051c3d2d4a628ef61095df567b4b_large.png',
      price: 400000,
      countInStock: 100,
      brand: 'Úc',
      description: `- Giống nho của Nhật từ năm 1946 và rất phổ biến ở Nhật Bản, Hàn Quốc
      - Vỏ mỏng, trái rất mọng nước.
      - Kích thước trái rất lớn, tương đương với nho mẫu đơn…
      `,
    },
    {
      name: 'Cam Vàng Úc',
      category: 'Cam',
      image:
        'https://hstatic.net/401/1000050401/1/2015/12-16/cam_nam_phi_large.png',
      price: 150000,
      countInStock: 100,
      brand: 'Úc',
      description: `- Cam vàng Úc có chứa nhiều Vitamin C, tốt cho da, chống lão hóa, giảm Cholesterol, có tác dụng hồi phục sức khỏe nhanh, tăng cường chức năng tạo hồng huyết cầu, giảm căng thẳng thần kinh.
      - Cam Vàng Navel Úc có múi to, tép mọng nước màu vàng tươi, ít xơ, vị ngọt thanh, thơm mát và điểm mà ai ai cũng thích là hầu hết không có hạt.
      `,
    },
    {
      name: 'Cam Ruột Đỏ Mỹ',
      category: 'Cam',
      image:
        'https://hstatic.net/401/1000050401/1/2016/7-22/cam_sunkist_ruot_do_uc_large.png',
      price: 180000,
      countInStock: 100,
      brand: 'Mỹ',
      description: `- Cam Cara là loại quả to, ngoài vỏ màu vàng tươi, ruột có màu đỏ thẫm, vị không ngọt, hạt và mọng nước. 
      - Cam đỏ Cara Mỹ thường dùng để ăn chứ không ép nước. Giống cam Cara ruột đỏ là giống cam chất lượng hảo hạng, rất dễ bóc vỏ, dễ ăn. 
      - Ruột quả cam có màu đỏ, màu đỏ này được tạo thành do hai chất Lycopene và Carotenoid tạo ra.`,
    },
    {
      name: 'Cam Sành',
      category: 'Cam',
      image:
        'https://vnn-imgs-f.vgcloud.vn/2021/07/21/10/cam-sanh-1.jpg',
      price: 20,
      countInStock: 100,
      brand: 'Việt Nam',
      description: `- Cam sành là loại trái cây vốn được nhiều người yêu thích, đặc biệt là trẻ nhỏ và chị em phụ nữ, bởi cam rất bổ dưỡng và cao cấp. 
      - Trái cam sành có đặc điểm mang màu xanh sậm đến khi chín thì ngả màu vàng, dáng tròn dẹt, hương vị chua ngọt, thị trái nhiều nước. 
      - Cam sành có khá nhiều hạt nên thường được dùng phổ biến để vắt cam.`,
    },
    {
      name: 'Cherry Vàng New Zealand',
      category: 'Cherry',
      image:
        'https://product.hstatic.net/1000050401/product/cherry_20v_c3_a0ng_20chile_large.png',
      price: 900000,
      countInStock: 100,
      brand: 'New Zealand',
      description: `- Cherry New Zealand là loại cherry ngon nhất trong tất cả các loại cherry nhập khẩu. 
      - Trái cứng, thịt cherry dai, dòn, và ngọt hơn. 
      - Đặc biệt rơi vào dịp tết cổ truyền Việt Nam, nên cherry New zealand được ưu chuộng làm quà tặng cho đối tác và khách hàng.`,
    },
    {
      name: 'Cherry Đỏ Mỹ',
      category: 'Cherry',
      image:
        'https://product.hstatic.net/1000050401/product/cherry_20123_large.png',
      price: 590000,
      countInStock: 100,
      brand: 'Mỹ',
      description: `- Màu đỏ sẫm, cuống tươi xanh
      - Vị ngọt, xen lẫn vị chua nhẹ
      - Trái cứng, giòn
      - Nhập khẩu trực tiếp từ Mỹ
      - Đặc trưng của trái cherry đỏ Mỹ là trái to, chắc, có màu vàng kết hợp với màu đỏ tươi, khi chín có màu đỏ gụ đậm, bên trong thịt nhiều nước có màu vàng đỏ nhạt, hạt nhỏ khi ăn không bị dính thịt vào hạt tạo cảm giác rất sảng khoái.
      `,
    },
    {
      name: 'Cherry Đỏ New Zealand',
      category: 'Cherry',
      image:
        'https://product.hstatic.net/1000050401/product/cherry_20123_large.png',
      price: 720000,
      countInStock: 100,
      brand: 'New Zealand',
      description: `- Màu đỏ sẫm, cuống tươi xanh
      - Vị ngọt, xen lẫn vị chua nhẹ
      - Trái cứng, giòn
      - Nhập khẩu trực tiếp từ Mỹ
      - Đặc trưng của trái cherry đỏ Mỹ là trái to, chắc, có màu vàng kết hợp với màu đỏ tươi, khi chín có màu đỏ gụ đậm, bên trong thịt nhiều nước có màu vàng đỏ nhạt, hạt nhỏ khi ăn không bị dính thịt vào hạt tạo cảm giác rất sảng khoái.
      `,
    },
    {
      name: 'Dâu tây Đà Lạt',
      category: 'Dâu tây',
      image:
        'https://vinfruits.com/wp-content/uploads/2016/12/34B73EA5-8C8E-4EBC-BF4A-28577FFEC5C8.jpg',
      price: 300000,
      countInStock: 100,
      brand: 'Đà Lạt',
      description: `- Màu đỏ sẫm, cuống tươi xanh
      - Vị ngọt, xen lẫn vị chua nhẹ
      - Trái mềm, giòn
      - Nhập khẩu trực tiếp từ Đà Lạt
      `,
    },
    {
      name: 'Dâu tây Nhật',
      category: 'Dâu tây',
      image:
        'https://vinfruits.com/wp-content/uploads/2016/12/34B73EA5-8C8E-4EBC-BF4A-28577FFEC5C8.jpg',
      price: 320000,
      countInStock: 100,
      brand: 'Nhật',
      description: `- Màu đỏ sẫm, cuống tươi xanh
      - Vị ngọt, xen lẫn vị chua nhẹ
      - Trái mềm, giòn
      - Nhập khẩu trực tiếp từ Nhật
      `,
    },
    {
      name: 'Dâu tây Mỹ',
      category: 'Dâu tây',
      image:
        'https://vinfruits.com/wp-content/uploads/2016/12/F401945B-BE04-48DF-9C6B-15FD775D3701.jpg',
      price: 350000,
      countInStock: 100,
      brand: 'Mỹ',
      description: `- Màu đỏ sẫm, cuống tươi xanh
      - Vị ngọt, xen lẫn vị chua nhẹ
      - Trái mềm, giòn
      - Nhập khẩu trực tiếp từ Mỹ
      `,
    },
    {
      name: 'Dâu tây Hàn Quốc',
      category: 'Dâu tây',
      image:
        'https://vinfruits.com/wp-content/uploads/2016/12/34B73EA5-8C8E-4EBC-BF4A-28577FFEC5C8.jpg',
      price: 310000,
      countInStock: 100,
      brand: 'Hàn Quốc',
      description: `- Màu đỏ sẫm, cuống tươi xanh
      - Vị ngọt, xen lẫn vị chua nhẹ
      - Trái mềm, giòn
      - Nhập khẩu trực tiếp từ Hàn Quốc
      `,
    },
    {
      name: 'Chà là khô Natural Delights',
      category: 'Nho',
      image:
        'https://hstatic.net/401/1000050401/1/2015/12-16/nho_den_1_2f34bb90-5e62-4791-4c76-f47f74c3f030_large.png',
      price: 249000,
      countInStock: 100,
      brand: 'Hàn Quốc',
      description: `- Chà là Natural delights có thành phần 100% chà là tự nhiên
      - Được thiết kế trong hộp nhựa gọn nhẹ, có thể làm quà tặng
      - Natural Delights có vị ngọt nhẹ, không cho thêm chất làm ngọt, bùi và mùi hương dịu nhẹ
      `,
    },
    {
      name: 'Dưa lưới Đài Loan',
      category: 'Dưa lưới',
      image:
        'https://vinfruits.com/wp-content/uploads/2021/12/dua-luoi-dai-loan-vinfruits-1.jpg',
      price: 169000,
      countInStock: 100,
      brand: 'Mỹ',
      description: `- Trái dưa to đều, thon dài, căng mọng, vỏ dưa màu xanh tươi mát, không quá đậm hoặc quá nhạt.
      - Trên da quả có những đường gân đặc trưng của dòng dưa lưới bắt mắt.
      - Ruột có màu vàng nhạt, khi chín sẽ có màu vàng đậm hơn.
      `,
    },
    {
      name: 'Kiwi vàng Organic',
      category: 'Kiwi',
      image:
        'https://vinfruits.com/wp-content/uploads/2017/01/kiwi-vang-newzealand-vinfruits-3-min-2048x2048.jpg',
      price: 345000,
      countInStock: 100,
      brand: 'Úc',
      description: `- Quả Kiwi Zespri Organic được trồng và được chứng nhận theo tiêu chuẩn hữu cơ nghiêm ngặt nhất. 
      - Kiwi vàng Zespri Organic quả to, tươi ngon, mọng nước, cầm cứng tay.
      - Cái vị ngọt ngọt xen lẫn chua dịu nhẹ thanh mát khi thưởng thức (kiwi vàng organic chính tới).
      `,
    },
    {
      name: 'Na dai Đài Loan',
      category: 'Na',
      image:
        'https://vinfruits.com/wp-content/uploads/2017/03/DSCF8343-2048x2048.jpg',
      price: 780000,
      countInStock: 100,
      brand: 'Đài Loan',
      description: `- Khối lượng khoảng 650g-700g/ trái. 
      - Lớp vỏ mỏng, thịt màu trắng.
      - Đậm vị, rất ngon`,
    }
 ]

};
export default data;

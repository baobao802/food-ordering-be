import jwt from 'jsonwebtoken';
import mg from 'mailgun-js';

export default (user) => {
  return jwt.sign(
    {
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      isSeller: user.isSeller,
    },
    process.env.JWT_SECRET || 'bkhunter',
    {
      expiresIn: '30d',
    }
  );
};

export const mailgun = () =>
  mg({
    apiKey: process.env.MAILGUN_API_KEY,
    domain: process.env.MAILGUN_DOMAIN,
  });

export const payOrderEmailTemplate = (order) => {
  return `<h1>Cảm ơn bạn vì đã mua trái cây của chúng tôi</h1>
  <p>Xin chào ${order.user.name},</p>
  <p>Chúng tôi đã xử lý xong đơn đặt hàng của bạn.</p>
  <h2>[Mã đặt hàng ${order._id}] (${order.createdAt.toString().substring(0, 10)})</h2>
  <table>
  <thead>
  <tr>
  <td><strong>Loại trái cây</strong></td>
  <td><strong>Số lượng</strong></td>
  <td><strong align="right">Giá</strong></td>
  </thead>
  <tbody>
  ${order.orderItems
    .map(
      (item) => `
    <tr>
    <td>${item.name}</td>
    <td align="center">${item.qty}</td>
    <td align="right"> ${item.price.toFixed(2)}VND</td>
    </tr>
  `
    )
    .join('\n')}
  </tbody>
  <tfoot>
  <tr>
  <td colspan="2">Giá trái cây:</td>
  <td align="right"> ${order.itemsPrice.toFixed(2)}VND</td>
  </tr>
  <td colspan="2">Phí vận chuyển:</td>
  <td align="right">${order.shippingPrice.toFixed(2)}VND</td>
  </tr>
  <tr>
  <td colspan="2"><strong>Tổng tiền cần thanh toán:</strong></td>
  <td align="right"><strong> ${order.totalPrice.toFixed(2)}VND</strong></td>
  </tr>
  <tr>
  <td colspan="2">Phương thức thanh toán:</td>
  <td align="right">${order.paymentMethod}</td>
  </tr>
  </table>
  <h2>Địa chỉ giao hàng</h2>
  <p>
  ${order.shippingAddress.fullName},<br/>
  ${order.shippingAddress.phone},<br/>
  ${order.shippingAddress.address},<br/>
  ${order.shippingAddress.city},<br/>
  ${order.shippingAddress.country},<br/>
  </p>
  <hr/>
  <p>Cảm ơn đã mua hàng của chúng thôi.</p>
  `;
};

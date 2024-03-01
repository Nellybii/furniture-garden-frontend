
// import React, { useState } from 'react';

// function OrderButton() {
//     const [loading, setLoading] = useState(false);
//     const [error, setError] = useState(null);

//     const handleOrder = () => {
//         setLoading(true);
//         fetch('/api/orders', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//                 'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
//             },
//             body: JSON.stringify({})
//         })
//         .then(response => {
//             if (!response.ok) {
//                 throw new Error('Failed to create order');
//             }
//             return response.json();
//         })
//         .then(data => {
//             console.log('Order created successfully:', data);
//             setLoading(false);
//             setError(null);



            
//         })
//         .catch(error => {
//             console.error('Error creating order:', error.message);
//             setLoading(false);
//             setError('Failed to create order..');
//         });
//     };

//     return (
//         <div>
//             <button onClick={handleOrder} disabled={loading}>
//                 {loading ? 'Processing...' : 'Order Now'}
//             </button>
//             {error && <p>{error}</p>}
//         </div>
//     );
// }

// export default OrderButton;





// // import React, { useState, useEffect } from 'react';
// // import { api } from "../utils/utils";

// // function Order() {
// //     const [formData, setFormData] = useState({
// //         total_price: '',
// //         amount: '', 
// //         phoneNumber: '' 
// //     });

    
// //     // const [orderData, setOrderData] = useState(null);

// //     // useEffect(() => {
// //     //     const fetchOrderData = async () => {
// //     //         try {
// //     //             const response = await api.get('/orders');
// //     //             setOrderData(response.data);
// //     //         } catch (error) {
// //     //             console.error('Error fetching order data:', error);
// //     //         }
// //     //     };

// //     //     fetchOrderData();
// //     // }, []); // Empty dependency array to run effect only once on mount

// //     const handleChange = (e) => {
// //         setFormData({ ...formData, [e.target.name]: e.target.value });
// //     };

// //     const handlePlaceOrderAndPayment = async (e) => {
// //         e.preventDefault();

// //         try {
// //             const orderResponse = await api.post('/orders', {
// //                 total_price: formData.total_price,
// //                 status: 'Pending'
// //             });
// //             console.log(orderResponse.data);

// //             if (orderResponse.status === 201) {
// //                 const paymentResponse = await api.post('/payments', {
// //                     amount: formData.amount,
// //                     phoneNumber: formData.phoneNumber
// //                 });
// //                 console.log(paymentResponse.data);
// //             }
// //         } catch (error) {
// //             console.error('Error placing order or making payment:', error);
// //         }
// //     };

// //     return (
// //         <div style={container}>
// //             <div style={card}>
// //                 <h1>Order and Payment</h1>
// //                 <form onSubmit={handlePlaceOrderAndPayment}>
// //                     <div style={formGroupStyle}>
// //                         <label>Total Price:</label>
// //                         <input
// //                             type="number"
// //                             name="total_price"
// //                             value={formData.total_price}
// //                             onChange={handleChange}
// //                             style={inputStyle}
// //                             required
// //                         />
// //                     </div>
// //                     <div style={formGroupStyle}>
// //                         <label>Amount:</label>
// //                         <input
// //                             type="number"
// //                             name="amount"
// //                             value={formData.amount}
// //                             onChange={handleChange}
// //                             style={inputStyle}
// //                             required
// //                         />
// //                     </div>
// //                     <div style={formGroupStyle}>
// //                         <label>Phone Number:</label>
// //                         <input
// //                             type="tel"
// //                             name="phoneNumber"
// //                             value={formData.phoneNumber}
// //                             onChange={handleChange}
// //                             style={inputStyle}
// //                             required
// //                         />
// //                     </div>
// //                     <button type="submit" style={buttonStyle}>Place Order and Pay</button>
// //                 </form>
// //                 {/* {orderData && (
// //                    <div>
// //                    <h2>Recent Orders</h2>
// //                    <ul>
// //                        {orderData.map((order, index) => (
// //                            <li key={index}>
// //                                <div>
// //                                    <p>Total Price: {order.total_price}</p>
// //                                    <p>Status: {order.status}</p>
// //                                </div>
// //                            </li>
// //                        ))}
// //                    </ul>
// //                </div> */}
               
// //                 {/* )} */}
// //             </div>
// //         </div>
// //     );
// // }

// // const container = {
// //     display: 'flex',
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //     height: '100vh',
// // };

// // const card = {
// //     padding: '20px',
// //     border: '1px solid #ccc',
// //     borderRadius: '8px',
// //     maxWidth: '400px',
// //     width: '100%',
// // };

// // const formGroupStyle = {
// //     marginBottom: '15px',
// // };

// // const inputStyle = {
// //     width: '100%',
// //     padding: '8px',
// //     border: '1px solid #ccc',
// //     borderRadius: '4px',
// //     boxSizing: 'border-box',
// // };

// // const buttonStyle = {
// //     width: '100%',
// //     padding: '10px',
// //     backgroundColor: '#007bff',
// //     color: '#fff',
// //     border: 'none',
// //     borderRadius: '4px',
// //     cursor: 'pointer',
// //     fontSize: '16px',
// // };

// // export default Order;



// 
// uses
//   sysutils, fphttpclient;


// function GetProductDetails(productId: Integer): String;
// var
//   HTTPClient: TFPHTTPClient;
//   Response: TStringStream;
// begin
  
//   HTTPClient := TFPHTTPClient.Create(nil);
//   Response := TStringStream.Create('');

//   try
//     try
     
//       HTTPClient.Get('api/products/' + IntToStr(productId), Response);

     
//       Result := Response.DataString;
//     except
//       on E: Exception do
//       begin
      
//         Result := 'Error: ' + E.Message;
//       end;
//     end;
//   finally
  
//     HTTPClient.Free;
//     Response.Free;
//   end;
// end;


// procedure SendEmailWithProductDetails(productId: Integer);
// var
//   SenderName, SenderAddress, Recipients, Subject, Body: String;
//   HtmlFormatted: Boolean;
//   ProductDetails: String;
//   ProductName, ProductPrice, 
// begin
 
//   ProductDetails := GetProductDetails(productId);


//   ProductName := ParseProductName(ProductDetails);
//   ProductPrice := ParseProductPrice(ProductDetails);
  

  
//   SenderName := 'FURNITURE GARDEN';
//   SenderAddress := 'furnituregarden32@gmail.com';
//   Recipients := 'Furniture garden mail Mail';
//   Subject := 'Furniture Garden invoice';

  
//   Body := '<HTML>Dear Customer,<BR>' +
//           '<br>Thank you for your purchase. Below are the details of your order:<BR>' +
//           '<br>Product: ' + ProductName + '<BR>' +
//           'Price: $' + ProductPrice + '<BR>' +
//           'Quantity: ' + ProductQuantity + '<BR>' +
//           '<br>This is a system-generated email, DO NOT REPLY!</HTML>';

//   HtmlFormatted := TRUE;

//   SMTPMail.CreateMessage(SenderName,
//                          SenderAddress,
//                          Recipients,
//                          Subject,
//                          Body,
//                          HtmlFormatted);
//   SMTPMail.AppendBody('</BODY></HTML>');
//   SMTPMail.Send;
//   MESSAGE('Email sent to: %1', Recipients);
// end;









// const container = {
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     height: '100vh',
// };

// const card = {
//     padding: '20px',
//     border: '1px solid #ccc',
//     borderRadius: '8px',
//     maxWidth: '400px',
//     width: '100%',
// };

// const formGroupStyle = {
//     marginBottom: '15px',
// };

// const inputStyle = {
//     width: '100%',
//     padding: '8px',
//     border: '1px solid #ccc',
//     borderRadius: '4px',
//     boxSizing: 'border-box',
// };

// const buttonStyle = {
//     width: '100%',
//     padding: '10px',
//     backgroundColor: '#007bff',
//     color: '#fff',
//     border: 'none',
//     borderRadius: '4px',
//     cursor: 'pointer',
//     fontSize: '16px',
// };

// export default Order;



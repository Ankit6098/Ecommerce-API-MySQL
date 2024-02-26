
# Ecommerce Api (nodejs & MySQL)

Our eCommerce API is a robust solution designed to power online retail experiences with efficiency and security. Leveraging the power of Node.js for its backend logic, MySQL for scalable and reliable data storage, and JWT for seamless user validation, our API offers a comprehensive set of endpoints for managing products, orders, users, and authentication. With secure user authentication and authorization mechanisms in place, businesses can confidently build and scale their online stores while ensuring a seamless and secure shopping experience for their customers.
## Demo

https://roxiler-api-a94k.onrender.com
## Run Locally

Clone the project

```bash
  git clone https://github.com/Ankit6098/Ecommerce-API-MySQL
```

Install the packages

```bash
  npm install / npm i
```

Start the Server

```bash
  npm start
```
## API Reference


### User
#### Get all products

```http
  GET /api/user/
```

#### Register user

```http
  POST /api/user/register
```

| Body | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `name`    | `string` | **Required**. |
| `username`    | `string` | **Required**.  |
| `email`    | `string` | **Required**.  |
| `password`    | `string` | **Required**. |


#### Get user by email

```http
  GET /api/user/email/:${email}
```

| Params | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `email`    | `string` | **Required**  |

#### Get user by username

```http
  GET /api/user/email/:${username}
```

| Params | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `username`    | `string` | **Required**  |


#### Login user

```http
  POST /api/user/login
```

| Query | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `email`    | `string` | **Required**. |
| `password`    | `string` | **Required**.  |


### CART 
#### Get all cart products

```http
  GET /api/user/cart
```

#### Add product to user cart

```http
  POST /api/user/cart/create/:productId/:user-id/:qauntity
```

| Params | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `product-id`    | `string` | **Required**.  |
| `user-id`    | `string` | **Required**.  |
| `quantity`    | `string` | **Required**.  |

#### Get cart by user id

```http
  GET /api/user/cart/user/:user-id
```

| Params | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `user-id`    | `string` | **Required**.  |


#### Update product quantity in cart

```http
  POST /api/user/cart/update/:productId/:user-id/:qauntity
```

| Params | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `product-id`    | `string` | **Required**.  |
| `user-id`    | `string` | **Required**.  |
| `quantity`    | `string` | **Required**.  |

#### delete product from cart

```http
  DELETE /api/user/cart/update/:user-id
```

| Params | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `product-id`    | `string` | **Required**.  |
| `user-id`    | `string` | **Required**.  |
| `quantity`    | `string` | **Required**.  |


### Category

#### GET all categories

```http
  GET /api/category
```

#### Create Category

```http
  POST /api/category/create
```

| Body | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `name`    | `string` | **Required**.  |
| `description`    | `string` | **Required**.  |

#### get category by name

```http
  GET /api/category/:name
```

| Params | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `name`    | `string` | **Required**.  |

#### update category

```http
  PUT /api/category/update
```

| Body | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `name`    | `string` | **Required**.  |

#### delete category

```http
  DELETE /api/category/delete/:id
```

| Params | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`    | `string` | **Required**.  |

#### Get category by id

```http
  GET /api/category/id/:id
```

| Params | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`    | `string` | **Required**.  |

### Product

#### GET all product

```http
  GET /api/product/
```

#### create product

```http
  POST /api/product/create
```

| Body | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `name`    | `string` | **Required**.  |
| `description`    | `string` | **Required**.  |
| `price`    | `string` | **Required**.  |
| `category`    | `string` | **Required**.  |

#### get product by id

```http
  GET /api/product/:id
```

| Params | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`    | `string` | **Required**.  |

#### update product

```http
  POST /api/product/update/:name/:description/:id
```

| Params | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `name`    | `string` | **Required**.  |
| `description`    | `string` | **Required**.  |
| `id`    | `string` | **Required**.  |

#### delete product

```http
  DELETE /api/product/delete/:id
```

| Params | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`    | `string` | **Required**.  |

#### update product price

```http
  POST /api/product/update-price/:id/:price
```

| Params | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`    | `string` | **Required**.  |
| `price`    | `string` | **Required**.  |


#### Get product by name

```http
  GET /api/product/get-product/:name
```

| Params | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `name`    | `string` | **Required**.  |


### Order

#### Get all order

```http
  POST /api/Order
```

#### create order

```http
  POST /api/order/:user-id/:product-id
```

| Params | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `user id`    | `string` | **Required**.  |
| `product id`    | `string` | **Required**.  |


#### get order by user id

```http
  GET /api/order/get-order/:id
```

| Params | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`    | `string` | **Required**.  |

#### update product quantity

```http
  PUT /api/order/:user-id/:product-id/:quantity
```

| Params | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `user id`    | `string` | **Required**.  |
| `product id`    | `string` | **Required**.  |
| `quantity`    | `string` | **Required**.  |

#### Delete order

```http
  DELETE /api/order/delete/:id
```

| Params | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`    | `string` | **Required**.  |

#### get order by user id

```http
  GET /api/order/get-order/:user-id
```

| Params | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `user id`    | `string` | **Required**.  |
## 🚀 About Me

Full Stack Web developer professional with experience developing and designing web applications using Html, CSS, javascript, node.Js, Expressjs, MongoDB, React, GitHub, and UI/UX. Abel to create eye catchy designs and easily adept at developing complex backend systems, web services, databases, Docker.


## 🔗 Links
[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://ankithub.vercel.app/)

[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColorwhite=)](https://www.linkedin.com/in/ankit-vishwakarma-6531221b0/)


## Feedback

If you have any feedback, please reach out to us at ankitvis609@gmail.com


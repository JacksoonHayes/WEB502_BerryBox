E-commerce style web app for fresh berries
Operates as a voucher system for customers to purchase berries and have them delivered to their door
Customers get a set amount of vouchers upon registration that they can use to purchase berries

## Running the App
1. Install dependencies
```bash
npm install
```

2. Create a .env file in the root directory and add the following (replace the OPENAI_API_KEY with your own API key or contact me for the key):
```bash
PORT=3001
MONGODB_URI=mongodb+srv://dbAdmin:admin@growandgive.x8icc.mongodb.net/?retryWrites=true&w=majority&appName=growandgive
JWT_SECRET="secret"
OPENAI_API_KEY=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

```

3. To run the backend server, run the following:
```bash
nodemon
```

4. Install Angular dependencies by running the following in the /frontend directory:
```bash
npm install
```

5. To run the Angular frontend, run the following in the /frontend directory:
```bash
ng serve
```

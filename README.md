# zerodha-clone-application

## Run locally

1. In PowerShell, open this folder and create a local environment file:

   ```powershell
   if (!(Test-Path .env)) { Copy-Item .env.example .env }
   ```

2. Edit `.env` and set `MONGO_URL` to your MongoDB connection string. In MongoDB
   Atlas, allow connections from your development IP.
3. Install dependencies and start the API:

   ```powershell
   npm install
   npm start
   ```

   The API listens on port `3002` by default.
4. In a second terminal, start the dashboard:

   ```powershell
   Set-Location .\dashboard
   npm install
   npm start
   ```

The dashboard's Watchlist loads its demo quote data from `GET /watchlist`.
Holdings and positions use `GET /allHoldings` and `GET /allPositions`, and
orders are submitted to `POST /newOrder`. The watchlist quotes are sample data,
not live market prices.

Do not commit `.env`; keep credentials in that ignored local file.
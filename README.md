# Crypto Dashboard

### Basic Information
- This crypto dashboard was developed with the free API for cryptocurrencies information by Nomics
- The main dashboard shows information about my top 4 favorite cryptocurrencies as a data table with information such as Price Changes %, Supply/Max Supply and more.
- The main dashboard also displays a tab menu with what I think it is some useful charts.
- In the app menubar, represented on top of the window, there are 3 interactive buttons on the right side, to change the theme from dark to light, to refresh the page. There is also an input text box which should be used as it follows:
	- It only accepts two parameters, each of them separated by a blank space.
	- **1st Parameter (Cryptocurrencies Symbols)** - The first parameter it is used to describe what symbols/tokens you want to search for, the sintax should be: "btc,eth,ada,dot". Without this parameter it searches information regarding the top 30 cryptocurrencies.
	- **2nd Parameter (Conversion)** - The second parameter it is used to select which currency conversion should be used, it can only support one conversion symbol.
	- **A full search** should look like these: "btc,ada,matic,aave eur" or "btc,ada,matic usd"

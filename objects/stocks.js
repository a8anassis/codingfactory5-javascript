const stocks = {Apple: "AAPL", Microsoft: "MSFT", Google: "GOOG"}
const portfolio = {APPL: 10, MSFT: 20, GOOG: 40}

function addShares(portfolio, stock, shares) {
    portfolio[stock] += shares
}

addShares(portfolio, stocks.Apple, 40)
addShares(portfolio, stocks.Google, 10)
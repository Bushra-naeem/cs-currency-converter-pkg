import Freecurrencyapi from '@everapi/freecurrencyapi-js';

const freecurrencyapi = new Freecurrencyapi('fca_live_iHHgy32Ux3QpuSE4wuT3VJqJ0uiLMP6L7NOx55xq');

export async function convertCurrency(fromCurrency, toCurrency, units) {
    const res = await freecurrencyapi.latest({
        base_currency: fromCurrency,
        currencies: toCurrency
    })
    const multiplier = res.data[toCurrency]
    return multiplier*units
}

import React, { useId } from 'react';

function InputBox({
    label,
    amount = 0,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectCurrency = "usd",
    amountDisable = false,
    currencyDisable = false,
    className = "",
}) {
    const amountInputId = useId();

    return (
        <div className={`bg-white p-4 rounded-lg shadow-md text-sm flex ${className}`}>
            <div className="w-1/2">
                <label htmlFor={amountInputId} className="text-gray-700 mb-2 inline-block">
                    {label}
                </label>
                <input
                    id={amountInputId}
                    className="outline-none w-full bg-white text-gray-800 border border-gray-300 rounded-md py-2 px-3 transition duration-200 focus:border-blue-500 focus:ring focus:ring-blue-200"
                    type="number"
                    placeholder="Amount"
                    disabled={amountDisable}
                    value={amount}
                    onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-gray-700 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-md px-3 py-2 bg-white text-gray-800 border border-gray-300 cursor-pointer outline-none transition duration-200 focus:border-blue-500 focus:ring focus:ring-blue-200"
                    value={selectCurrency}
                    onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                    disabled={currencyDisable}
                >
                    {currencyOptions.map((currency) => (
                        <option key={currency} value={currency}>
                            {currency}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
}

export default InputBox;
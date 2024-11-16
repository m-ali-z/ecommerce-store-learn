"use client";
export const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

interface CurrencyProps {
  value?: string | number;
}

const Currency: React.FC<CurrencyProps> = ({ value }) => {
  return (
    <span className="font-semibold">{formatter.format(Number(value))}</span>
  );
};

export default Currency;

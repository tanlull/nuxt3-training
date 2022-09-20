export const useAdd = (a, b) => {
  return a + b;
};

export function useShowDate() {
  return new Date().toLocaleString();
}

function useB() {
  return "B";
}

function useC() {
  return "C";
}

export { useB, useC as useCalendar };

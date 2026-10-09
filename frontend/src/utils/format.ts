// Formatting utilities

// Parse a date string. Date-only strings ("YYYY-MM-DD") are parsed as a local
// date, as new Date("YYYY-MM-DD") is parsed as UTC (and may show the previous day)
export function parseDate(value: string | null | undefined): Date | null {
  if (!value) return null;

  const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(value);

  if (match) {
    return new Date(Number(match[1]), Number(match[2]) - 1, Number(match[3]));
  }

  const date = new Date(value);
  return isNaN(date.getTime()) ? null : date;
}

export function formatDate(value: string | null | undefined): string {
  const date = parseDate(value);

  if (!date) return "-";

  return date.toLocaleDateString(undefined, {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export function formatDateTime(value: string | null | undefined): string {
  const date = parseDate(value);

  if (!date) return "-";

  return date.toLocaleString(undefined, {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

export function formatQuantity(value: number): string {
  return value.toLocaleString(undefined, { maximumFractionDigits: 5 });
}

// Map InvenTree status colors to Mantine colors
const STATUS_COLORS: Record<string, string> = {
  primary: "blue",
  secondary: "gray",
  success: "green",
  danger: "red",
  warning: "yellow",
  info: "cyan",
  dark: "dark",
};

export function statusColor(color: string): string {
  return STATUS_COLORS[color] ?? "gray";
}

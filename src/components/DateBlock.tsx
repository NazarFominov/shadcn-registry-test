import { formatDate } from "../utils/formatDate";

export interface DateBlockProps {
  date: Date | string;
  locale?: string;
}

export const DateBlock: React.FC<DateBlockProps> = ({ date, locale }) => (
  <div>{formatDate(date, locale)}</div>
);

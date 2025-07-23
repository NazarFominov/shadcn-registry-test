# shadcn-registry

Пример собственного реестра компонентов shadcn.

## Содержимое

- `utils/formatDate.ts` — функция для форматирования дат.
- `components/DateBlock.tsx` — компонент, который принимает дату и форматирует её с помощью утилиты.

## Использование

```tsx
import { DateBlock } from "./components/DateBlock";

<DateBlock date={new Date()} />
```
